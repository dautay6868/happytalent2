import { useQuery } from "@tanstack/react-query";
import RegisterForm from "@/components/ui/RegisterForm";
import { Program } from "@shared/schema";

const RegisterSection = () => {
  const { data: programs } = useQuery<Program[]>({
    queryKey: ["/api/programs"],
  });

  return (
    <section id="register" className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 flex items-center">
              <div>
                <h3 className="text-3xl font-bold font-heading text-dark mb-4">Đăng Ký Tư Vấn</h3>
                <p className="text-gray-600 mb-6">
                  Điền thông tin để nhận tư vấn miễn phí về các khóa học phù hợp với con bạn.
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
              <RegisterForm programs={programs || []} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
