
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export const NotepadWindow = () => {
  const [content, setContent] = useState("");

  return (
    <div className="h-full flex flex-col">
      {/* Menu Bar */}
      <div className="h-6 bg-gray-100 border-b border-gray-300 flex items-center px-2 text-xs">
        <span className="px-2 hover:bg-blue-200">File</span>
        <span className="px-2 hover:bg-blue-200">Edit</span>
        <span className="px-2 hover:bg-blue-200">Format</span>
        <span className="px-2 hover:bg-blue-200">View</span>
        <span className="px-2 hover:bg-blue-200">Help</span>
      </div>

      {/* Text Area */}
      <div className="flex-1 p-0">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full border-0 rounded-none resize-none font-mono text-sm p-2"
          placeholder="Type your text here..."
        />
      </div>
    </div>
  );
};
