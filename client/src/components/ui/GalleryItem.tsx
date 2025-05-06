import { GalleryItem as GalleryItemType } from "@shared/schema";

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  // Determine color class based on program id
  let colorClass = "primary";
  if (item.programId) {
    const programId = item.programId;
    // Use different colors based on program ID (assuming a pattern in the seeds)
    colorClass = programId % 3 === 0 ? "accent" : (programId % 2 === 0 ? "secondary" : "primary");
  }

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md">
      <div className="flex flex-col">
        <img 
          src={item.imagePath} 
          alt={item.title} 
          className="w-full h-60 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105" 
        />
        <div className={`p-3 bg-white border-t border-gray-100`}>
          <h3 className={`text-base font-semibold text-${colorClass}`}>{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
