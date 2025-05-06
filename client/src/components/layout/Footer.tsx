import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Happy Talent Logo" 
                className="h-14 w-auto mr-2" 
              />
              <h3 className="text-xl font-bold font-heading">Happy Talent</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Nuôi dưỡng tài năng nghệ thuật của trẻ từ sớm, tạo nền tảng vững chắc cho tương lai.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574697726665&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@happy.talent4?_r=1&_d=secCgYIASAHKAESPgo8Rchsc7E1dX6HQCqC7sl4VoLwGBtijJr1MZEsQBMdow%2FEswlkoz1%2Bhm2m32sAwd0Me7dJhCFyGsYagtVcGgA%3D&_svg=1&checksum=33400eb772f786789bcdc1291fa27391b09eb67e6a7e386c3234b2b1fd0aaa9e&sec_uid=MS4wLjABAAAAW99K1cwd9eZtnKXpILk3HGmmE1WiD3BVNTmFxqe8rVvSF4cbDzxQCuviQfJbKd6c&sec_user_id=MS4wLjABAAAAcEwLjNTW8csgp3SefrV3VQcIScIP7yH-ofGH7MS1Bn4TgXRgZtMvmOMGAFsQEZmY&share_app_id=1180&share_author_id=7492638163065488391&share_link_id=A0AC1CDD-E7B8-424C-9C39-D03D87D4B149&sharer_language=vi&social_share_type=5&source=h5_t&timestamp=1746514868&tt_from=copy&u_code=eh7lfjfkebd5i3&ug_btm=b9081%2Cb5836&user_id=7436625866820862992&utm_campaign=client_share&utm_medium=ios&utm_source=copy" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Khóa Học</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mau-nhi" className="text-gray-700 hover:text-primary transition-colors">
                  Mẫu Nhí
                </Link>
              </li>
              <li>
                <Link href="/mc-nhi" className="text-gray-700 hover:text-primary transition-colors">
                  MC Nhí
                </Link>
              </li>
              <li>
                <Link href="/dien-vien-nhi" className="text-gray-700 hover:text-primary transition-colors">
                  Diễn Viên Nhí
                </Link>
              </li>
              <li>
                <Link href="/dance" className="text-gray-700 hover:text-primary transition-colors">
                  Dance
                </Link>
              </li>
              <li>
                <Link href="/piano" className="text-gray-700 hover:text-primary transition-colors">
                  Piano
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-700 hover:text-primary transition-colors">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="/#teachers" className="text-gray-700 hover:text-primary transition-colors">
                  Giảng Viên
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-gray-700 hover:text-primary transition-colors">
                  Thư Viện
                </a>
              </li>
              <li>
                <a href="/#schedule" className="text-gray-700 hover:text-primary transition-colors">
                  Lịch Học
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-700 hover:text-primary transition-colors">
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
                <span className="text-gray-700">Tầng 7 - 177 Đường Quan Hoa, Cầu giấy, TP Hà Nội</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary"></i>
                <span className="text-gray-700">Hotline: 0967.478.123</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-gray-700">bebinami.kute9x@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span className="text-gray-700">Thứ Hai - Thứ Sáu: 9:00 - 22:00<br/>Thứ Bảy - Chủ Nhật: 8:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trung Tâm Nghệ Thuật Happy Talent. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary text-sm transition-colors">
              Điều Khoản Sử Dụng
            </a>
            <a href="#" className="text-gray-700 hover:text-primary text-sm transition-colors">
              Chính Sách Bảo Mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
