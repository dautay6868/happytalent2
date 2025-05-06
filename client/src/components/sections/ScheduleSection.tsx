import { useQuery } from "@tanstack/react-query";
import { Schedule, Program } from "@shared/schema";

type ScheduleWithProgram = Schedule & {
  program: Program;
};

const ScheduleSection = () => {
  const { data: schedules, isLoading, error } = useQuery<ScheduleWithProgram[]>({
    queryKey: ["/api/schedules"],
  });

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Lịch Học</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lịch học linh hoạt phù hợp với lịch trình của trẻ và gia đình, bao gồm cả các lớp học vào buổi chiều sau giờ học 
            chính khóa và các lớp học cuối tuần.
          </p>
        </div>

        <div className="overflow-x-auto bg-neutral rounded-xl shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="py-4 px-6 text-left font-heading">Chương Trình</th>
                <th className="py-4 px-6 text-left font-heading">Thứ 2-4-6</th>
                <th className="py-4 px-6 text-left font-heading">Thứ 3-5-7</th>
                <th className="py-4 px-6 text-left font-heading">Cuối Tuần</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                // Loading skeleton
                Array(5).fill(0).map((_, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-6">
                      <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </td>
                  </tr>
                ))
              ) : error ? (
                <tr>
                  <td colSpan={4} className="py-4 px-6 text-center text-red-500">
                    Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.
                  </td>
                </tr>
              ) : schedules && schedules.length > 0 ? (
                schedules.map((schedule) => (
                  <tr key={schedule.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className={`font-bold text-${schedule.program.color}`}>
                        {schedule.program.name}
                      </div>
                    </td>
                    <td className="py-4 px-6">{schedule.weekdayMWF || "-"}</td>
                    <td className="py-4 px-6">{schedule.weekdayTTS || "-"}</td>
                    <td className="py-4 px-6">{schedule.weekend || "-"}</td>
                  </tr>
                ))
              ) : (
                // Fallback data if no schedules from API
                <>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-bold text-primary">Mẫu Nhí</div>
                    </td>
                    <td className="py-4 px-6">17:30 - 19:00</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">9:00 - 10:30 (CN)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-bold text-secondary">MC Nhí</div>
                    </td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">17:30 - 19:00</td>
                    <td className="py-4 px-6">14:00 - 15:30 (T7)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-bold text-accent">Diễn Viên Nhí</div>
                    </td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">17:30 - 19:00</td>
                    <td className="py-4 px-6">15:30 - 17:00 (T7)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-bold text-primary">Dance</div>
                    </td>
                    <td className="py-4 px-6">17:30 - 19:00</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">9:00 - 10:30 (T7)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-bold text-secondary">Piano</div>
                    </td>
                    <td className="py-4 px-6">15:00 - 19:00 (cá nhân)</td>
                    <td className="py-4 px-6">15:00 - 19:00 (cá nhân)</td>
                    <td className="py-4 px-6">9:00 - 17:00 (T7, CN - cá nhân)</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Lưu ý: Lịch có thể thay đổi theo từng học kỳ. Vui lòng liên hệ để biết thời gian cụ thể.</p>
          <a href="#contact" className="inline-block bg-accent hover:bg-opacity-90 text-dark font-bold py-3 px-8 rounded-full transition duration-300">
            Tư Vấn Lịch Học
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
