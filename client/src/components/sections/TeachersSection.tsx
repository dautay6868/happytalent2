import { useQuery } from "@tanstack/react-query";
import TeacherCard from "@/components/ui/TeacherCard";
import { Teacher } from "@shared/schema";

const TeachersSection = () => {
  const { data: teachers, isLoading, error } = useQuery<Teacher[]>({
    queryKey: ["/api/teachers"],
  });

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Đội Ngũ Giảng Viên</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trung tâm chúng tôi tự hào với đội ngũ giảng viên chuyên nghiệp, giàu kinh nghiệm 
            và đam mê trong việc đào tạo các tài năng nghệ thuật nhí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-neutral rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-5 text-center">
                  <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.</p>
            </div>
          ) : (
            teachers?.map((teacher) => (
              <TeacherCard 
                key={teacher.id} 
                teacher={teacher} 
              />
            ))
          )}

          {/* If API returns no teachers, use these fallbacks */}
          {!isLoading && !error && (!teachers || teachers.length === 0) && (
            <>
              <div className="bg-neutral rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fHRlYWNoZXIlMjBhc2lhbiUyMHdvbWFufGVufDB8fHx8MTYyOTgzMzk1OXww&ixlib=rb-4.0.3&q=80&w=300" 
                    alt="Cô Phương Anh" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold font-heading">Cô Phương Anh</h3>
                  <p className="text-primary font-medium mb-2">Giảng Viên Mẫu Nhí</p>
                  <p className="text-gray-600 text-sm mb-3">
                    10 năm kinh nghiệm trong lĩnh vực người mẫu & đào tạo mẫu nhí.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-dark hover:text-primary"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-dark hover:text-primary"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-dark hover:text-primary"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>

              {/* Other fallback teacher cards would go here */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
