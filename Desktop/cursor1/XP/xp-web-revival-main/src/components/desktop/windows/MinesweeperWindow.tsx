
import { useState } from "react";
import { RotateCcw, Flag } from "lucide-react";

export const MinesweeperWindow = () => {
  const [gameState, setGameState] = useState("playing"); // playing, won, lost
  const [flagCount, setFlagCount] = useState(10);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const createGrid = () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push({
          revealed: Math.random() > 0.8,
          hasMine: Math.random() > 0.85,
          hasFlag: false,
          neighborCount: Math.floor(Math.random() * 4)
        });
      }
      grid.push(row);
    }
    return grid;
  };

  const [grid] = useState(createGrid);

  return (
    <div className="h-full bg-gray-200">
      {/* Menu Bar */}
      <div className="h-6 bg-gray-100 border-b border-gray-300 flex items-center px-2 text-xs">
        <span className="px-2 hover:bg-blue-200">Game</span>
        <span className="px-2 hover:bg-blue-200">Help</span>
      </div>

      <div className="p-3">
        {/* Game Header */}
        <div className="bg-gray-300 border-2 border-gray-400 p-2 mb-3 flex items-center justify-between">
          <div className="bg-black text-red-500 px-2 py-1 font-mono text-sm border border-gray-600">
            {flagCount.toString().padStart(3, '0')}
          </div>
          
          <button 
            className="w-8 h-8 bg-gray-300 border-2 border-gray-400 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => window.location.reload()}
          >
            <div className="text-lg">🙂</div>
          </button>
          
          <div className="bg-black text-red-500 px-2 py-1 font-mono text-sm border border-gray-600">
            {timeElapsed.toString().padStart(3, '0')}
          </div>
        </div>

        {/* Game Grid */}
        <div className="bg-gray-300 border-2 border-gray-600 p-2 inline-block">
          <div className="grid grid-cols-9 gap-0">
            {grid.map((row, i) =>
              row.map((cell, j) => (
                <button
                  key={`${i}-${j}`}
                  className={`w-6 h-6 border text-xs font-bold ${
                    cell.revealed
                      ? cell.hasMine
                        ? 'bg-red-500 border-gray-400'
                        : 'bg-gray-200 border-gray-400'
                      : 'bg-gray-300 border-white border-t-2 border-l-2 border-r border-b border-r-gray-600 border-b-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cell.revealed
                    ? cell.hasMine
                      ? '💣'
                      : cell.neighborCount > 0
                      ? cell.neighborCount
                      : ''
                    : cell.hasFlag
                    ? '🚩'
                    : ''}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
