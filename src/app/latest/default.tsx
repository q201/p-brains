// This is the default page that will be shown when no dynamic segment matches
export default function Default() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Latest Updates</h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to our latest updates section
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default content cards can be added here */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <p className="text-gray-600">
              Explore our most recent updates and featured content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}