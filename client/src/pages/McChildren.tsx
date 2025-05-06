import { Helmet } from "react-helmet";
import ProgramDetail from "@/components/ui/ProgramDetail";

const McChildren = () => {
  return (
    <>
      <Helmet>
        <title>MC Nhí - Trung Tâm Nghệ Thuật Happy Talent</title>
        <meta name="description" content="Khóa học MC Nhí tại Trung Tâm Nghệ Thuật Happy Talent rèn luyện kỹ năng nói trước công chúng, phản xạ nhanh và khả năng dẫn chương trình tự tin." />
        <meta property="og:title" content="Khóa Học MC Nhí - Happy Talent" />
        <meta property="og:description" content="Rèn luyện kỹ năng nói trước công chúng, phản xạ nhanh và khả năng dẫn chương trình tự tin cho trẻ từ 6-15 tuổi." />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <ProgramDetail slug="mc-nhi" />
    </>
  );
};

export default McChildren;
