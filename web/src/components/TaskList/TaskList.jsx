import { Plus, Search } from "lucide-react";
import TaskItem from "@/components/TaskList/TaskItem";

export default function TaskList({
  tasks,
  onTaskClick,
  onShowProfile,
  onAddTask,
  searchQuery,
  setSearchQuery,
  filterBy,
  setFilterBy,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="px-6">
      {/* Task List Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#111827]">
          {tasks.length} Active Tasks
        </h2>

        <button
          className="px-6 py-3 rounded-3xl text-white font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(90deg, #6A70E3, #A8B1F5)",
          }}
          onClick={onAddTask}
        >
          <Plus size={20} />
          <span>Add New</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-3 bg-white border border-[#E5E7EB] rounded-3xl focus:outline-none focus:border-[#6A70E3] transition-colors"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
            size={20}
          />
        </div>

        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="px-4 py-3 bg-white border border-[#E5E7EB] rounded-3xl text-[#6B7280] hover:bg-[#F9FAFB] transition-colors focus:outline-none focus:border-[#6A70E3]"
        >
          <option value="All">All Items</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Upcoming">Upcoming</option>
          <option value="High priority">High Priority</option>
          <option value="Medium priority">Medium Priority</option>
          <option value="Low priority">Low Priority</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Research">Research</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 bg-white border border-[#E5E7EB] rounded-3xl text-[#6B7280] hover:bg-[#F9FAFB] transition-colors focus:outline-none focus:border-[#6A70E3]"
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="priority">Sort by Priority</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      {/* Task Items */}
      <div className="space-y-4 pb-8">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskClick={onTaskClick}
            onShowProfile={onShowProfile}
          />
        ))}
      </div>
    </section>
  );
}
