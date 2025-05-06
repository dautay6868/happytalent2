import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryItem as GalleryItemType } from "@shared/schema";

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine color class based on program id
  let colorClass = "primary";
  if (item.programId) {
    const programId = item.programId;
    // Use different colors based on program ID (assuming a pattern in the seeds)
    colorClass = programId % 3 === 0 ? "accent" : (programId % 2 === 0 ? "secondary" : "primary");
  }

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer" 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={item.imagePath} 
          alt={item.title} 
          className="w-full h-48 md:h-56 object-cover transform transition-transform duration-300 group-hover:scale-110" 
        />
        <div className={`absolute inset-0 bg-${colorClass} bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300`}>
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-bold">{item.title}</span>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <div className="p-1">
            <img 
              src={item.imagePath} 
              alt={item.title} 
              className="w-full rounded-lg object-contain max-h-[80vh]" 
            />
            <h3 className="text-xl font-bold mt-4 text-center">{item.title}</h3>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryItem;
