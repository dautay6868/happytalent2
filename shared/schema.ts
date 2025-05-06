import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  ageRangeStart: integer("age_range_start").notNull(),
  ageRangeEnd: integer("age_range_end").notNull(),
  color: text("color").notNull(),
  imagePath: text("image_path").notNull(),
});

export const teachers = pgTable("teachers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  experience: text("experience").notNull(),
  imagePath: text("image_path").notNull(),
  programId: integer("program_id").references(() => programs.id),
  social: text("social"),
});

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imagePath: text("image_path").notNull(),
  programId: integer("program_id").references(() => programs.id),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  parentName: text("parent_name").notNull(),
  phone: text("phone").notNull(),
  childName: text("child_name").notNull(),
  childAge: integer("child_age").notNull(),
  programId: integer("program_id").references(() => programs.id),
  message: text("message"),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const schedules = pgTable("schedules", {
  id: serial("id").primaryKey(),
  programId: integer("program_id").references(() => programs.id).notNull(),
  weekdayMWF: text("weekday_mwf"), // Monday-Wednesday-Friday times
  weekdayTTS: text("weekday_tts"), // Tuesday-Thursday-Saturday times
  weekend: text("weekend"), // Weekend times
});

// Relations
export const programsRelations = relations(programs, ({ many }) => ({
  teachers: many(teachers),
  galleryItems: many(galleryItems),
  schedules: many(schedules),
  inquiries: many(inquiries),
}));

export const teachersRelations = relations(teachers, ({ one }) => ({
  program: one(programs, {
    fields: [teachers.programId],
    references: [programs.id],
  }),
}));

export const galleryItemsRelations = relations(galleryItems, ({ one }) => ({
  program: one(programs, {
    fields: [galleryItems.programId],
    references: [programs.id],
  }),
}));

export const schedulesRelations = relations(schedules, ({ one }) => ({
  program: one(programs, {
    fields: [schedules.programId],
    references: [programs.id],
  }),
}));

export const inquiriesRelations = relations(inquiries, ({ one }) => ({
  program: one(programs, {
    fields: [inquiries.programId],
    references: [programs.id],
  }),
}));

// Schemas for validation
export const programInsertSchema = createInsertSchema(programs);
export type ProgramInsert = z.infer<typeof programInsertSchema>;
export type Program = typeof programs.$inferSelect;

export const teacherInsertSchema = createInsertSchema(teachers);
export type TeacherInsert = z.infer<typeof teacherInsertSchema>;
export type Teacher = typeof teachers.$inferSelect;

export const galleryItemInsertSchema = createInsertSchema(galleryItems);
export type GalleryItemInsert = z.infer<typeof galleryItemInsertSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;

export const scheduleInsertSchema = createInsertSchema(schedules);
export type ScheduleInsert = z.infer<typeof scheduleInsertSchema>;
export type Schedule = typeof schedules.$inferSelect;

export const inquirySchema = createInsertSchema(inquiries, {
  parentName: (schema) => schema.min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: (schema) => schema.min(10, "Số điện thoại không hợp lệ"),
  childName: (schema) => schema.min(2, "Họ tên phải có ít nhất 2 ký tự"),
  childAge: (schema) => schema.min(4, "Độ tuổi tối thiểu là 4").max(15, "Độ tuổi tối đa là 15"),
});
export type InquiryInsert = z.infer<typeof inquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  subject: z.string().min(2, "Chủ đề không được để trống"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});
export type ContactFormData = z.infer<typeof contactFormSchema>;
