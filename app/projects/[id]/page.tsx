import Link from 'next/link'

// This data should match your projects/page.tsx
const projects: Record<string, any> = {
  'project-1': {
    title: '[Project Title 1]',
    description: 'Detailed description of your project.',
    category: 'Machine Learning',
    date: '2024',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/yourusername/project-1',
    demo: 'https://your-demo-link.com',

    // Detailed content for individual project page
    overview: 'Comprehensive overview of the project, including motivation and goals.',
    problem: 'Description of the problem you were trying to solve.',
    approach: 'Your methodology and approach to solving the problem.',
    implementation: 'Technical details about the implementation.',
    results: 'Results, metrics, and achievements.',
    challenges: 'Challenges faced and how you overcame them.',
    learnings: 'Key learnings and takeaways from the project.',
    futureWork: 'Potential improvements and future work.',
  },
  'project-2': {
    title: '[Project Title 2]',
    description: 'Another project showcasing your skills.',
    category: 'Computer Vision',
    date: '2024',
    technologies: ['PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/yourusername/project-2',

    overview: 'Overview of project 2...',
    problem: 'Problem statement...',
    approach: 'Approach and methodology...',
    implementation: 'Implementation details...',
    results: 'Results and outcomes...',
    challenges: 'Challenges encountered...',
    learnings: 'Key learnings...',
    futureWork: 'Future enhancements...',
  },
  'project-3': {
    title: '[Project Title 3]',
    description: 'A data analysis or NLP project.',
    category: 'Natural Language Processing',
    date: '2023',
    technologies: ['Python', 'NLTK', 'Transformers', 'HuggingFace'],
    github: 'https://github.com/yourusername/project-3',

    overview: 'Overview of project 3...',
    problem: 'Problem statement...',
    approach: 'Approach and methodology...',
    implementation: 'Implementation details...',
    results: 'Results and outcomes...',
    challenges: 'Challenges encountered...',
    learnings: 'Key learnings...',
    futureWork: 'Future enhancements...',
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id]

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex gap-4 text-gray-600 mb-6">
        <span>{project.category}</span>
        <span>•</span>
        <span>{project.date}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech: string) => (
          <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-12">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-400 transition"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700">{project.overview}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
          <p className="text-gray-700">{project.problem}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Approach & Methodology</h2>
          <p className="text-gray-700">{project.approach}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Implementation</h2>
          <p className="text-gray-700">{project.implementation}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="text-gray-700">{project.results}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Challenges</h2>
          <p className="text-gray-700">{project.challenges}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
          <p className="text-gray-700">{project.learnings}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Future Work</h2>
          <p className="text-gray-700">{project.futureWork}</p>
        </section>
      </div>
    </div>
  )
}
