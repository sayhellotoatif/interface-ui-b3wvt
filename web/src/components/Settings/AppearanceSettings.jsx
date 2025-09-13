export const AppearanceSettings = ({
  currentTheme,
  handleThemeChange,
  primaryColor,
  handleColorChange,
}) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-[#111827] mb-4">
        Appearance
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-[#111827] mb-3">Theme</h4>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                id: "light",
                name: "Light",
                bg: "bg-white",
                border: "border-gray-200",
              },
              {
                id: "dark",
                name: "Dark",
                bg: "bg-[#1F2937]",
                border: "border-gray-600",
              },
              {
                id: "auto",
                name: "Auto",
                bg: "bg-gradient-to-br from-white to-[#1F2937]",
                border: "border-gray-300",
              },
            ].map((theme) => (
              <div
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  currentTheme === theme.id
                    ? "border-[#6A70E3] ring-2 ring-[#6A70E3] ring-opacity-20"
                    : "border-[#E5E7EB] hover:border-[#6A70E3]"
                }`}
              >
                <div
                  className={`w-full h-20 rounded mb-2 shadow-sm ${theme.bg} ${theme.border} border`}
                ></div>
                <p className="text-sm font-medium text-center text-[#111827]">
                  {theme.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-[#111827] mb-3">Primary Color</h4>
          <div className="flex space-x-3">
            {[
              "#6A70E3",
              "#10B981",
              "#F59E0B",
              "#EF4444",
              "#8B5CF6",
              "#06B6D4",
              "#EC4899",
              "#84CC16",
            ].map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={`w-10 h-10 rounded-full border-4 transition-all hover:scale-110 ${
                  color === primaryColor
                    ? "border-white ring-2 ring-gray-300"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-sm text-[#6B7280] mt-2">
            Selected: {primaryColor}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-[#111827] mb-3">Layout Density</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="density"
                value="comfortable"
                defaultChecked
                className="text-[#6A70E3]"
              />
              <span className="text-sm text-[#111827]">
                Comfortable - More spacing between elements
              </span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="density"
                value="compact"
                className="text-[#6A70E3]"
              />
              <span className="text-sm text-[#111827]">
                Compact - Less spacing, more content visible
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);
