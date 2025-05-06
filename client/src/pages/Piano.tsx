import { Helmet } from "react-helmet";
import ProgramDetail from "@/components/ui/ProgramDetail";

const Piano = () => {
  return (
    <>
      <Helmet>
        <title>Piano - Trung Tâm Nghệ Thuật Happy Talent</title>
        <meta name="description" content="Khóa học Piano tại Trung Tâm Nghệ Thuật Happy Talent phát triển kỹ năng chơi piano từ cơ bản đến nâng cao, lý thuyết âm nhạc và biểu diễn trên sân khấu." />
        <meta property="og:title" content="Khóa Học Piano - Happy Talent" />
        <meta property="og:description" content="Phát triển kỹ năng chơi piano từ cơ bản đến nâng cao, lý thuyết âm nhạc và biểu diễn trên sân khấu cho trẻ từ 5-15 tuổi." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <ProgramDetail slug="piano" />
    </>
  );
};

export default Piano;
