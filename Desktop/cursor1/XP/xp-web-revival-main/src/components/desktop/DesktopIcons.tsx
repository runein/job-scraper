
import { Monitor, Folder, HardDrive, Trash2, FileImage, Globe } from "lucide-react";

interface DesktopIconsProps {
  onDoubleClick: (windowId: string) => void;
}

export const DesktopIcons = ({ onDoubleClick }: DesktopIconsProps) => {
  const icons = [
    { id: "mycomputer", name: "My Computer", icon: Monitor, x: 50, y: 50 },
    { id: "internetexplorer", name: "Internet Explorer", icon: Globe, x: 50, y: 150 },
    { id: "minesweeper", name: "Minesweeper", icon: FileImage, x: 50, y: 250 },
    { id: "notepad", name: "Notepad", icon: FileImage, x: 50, y: 350 },
    { id: "paint", name: "Paint", icon: FileImage, x: 50, y: 450 },
  ];

  return (
    <>
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute cursor-pointer select-none group"
          style={{ left: icon.x, top: icon.y }}
          onDoubleClick={() => onDoubleClick(icon.id)}
        >
          <div className="flex flex-col items-center p-2 rounded hover:bg-blue-400/30 group-hover:bg-blue-400/30">
            <div className="w-8 h-8 mb-1 flex items-center justify-center bg-white/80 rounded border border-gray-400 shadow-sm">
              <icon.icon size={20} className="text-blue-600" />
            </div>
            <span className="text-xs text-white font-medium text-center max-w-16 leading-tight drop-shadow-lg">
              {icon.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
