export const SettingsSidebar = ({ tabs, activeTab, setActiveTab }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
    <nav className="space-y-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
              activeTab === tab.id
                ? "bg-[#6A70E3] text-white"
                : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  </div>
);
