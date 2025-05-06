import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Seed Programs
    const programs = [
      {
        name: "Mẫu Nhí",
        slug: "mau-nhi",
        description: "Phát triển tư thế, phong cách catwalk, kỹ năng biểu diễn và sự tự tin trước đám đông.",
        durationMinutes: 90,
        ageRangeStart: 4,
        ageRangeEnd: 15,
        color: "#FF6B6B", // primary
        imagePath: "https://images.unsplash.com/photo-1602145461013-297753a5ec9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxjaGlsZCUyMG1vZGVsfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=400"
      },
      {
        name: "MC Nhí",
        slug: "mc-nhi",
        description: "Rèn luyện kỹ năng nói trước công chúng, phản xạ nhanh và khả năng dẫn chương trình tự tin.",
        durationMinutes: 90,
        ageRangeStart: 6,
        ageRangeEnd: 15,
        color: "#4ECDC4", // secondary
        imagePath: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGNoaWxkJTIwc3BlYWtpbmd8ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=400"
      },
      {
        name: "Diễn Viên Nhí",
        slug: "dien-vien-nhi",
        description: "Phát triển khả năng thể hiện cảm xúc, kỹ thuật diễn xuất cơ bản và khả năng hòa nhập với vai diễn.",
        durationMinutes: 90,
        ageRangeStart: 5,
        ageRangeEnd: 15,
        color: "#FFD166", // accent
        imagePath: "https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGNoaWxkJTIwYWN0aW5nfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=400"
      },
      {
        name: "Dance",
        slug: "dance",
        description: "Học các phong cách nhảy đa dạng từ Hip-hop, Contemporary đến K-pop cùng kỹ thuật vũ đạo cơ bản.",
        durationMinutes: 90,
        ageRangeStart: 4,
        ageRangeEnd: 15,
        color: "#FF6B6B", // primary
        imagePath: "https://images.unsplash.com/photo-1548386135-b47c7f819ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxjaGlsZCUyMGRhbmNlfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=400"
      },
      {
        name: "Piano",
        slug: "piano",
        description: "Phát triển kỹ năng chơi piano từ cơ bản đến nâng cao, lý thuyết âm nhạc và biểu diễn trên sân khấu.",
        durationMinutes: 60,
        ageRangeStart: 5,
        ageRangeEnd: 15,
        color: "#4ECDC4", // secondary
        imagePath: "https://images.unsplash.com/photo-1545293527-e26058c5b48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fGNoaWxkJTIwcGlhbm98ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=400"
      }
    ];

    // Check if programs exist, if not insert them
    const existingPrograms = await db.query.programs.findMany();
    if (existingPrograms.length === 0) {
      await db.insert(schema.programs).values(programs);
    }

    // Retrieve the inserted programs to get their IDs
    const insertedPrograms = await db.query.programs.findMany();
    const programMap = Object.fromEntries(
      insertedPrograms.map(program => [program.slug, program.id])
    );

    // Seed Teachers
    const teachers = [
      {
        name: "Cô Phương Anh",
        role: "Giảng Viên Mẫu Nhí",
        experience: "10 năm kinh nghiệm trong lĩnh vực người mẫu & đào tạo mẫu nhí.",
        imagePath: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fHRlYWNoZXIlMjBhc2lhbiUyMHdvbWFufGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["mau-nhi"],
        social: JSON.stringify({facebook: "#", instagram: "#", youtube: "#"})
      },
      {
        name: "Thầy Minh Quân",
        role: "Giảng Viên MC & Diễn Xuất",
        experience: "MC chuyên nghiệp với 8 năm kinh nghiệm đào tạo kỹ năng MC.",
        imagePath: "https://images.unsplash.com/photo-1562788869-98dc8dce9c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDMyfHx0ZWFjaGVyJTIwYXNpYW4lMjBtYW58ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["mc-nhi"],
        social: JSON.stringify({facebook: "#", instagram: "#", youtube: "#"})
      },
      {
        name: "Cô Thùy Linh",
        role: "Giảng Viên Dance",
        experience: "Vũ công chuyên nghiệp với hơn 12 năm kinh nghiệm các thể loại Dance.",
        imagePath: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGRhbmNlJTIwdGVhY2hlcnxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["dance"],
        social: JSON.stringify({facebook: "#", instagram: "#", youtube: "#"})
      },
      {
        name: "Thầy Hoàng Nam",
        role: "Giảng Viên Piano",
        experience: "Giáo viên piano với bằng Thạc sĩ âm nhạc và 15 năm kinh nghiệm giảng dạy.",
        imagePath: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fHBpYW5vJTIwdGVhY2hlcnxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["piano"],
        social: JSON.stringify({facebook: "#", instagram: "#", youtube: "#"})
      }
    ];

    // Check if teachers exist, if not insert them
    const existingTeachers = await db.query.teachers.findMany();
    if (existingTeachers.length === 0) {
      await db.insert(schema.teachers).values(teachers);
    }

    // Seed Gallery Items
    const galleryItems = [
      {
        title: "Biểu diễn Dance",
        imagePath: "https://images.unsplash.com/photo-1513313604859-56ff4cff8a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGNoaWxkJTIwZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["dance"]
      },
      {
        title: "Biểu diễn Piano",
        imagePath: "https://images.unsplash.com/photo-1504257365157-1496a50d48f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGNoaWxkJTIwcGlhbm8lMjByZWNpdGFsfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["piano"]
      },
      {
        title: "Trình diễn thời trang",
        imagePath: "https://images.unsplash.com/photo-1544717684-1243da23b545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGNoaWxkJTIwZmFzaGlvbiUyMHNob3d8ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["mau-nhi"]
      },
      {
        title: "Lớp học MC nhí",
        imagePath: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fGNoaWxkJTIwc3BlYWtpbmd8ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["mc-nhi"]
      },
      {
        title: "Lớp diễn xuất",
        imagePath: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fGNoaWxkJTIwYWN0aW5nfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["dien-vien-nhi"]
      },
      {
        title: "Lớp học Dance",
        imagePath: "https://images.unsplash.com/photo-1535262412227-85541e910204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fGNoaWxkJTIwZGFuY2UlMjBjbGFzc3xlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["dance"]
      },
      {
        title: "Lớp học Piano",
        imagePath: "https://images.unsplash.com/photo-1484820301304-0b43512779dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fGNoaWxkJTIwcGlhbm8lMjBsZXNzb258ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["piano"]
      },
      {
        title: "Lớp học mẫu nhí",
        imagePath: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGNoaWxkJTIwZmFzaGlvbnxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300",
        programId: programMap["mau-nhi"]
      }
    ];

    // Check if gallery items exist, if not insert them
    const existingGalleryItems = await db.query.galleryItems.findMany();
    if (existingGalleryItems.length === 0) {
      await db.insert(schema.galleryItems).values(galleryItems);
    }

    // Seed Schedules
    const schedules = [
      {
        programId: programMap["mau-nhi"],
        weekdayMWF: "17:30 - 19:00",
        weekdayTTS: "-",
        weekend: "9:00 - 10:30 (CN)"
      },
      {
        programId: programMap["mc-nhi"],
        weekdayMWF: "-",
        weekdayTTS: "17:30 - 19:00",
        weekend: "14:00 - 15:30 (T7)"
      },
      {
        programId: programMap["dien-vien-nhi"],
        weekdayMWF: "-",
        weekdayTTS: "17:30 - 19:00",
        weekend: "15:30 - 17:00 (T7)"
      },
      {
        programId: programMap["dance"],
        weekdayMWF: "17:30 - 19:00",
        weekdayTTS: "-",
        weekend: "9:00 - 10:30 (T7)"
      },
      {
        programId: programMap["piano"],
        weekdayMWF: "15:00 - 19:00 (cá nhân)",
        weekdayTTS: "15:00 - 19:00 (cá nhân)",
        weekend: "9:00 - 17:00 (T7, CN - cá nhân)"
      }
    ];

    // Check if schedules exist, if not insert them
    const existingSchedules = await db.query.schedules.findMany();
    if (existingSchedules.length === 0) {
      await db.insert(schema.schedules).values(schedules);
    }

    console.log("Database seeded successfully");
  }
  catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
