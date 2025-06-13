import { useState } from "react";
import { Taskbar } from "./desktop/Taskbar";
import { DesktopIcons } from "./desktop/DesktopIcons";
import { WindowManager } from "./desktop/WindowManager";
import { StartMenu } from "./desktop/StartMenu";

export const Desktop = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setActiveWindow(windowId);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    if (activeWindow === windowId) {
      const remainingWindows = openWindows.filter(id => id !== windowId);
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1] : null);
    }
  };

  const minimizeWindow = (windowId: string) => {
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  return (
    <div 
      className="h-screen w-full relative overflow-hidden"
      style={{
        background: "#001f3f",
        backgroundImage: "none"
      }}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* Desktop Background - Bliss Hills */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "none",
          backgroundColor: "#001f3f"
        }}
      />
      
      <DesktopIcons onDoubleClick={openWindow} />
      
      <WindowManager 
        openWindows={openWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onActivate={setActiveWindow}
      />
      
      {isStartMenuOpen && (
        <StartMenu 
          onClose={() => setIsStartMenuOpen(false)}
          onOpenWindow={openWindow}
        />
      )}
      
      <Taskbar 
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        isStartMenuOpen={isStartMenuOpen}
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={setActiveWindow}
      />
    </div>
  );
};
