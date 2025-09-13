import { STATUS_COLORS } from "@/data/tasks";

export default function StatusBadge({ status }) {
  const colors = STATUS_COLORS[status] || { bg: "#F3F4F6", text: "#6B7280" };
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {status}
    </span>
  );
}
