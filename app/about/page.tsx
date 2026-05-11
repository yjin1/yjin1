export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Research Lab</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Our research lab is dedicated to pushing the boundaries of science and technology. We focus on cutting-edge research in AI, sustainable energy, and climate modeling to solve real-world problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">To advance knowledge and innovation through interdisciplinary research.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">To be a leading research institution making a positive impact on society.</p>
          </div>
        </div>
      </div>
    </div>
  );
}