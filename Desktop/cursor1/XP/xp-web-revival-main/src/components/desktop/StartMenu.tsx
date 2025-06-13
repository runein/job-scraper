
import { useState } from "react";
import { 
  User, 
  FolderOpen, 
  Settings, 
  Search, 
  HelpCircle, 
  Play, 
  Power,
  Monitor,
  Globe,
  FileText,
  Palette,
  Calculator
} from "lucide-react";

interface StartMenuProps {
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

export const StartMenu = ({ onClose, onOpenWindow }: StartMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (windowId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenWindow(windowId);
    onClose();
  };

  const menuItems = [
    { id: "internetexplorer", name: "Internet Explorer", icon: Globe },
    { id: "notepad", name: "Notepad", icon: FileText },
    { id: "paint", name: "Paint", icon: Palette },
    { id: "calculator", name: "Calculator", icon: Calculator },
    { id: "minesweeper", name: "Minesweeper", icon: Play },
  ];

  return (
    <div className="absolute bottom-10 left-0 w-96 bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-gray-300 shadow-2xl rounded-tr-lg">
      {/* Header */}
      <div className="flex items-center p-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-3">
          <User size={24} />
        </div>
        <span className="font-bold text-lg">Administrator</span>
      </div>

      <div className="flex">
        {/* Left Panel - Programs */}
        <div className="flex-1 bg-white">
          <div className="p-2">
            <h3 className="text-sm font-bold text-gray-700 mb-2">Frequently Used Programs</h3>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center p-2 cursor-pointer rounded hover:bg-blue-100 ${
                  hoveredItem === item.id ? 'bg-blue-100' : ''
                }`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={(e) => handleItemClick(item.id, e)}
              >
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <item.icon size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 p-2">
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-100">
              <span className="text-sm text-blue-600 font-medium">All Programs</span>
            </div>
          </div>
        </div>

        {/* Right Panel - System Items */}
        <div className="w-48 bg-blue-500">
          <div className="p-2">
            <div 
              className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white"
              onClick={(e) => handleItemClick("mycomputer", e)}
            >
              <Monitor size={16} className="mr-3" />
              <span className="text-sm">My Computer</span>
            </div>
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white">
              <FolderOpen size={16} className="mr-3" />
              <span className="text-sm">My Documents</span>
            </div>
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white">
              <Settings size={16} className="mr-3" />
              <span className="text-sm">Control Panel</span>
            </div>
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white">
              <Search size={16} className="mr-3" />
              <span className="text-sm">Search</span>
            </div>
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white">
              <HelpCircle size={16} className="mr-3" />
              <span className="text-sm">Help and Support</span>
            </div>
          </div>
          
          <div className="border-t border-blue-400 p-2 mt-2">
            <div className="flex items-center p-2 cursor-pointer rounded hover:bg-blue-400 text-white">
              <Power size={16} className="mr-3" />
              <span className="text-sm">Turn Off Computer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
