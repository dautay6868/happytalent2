import { Helmet } from "react-helmet";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TeachersSection from "@/components/sections/TeachersSection";
import GallerySection from "@/components/sections/GallerySection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import RegisterSection from "@/components/sections/RegisterSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trung Tâm Nghệ Thuật Happy Talent - Nuôi Dưỡng Tài Năng Trẻ Thơ</title>
        <meta name="description" content="Trung Tâm Nghệ Thuật Happy Talent đào tạo Mẫu nhí, MC nhí, Diễn viên nhí, Dance và Piano với đội ngũ giảng viên chuyên nghiệp và giàu kinh nghiệm." />
        <meta property="og:title" content="Trung Tâm Nghệ Thuật Happy Talent" />
        <meta property="og:description" content="Khám phá tiềm năng nghệ thuật của con bạn với các khóa học Mẫu nhí, MC nhí, Diễn viên nhí, Dance và Piano. Đội ngũ giảng viên chuyên nghiệp và giàu kinh nghiệm." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TeachersSection />
      <GallerySection />
      <ScheduleSection />
      <RegisterSection />
      <ContactSection />
    </>
  );
};

export default Home;
