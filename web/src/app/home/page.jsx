"use client";
import { useState } from "react";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
} from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";

const ACTIVITY_DATA = [
  {
    id: 1,
    type: "task_completed",
    user: {
      name: "Carlos Martin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    action: "completed task",
    target: "Develop the structure and content of the new site",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "user_joined",
    user: {
      name: "Alan Carrington",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    action: "joined the project",
    target: "",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "task_created",
    user: {
      name: "Aashima Shah",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    action: "created new task",
    target: "Getting user feedback",
    time: "1 day ago",
  },
];

const QUICK_STATS = [
  { label: "Projects", value: "12", change: "+2", trend: "up" },
  { label: "Active Tasks", value: "6", change: "+1", trend: "up" },
  { label: "Team Members", value: "4", change: "0", trend: "stable" },
  { label: "Completion Rate", value: "85%", change: "+5%", trend: "up" },
];

export default function HomePage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");
  const [activeNav, setActiveNav] = useState("home");

  const handleShowProfile = () => {
    console.log("Show profile clicked");
  };

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              Welcome back, Aashima!
            </h1>
            <p className="text-[#6B7280]">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {QUICK_STATS.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#6B7280] text-sm font-medium">
                    {stat.label}
                  </h3>
                  <div
                    className={`flex items-center text-xs ${
                      stat.trend === "up"
                        ? "text-green-500"
                        : stat.trend === "down"
                          ? "text-red-500"
                          : "text-[#6B7280]"
                    }`}
                  >
                    <TrendingUp size={14} className="mr-1" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#111827]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#111827]">
                  Recent Activity
                </h2>
                <select
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="text-sm border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:border-[#6A70E3]"
                >
                  <option value="day">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>

              <div className="space-y-4">
                {ACTIVITY_DATA.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#F9FAFB]"
                  >
                    <img
                      src={activity.user.avatar}
                      alt={activity.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-[#111827]">
                        <span className="font-medium">
                          {activity.user.name}
                        </span>{" "}
                        {activity.action}
                        {activity.target && (
                          <span className="font-medium">
                            {" "}
                            "{activity.target}"
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-[#6B7280]">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#111827] mb-6">
                Today's Schedule
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-[#FEF9C3] rounded-lg">
                  <Clock className="text-[#F59E0B]" size={20} />
                  <div>
                    <p className="text-sm font-medium text-[#111827]">
                      Team Standup
                    </p>
                    <p className="text-xs text-[#6B7280]">9:00 AM - 9:30 AM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-[#E0E7FF] rounded-lg">
                  <Users className="text-[#4F46E5]" size={20} />
                  <div>
                    <p className="text-sm font-medium text-[#111827]">
                      Project Review
                    </p>
                    <p className="text-xs text-[#6B7280]">2:00 PM - 3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-[#D1FAE5] rounded-lg">
                  <CheckCircle className="text-[#059669]" size={20} />
                  <div>
                    <p className="text-sm font-medium text-[#111827]">
                      Sprint Planning
                    </p>
                    <p className="text-xs text-[#6B7280]">4:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 text-[#6A70E3] text-sm font-medium hover:bg-[#F0F2F5] rounded-lg transition-colors">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}
