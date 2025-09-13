export const LoadingBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-[#6A70E3] to-[#9333EA] rounded-full transition-all duration-500 ease-out"
      style={{ width: `${progress}%` }}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
    </div>
  </div>
);
