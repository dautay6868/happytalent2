import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Program, Schedule, Teacher, GalleryItem } from "@shared/schema";
import { formatProgramColor } from "@/lib/utils";
import GalleryItemComponent from "@/components/ui/GalleryItem";
import TeacherCard from "@/components/ui/TeacherCard";
import RegisterForm from "@/components/ui/RegisterForm";

interface ProgramDetailProps {
  slug: string;
}

interface ProgramWithRelations extends Program {
  teachers: Teacher[];
  schedules: Schedule[];
  galleryItems: GalleryItem[];
}

const ProgramDetail = ({ slug }: ProgramDetailProps) => {
  const { data: program, isLoading, error } = useQuery<ProgramWithRelations>({
    queryKey: [`/api/programs/${slug}`],
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-40 bg-gray-200 animate-pulse mb-4 rounded"></div>
          <div className="h-6 w-64 bg-gray-200 animate-pulse mb-10 rounded"></div>
          <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg mb-8"></div>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Đã xảy ra lỗi</h2>
          <p className="text-gray-600">Không thể tải thông tin chương trình. Vui lòng thử lại sau.</p>
        </div>
      </div>
    );
  }

  const colorClass = formatProgramColor(program.color);

  return (
    <div className="bg-neutral min-h-screen">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-${colorClass} to-black py-16 md:py-24`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full -mr-32 -mb-32"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">{program.name}</h1>
            <div className="text-lg md:text-xl max-w-3xl mx-auto font-semibold whitespace-pre-line bg-black bg-opacity-40 p-4 rounded-lg text-yellow-100 shadow-lg">
              {program.description}
            </div>
          </div>
        </div>
      </section>

      {/* Program Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={program.imagePath} 
                alt={program.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Về khóa học {program.name}</h2>
              <div className="text-lg mb-6 font-medium whitespace-pre-line p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 text-yellow-900 shadow-md">
                {program.description}
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-${colorClass} bg-opacity-10 flex items-center justify-center mr-4`}>
                    <i className="far fa-clock text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Thời lượng:</h3>
                    <p>{program.durationMinutes} phút / buổi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-${colorClass} bg-opacity-10 flex items-center justify-center mr-4`}>
                    <i className="fas fa-user-friends text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Độ tuổi:</h3>
                    <p>{program.ageRangeStart} - {program.ageRangeEnd} tuổi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-${colorClass} bg-opacity-10 flex items-center justify-center mr-4`}>
                    <i className="fas fa-calendar-alt text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Lịch học:</h3>
                    <p>Xem chi tiết lịch học bên dưới</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="#register" 
                  className={`bg-${colorClass} hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block`}
                >
                  Đăng Ký Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Nội Dung Khóa Học</h2>
            <div className={`w-20 h-1 bg-${colorClass} mx-auto mb-6`}></div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-heading mb-4 flex items-center">
                  <i className={`fas fa-star text-${colorClass} mr-2`}></i>
                  Kỹ năng đạt được
                </h3>
                <ul className="space-y-2">
                  {program.slug === "mau-nhi" && (
                    <>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Tư thế đi, đứng, tạo dáng chuyên nghiệp</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Kỹ thuật catwalk cơ bản và nâng cao</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Khả năng biểu diễn trước đám đông</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Rèn luyện sự tự tin, khả năng tương tác</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Phát triển phong cách cá nhân</li>
                    </>
                  )}
                  {program.slug === "mc-nhi" && (
                    <>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Kỹ năng phát âm chuẩn, rõ ràng</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Phương pháp dẫn chương trình</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Khả năng ứng biến trước đám đông</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Kỹ năng giao tiếp và phỏng vấn</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Rèn luyện sự tự tin và lưu loát</li>
                    </>
                  )}
                  {program.slug === "dien-vien-nhi" && (
                    <>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Kỹ thuật diễn xuất cơ bản</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Khả năng thể hiện cảm xúc đa dạng</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Kỹ năng biểu diễn trước máy quay</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Phương pháp phân tích kịch bản đơn giản</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Rèn luyện khả năng tập trung và phản xạ</li>
                    </>
                  )}
                  {program.slug === "dance" && (
                    <>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Các động tác nhảy cơ bản</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Phát triển khả năng theo nhịp</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Học các phong cách nhảy đa dạng</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Nâng cao sự dẻo dai và phối hợp cơ thể</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Biểu diễn nhóm và solo</li>
                    </>
                  )}
                  {program.slug === "piano" && (
                    <>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Nắm vững kỹ thuật đánh đàn cơ bản</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Đọc và hiểu ký hiệu âm nhạc</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Nâng cao khả năng thẩm âm</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Phát triển kỹ năng biểu diễn solo</li>
                      <li className="flex items-center"><i className={`fas fa-check text-${colorClass} mr-2`}></i> Học lý thuyết âm nhạc cơ bản</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-4 flex items-center">
                  <i className={`fas fa-book text-${colorClass} mr-2`}></i>
                  Mô tả chương trình
                </h3>
                {program.slug === "mau-nhi" && (
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-lg shadow-sm border border-pink-100 text-gray-800">
                    Khóa học Mẫu Nhí được thiết kế đặc biệt cho các bé yêu thích thời trang và muốn trở thành người mẫu nhí. 
                    Chương trình cung cấp kiến thức và kỹ năng từ cơ bản đến nâng cao về kỹ thuật catwalk, tạo dáng và biểu diễn.
                    Học viên sẽ được đào tạo bởi những giảng viên giàu kinh nghiệm và có cơ hội tham gia các sự kiện thời trang thực tế. 
                    Qua đó, các bé không chỉ phát triển kỹ năng mà còn nâng cao sự tự tin và phong thái trên sân khấu.
                  </div>
                )}
                {program.slug === "mc-nhi" && (
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-lg shadow-sm border border-blue-100 text-gray-800">
                    Khóa học MC Nhí giúp các bé phát triển kỹ năng giao tiếp, phát âm chuẩn và khả năng dẫn chương trình. 
                    Các bé sẽ được hướng dẫn cách sử dụng giọng nói hiệu quả, kỹ thuật nói trước đám đông và cách ứng biến trong các tình huống.
                    Chương trình còn trang bị cho các bé kỹ năng phỏng vấn, dẫn dắt và tương tác với khán giả. 
                    Sau khóa học, các bé sẽ có cơ hội thực hành tại các sự kiện thực tế của trung tâm.
                  </div>
                )}
                {program.slug === "dien-vien-nhi" && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg shadow-sm border border-amber-100 text-gray-800">
                    Chương trình Diễn Viên Nhí giúp trẻ phát triển khả năng diễn xuất, thể hiện cảm xúc và xây dựng nhân vật. 
                    Các bé sẽ được học các kỹ thuật diễn xuất cơ bản, cách phân tích kịch bản đơn giản và phương pháp thể hiện nhân vật.
                    Khóa học còn tập trung vào việc rèn luyện khả năng tập trung, phản xạ nhanh và làm việc nhóm. 
                    Qua các bài tập thực hành, các bé sẽ dần hoàn thiện kỹ năng diễn xuất và có cơ hội tham gia các vở kịch, phim ngắn.
                  </div>
                )}
                {program.slug === "dance" && (
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg shadow-sm border border-purple-100 text-gray-800">
                    Khóa học Dance mang đến cho các bé cơ hội khám phá thế giới nhảy múa với nhiều phong cách khác nhau như Hip-hop, Contemporary và K-pop. 
                    Các bé sẽ được học kỹ thuật vũ đạo cơ bản, cách di chuyển theo nhịp và phối hợp các động tác.
                    Chương trình không chỉ giúp phát triển kỹ năng nhảy mà còn tăng cường sức khỏe, sự dẻo dai và khả năng phối hợp cơ thể. 
                    Các bé sẽ được tham gia biểu diễn nhóm và có cơ hội thể hiện tài năng tại các sự kiện.
                  </div>
                )}
                {program.slug === "piano" && (
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg shadow-sm border border-emerald-100 text-gray-800">
                    Khóa học Piano giúp các bé làm quen và phát triển kỹ năng chơi đàn từ cơ bản đến nâng cao. 
                    Các bé sẽ được học cách đọc nốt nhạc, kỹ thuật đánh đàn và lý thuyết âm nhạc căn bản.
                    Chương trình được thiết kế phù hợp với từng độ tuổi và trình độ, giúp các bé tiến bộ một cách tự nhiên và hiệu quả. 
                    Ngoài kỹ năng chơi đàn, các bé còn phát triển khả năng tập trung, sự kiên nhẫn và tình yêu âm nhạc.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule Section */}
      {program.schedules && program.schedules.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Lịch Học {program.name}</h2>
              <div className={`w-20 h-1 bg-${colorClass} mx-auto mb-6`}></div>
            </div>

            <div className="overflow-x-auto bg-neutral rounded-xl shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className={`bg-${colorClass} text-white`}>
                    <th className="py-4 px-6 text-left font-heading">Chương Trình</th>
                    <th className="py-4 px-6 text-left font-heading">Thứ 2-4-6</th>
                    <th className="py-4 px-6 text-left font-heading">Thứ 3-5-7</th>
                    <th className="py-4 px-6 text-left font-heading">Cuối Tuần</th>
                  </tr>
                </thead>
                <tbody>
                  {program.schedules.map((schedule) => (
                    <tr key={schedule.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className={`font-bold text-${colorClass}`}>{program.name}</div>
                      </td>
                      <td className="py-4 px-6">{schedule.weekdayMWF || "-"}</td>
                      <td className="py-4 px-6">{schedule.weekdayTTS || "-"}</td>
                      <td className="py-4 px-6">{schedule.weekend || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Lưu ý: Lịch có thể thay đổi theo từng học kỳ. Vui lòng liên hệ để biết thời gian cụ thể.</p>
            </div>
          </div>
        </section>
      )}

      {/* Teachers Section */}
      {program.teachers && program.teachers.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Giảng Viên {program.name}</h2>
              <div className={`w-20 h-1 bg-${colorClass} mx-auto mb-6`}></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Đội ngũ giảng viên chuyên nghiệp với nhiều năm kinh nghiệm trong lĩnh vực {program.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {program.teachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {program.galleryItems && program.galleryItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Hình Ảnh {program.name}</h2>
              <div className={`w-20 h-1 bg-${colorClass} mx-auto mb-6`}></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Những khoảnh khắc đáng nhớ trong các buổi học và biểu diễn của học viên lớp {program.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.galleryItems.map((item) => (
                <GalleryItemComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Section */}
      <section id="register" className={`py-20 bg-gradient-to-r from-${colorClass} to-primary`}>
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex items-center">
                <div>
                  <h3 className="text-3xl font-bold font-heading text-dark mb-4">Đăng Ký Khóa Học {program.name}</h3>
                  <p className="text-gray-600 mb-6">
                    Điền thông tin để nhận tư vấn miễn phí về khóa học {program.name} phù hợp với con bạn.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="text-gray-700">Tư vấn khóa học phù hợp với độ tuổi và sở thích</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="text-gray-700">Học thử miễn phí 1 buổi</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="text-gray-700">Cập nhật thông tin về các sự kiện biểu diễn</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone-alt text-primary mr-2"></i>
                    <span className="text-lg font-bold">Hotline: 0967.478.123</span>
                  </div>
                </div>
              </div>
              <div className="bg-neutral p-10">
                <RegisterForm programs={[program]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
