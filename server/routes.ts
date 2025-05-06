import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { programs, inquiries, contactFormSchema, inquirySchema } from "@shared/schema";
import { eq } from "drizzle-orm";
import { ZodError } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use('/images', express.static(path.join(process.cwd(), 'public', 'images')));
  
  // API prefix
  const apiPrefix = "/api";

  // Get all programs
  app.get(`${apiPrefix}/programs`, async (req, res) => {
    try {
      const allPrograms = await db.query.programs.findMany({
        with: {
          teachers: true,
          schedules: true,
        },
      });
      res.json(allPrograms);
    } catch (error) {
      console.error("Error fetching programs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get a specific program by slug
  app.get(`${apiPrefix}/programs/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const program = await db.query.programs.findFirst({
        where: eq(programs.slug, slug),
        with: {
          teachers: true,
          schedules: true,
          galleryItems: true,
        },
      });

      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }

      res.json(program);
    } catch (error) {
      console.error(`Error fetching program ${req.params.slug}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all teachers with their programs
  app.get(`${apiPrefix}/teachers`, async (req, res) => {
    try {
      const allTeachers = await db.query.teachers.findMany({
        with: {
          program: true,
        },
      });
      res.json(allTeachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all gallery items
  app.get(`${apiPrefix}/gallery`, async (req, res) => {
    try {
      const allGalleryItems = await db.query.galleryItems.findMany({
        with: {
          program: true,
        },
      });
      res.json(allGalleryItems);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all schedules
  app.get(`${apiPrefix}/schedules`, async (req, res) => {
    try {
      const allSchedules = await db.query.schedules.findMany({
        with: {
          program: true,
        },
      });
      res.json(allSchedules);
    } catch (error) {
      console.error("Error fetching schedules:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit a course inquiry
  app.post(`${apiPrefix}/inquiries`, async (req, res) => {
    try {
      const validatedData = inquirySchema.parse(req.body);
      
      const [newInquiry] = await db.insert(inquiries)
        .values(validatedData)
        .returning();
      
      res.status(201).json({ 
        message: "Đăng ký tư vấn thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
        inquiry: newInquiry 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Thông tin không hợp lệ, vui lòng kiểm tra lại.",
          errors: error.errors 
        });
      }
      console.error("Error submitting inquiry:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi, vui lòng thử lại sau." });
    }
  });

  // Submit a contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically store the contact message or send it via email
      // For this implementation, we'll just validate and return success
      
      res.status(200).json({ 
        message: "Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Thông tin không hợp lệ, vui lòng kiểm tra lại.",
          errors: error.errors 
        });
      }
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi, vui lòng thử lại sau." });
    }
  });

  // Update a program image
  app.patch(`${apiPrefix}/programs/:slug/image`, async (req, res) => {
    try {
      const { slug } = req.params;
      const { imagePath } = req.body;
      
      if (!imagePath) {
        return res.status(400).json({ message: "Image path is required" });
      }
      
      const program = await db.query.programs.findFirst({
        where: eq(programs.slug, slug),
      });
      
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      
      const [updatedProgram] = await db
        .update(programs)
        .set({ imagePath })
        .where(eq(programs.id, program.id))
        .returning();
      
      res.json({ message: "Program image updated successfully", program: updatedProgram });
    } catch (error) {
      console.error(`Error updating program image for ${req.params.slug}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
