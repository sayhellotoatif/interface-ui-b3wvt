export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
}
