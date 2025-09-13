import { Plus } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/tasks";

export default function MembersPanel({ onAddUser, onShowProfile }) {
  return (
    <section className="px-6 mb-8">
      <div
        className="bg-white p-4 rounded-3xl flex items-center justify-between"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)" }}
      >
        <div>
          <h3 className="text-[#111827] font-medium">Members</h3>
          <p className="text-[#6B7280] text-sm">4 users</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2">
            {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
              <img
                key={idx}
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                onClick={() => onShowProfile(member)}
              />
            ))}
          </div>

          <button
            className="w-10 h-10 bg-[#6A70E3] rounded-full flex items-center justify-center text-white hover:bg-[#5B63D3] transition-colors"
            onClick={onAddUser}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
