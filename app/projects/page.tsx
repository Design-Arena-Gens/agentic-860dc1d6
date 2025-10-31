import Link from 'next/link'

// Edit this array to add your projects
const projects = [
  {
    id: 'project-1',
    title: '[Project Title 1]',
    description: 'Detailed description of your project. Explain the problem you solved, the approach you took, and the results you achieved.',
    longDescription: 'Extended description with more technical details about the implementation, challenges faced, and lessons learned.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    category: 'Machine Learning',
    date: '2024',
    github: 'https://github.com/yourusername/project-1',
    demo: 'https://your-demo-link.com',
    image: null,
  },
  {
    id: 'project-2',
    title: '[Project Title 2]',
    description: 'Another project showcasing your skills in data science or machine learning.',
    longDescription: 'More details about this project, methodology, dataset used, and key findings.',
    technologies: ['PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
    category: 'Computer Vision',
    date: '2024',
    github: 'https://github.com/yourusername/project-2',
    demo: null,
    image: null,
  },
  {
    id: 'project-3',
    title: '[Project Title 3]',
    description: 'A data analysis or NLP project demonstrating your analytical abilities.',
    longDescription: 'Comprehensive overview of the project scope, data preprocessing steps, and insights generated.',
    technologies: ['Python', 'NLTK', 'Transformers', 'HuggingFace'],
    category: 'Natural Language Processing',
    date: '2023',
    github: 'https://github.com/yourusername/project-3',
    demo: null,
    image: null,
  },
]

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-gray-600 mb-12">
        A collection of my data science and machine learning projects. Each project includes detailed documentation of my approach, methodology, and results.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.id} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo →
                </a>
              )}
              <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                Full Details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
