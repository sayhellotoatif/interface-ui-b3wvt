"use client";
import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Save,
} from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileNav from "@/components/MobileNav/MobileNav";
import { LoadingBar } from "@/components/Settings/LoadingBar";
import { ProfileSettings } from "@/components/Settings/ProfileSettings";
import { NotificationSettings } from "@/components/Settings/NotificationSettings";
import { SecuritySettings } from "@/components/Settings/SecuritySettings";
import { DataSettings } from "@/components/Settings/DataSettings";
import { AppearanceSettings } from "@/components/Settings/AppearanceSettings";
import { IntegrationsSettings } from "@/components/Settings/IntegrationsSettings";
import { SettingsSidebar } from "@/components/Settings/SettingsSidebar";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [activeNav, setActiveNav] = useState("settings");
  const [currentTheme, setCurrentTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#6A70E3");
  const [savingProgress, setSavingProgress] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    desktop: true,
    taskUpdates: true,
    projectUpdates: false,
    weeklyReport: true,
  });

  const [profile, setProfile] = useState({
    name: "Aashima Shah",
    email: "aashima@example.com",
    phone: "+1 (555) 456-7890",
    location: "Austin, TX",
    timezone: "America/Chicago",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  });

  const handleShowProfile = () => {
    console.log("Show profile clicked");
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    setSavingProgress(0);

    const interval = setInterval(() => {
      setSavingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSaving(false);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const handleColorChange = (color) => {
    setPrimaryColor(color);
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--primary-color", color);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "data", label: "Data & Privacy", icon: Database },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Globe },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings profile={profile} setProfile={setProfile} />;
      case "notifications":
        return (
          <NotificationSettings
            notifications={notifications}
            setNotifications={setNotifications}
          />
        );
      case "security":
        return (
          <SecuritySettings
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        );
      case "data":
        return <DataSettings />;
      case "appearance":
        return (
          <AppearanceSettings
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
            primaryColor={primaryColor}
            handleColorChange={handleColorChange}
          />
        );
      case "integrations":
        return <IntegrationsSettings />;
      default:
        return <ProfileSettings profile={profile} setProfile={setProfile} />;
    }
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                Settings
              </h1>
              <p className="text-[#6B7280]">
                Manage your account settings and preferences
              </p>
            </div>
            <button
              onClick={handleSaveSettings}
              disabled={isSaving}
              className="px-6 py-3 bg-[#6A70E3] text-white rounded-2xl font-medium flex items-center space-x-2 hover:bg-[#5B63D3] transition-colors disabled:opacity-50"
            >
              <Save size={20} />
              <span>{isSaving ? "Saving..." : "Save Changes"}</span>
            </button>
          </div>

          {isSaving && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#111827]">
                  Saving settings...
                </span>
                <span className="text-sm text-[#6B7280]">
                  {savingProgress}%
                </span>
              </div>
              <LoadingBar progress={savingProgress} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <SettingsSidebar
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>

      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}
