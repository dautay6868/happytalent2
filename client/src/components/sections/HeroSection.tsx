const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-secondary to-primary py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full -mr-32 -mb-32"></div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white z-10 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Nuôi Dưỡng <span className="text-accent">Tài Năng</span> Trẻ Thơ
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Khám phá tiềm năng nghệ thuật của con bạn tại Trung Tâm Nghệ Thuật Happy Talent với các khóa học Mẫu nhí, MC nhí, Diễn viên nhí, Dance và Piano.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#programs" className="bg-white text-primary hover:bg-accent hover:text-dark font-bold py-3 px-8 rounded-full transition duration-300">
              Khám Phá Ngay
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full transition duration-300">
              Liên Hệ
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center z-10">
          <img 
            src="https://images.unsplash.com/photo-1615287646032-82698f51ee21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGNoaWxkJTIwZGFuY2V8ZW58MHx8fHwxNjI5ODMzOTU5fDA&ixlib=rb-4.0.3&q=80&w=500" 
            alt="Trẻ em đang biểu diễn nghệ thuật" 
            className="rounded-lg shadow-2xl hero-animation max-w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
