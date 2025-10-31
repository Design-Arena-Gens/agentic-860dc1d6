// Edit this object to add your resources
const resources = {
  courses: [
    {
      title: '[Course Name 1]',
      provider: 'Platform/University',
      link: 'https://example.com',
      description: 'Brief description of what you learned',
      status: 'Completed', // Completed, In Progress, Planned
    },
    {
      title: '[Course Name 2]',
      provider: 'Platform/University',
      link: 'https://example.com',
      description: 'Brief description',
      status: 'In Progress',
    },
  ],
  books: [
    {
      title: '[Book Title 1]',
      author: 'Author Name',
      link: 'https://example.com',
      description: 'Why this book was valuable',
      status: 'Read',
    },
    {
      title: '[Book Title 2]',
      author: 'Author Name',
      link: 'https://example.com',
      description: 'Key takeaways',
      status: 'Reading',
    },
  ],
  papers: [
    {
      title: '[Research Paper Title]',
      authors: 'Authors',
      link: 'https://arxiv.org/example',
      description: 'Summary and why it\'s important',
      year: '2024',
    },
  ],
  tools: [
    {
      name: 'Python',
      category: 'Programming Language',
      description: 'Primary language for data science and ML',
      proficiency: 'Advanced',
    },
    {
      name: 'TensorFlow/PyTorch',
      category: 'Framework',
      description: 'Deep learning frameworks',
      proficiency: 'Intermediate',
    },
    {
      name: 'Pandas/NumPy',
      category: 'Library',
      description: 'Data manipulation and analysis',
      proficiency: 'Advanced',
    },
    {
      name: 'Scikit-learn',
      category: 'Library',
      description: 'Machine learning toolkit',
      proficiency: 'Intermediate',
    },
  ],
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/yourusername',
      description: 'My code repositories',
    },
    {
      title: 'Kaggle',
      url: 'https://kaggle.com/yourusername',
      description: 'Data science competitions',
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      description: 'Professional profile',
    },
  ],
}

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      <p className="text-lg text-gray-600 mb-12">
        Courses, books, papers, tools, and resources that have shaped my learning journey in data science and ML.
      </p>

      {/* Courses Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.courses.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  course.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  course.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {course.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{course.provider}</div>
              <p className="text-gray-700 mb-3">{course.description}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                View Course →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Books</h2>
        <div className="space-y-4">
          {resources.books.map((book, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">by {book.author}</div>
                  <p className="text-gray-700 mb-2">{book.description}</p>
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    View Book →
                  </a>
                </div>
                <span className={`text-xs px-2 py-1 rounded ml-4 ${
                  book.status === 'Read' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {book.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Research Papers</h2>
        <div className="space-y-4">
          {resources.papers.map((paper, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-1">{paper.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{paper.authors} ({paper.year})</div>
              <p className="text-gray-700 mb-2">{paper.description}</p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Read Paper →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.tools.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {tool.proficiency}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{tool.category}</div>
              <p className="text-gray-700">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Useful Links Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Useful Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {resources.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-300"
            >
              <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
