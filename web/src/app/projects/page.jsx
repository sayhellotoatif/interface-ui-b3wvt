"use client";
import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Grid3X3,
  List,
  MoreVertical,
  Calendar,
  Users,
} from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";

const PROJECTS_DATA = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of the company website with modern design",
    status: "Active",
    progress: 75,
    dueDate: "2024-05-15",
    teamMembers: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    ],
    taskCount: 12,
    completedTasks: 9,
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native mobile application for iOS and Android platforms",
    status: "Planning",
    progress: 25,
    dueDate: "2024-06-30",
    teamMembers: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    ],
    taskCount: 8,
    completedTasks: 2,
  },
  {
    id: 3,
    name: "Brand Identity",
    description:
      "Complete brand identity design including logo, colors, and guidelines",
    status: "Completed",
    progress: 100,
    dueDate: "2024-04-15",
    teamMembers: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    ],
    taskCount: 6,
    completedTasks: 6,
  },
  {
    id: 4,
    name: "Marketing Campaign",
    description: "Q2 digital marketing campaign across social media platforms",
    status: "Active",
    progress: 60,
    dueDate: "2024-05-30",
    teamMembers: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    ],
    taskCount: 15,
    completedTasks: 9,
  },
];

const STATUS_COLORS = {
  Active: { bg: "#FEF9C3", text: "#F59E0B" },
  Planning: { bg: "#E0E7FF", text: "#4F46E5" },
  Completed: { bg: "#D1FAE5", text: "#059669" },
  "On Hold": { bg: "#FEE2E2", text: "#DC2626" },
};

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [activeNav, setActiveNav] = useState("projects");

  const handleShowProfile = () => {
    console.log("Show profile clicked");
  };

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#111827] mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-[#6B7280] mb-3">{project.description}</p>
        </div>
        <button className="p-2 hover:bg-[#F9FAFB] rounded-lg">
          <MoreVertical size={16} className="text-[#6B7280]" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: STATUS_COLORS[project.status]?.bg,
            color: STATUS_COLORS[project.status]?.text,
          }}
        >
          {project.status}
        </span>
        <div className="flex items-center space-x-4 text-xs text-[#6B7280]">
          <div className="flex items-center space-x-1">
            <Calendar size={12} />
            <span>{project.dueDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>
              {project.completedTasks}/{project.taskCount} tasks
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-[#6B7280]">Progress</span>
          <span className="font-medium text-[#111827]">
            {project.progress}%
          </span>
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-full h-2">
          <div
            className="bg-[#6A70E3] h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.teamMembers.slice(0, 4).map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt="Team member"
              className="w-8 h-8 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
            />
          ))}
          {project.teamMembers.length > 4 && (
            <div className="w-8 h-8 bg-[#6B7280] rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs text-white">
                +{project.teamMembers.length - 4}
              </span>
            </div>
          )}
        </div>
        <button className="text-[#6A70E3] text-sm font-medium hover:underline">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-inter">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onShowProfile={handleShowProfile}
      />

      <main className="md:ml-20 flex-1">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                Projects
              </h1>
              <p className="text-[#6B7280]">
                Manage and track your project progress
              </p>
            </div>
            <button className="px-6 py-3 bg-[#6A70E3] text-white rounded-2xl font-medium flex items-center space-x-2 hover:bg-[#5B63D3] transition-colors">
              <Plus size={20} />
              <span>New Project</span>
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white border border-[#E5E7EB] rounded-2xl w-80 focus:outline-none focus:border-[#6A70E3] transition-colors"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-white border border-[#E5E7EB] rounded-2xl focus:outline-none focus:border-[#6A70E3] transition-colors"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Planning">Planning</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 bg-white rounded-2xl p-1 border border-[#E5E7EB]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#6A70E3] text-white"
                    : "text-[#6B7280] hover:bg-[#F9FAFB]"
                }`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === "list"
                    ? "bg-[#6A70E3] text-white"
                    : "text-[#6B7280] hover:bg-[#F9FAFB]"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-4"
            }`}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-[#6B7280]" />
              </div>
              <h3 className="text-lg font-medium text-[#111827] mb-2">
                No projects found
              </h3>
              <p className="text-[#6B7280]">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}
