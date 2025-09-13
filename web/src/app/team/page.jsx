"use client";
import { useState } from "react";
import {
  Plus,
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  User,
} from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Carlos Martin",
    role: "Frontend Developer",
    email: "carlos@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    status: "online",
    joinDate: "2023-01-15",
    tasksCompleted: 45,
    activeTasks: 3,
    skills: ["React", "TypeScript", "CSS"],
    projects: ["Website Redesign", "Mobile App"],
  },
  {
    id: 2,
    name: "Alan Carrington",
    role: "UI/UX Designer",
    email: "alan@example.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "away",
    joinDate: "2022-11-20",
    tasksCompleted: 38,
    activeTasks: 2,
    skills: ["Figma", "Adobe XD", "Prototyping"],
    projects: ["Brand Identity", "Website Redesign"],
  },
  {
    id: 3,
    name: "David Goodman",
    role: "Backend Developer",
    email: "david@example.com",
    phone: "+1 (555) 345-6789",
    location: "Seattle, WA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    status: "online",
    joinDate: "2023-03-10",
    tasksCompleted: 52,
    activeTasks: 4,
    skills: ["Node.js", "Python", "PostgreSQL"],
    projects: ["Mobile App", "API Development"],
  },
  {
    id: 4,
    name: "Aashima Shah",
    role: "Project Manager",
    email: "aashima@example.com",
    phone: "+1 (555) 456-7890",
    location: "Austin, TX",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    status: "online",
    joinDate: "2022-08-05",
    tasksCompleted: 67,
    activeTasks: 5,
    skills: ["Agile", "Scrum", "Leadership"],
    projects: ["Website Redesign", "Marketing Campaign"],
  },
];

const STATUS_COLORS = {
  online: { bg: "#D1FAE5", text: "#059669", dot: "#10B981" },
  away: { bg: "#FEF3C7", text: "#D97706", dot: "#F59E0B" },
  offline: { bg: "#F3F4F6", text: "#6B7280", dot: "#9CA3AF" },
};

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const [activeNav, setActiveNav] = useState("team");

  const handleShowProfile = () => {
    console.log("Show profile clicked");
  };

  const filteredMembers = TEAM_MEMBERS.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const MemberCard = ({ member, onClick }) => (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={() => onClick(member)}
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white"
            style={{ backgroundColor: STATUS_COLORS[member.status].dot }}
          ></div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#111827] mb-1">
            {member.name}
          </h3>
          <p className="text-[#6B7280] text-sm mb-2">{member.role}</p>

          <div className="flex items-center space-x-4 text-xs text-[#6B7280] mb-3">
            <div className="flex items-center space-x-1">
              <MapPin size={12} />
              <span>{member.location}</span>
            </div>
            <span
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: STATUS_COLORS[member.status].bg,
                color: STATUS_COLORS[member.status].text,
              }}
            >
              {member.status}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <CheckCircle size={12} className="text-green-500" />
                <span>{member.tasksCompleted} completed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} className="text-orange-500" />
                <span>{member.activeTasks} active</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {member.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-[#E0E7FF] text-[#4F46E5] text-xs rounded"
                >
                  {skill}
                </span>
              ))}
              {member.skills.length > 2 && (
                <span className="px-2 py-1 bg-[#F3F4F6] text-[#6B7280] text-xs rounded">
                  +{member.skills.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MemberProfile = ({ member, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Team Member Profile
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex items-start space-x-6 mb-6">
          <div className="relative">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div
              className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-3 border-white"
              style={{ backgroundColor: STATUS_COLORS[member.status].dot }}
            ></div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              {member.name}
            </h3>
            <p className="text-[#6B7280] text-lg mb-4">{member.role}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#6B7280]" />
                <span className="text-sm text-[#111827]">{member.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#6B7280]" />
                <span className="text-sm text-[#111827]">{member.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-[#6B7280]" />
                <span className="text-sm text-[#111827]">
                  {member.location}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-[#6B7280]" />
                <span className="text-sm text-[#111827]">
                  Joined {member.joinDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-[#F0F2F5] rounded-lg">
            <div className="text-2xl font-bold text-[#111827] mb-1">
              {member.tasksCompleted}
            </div>
            <div className="text-sm text-[#6B7280]">Tasks Completed</div>
          </div>
          <div className="text-center p-4 bg-[#F0F2F5] rounded-lg">
            <div className="text-2xl font-bold text-[#111827] mb-1">
              {member.activeTasks}
            </div>
            <div className="text-sm text-[#6B7280]">Active Tasks</div>
          </div>
          <div className="text-center p-4 bg-[#F0F2F5] rounded-lg">
            <div className="text-2xl font-bold text-[#111827] mb-1">
              {member.projects.length}
            </div>
            <div className="text-sm text-[#6B7280]">Projects</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-[#111827] mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#E0E7FF] text-[#4F46E5] text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#111827] mb-3">
            Current Projects
          </h4>
          <div className="space-y-2">
            {member.projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg"
              >
                <span className="font-medium text-[#111827]">{project}</span>
                <span className="text-sm text-[#6B7280]">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AddMemberModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#111827]">Add Team Member</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            ×
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
              <option>DevOps Engineer</option>
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
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Team</h1>
              <p className="text-[#6B7280]">
                Manage your team members and their roles
              </p>
            </div>
            <button
              onClick={() => setShowAddMember(true)}
              className="px-6 py-3 bg-[#6A70E3] text-white rounded-2xl font-medium flex items-center space-x-2 hover:bg-[#5B63D3] transition-colors"
            >
              <Plus size={20} />
              <span>Add Member</span>
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white border border-[#E5E7EB] rounded-2xl w-80 focus:outline-none focus:border-[#6A70E3] transition-colors"
              />
            </div>

            <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                <span>
                  {TEAM_MEMBERS.filter((m) => m.status === "online").length}{" "}
                  Online
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
                <span>
                  {TEAM_MEMBERS.filter((m) => m.status === "away").length} Away
                </span>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onClick={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Member Profile Modal */}
      {selectedMember && (
        <MemberProfile
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {/* Add Member Modal */}
      {showAddMember && (
        <AddMemberModal onClose={() => setShowAddMember(false)} />
      )}
    </div>
  );
}
