
import { useState, useRef, useEffect } from "react";
import { Minus, Square, X } from "lucide-react";

interface WindowFrameProps {
  title: string;
  isActive: boolean;
  initialX: number;
  initialY: number;
  onClose: () => void;
  onMinimize: () => void;
  onActivate: () => void;
  children: React.ReactNode;
}

export const WindowFrame = ({
  title,
  isActive,
  initialX,
  initialY,
  onClose,
  onMinimize,
  onActivate,
  children
}: WindowFrameProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.title-bar')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
      onActivate();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragStart.x)),
          y: Math.max(0, Math.min(window.innerHeight - 300, e.clientY - dragStart.y))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-100 border-2 shadow-lg ${
        isActive ? 'border-blue-600 z-20' : 'border-gray-400 z-10'
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: '600px',
        height: '400px',
        minWidth: '300px',
        minHeight: '200px'
      }}
      onMouseDown={handleMouseDown}
      onClick={onActivate}
    >
      {/* Title Bar */}
      <div 
        className={`title-bar h-8 px-2 flex items-center justify-between cursor-move ${
          isActive 
            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
            : 'bg-gradient-to-r from-gray-500 to-gray-400 text-gray-200'
        }`}
      >
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-white/20 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white/60 rounded-xs" />
          </div>
          <span className="text-sm font-medium">{title}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-6 h-5 bg-gray-300 hover:bg-gray-400 border border-gray-600 flex items-center justify-center"
          >
            <Minus size={12} className="text-black" />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-6 h-5 bg-gray-300 hover:bg-gray-400 border border-gray-600 flex items-center justify-center"
          >
            <Square size={10} className="text-black" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-6 h-5 bg-red-500 hover:bg-red-600 border border-gray-600 flex items-center justify-center"
          >
            <X size={12} className="text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="h-[calc(100%-2rem)] overflow-auto">
        {children}
      </div>
    </div>
  );
};
