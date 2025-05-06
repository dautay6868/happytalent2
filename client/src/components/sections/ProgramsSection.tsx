import { useQuery } from "@tanstack/react-query";
import ProgramCard from "@/components/ui/ProgramCard";
import { Program } from "@shared/schema";

const ProgramsSection = () => {
  const { data: programs, isLoading, error } = useQuery<Program[]>({
    queryKey: ["/api/programs"],
  });

  return (
    <section id="programs" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Các Chương Trình Đào Tạo</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Các chương trình đào tạo của chúng tôi được thiết kế đặc biệt để phát triển toàn diện kỹ năng nghệ thuật, 
            sự tự tin và khả năng biểu diễn của trẻ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(5).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-56 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded-full w-1/3 mb-3 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                  <div className="flex mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mr-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.</p>
            </div>
          ) : (
            programs?.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program}
              />
            ))
          )}

          {/* If API returns no programs, use these fallbacks */}
          {!isLoading && !error && (!programs || programs.length === 0) && (
            <>
              <div id="model" className="program-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1602145461013-297753a5ec9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxjaGlsZCUyMG1vZGVsfGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=400" 
                    alt="Khóa học Mẫu nhí" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-semibold rounded-full mb-3">
                    Mẫu Nhí
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Khóa Học Người Mẫu Nhí</h3>
                  <p className="text-gray-600 mb-4">
                    Phát triển tư thế, phong cách catwalk, kỹ năng biểu diễn và sự tự tin trước đám đông.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="mr-4"><i className="far fa-clock mr-1"></i> 90 phút/buổi</div>
                    <div><i className="fas fa-user-friends mr-1"></i> Độ tuổi: 4-15</div>
                  </div>
                  <a href="/mau-nhi" className="block text-center bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Tìm Hiểu Thêm
                  </a>
                </div>
              </div>

              {/* Other fallback program cards would go here */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
