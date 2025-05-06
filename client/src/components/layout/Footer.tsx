import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1606076869941-fb2e39d75977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIxfHxjaGlsZCUyMHRhbGVudHxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=50" 
                alt="Happy Talent Logo" 
                className="h-10 w-10 rounded-full mr-2" 
              />
              <h3 className="text-xl font-bold font-heading">Happy Talent</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Nuôi dưỡng tài năng nghệ thuật của trẻ từ sớm, tạo nền tảng vững chắc cho tương lai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Khóa Học</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mau-nhi" className="text-gray-400 hover:text-white transition-colors">
                  Mẫu Nhí
                </Link>
              </li>
              <li>
                <Link href="/mc-nhi" className="text-gray-400 hover:text-white transition-colors">
                  MC Nhí
                </Link>
              </li>
              <li>
                <Link href="/dien-vien-nhi" className="text-gray-400 hover:text-white transition-colors">
                  Diễn Viên Nhí
                </Link>
              </li>
              <li>
                <Link href="/dance" className="text-gray-400 hover:text-white transition-colors">
                  Dance
                </Link>
              </li>
              <li>
                <Link href="/piano" className="text-gray-400 hover:text-white transition-colors">
                  Piano
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="/#teachers" className="text-gray-400 hover:text-white transition-colors">
                  Giảng Viên
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Thư Viện
                </a>
              </li>
              <li>
                <a href="/#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Lịch Học
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">Tầng 7 - 177 Đường Quan Hoa, Cầu giấy, TP Hà Nội</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">0123.456.789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">info@happytalent.vn</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span className="text-gray-400">Thứ Hai - Chủ Nhật: 9:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trung Tâm Nghệ Thuật Happy Talent. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Điều Khoản Sử Dụng
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Chính Sách Bảo Mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
