import { X } from "lucide-react";
import { SAMPLE_DATA } from "@/data/tasks";

export default function UserProfileModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#111827]">User Profile</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-center mb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-[#111827]">{user.name}</h3>
          <p className="text-[#6B7280]">{user.role}</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
            <span className="text-sm font-medium text-[#111827]">
              Tasks Assigned
            </span>
            <span className="text-sm text-[#6B7280]">
              {
                SAMPLE_DATA.tasks.filter((t) => t.assignee.name === user.name)
                  .length
              }
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
            <span className="text-sm font-medium text-[#111827]">
              Tasks Completed
            </span>
            <span className="text-sm text-[#6B7280]">
              {
                SAMPLE_DATA.tasks.filter(
                  (t) =>
                    t.assignee.name === user.name && t.status === "Completed"
                ).length
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
