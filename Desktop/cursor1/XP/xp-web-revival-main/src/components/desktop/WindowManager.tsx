
import { useState } from "react";
import { WindowFrame } from "./WindowFrame";
import { InternetExplorerWindow } from "./windows/InternetExplorerWindow";
import { MyComputerWindow } from "./windows/MyComputerWindow";
import { MinesweeperWindow } from "./windows/MinesweeperWindow";
import { NotepadWindow } from "./windows/NotepadWindow";
import { PaintWindow } from "./windows/PaintWindow";

interface WindowManagerProps {
  openWindows: string[];
  activeWindow: string | null;
  onClose: (windowId: string) => void;
  onMinimize: (windowId: string) => void;
  onActivate: (windowId: string) => void;
}

export const WindowManager = ({ 
  openWindows, 
  activeWindow, 
  onClose, 
  onMinimize, 
  onActivate 
}: WindowManagerProps) => {
  const [windowPositions, setWindowPositions] = useState<Record<string, { x: number; y: number }>>({});

  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case "internetexplorer":
        return <InternetExplorerWindow />;
      case "mycomputer":
        return <MyComputerWindow />;
      case "minesweeper":
        return <MinesweeperWindow />;
      case "notepad":
        return <NotepadWindow />;
      case "paint":
        return <PaintWindow />;
      default:
        return <div className="p-4">Unknown window</div>;
    }
  };

  const getWindowTitle = (windowId: string) => {
    const titles: Record<string, string> = {
      internetexplorer: "Internet Explorer",
      mycomputer: "My Computer",
      minesweeper: "Minesweeper",
      notepad: "Untitled - Notepad",
      paint: "untitled - Paint"
    };
    return titles[windowId] || windowId;
  };

  const getInitialPosition = (windowId: string, index: number) => {
    if (windowPositions[windowId]) {
      return windowPositions[windowId];
    }
    return { x: 100 + (index * 50), y: 100 + (index * 50) };
  };

  return (
    <>
      {openWindows.map((windowId, index) => {
        const isActive = activeWindow === windowId;
        const position = getInitialPosition(windowId, index);
        
        return (
          <WindowFrame
            key={windowId}
            title={getWindowTitle(windowId)}
            isActive={isActive}
            initialX={position.x}
            initialY={position.y}
            onClose={() => onClose(windowId)}
            onMinimize={() => onMinimize(windowId)}
            onActivate={() => onActivate(windowId)}
          >
            {getWindowContent(windowId)}
          </WindowFrame>
        );
      })}
    </>
  );
};
