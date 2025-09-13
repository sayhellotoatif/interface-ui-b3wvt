export const NotificationSettings = ({ notifications, setNotifications }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Notification Preferences
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg">
          <div>
            <h4 className="font-medium text-[#111827]">
              Email Notifications
            </h4>
            <p className="text-sm text-[#6B7280]">
              Receive notifications via email
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  email: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6A70E3]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg">
          <div>
            <h4 className="font-medium text-[#111827]">Push Notifications</h4>
            <p className="text-sm text-[#6B7280]">
              Receive push notifications on your devices
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={(e) =>
                setNotifications({ ...notifications, push: e.target.checked })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6A70E3]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-lg">
          <div>
            <h4 className="font-medium text-[#111827]">
              Desktop Notifications
            </h4>
            <p className="text-sm text-[#6B7280]">
              Show notifications on your desktop
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.desktop}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  desktop: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6A70E3]"></div>
          </label>
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-medium text-[#111827] mb-3">
        Activity Notifications
      </h4>
      <div className="space-y-3">
        {[
          {
            key: "taskUpdates",
            label: "Task Updates",
            desc: "Get notified when tasks are updated",
          },
          {
            key: "projectUpdates",
            label: "Project Updates",
            desc: "Get notified about project changes",
          },
          {
            key: "weeklyReport",
            label: "Weekly Reports",
            desc: "Receive weekly activity summaries",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between py-2"
          >
            <div>
              <p className="text-sm font-medium text-[#111827]">
                {item.label}
              </p>
              <p className="text-xs text-[#6B7280]">{item.desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications[item.key]}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    [item.key]: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6A70E3]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>
);
