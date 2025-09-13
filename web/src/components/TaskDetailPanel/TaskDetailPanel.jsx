import { useState } from "react";
import { X, ChevronDown, Plus } from "lucide-react";
import { TAG_COLORS } from "@/data/tasks";

export default function TaskDetailPanel({
  task,
  onClose,
  onSave,
  onPriorityChange,
  onAddTag,
  isLoading,
}) {
  const [selectedTask, setSelectedTask] = useState(task);
  const [showNewTag, setShowNewTag] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  const handleAddTagInternal = () => {
    if (newTagName.trim()) {
      const updatedTags = [...(selectedTask.tags || []), newTagName.trim()];
      const updatedTask = { ...selectedTask, tags: updatedTags };
      setSelectedTask(updatedTask);
      onAddTag(updatedTask); // Propagate change up if needed
      setNewTagName("");
      setShowNewTag(false);
    }
  };

  if (!task) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-[#E0E7FF] p-6 shadow-lg z-30 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-[#111827]">Task Details</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/50 rounded-lg transition-colors"
        >
          <X size={20} className="text-[#4F46E5]" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-[#111827] mb-2">
            {selectedTask.title}
          </h3>
          <p className="text-[#4B5563] text-sm leading-relaxed">
            {selectedTask.description}
          </p>
        </div>

        {selectedTask.image && (
          <div>
            <img
              src={selectedTask.image}
              alt="Task related"
              className="w-full h-40 object-cover rounded-2xl"
            />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Status
            </label>
            <div className="relative">
              <select
                defaultValue={selectedTask.status}
                className="w-full p-3 bg-white border border-[#E5E7EB] rounded-lg appearance-none focus:outline-none focus:border-[#6A70E3]"
              >
                <option>Upcoming</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                size={16}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Due Date
            </label>
            <input
              type="text"
              defaultValue={selectedTask.date}
              className="w-full p-3 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-3">
              Priority
            </label>
            <div className="flex space-x-2">
              {["Low priority", "Medium priority", "High priority"].map(
                (priority) => (
                  <button
                    key={priority}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTask.priority === priority
                        ? "bg-[#6A70E3] text-white"
                        : "bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                    }`}
                    onClick={() => {
                      const updatedTask = { ...selectedTask, priority };
                      setSelectedTask(updatedTask);
                      onPriorityChange(selectedTask.id, priority);
                    }}
                  >
                    {priority.replace(" priority", "")}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-3">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {(selectedTask.tags || []).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: TAG_COLORS[tag]?.bg || "#E0E7FF",
                    color: TAG_COLORS[tag]?.text || "#4F46E5",
                  }}
                >
                  {tag}
                </span>
              ))}
              {showNewTag ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    className="px-2 py-1 border border-[#E5E7EB] rounded text-xs focus:outline-none focus:border-[#6A70E3]"
                    placeholder="New tag"
                    onKeyPress={(e) => e.key === "Enter" && handleAddTagInternal()}
                  />
                  <button
                    onClick={handleAddTagInternal}
                    className="text-xs text-[#6A70E3] hover:underline"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowNewTag(false)}
                    className="text-xs text-[#6B7280] hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="px-3 py-1 border-2 border-dashed border-[#D1D5DB] rounded-full text-sm text-[#6B7280] hover:border-[#6A70E3] hover:text-[#6A70E3] transition-colors"
                  onClick={() => setShowNewTag(true)}
                >
                  <Plus size={12} className="inline mr-1" />
                  Add tag
                </button>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onSave}
          disabled={isLoading}
          className="w-full py-4 rounded-3xl text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-70"
          style={{
            background: "linear-gradient(90deg, #6A70E3, #A8B1F5)",
          }}
        >
          {isLoading ? "Saving..." : "Save Task"}
        </button>
      </div>
    </div>
  );
}
