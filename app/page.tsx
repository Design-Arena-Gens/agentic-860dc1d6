import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-6">Hi, I'm [Your Name]</h1>
        <p className="text-xl text-gray-700 mb-4 max-w-3xl">
          Computer Science undergraduate specializing in Data Science and Machine Learning.
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          I build intelligent systems and analyze data to solve real-world problems.
          This portfolio showcases my journey, projects, and learnings in the field of AI/ML.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </Link>
          <Link href="/contact" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">[Project Title 1]</h3>
            <p className="text-gray-600 mb-4">
              Brief description of your first featured project. Explain the problem, approach, and results.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">TensorFlow</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">NLP</span>
            </div>
            <Link href="/projects" className="text-blue-600 hover:underline">Learn more →</Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">[Project Title 2]</h3>
            <p className="text-gray-600 mb-4">
              Brief description of your second featured project. Highlight key achievements and technologies used.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PyTorch</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Computer Vision</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">CNN</span>
            </div>
            <Link href="/projects" className="text-blue-600 hover:underline">Learn more →</Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="space-y-6">
          <article className="border-b border-gray-200 pb-6">
            <div className="text-sm text-gray-500 mb-2">[Date]</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link href="/blog" className="hover:text-blue-600">[Blog Post Title 1]</Link>
            </h3>
            <p className="text-gray-600">
              Brief excerpt or introduction to your blog post about a data science or ML topic...
            </p>
          </article>

          <article className="border-b border-gray-200 pb-6">
            <div className="text-sm text-gray-500 mb-2">[Date]</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link href="/blog" className="hover:text-blue-600">[Blog Post Title 2]</Link>
            </h3>
            <p className="text-gray-600">
              Brief excerpt or introduction to your second blog post...
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-600 hover:underline">View all posts →</Link>
        </div>
      </section>
    </div>
  )
}
