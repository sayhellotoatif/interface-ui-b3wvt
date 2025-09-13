import {
  Home,
  CheckSquare,
  FolderOpen,
  Calendar,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { key: "home", icon: Home, label: "Dashboard" },
  { key: "tasks", icon: CheckSquare, label: "Tasks" },
  { key: "projects", icon: FolderOpen, label: "Projects" },
  { key: "calendar", icon: Calendar, label: "Calendar" },
  { key: "team", icon: Users, label: "Team" },
  { key: "settings", icon: Settings, label: "Settings" },
];

export default function Sidebar({ activeNav, setActiveNav, onShowProfile }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-[#1E293B] flex flex-col items-center py-6 z-20 hidden md:flex">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-[#1E293B] font-bold text-lg">S</span>
        </div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-6 flex-1">
        {navItems.map(({ key, icon: Icon, label }) => (
          <div key={key} className="relative">
            {activeNav === key && (
              <div className="absolute -left-3 top-0 w-1 h-6 bg-[#6A70E3] rounded-r"></div>
            )}
            <button
              className="p-3 rounded-lg text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
              onClick={() => setActiveNav(key)}
              aria-label={label}
            >
              <Icon size={24} />
            </button>
          </div>
        ))}
      </nav>

      {/* Profile Avatar */}
      <div className="mt-auto">
        <img
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face"
          alt="Aashima Shah"
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={onShowProfile}
        />
      </div>
    </aside>
  );
}
