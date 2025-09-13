import { Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      <div>
        <p className="text-[#6B7280] text-sm mb-1">Manage all your tasks</p>
        <h1 className="text-2xl font-semibold text-[#111827]">
          Project Summary
        </h1>
      </div>

      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-2xl text-[#6B7280] text-sm hover:bg-[#F9FAFB] transition-colors">
          Quick
        </button>
        <button className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-2xl text-[#6B7280] text-sm hover:bg-[#F9FAFB] transition-colors flex items-center space-x-2">
          <Calendar size={16} />
          <span>Apr 30, 2024</span>
        </button>
      </div>
    </header>
  );
}
