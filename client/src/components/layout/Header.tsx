import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when switching from mobile to desktop view
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1606076869941-fb2e39d75977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIxfHxjaGlsZCUyMHRhbGVudHxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=60" 
            alt="Happy Talent Logo" 
            className="h-12 w-12 rounded-full mr-2"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold font-heading text-primary">Happy Talent</h1>
            <p className="text-xs text-gray-500">Trung Tâm Nghệ Thuật</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="font-medium text-dark hover:text-primary transition-colors">
            Trang Chủ
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium text-dark hover:text-primary transition-colors">
              Chương Trình <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link href="/mau-nhi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem">
                  Mẫu Nhí
                </Link>
                <Link href="/mc-nhi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem">
                  MC Nhí
                </Link>
                <Link href="/dien-vien-nhi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem">
                  Diễn Viên Nhí
                </Link>
                <Link href="/dance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem">
                  Dance
                </Link>
                <Link href="/piano" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem">
                  Piano
                </Link>
              </div>
            </div>
          </div>
          <a href="/#teachers" className="font-medium text-dark hover:text-primary transition-colors">
            Giáo Viên
          </a>
          <a href="/#gallery" className="font-medium text-dark hover:text-primary transition-colors">
            Thư Viện
          </a>
          <a href="/#schedule" className="font-medium text-dark hover:text-primary transition-colors">
            Lịch Học
          </a>
          <a href="/#contact" className="font-medium text-dark hover:text-primary transition-colors">
            Liên Hệ
          </a>
        </nav>

        {/* Register Button */}
        <a 
          href="/#register" 
          className="hidden md:block bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Đăng Ký Ngay
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-dark focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block px-4 py-2 text-dark hover:bg-primary hover:text-white">
          Trang Chủ
        </Link>
        <div className="px-4 py-2 text-dark">
          <div className="font-medium mb-1">Chương Trình</div>
          <Link href="/mau-nhi" className="block pl-4 py-1 text-sm text-gray-700 hover:text-primary">
            Mẫu Nhí
          </Link>
          <Link href="/mc-nhi" className="block pl-4 py-1 text-sm text-gray-700 hover:text-primary">
            MC Nhí
          </Link>
          <Link href="/dien-vien-nhi" className="block pl-4 py-1 text-sm text-gray-700 hover:text-primary">
            Diễn Viên Nhí
          </Link>
          <Link href="/dance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-primary">
            Dance
          </Link>
          <Link href="/piano" className="block pl-4 py-1 text-sm text-gray-700 hover:text-primary">
            Piano
          </Link>
        </div>
        <a href="/#teachers" className="block px-4 py-2 text-dark hover:bg-primary hover:text-white">
          Giáo Viên
        </a>
        <a href="/#gallery" className="block px-4 py-2 text-dark hover:bg-primary hover:text-white">
          Thư Viện
        </a>
        <a href="/#schedule" className="block px-4 py-2 text-dark hover:bg-primary hover:text-white">
          Lịch Học
        </a>
        <a href="/#contact" className="block px-4 py-2 text-dark hover:bg-primary hover:text-white">
          Liên Hệ
        </a>
        <a 
          href="/#register" 
          className="block m-4 bg-primary text-white font-bold py-2 px-4 rounded-full text-center"
        >
          Đăng Ký Ngay
        </a>
      </div>
    </header>
  );
};

export default Header;
