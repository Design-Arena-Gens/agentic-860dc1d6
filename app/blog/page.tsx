import Link from 'next/link'

// Edit this array to add your blog posts
const blogPosts = [
  {
    id: 'post-1',
    title: '[Blog Post Title 1]',
    excerpt: 'Brief excerpt or introduction to your blog post. This should give readers an idea of what the post is about.',
    date: '2024-01-15',
    category: 'Machine Learning',
    readTime: '5 min read',
  },
  {
    id: 'post-2',
    title: '[Blog Post Title 2]',
    excerpt: 'Another interesting topic about data science, algorithms, or your learning journey.',
    date: '2024-01-10',
    category: 'Data Science',
    readTime: '7 min read',
  },
  {
    id: 'post-3',
    title: '[Blog Post Title 3]',
    excerpt: 'Share your insights, tutorials, or experiences in the field of AI and ML.',
    date: '2024-01-05',
    category: 'Deep Learning',
    readTime: '10 min read',
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Thoughts, tutorials, and insights on data science, machine learning, and my learning journey.
      </p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <div className="flex gap-4 text-sm text-gray-600 mb-2">
              <time>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold mb-3">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-700 mb-4">{post.excerpt}</p>

            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
