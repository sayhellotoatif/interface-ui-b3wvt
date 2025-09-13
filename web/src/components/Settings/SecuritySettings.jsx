import { Eye, EyeOff } from "lucide-react";

export const SecuritySettings = ({ showPassword, setShowPassword }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Security Settings
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-[#111827] mb-3">Change Password</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111827]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
              />
            </div>
            <button className="px-4 py-2 bg-[#6A70E3] text-white rounded-lg hover:bg-[#5B63D3] transition-colors">
              Update Password
            </button>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-6">
          <h4 className="font-medium text-[#111827] mb-3">
            Two-Factor Authentication
          </h4>
          <p className="text-sm text-[#6B7280] mb-4">
            Add an extra layer of security to your account
          </p>
          <button className="px-4 py-2 border border-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#F9FAFB] transition-colors">
            Enable 2FA
          </button>
        </div>

        <div className="border-t border-[#E5E7EB] pt-6">
          <h4 className="font-medium text-[#111827] mb-3">Active Sessions</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg">
              <div>
                <p className="text-sm font-medium text-[#111827]">
                  Current Session
                </p>
                <p className="text-xs text-[#6B7280]">
                  Chrome on MacOS • Austin, TX • Active now
                </p>
              </div>
              <span className="text-xs text-green-600">Current</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg">
              <div>
                <p className="text-sm font-medium text-[#111827]">
                  Mobile Device
                </p>
                <p className="text-xs text-[#6B7280]">
                  Safari on iPhone • Last active 2 hours ago
                </p>
              </div>
              <button className="text-xs text-red-600 hover:underline">
                Revoke
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
