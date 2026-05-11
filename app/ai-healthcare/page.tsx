export default function AIHealthcare() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI for Healthcare</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              Our AI for Healthcare project focuses on developing advanced machine learning models to assist in medical diagnosis, treatment planning, and patient care. By leveraging cutting-edge AI technologies, we aim to improve healthcare outcomes and reduce diagnostic errors.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Objectives</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Develop accurate diagnostic AI models</li>
              <li>Improve treatment recommendation systems</li>
              <li>Enhance medical imaging analysis</li>
              <li>Personalize patient care plans</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Current Progress</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Phase 1: Data Collection</h3>
              <p className="text-sm text-gray-600">Completed - Collected and anonymized medical datasets from partner hospitals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Phase 2: Model Development</h3>
              <p className="text-sm text-gray-600">In Progress - Training convolutional neural networks for image classification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Phase 3: Clinical Trials</h3>
              <p className="text-sm text-gray-600">Upcoming - Testing AI models in controlled clinical environments.</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                DD
              </div>
              <h3 className="text-lg font-semibold">Dr. David Chen</h3>
              <p className="text-gray-600">Project Lead</p>
              <p className="text-sm text-gray-500">Expert in medical AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                ML
              </div>
              <h3 className="text-lg font-semibold">Maria Lopez</h3>
              <p className="text-gray-600">Data Scientist</p>
              <p className="text-sm text-gray-500">Specializes in healthcare data analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                RK
              </div>
              <h3 className="text-lg font-semibold">Dr. Raj Kumar</h3>
              <p className="text-gray-600">Medical Advisor</p>
              <p className="text-sm text-gray-500">Cardiologist with AI research experience</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Contact Us for Collaboration
          </a>
        </div>
      </div>
    </div>
  );
}