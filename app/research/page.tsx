export default function Research() {
  const researchProjects = [
    { title: 'AI for Healthcare', description: 'Developing AI models for medical diagnosis.', details: 'This project involves machine learning algorithms for early disease detection.' },
    { title: 'Sustainable Energy', description: 'Research on renewable energy solutions.', details: 'Exploring new technologies for solar and wind energy.' },
    { title: 'Climate Modeling', description: 'Advanced climate prediction models.', details: 'Using computational models to predict climate change impacts.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Research Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                {project.title === 'AI for Healthcare' ? (
                  <a href="/ai-healthcare" className="text-blue-600 hover:text-blue-800">{project.title}</a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500">{project.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}