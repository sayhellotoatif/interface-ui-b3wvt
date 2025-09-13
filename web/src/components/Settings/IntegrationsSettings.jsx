import { IntegrationIcons } from "@/components/Settings/IntegrationIcons";

export const IntegrationsSettings = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Integrations
      </h3>
      <p className="text-[#6B7280] mb-6">
        Connect your favorite tools to streamline your workflow
      </p>

      <div className="space-y-4">
        {[
          {
            name: "Slack",
            desc: "Get notifications in your Slack workspace and manage tasks from Slack channels",
            connected: true,
            icon: "slack",
            features: [
              "Real-time notifications",
              "Create tasks from messages",
              "Status updates",
            ],
          },
          {
            name: "Google Calendar",
            desc: "Sync your tasks and deadlines with Google Calendar for better time management",
            connected: false,
            icon: "google",
            features: [
              "Two-way sync",
              "Automatic event creation",
              "Deadline reminders",
            ],
          },
          {
            name: "GitHub",
            desc: "Link your repositories and track commits against project tasks",
            connected: true,
            icon: "github",
            features: [
              "Commit tracking",
              "PR status updates",
              "Issue integration",
            ],
          },
          {
            name: "Figma",
            desc: "Import designs and assets directly into your project tasks",
            connected: false,
            icon: "figma",
            features: [
              "Design file embedding",
              "Version tracking",
              "Comment sync",
            ],
          },
          {
            name: "Zoom",
            desc: "Create and join meetings directly from tasks and project pages",
            connected: false,
            icon: "zoom",
            features: [
              "One-click meetings",
              "Recording links",
              "Attendance tracking",
            ],
          },
        ].map((integration) => (
          <div
            key={integration.name}
            className="p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] hover:border-[#6A70E3] transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {IntegrationIcons[integration.icon]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-[#111827]">
                      {integration.name}
                    </h4>
                    {integration.connected && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Connected
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#6B7280] mb-3">
                    {integration.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {integration.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-white text-[#6B7280] text-xs rounded border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  integration.connected
                    ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-200"
                    : "bg-[#6A70E3] text-white hover:bg-[#5B63D3] shadow-sm"
                }`}
              >
                {integration.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
