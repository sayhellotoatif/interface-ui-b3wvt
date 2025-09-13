import {
  X,
  Share2,
  Printer,
  Calendar,
  User,
  Clock,
  AlertCircle,
  CheckCircle,
  Archive,
  TrendingUp,
  BarChart3,
  Download,
  Filter,
} from "lucide-react";
import { SAMPLE_DATA } from "@/data/tasks";

export default function SummaryModal({ type, onClose }) {
  const handleShare = async () => {
    const content = getModalContent();
    if (navigator.share) {
      try {
        await navigator.share({
          title: content.title,
          text: `${content.description}\n\nTotal items: ${content.items.length}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      const shareText = `${content.title}\n${content.description}\n\nItems:\n${content.items.map((item) => `• ${typeof item === "string" ? item : item.title}`).join("\n")}`;
      navigator.clipboard.writeText(shareText);
      alert("Summary copied to clipboard!");
    }
  };

  const handlePrint = () => {
    const content = getModalContent();
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>${content.title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #111827; border-bottom: 2px solid #6A70E3; padding-bottom: 10px; }
            .description { color: #6B7280; margin-bottom: 20px; }
            .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
            .stat-card { border: 1px solid #E5E7EB; padding: 15px; border-radius: 8px; }
            .item { padding: 10px; border: 1px solid #E5E7EB; margin: 5px 0; border-radius: 5px; }
            .priority-high { border-left: 4px solid #EF4444; }
            .priority-medium { border-left: 4px solid #F59E0B; }
            .priority-low { border-left: 4px solid #10B981; }
          </style>
        </head>
        <body>
          <h1>${content.title}</h1>
          <p class="description">${content.description}</p>
          <div class="stats">
            <div class="stat-card">
              <strong>Total Items:</strong> ${content.items.length}
            </div>
            <div class="stat-card">
              <strong>Generated:</strong> ${new Date().toLocaleDateString()}
            </div>
          </div>
          <div>
            ${content.items
              .map(
                (item, index) => `
              <div class="item ${typeof item === "object" && item.priority ? `priority-${item.priority.toLowerCase()}` : ""}">
                <strong>${typeof item === "string" ? item : item.title}</strong>
                ${typeof item === "object" && item.assignee ? `<br><small>Assigned to: ${item.assignee}</small>` : ""}
                ${typeof item === "object" && item.dueDate ? `<br><small>Due: ${item.dueDate}</small>` : ""}
              </div>
            `,
              )
              .join("")}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleExport = () => {
    const content = getModalContent();
    const csvContent = [
      ["Title", "Status", "Priority", "Assignee", "Due Date"],
      ...content.items.map((item) => [
        typeof item === "string" ? item : item.title,
        typeof item === "object" ? item.status : type,
        typeof item === "object" ? item.priority : "Medium",
        typeof item === "object" ? item.assignee : "Unassigned",
        typeof item === "object" ? item.dueDate : "No date set",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${content.title.replace(/\s+/g, "_").toLowerCase()}_export.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getModalContent = () => {
    switch (type) {
      case "icedbox":
        return {
          title: "Icedbox Items",
          description: "Tasks and items currently on hold or in the backlog",
          icon: <Archive className="text-[#6B7280]" size={24} />,
          color: "bg-gray-100",
          items: [
            {
              title: "Legacy system migration",
              assignee: "Carlos Martin",
              priority: "Low",
              dueDate: "Q2 2024",
              status: "On Hold",
            },
            {
              title: "Performance optimization research",
              assignee: "Unassigned",
              priority: "Medium",
              dueDate: "TBD",
              status: "Backlog",
            },
            {
              title: "Security audit compliance",
              assignee: "David Goodman",
              priority: "High",
              dueDate: "Dec 2024",
              status: "Pending",
            },
            {
              title: "Documentation update project",
              assignee: "Alan Carrington",
              priority: "Low",
              dueDate: "Q1 2025",
              status: "Planning",
            },
          ],
          stats: {
            total: 4,
            highPriority: 1,
            avgTimeInIcebox: "45 days",
          },
        };
      case "upcoming":
        return {
          title: "Upcoming Tasks",
          description: "Tasks scheduled to start in the next 7 days",
          icon: <Calendar className="text-[#F59E0B]" size={24} />,
          color: "bg-yellow-100",
          items: SAMPLE_DATA.tasks
            .filter((t) => t.status === "Upcoming")
            .map((t) => ({
              title: t.title,
              assignee: t.assignee,
              priority: t.priority,
              dueDate: t.dueDate,
              status: t.status,
            })),
          stats: {
            total: SAMPLE_DATA.tasks.filter((t) => t.status === "Upcoming")
              .length,
            thisWeek: 3,
            avgLeadTime: "2.5 days",
          },
        };
      case "inProgress":
        return {
          title: "In Progress Tasks",
          description: "Tasks currently being worked on by team members",
          icon: <TrendingUp className="text-[#6A70E3]" size={24} />,
          color: "bg-blue-100",
          items: SAMPLE_DATA.tasks
            .filter((t) => t.status === "In Progress")
            .map((t) => ({
              title: t.title,
              assignee: t.assignee,
              priority: t.priority,
              dueDate: t.dueDate,
              status: t.status,
              progress: Math.floor(Math.random() * 80) + 10, // Mock progress
            })),
          stats: {
            total: SAMPLE_DATA.tasks.filter((t) => t.status === "In Progress")
              .length,
            avgProgress: "68%",
            blockedTasks: 1,
          },
        };
      case "completed":
        return {
          title: "Completed Tasks",
          description: "Tasks successfully completed in the last 30 days",
          icon: <CheckCircle className="text-[#059669]" size={24} />,
          color: "bg-green-100",
          items: SAMPLE_DATA.tasks
            .filter((t) => t.status === "Completed")
            .map((t) => ({
              title: t.title,
              assignee: t.assignee,
              priority: t.priority,
              dueDate: t.dueDate,
              status: t.status,
              completedDate: new Date(
                Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
              ).toLocaleDateString(),
            })),
          stats: {
            total: SAMPLE_DATA.tasks.filter((t) => t.status === "Completed")
              .length,
            thisMonth: 8,
            avgCompletionTime: "4.2 days",
          },
        };
      default:
        return {
          title: "",
          description: "",
          items: [],
          icon: null,
          color: "",
          stats: {},
        };
    }
  };

  const content = getModalContent();

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${content.color}`}>
              {content.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">
                {content.title}
              </h2>
              <p className="text-[#6B7280] text-sm">{content.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
              title="Share"
            >
              <Share2 size={20} className="text-[#6B7280]" />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
              title="Print"
            >
              <Printer size={20} className="text-[#6B7280]" />
            </button>
            <button
              onClick={handleExport}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
              title="Export CSV"
            >
              <Download size={20} className="text-[#6B7280]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="p-6 bg-[#F9FAFB] border-b border-[#E5E7EB]">
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(content.stats).map(([key, value]) => (
              <div key={key} className="bg-white p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <BarChart3 size={16} className="text-[#6A70E3]" />
                  <span className="text-sm font-medium text-[#111827] capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </div>
                <div className="text-2xl font-bold text-[#111827]">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {content.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-lg p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-[#111827]">
                        {typeof item === "string" ? item : item.title}
                      </h4>
                      {typeof item === "object" && item.priority && (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(item.priority)}`}
                        >
                          {item.priority}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-[#6B7280]">
                      {typeof item === "object" && item.assignee && (
                        <div className="flex items-center space-x-2">
                          <User size={14} />
                          <span>{item.assignee}</span>
                        </div>
                      )}
                      {typeof item === "object" && item.dueDate && (
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{item.dueDate}</span>
                        </div>
                      )}
                      {typeof item === "object" && item.completedDate && (
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} />
                          <span>Completed: {item.completedDate}</span>
                        </div>
                      )}
                    </div>

                    {/* Progress bar for in-progress items */}
                    {typeof item === "object" && item.progress && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-[#6B7280]">Progress</span>
                          <span className="font-medium text-[#111827]">
                            {item.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                          <div
                            className="bg-[#6A70E3] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Status indicator */}
                  {typeof item === "object" && item.status && (
                    <div className="ml-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.status === "Completed"
                            ? "bg-green-500"
                            : item.status === "In Progress"
                              ? "bg-blue-500"
                              : item.status === "Upcoming"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {content.items.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={24} className="text-[#6B7280]" />
              </div>
              <h3 className="text-lg font-medium text-[#111827] mb-2">
                No items found
              </h3>
              <p className="text-[#6B7280]">
                There are currently no items in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
