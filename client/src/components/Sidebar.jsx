import React, { useState, useEffect } from "react";
import { BotIcon, PlusCircle, Settings2 } from "lucide-react";

const Sidebar = ({ onNewChat, conversations = [], onSelectConversation }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(conversations);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(conversations);
    } else {
      setFiltered(
        conversations.filter((c) =>
          c.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, conversations]);

  return (
    <div className="w-[280px] bg-[#111111] text-white flex flex-col justify-between p-4 border-r border-gray-800">
      <div>
        <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
          <BotIcon className="text-orange-500" />
          <span>AI Companion</span>
        </div>

        <button
          onClick={onNewChat}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-md text-sm font-medium mb-4"
        >
          <PlusCircle size={18} />
          New Conversation
        </button>

        <input
          type="text"
          placeholder="Search conversations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-[#1c1c1c] text-sm border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500 mb-4"
        />

        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
          {filtered.length === 0 ? (
            <div className="text-sm text-gray-500">No conversations found.</div>
          ) : (
            filtered.map((conv) => (
              <div
                key={conv._id}
                onClick={() => onSelectConversation(conv)}
                className="bg-[#1c1c1c] rounded-md px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-[#2a2a2a]"
              >
                <div className="font-medium truncate">{conv.title}</div>
                <div className="text-xs text-gray-500">{new Date(conv.updatedAt).toLocaleDateString()}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>v1.0.0</span>
        <Settings2 size={16} />
      </div>
    </div>
  );
};

export default Sidebar;
