"use client";
import { useState } from "react";

// Import custom hook
import { useTaskManager } from "@/hooks/useTaskManager";

// Import refactored components
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";
import Toast from "@/components/Toast/Toast";
import Header from "@/components/Header/Header";
import SummaryCards from "@/components/SummaryCards/SummaryCards";
import MembersPanel from "@/components/MembersPanel/MembersPanel";
import TaskList from "@/components/TaskList/TaskList";
import TaskDetailPanel from "@/components/TaskDetailPanel/TaskDetailPanel";
import SummaryModal from "@/components/Modals/SummaryModal";
import UserProfileModal from "@/components/Modals/UserProfileModal";
import AddUserModal from "@/components/Modals/AddUserModal";

export default function ProjectDashboard() {
  const [activeNav, setActiveNav] = useState("tasks");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(null);

  const {
    searchQuery,
    setSearchQuery,
    filterBy,
    setFilterBy,
    sortBy,
    setSortBy,
    filteredTasks,
    stats,
  } = useTaskManager();

  const handleSaveTask = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePriorityChange = (taskId, newPriority) => {
    console.log(`Changing priority for task ${taskId} to ${newPriority}`);
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask({ ...selectedTask, priority: newPriority });
    }
  };

  const handleAddTag = (updatedTask) => {
    if (selectedTask && selectedTask.id === updatedTask.id) {
      setSelectedTask(updatedTask);
    }
  };

  const handleShowProfile = (user) => {
    const profileUser = user || {
      name: "Aashima Shah",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face",
      role: "Project Manager",
    };
    setShowUserProfile(profileUser);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-inter">
      <Toast message="Task saved successfully!" show={showToast} />
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onShowProfile={() => handleShowProfile(null)}
      />

      <main className="md:ml-20 flex-1">
        <div className="flex">
          <div
            className={`flex-1 transition-all duration-300 ${
              selectedTask ? "md:pr-80" : ""
            }`}
          >
            <Header />
            <SummaryCards stats={stats} onCardClick={setShowModal} />
            <MembersPanel
              onAddUser={() => setShowAddUser(true)}
              onShowProfile={setShowUserProfile}
            />
            <TaskList
              tasks={filteredTasks}
              onTaskClick={setSelectedTask}
              onShowProfile={setShowUserProfile}
              onAddTask={() => {
                /* setShowTaskForm(true) logic here */
              }}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {selectedTask && (
            <TaskDetailPanel
              task={selectedTask}
              onClose={() => setSelectedTask(null)}
              onSave={handleSaveTask}
              onPriorityChange={handlePriorityChange}
              onAddTag={handleAddTag}
              isLoading={isLoading}
            />
          )}
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />

      {showModal && (
        <SummaryModal type={showModal} onClose={() => setShowModal(null)} />
      )}
      {showUserProfile && (
        <UserProfileModal
          user={showUserProfile}
          onClose={() => setShowUserProfile(null)}
        />
      )}
      {showAddUser && <AddUserModal onClose={() => setShowAddUser(false)} />}
    </div>
  );
}
