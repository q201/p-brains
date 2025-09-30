// This template provides a consistent layout for all pages in the latest section
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Common header for all pages using this template */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-900">Latest</h2>
            </div>
            <div className="flex items-center space-x-4">
              {/* Add navigation items if needed */}
              <a href="/latest" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/latest/featured" className="text-gray-600 hover:text-gray-900">
                Featured
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content area with transition effects */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>

      {/* Common footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600">
            Updated {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}