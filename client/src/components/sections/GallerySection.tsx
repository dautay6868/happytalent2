import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GalleryItem from "@/components/ui/GalleryItem";
import { GalleryItem as GalleryItemType } from "@shared/schema";

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const { data: galleryItems, isLoading, error } = useQuery<GalleryItemType[]>({
    queryKey: ["/api/gallery"],
  });

  const displayItems = showAll ? galleryItems : galleryItems?.slice(0, 8);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Thư Viện Ảnh & Video</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những khoảnh khắc đáng nhớ từ các buổi biểu diễn, lớp học và sự kiện của học viên Happy Talent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            // Loading skeleton
            Array(8).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-48 md:h-56 animate-pulse"></div>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.</p>
            </div>
          ) : (
            displayItems?.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))
          )}

          {/* If API returns no gallery items, use these fallbacks */}
          {!isLoading && !error && (!galleryItems || galleryItems.length === 0) && (
            <>
              <div className="group relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1513313604859-56ff4cff8a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGNoaWxkJTIwZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHx8fDE2Mjk4MzM5NTl8MA&ixlib=rb-4.0.3&q=80&w=300" 
                  alt="Biểu diễn Dance" 
                  className="w-full h-48 md:h-56 object-cover transform transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-bold">Biểu diễn Dance</span>
                  </div>
                </div>
              </div>

              {/* Other fallback gallery items would go here */}
            </>
          )}
        </div>

        {galleryItems && galleryItems.length > 8 && (
          <div className="mt-10 text-center">
            <button 
              onClick={toggleShowAll}
              className="inline-block bg-white hover:bg-primary hover:text-white text-primary font-bold py-3 px-8 rounded-full border-2 border-primary transition duration-300"
            >
              {showAll ? "Thu Gọn" : "Xem Thêm Hình Ảnh"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
