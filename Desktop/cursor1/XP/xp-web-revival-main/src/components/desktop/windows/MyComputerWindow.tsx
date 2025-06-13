
import { HardDrive, Folder, Monitor, Disc } from "lucide-react";

export const MyComputerWindow = () => {
  return (
    <div className="h-full">
      {/* Menu Bar */}
      <div className="h-6 bg-gray-100 border-b border-gray-300 flex items-center px-2 text-xs">
        <span className="px-2 hover:bg-blue-200">File</span>
        <span className="px-2 hover:bg-blue-200">Edit</span>
        <span className="px-2 hover:bg-blue-200">View</span>
        <span className="px-2 hover:bg-blue-200">Favorites</span>
        <span className="px-2 hover:bg-blue-200">Tools</span>
        <span className="px-2 hover:bg-blue-200">Help</span>
      </div>

      {/* Toolbar */}
      <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-2">
        <span className="text-xs">Address</span>
        <div className="ml-2 px-2 bg-white border border-gray-400 text-xs h-6 flex items-center">
          My Computer
        </div>
      </div>

      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Left Panel */}
        <div className="w-48 bg-blue-50 border-r border-gray-300 p-2">
          <div className="mb-4">
            <h3 className="font-bold text-sm text-blue-800 mb-2">System Tasks</h3>
            <div className="space-y-1 text-xs">
              <div className="text-blue-600 cursor-pointer hover:underline">View system information</div>
              <div className="text-blue-600 cursor-pointer hover:underline">Add or remove programs</div>
              <div className="text-blue-600 cursor-pointer hover:underline">Change a setting</div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-sm text-blue-800 mb-2">Other Places</h3>
            <div className="space-y-1 text-xs">
              <div className="text-blue-600 cursor-pointer hover:underline">My Network Places</div>
              <div className="text-blue-600 cursor-pointer hover:underline">My Documents</div>
              <div className="text-blue-600 cursor-pointer hover:underline">Shared Documents</div>
              <div className="text-blue-600 cursor-pointer hover:underline">Control Panel</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm text-blue-800 mb-2">Details</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-xs">Star</span>
              <span className="text-xs">5,647</span>
            </div>
            <div className="space-y-1 text-xs text-blue-800">
              <div>Medium</div>
              <div>Minesweeper</div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-4 bg-white">
          <h2 className="text-sm font-bold mb-4">Files Stored on This Computer</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-2 hover:bg-blue-100 cursor-pointer rounded">
              <Folder size={32} className="text-yellow-600" />
              <span className="text-sm">Shared Documents</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-blue-100 cursor-pointer rounded">
              <Folder size={32} className="text-yellow-600" />
              <span className="text-sm">User's Documents</span>
            </div>
          </div>

          <h2 className="text-sm font-bold mb-4">Hard Disk Drives</h2>
          <div className="mb-6">
            <div className="flex items-center gap-3 p-2 hover:bg-blue-100 cursor-pointer rounded">
              <HardDrive size={32} className="text-gray-600" />
              <span className="text-sm">Local Disk (C:)</span>
            </div>
          </div>

          <h2 className="text-sm font-bold mb-4">Devices with Removable Storage</h2>
          <div>
            <div className="flex items-center gap-3 p-2 hover:bg-blue-100 cursor-pointer rounded">
              <Disc size={32} className="text-gray-600" />
              <span className="text-sm">CD Drive (D:)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
