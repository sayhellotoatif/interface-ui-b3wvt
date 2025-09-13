export const DataSettings = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Data & Privacy
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-[#111827] mb-3">Data Export</h4>
          <p className="text-sm text-[#6B7280] mb-4">
            Download a copy of your data
          </p>
          <button className="px-4 py-2 border border-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#F9FAFB] transition-colors">
            Request Data Export
          </button>
        </div>

        <div className="border-t border-[#E5E7EB] pt-6">
          <h4 className="font-medium text-[#111827] mb-3">
            Account Deletion
          </h4>
          <p className="text-sm text-[#6B7280] mb-4">
            Permanently delete your account and all associated data
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
);
