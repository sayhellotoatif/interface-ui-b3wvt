import { Snowflake, ClipboardList, Sun, CheckCircle } from "lucide-react";

export default function SummaryCards({ stats, onCardClick }) {
  const cardData = [
    {
      key: "icedbox",
      count: stats.icedbox,
      label: "Icedbox",
      icon: Snowflake,
      gradient: "linear-gradient(135deg, #A8B1F5, #6A70E3)",
    },
    {
      key: "upcoming",
      count: stats.upcoming,
      label: "Upcoming Tasks",
      icon: ClipboardList,
      gradient: "linear-gradient(135deg, #64DCFA, #40B1E0)",
    },
    {
      key: "inProgress",
      count: stats.inProgress,
      label: "In Progress",
      icon: Sun,
      gradient: "linear-gradient(135deg, #FFD28C, #FFAB48)",
    },
    {
      key: "completed",
      count: stats.completed,
      label: "Completed tasks",
      icon: CheckCircle,
      gradient: "linear-gradient(135deg, #E8A8F5, #C66AE3)",
    },
  ];

  return (
    <section className="px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cardData.map(({ key, count, label, icon: Icon, gradient }) => (
          <div
            key={key}
            className="p-6 rounded-3xl text-white cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: gradient }}
            onClick={() => onCardClick(key)}
          >
            <div className="flex items-center justify-between mb-4">
              <Icon size={32} />
            </div>
            <div className="text-2xl font-semibold mb-1">{count}</div>
            <div className="text-sm opacity-90">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
