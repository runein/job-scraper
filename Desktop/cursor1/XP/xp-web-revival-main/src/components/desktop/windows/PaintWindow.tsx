
import { useState } from "react";
import { Palette, Brush, Eraser, Square, Circle } from "lucide-react";

export const PaintWindow = () => {
  const [selectedTool, setSelectedTool] = useState("brush");
  const [selectedColor, setSelectedColor] = useState("#000000");

  const colors = [
    "#000000", "#808080", "#800000", "#FF0000", "#008000", "#00FF00",
    "#808000", "#FFFF00", "#000080", "#0000FF", "#800080", "#FF00FF",
    "#008080", "#00FFFF", "#C0C0C0", "#FFFFFF"
  ];

  return (
    <div className="h-full bg-gray-200">
      {/* Menu Bar */}
      <div className="h-6 bg-gray-100 border-b border-gray-300 flex items-center px-2 text-xs">
        <span className="px-2 hover:bg-blue-200">File</span>
        <span className="px-2 hover:bg-blue-200">Edit</span>
        <span className="px-2 hover:bg-blue-200">View</span>
        <span className="px-2 hover:bg-blue-200">Image</span>
        <span className="px-2 hover:bg-blue-200">Colors</span>
        <span className="px-2 hover:bg-blue-200">Help</span>
      </div>

      {/* Tool Bar */}
      <div className="h-12 bg-gray-200 border-b border-gray-300 flex items-center px-2 gap-1">
        <div className="w-12 bg-gray-300 border border-gray-400 p-1 grid grid-cols-2 gap-1">
          <button 
            className={`w-4 h-4 flex items-center justify-center ${selectedTool === 'brush' ? 'bg-blue-300' : 'hover:bg-gray-200'}`}
            onClick={() => setSelectedTool('brush')}
          >
            <Brush size={10} />
          </button>
          <button 
            className={`w-4 h-4 flex items-center justify-center ${selectedTool === 'eraser' ? 'bg-blue-300' : 'hover:bg-gray-200'}`}
            onClick={() => setSelectedTool('eraser')}
          >
            <Eraser size={10} />
          </button>
          <button 
            className={`w-4 h-4 flex items-center justify-center ${selectedTool === 'rectangle' ? 'bg-blue-300' : 'hover:bg-gray-200'}`}
            onClick={() => setSelectedTool('rectangle')}
          >
            <Square size={10} />
          </button>
          <button 
            className={`w-4 h-4 flex items-center justify-center ${selectedTool === 'circle' ? 'bg-blue-300' : 'hover:bg-gray-200'}`}
            onClick={() => setSelectedTool('circle')}
          >
            <Circle size={10} />
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100%-4.5rem)]">
        {/* Color Palette */}
        <div className="w-16 bg-gray-200 border-r border-gray-300 p-2">
          <div className="grid grid-cols-2 gap-1">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-5 h-5 border border-gray-600 ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-white m-2 border border-gray-400 relative overflow-hidden">
          <canvas 
            className="w-full h-full cursor-crosshair"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
