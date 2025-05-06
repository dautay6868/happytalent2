import { Teacher } from "@shared/schema";

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  // Parse social links if they exist
  const socialLinks = teacher.social ? JSON.parse(teacher.social) : null;
  
  // Determine color based on program (fallback to primary)
  let colorClass = "primary";
  if (teacher.programId) {
    if (teacher.role.includes("Dance") || teacher.role.includes("Mẫu")) {
      colorClass = "primary";
    } else if (teacher.role.includes("MC") || teacher.role.includes("Piano")) {
      colorClass = "secondary";
    } else if (teacher.role.includes("Diễn Viên")) {
      colorClass = "accent";
    }
  }
  
  return (
    <div className="bg-neutral rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={teacher.imagePath} 
          alt={teacher.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold font-heading">{teacher.name}</h3>
        <p className={`text-${colorClass} font-medium mb-2`}>{teacher.role}</p>
        <p className="text-gray-600 text-sm mb-3">
          {teacher.experience}
        </p>
        <div className="flex justify-center space-x-3">
          {socialLinks && socialLinks.facebook && (
            <a href={socialLinks.facebook} className={`text-dark hover:text-${colorClass}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {socialLinks && socialLinks.instagram && (
            <a href={socialLinks.instagram} className={`text-dark hover:text-${colorClass}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {socialLinks && socialLinks.youtube && (
            <a href={socialLinks.youtube} className={`text-dark hover:text-${colorClass}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
