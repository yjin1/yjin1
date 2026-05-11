export default function Team() {
  const teamMembers = [
    { name: 'Dr. John Doe', role: 'Principal Investigator', bio: 'Expert in AI research with 20 years of experience.', email: 'john.doe@lab.com' },
    { name: 'Jane Smith', role: 'Research Assistant', bio: 'Specializes in data analysis and visualization.', email: 'jane.smith@lab.com' },
    { name: 'Bob Johnson', role: 'PhD Student', bio: 'Working on machine learning projects for his dissertation.', email: 'bob.johnson@lab.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-600">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
              <p className="text-sm text-blue-600">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}