import { X } from "lucide-react";

export default function AddUserModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#111827]">Add Team Member</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Role
            </label>
            <select className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]">
              <option>Select role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>Project Manager</option>
            </select>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-[#E5E7EB] text-[#6B7280] rounded-lg hover:bg-[#F9FAFB] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-[#6A70E3] text-white rounded-lg hover:bg-[#5B63D3] transition-colors"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
