import { Helmet } from "react-helmet";
import ProgramDetail from "@/components/ui/ProgramDetail";

const Dance = () => {
  return (
    <>
      <Helmet>
        <title>Dance Nhí - Trung Tâm Nghệ Thuật Happy Talent</title>
        <meta name="description" content="Khóa học Dance Nhí tại Trung Tâm Nghệ Thuật Happy Talent với các phong cách nhảy đa dạng từ Hip-hop, Contemporary đến K-pop cùng kỹ thuật vũ đạo cơ bản." />
        <meta property="og:title" content="Khóa Học Dance Nhí - Happy Talent" />
        <meta property="og:description" content="Học các phong cách nhảy đa dạng từ Hip-hop, Contemporary đến K-pop cùng kỹ thuật vũ đạo cơ bản cho trẻ từ 4-15 tuổi." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <ProgramDetail slug="dance" />
    </>
  );
};

export default Dance;
