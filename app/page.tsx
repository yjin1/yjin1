export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Research Lab</h1>
          <p className="text-xl md:text-2xl mb-8">Advancing knowledge through innovative research</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/about" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Learn More</a>
            <a href="/research" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition border border-white">View Research</a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <a href="/about" className="group p-6 text-center bg-gray-50 rounded-lg hover:bg-blue-50 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">About Us</h3>
              <p className="text-gray-600">Learn about our mission and vision</p>
            </a>
            <a href="/research" className="group p-6 text-center bg-gray-50 rounded-lg hover:bg-blue-50 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Research</h3>
              <p className="text-gray-600">Discover our current projects</p>
            </a>
            <a href="/team" className="group p-6 text-center bg-gray-50 rounded-lg hover:bg-blue-50 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Our Team</h3>
              <p className="text-gray-600">Meet our researchers</p>
            </a>
            <a href="/contact" className="group p-6 text-center bg-gray-50 rounded-lg hover:bg-blue-50 transition">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Contact</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
