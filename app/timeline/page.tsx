// Edit this array to add your timeline events
const timelineEvents = [
  {
    date: '2024',
    title: '[Current Achievement or Goal]',
    description: 'What you\'re currently working on or learning. Projects, courses, research, etc.',
    type: 'milestone', // milestone, project, course, achievement
  },
  {
    date: '2023 - Present',
    title: 'Computer Science Undergraduate',
    description: 'Pursuing Bachelor\'s degree with focus on Data Science and Machine Learning.',
    type: 'education',
  },
  {
    date: '2023',
    title: '[Significant Project or Achievement]',
    description: 'Description of an important project, internship, or accomplishment.',
    type: 'project',
  },
  {
    date: '2023',
    title: '[Course or Certification]',
    description: 'Completed course or certification in machine learning, data science, or related field.',
    type: 'course',
  },
  {
    date: '2022',
    title: '[Early Achievement]',
    description: 'Beginning of your journey in data science and machine learning.',
    type: 'milestone',
  },
]

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Timeline</h1>
      <p className="text-lg text-gray-600 mb-12">
        My journey in data science and machine learning - tracking progress, achievements, and learnings.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-white" />

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-3">{event.description}</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Proof of Work</h2>
        <p className="text-gray-700 mb-4">
          This timeline represents my continuous learning and building in the field of data science and ML.
          Each entry includes detailed documentation of my process, resources used, and key learnings.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span>Courses completed: [Add your count]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span>Projects built: [Add your count]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span>Blog posts written: [Add your count]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>Competitions participated: [Add your count]</span>
          </div>
        </div>
      </div>
    </div>
  )
}
