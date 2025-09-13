import { User } from "lucide-react";

export const ProfileSettings = ({ profile, setProfile }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Profile Information
      </h3>

      <div className="flex items-center space-x-6 mb-6">
        <div className="relative">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#6A70E3] text-white rounded-full flex items-center justify-center hover:bg-[#5B63D3] transition-colors">
            <User size={16} />
          </button>
        </div>
        <div>
          <h4 className="font-medium text-[#111827]">Profile Photo</h4>
          <p className="text-sm text-[#6B7280]">
            Upload a new avatar for your profile
          </p>
          <button className="mt-2 text-[#6A70E3] text-sm hover:underline">
            Change Photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
            className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
            className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Location
          </label>
          <input
            type="text"
            value={profile.location}
            onChange={(e) =>
              setProfile({ ...profile, location: e.target.value })
            }
            className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#111827] mb-2">
            Timezone
          </label>
          <select
            value={profile.timezone}
            onChange={(e) =>
              setProfile({ ...profile, timezone: e.target.value })
            }
            className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#6A70E3]"
          >
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
