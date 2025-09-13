import {
  Home,
  CheckSquare,
  FolderOpen,
  Calendar,
  Users,
} from "lucide-react";

const navItems = [
  { key: "home", icon: Home },
  { key: "tasks", icon: CheckSquare },
  { key: "projects", icon: FolderOpen },
  { key: "calendar", icon: Calendar },
  { key: "team", icon: Users },
];

export default function MobileNav({ activeNav, setActiveNav }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1E293B] flex justify-around py-3 z-20">
      {navItems.map(({ key, icon: Icon }) => (
        <button
          key={key}
          className={`p-3 rounded-lg transition-colors ${
            activeNav === key ? "text-[#6A70E3]" : "text-white/70"
          }`}
          onClick={() => setActiveNav(key)}
        >
          <Icon size={24} />
        </button>
      ))}
    </nav>
  );
}
