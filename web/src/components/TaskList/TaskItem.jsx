import StatusBadge from "@/components/TaskList/StatusBadge";
import { TAG_COLORS, PRIORITY_COLORS } from "@/data/tasks";

export default function TaskItem({ task, onTaskClick, onShowProfile }) {
  return (
    <div
      className="bg-white p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-md"
      onClick={() => onTaskClick(task)}
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-[#6B7280]">#{task.id}</span>
        <StatusBadge status={task.status} />
      </div>

      <h3 className="text-[#111827] font-medium text-sm mb-3 leading-relaxed">
        {task.title}
      </h3>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={task.assignee.avatar}
            alt={task.assignee.name}
            className="w-6 h-6 rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onShowProfile(task.assignee);
            }}
          />
          <span className="text-xs text-[#6B7280]">{task.assignee.name}</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs text-[#6B7280]">{task.date}</span>
          <span
            className="px-2 py-1 rounded text-xs"
            style={{
              backgroundColor: TAG_COLORS[task.tag]?.bg || "#F3F4F6",
              color: TAG_COLORS[task.tag]?.text || "#6B7280",
            }}
          >
            {task.tag}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <span
          className="text-xs font-medium"
          style={{ color: PRIORITY_COLORS[task.priority] }}
        >
          {task.priority}
        </span>
        <span className="text-xs text-[#9CA3AF]">
          Created on {task.created}
        </span>
      </div>
    </div>
  );
}
