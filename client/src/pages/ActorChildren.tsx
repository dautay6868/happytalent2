import { Helmet } from "react-helmet";
import ProgramDetail from "@/components/ui/ProgramDetail";

const ActorChildren = () => {
  return (
    <>
      <Helmet>
        <title>Diễn Viên Nhí - Trung Tâm Nghệ Thuật Happy Talent</title>
        <meta name="description" content="Khóa học Diễn Viên Nhí tại Trung Tâm Nghệ Thuật Happy Talent phát triển khả năng thể hiện cảm xúc, kỹ thuật diễn xuất cơ bản và khả năng hòa nhập với vai diễn." />
        <meta property="og:title" content="Khóa Học Diễn Viên Nhí - Happy Talent" />
        <meta property="og:description" content="Phát triển khả năng thể hiện cảm xúc, kỹ thuật diễn xuất cơ bản và khả năng hòa nhập với vai diễn cho trẻ từ 5-15 tuổi." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <ProgramDetail slug="dien-vien-nhi" />
    </>
  );
};

export default ActorChildren;
