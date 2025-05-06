import { Helmet } from "react-helmet";
import ProgramDetail from "@/components/ui/ProgramDetail";

const ModelChildren = () => {
  return (
    <>
      <Helmet>
        <title>Mẫu Nhí - Trung Tâm Nghệ Thuật Happy Talent</title>
        <meta name="description" content="Khóa học Mẫu Nhí tại Trung Tâm Nghệ Thuật Happy Talent giúp phát triển tư thế, phong cách catwalk, kỹ năng biểu diễn và sự tự tin trước đám đông." />
        <meta property="og:title" content="Khóa Học Mẫu Nhí - Happy Talent" />
        <meta property="og:description" content="Phát triển tư thế, phong cách catwalk, kỹ năng biểu diễn và sự tự tin trước đám đông cho trẻ từ 4-15 tuổi." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      <ProgramDetail slug="mau-nhi" />
    </>
  );
};

export default ModelChildren;
