const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Về Trung Tâm Happy Talent</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Chúng tôi tin rằng mỗi đứa trẻ đều mang trong mình những tiềm năng nghệ thuật đặc biệt. 
            Tại Happy Talent, chúng tôi nuôi dưỡng và phát triển những tài năng đó trong một môi trường 
            an toàn, sáng tạo và đầy cảm hứng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-neutral rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-star text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">Phát Triển Tài Năng</h3>
            <p className="text-gray-600">
              Chúng tôi phát hiện và phát triển tài năng nghệ thuật bẩm sinh của mỗi trẻ.
            </p>
          </div>
          
          <div className="bg-neutral rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-user-graduate text-secondary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">Giáo Viên Chuyên Nghiệp</h3>
            <p className="text-gray-600">
              Đội ngũ giáo viên giàu kinh nghiệm và đam mê trong việc nuôi dưỡng tài năng trẻ.
            </p>
          </div>
          
          <div className="bg-neutral rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-heart text-accent text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">Môi Trường Thân Thiện</h3>
            <p className="text-gray-600">
              Không gian học tập an toàn, thân thiện, khuyến khích sự sáng tạo và tự tin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
