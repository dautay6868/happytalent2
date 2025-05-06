import ContactForm from "@/components/ui/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Liên Hệ</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về các khóa học phù hợp với con bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold font-heading mb-6">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Địa Chỉ</h4>
                  <p className="text-gray-600">Tầng 7 - 177 Đường Quan Hoa, Cầu giấy, TP Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-phone-alt text-secondary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Điện Thoại</h4>
                  <p className="text-gray-600">0967.478.123</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-envelope text-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600">bebinami.kute9x@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Giờ Làm Việc</h4>
                  <p className="text-gray-600">Thứ Hai - Thứ Sáu: 9:00 - 22:00</p>
                  <p className="text-gray-600">Thứ Bảy - Chủ Nhật: 8:00 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-lg mb-3">Theo Dõi Chúng Tôi</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold font-heading mb-6">Gửi Tin Nhắn</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-neutral rounded-xl shadow-md overflow-hidden h-80">
          {/* Embedded Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926294064381!2d105.80055261541264!3d21.034974785994313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1efbd06c8b%3A0xff4c53f78a8aa607!2zMTc3IMSQxrDhu51uZyBRdWFuIEhvYSwgUXVhbiBIb2EsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1684322123164!5m2!1svi!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Happy Talent"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
