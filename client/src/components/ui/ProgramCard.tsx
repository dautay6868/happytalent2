import { Link } from "wouter";
import { Program } from "@shared/schema";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const colorMap: Record<string, string> = {
    "#FF6B6B": "primary", // primary
    "#4ECDC4": "secondary", // secondary
    "#FFD166": "accent", // accent
  };

  const color = colorMap[program.color] || "primary";

  return (
    <div id={program.slug} className="program-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={program.imagePath} 
          alt={`Khóa học ${program.name}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className={`inline-block px-3 py-1 bg-${color} bg-opacity-10 text-${color} text-sm font-semibold rounded-full mb-3`}>
          {program.name}
        </div>
        <h3 className="text-xl font-bold font-heading mb-3">Khóa Học {program.name}</h3>
        <p className="text-gray-600 mb-4">
          {program.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="mr-4"><i className="far fa-clock mr-1"></i> {program.durationMinutes} phút/buổi</div>
          <div><i className="fas fa-user-friends mr-1"></i> Độ tuổi: {program.ageRangeStart}-{program.ageRangeEnd}</div>
        </div>
        <Link 
          href={`/${program.slug}`} 
          className={`block text-center bg-${color} hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300`}
        >
          Tìm Hiểu Thêm
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
