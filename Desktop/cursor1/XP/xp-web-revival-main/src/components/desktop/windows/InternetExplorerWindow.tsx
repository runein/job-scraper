
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Home, Search, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const InternetExplorerWindow = () => {
  const [url, setUrl] = useState("https://www.google.com.tw");

  return (
    <div className="h-full flex flex-col">
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
      <div className="h-10 bg-gray-200 border-b border-gray-300 flex items-center px-2 gap-1">
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <ArrowLeft size={16} />
        </Button>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <ArrowRight size={16} />
        </Button>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <RotateCcw size={16} />
        </Button>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Home size={16} />
        </Button>
        <div className="w-px h-6 bg-gray-400 mx-1" />
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Search size={16} />
        </Button>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Star size={16} />
        </Button>
      </div>

      {/* Address Bar */}
      <div className="h-8 bg-gray-100 border-b border-gray-300 flex items-center px-2 gap-2">
        <span className="text-xs">Address</span>
        <Globe size={14} />
        <Input 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 h-6 text-xs"
        />
        <Button size="sm" className="h-6 px-3 text-xs">Go</Button>
        <span className="text-xs">Links</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white p-8 flex flex-col items-center justify-center">
        <div className="text-6xl font-bold mb-8 tracking-tight">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
        
        <div className="w-96 mb-8">
          <Input 
            className="w-full h-12 text-lg px-4 border-2 border-gray-300 rounded-full"
            placeholder="Search Google or type a URL"
          />
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="px-6">Google Search</Button>
          <Button variant="outline" className="px-6">I'm Feeling Lucky</Button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-gray-200 border-t border-gray-300 flex items-center px-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
          <span>Done</span>
        </div>
        <div className="ml-auto">Internet</div>
      </div>
    </div>
  );
};
