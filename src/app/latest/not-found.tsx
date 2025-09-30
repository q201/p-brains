export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}