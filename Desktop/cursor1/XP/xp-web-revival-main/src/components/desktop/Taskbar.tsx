
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TaskbarProps {
  onStartClick: () => void;
  isStartMenuOpen: boolean;
  openWindows: string[];
  activeWindow: string | null;
  onWindowClick: (windowId: string) => void;
}

export const Taskbar = ({ 
  onStartClick, 
  isStartMenuOpen, 
  openWindows, 
  activeWindow, 
  onWindowClick 
}: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getWindowTitle = (windowId: string) => {
    const titles: Record<string, string> = {
      mycomputer: "My Computer",
      internetexplorer: "Internet Explorer",
      minesweeper: "Minesweeper",
      notepad: "Notepad",
      paint: "Paint"
    };
    return titles[windowId] || windowId;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-600 to-blue-500 border-t-2 border-blue-300 flex items-center px-1 shadow-lg">
      {/* Start Button */}
      <Button
        onClick={onStartClick}
        className={`h-8 px-4 rounded-sm mr-2 font-bold text-white shadow-inner ${
          isStartMenuOpen 
            ? 'bg-green-600 hover:bg-green-700 border-2 border-green-800' 
            : 'bg-green-500 hover:bg-green-600 border-2 border-green-400'
        }`}
        style={{
          background: isStartMenuOpen 
            ? 'linear-gradient(to bottom, #4a7c59 0%, #2d4a35 100%)'
            : 'linear-gradient(to bottom, #5a9a68 0%, #4a7c59 100%)'
        }}
      >
        <span className="text-sm">start</span>
      </Button>

      {/* Quick Launch */}
      <div className="h-6 w-px bg-blue-700 mx-2" />

      {/* Window Buttons */}
      <div className="flex-1 flex items-center gap-1">
        {openWindows.map((windowId) => (
          <Button
            key={windowId}
            onClick={() => onWindowClick(windowId)}
            className={`h-7 px-3 text-xs rounded-sm border ${
              activeWindow === windowId
                ? 'bg-blue-300 border-blue-800 shadow-inner'
                : 'bg-blue-400 border-blue-600 hover:bg-blue-300'
            }`}
            variant="ghost"
          >
            {getWindowTitle(windowId)}
          </Button>
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 px-2 h-8 bg-blue-500 border border-blue-400 rounded-sm">
        <div className="text-xs text-white font-medium">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
