import Link from 'next/link'

// This data should match your blog/page.tsx
const blogPosts: Record<string, any> = {
  'post-1': {
    title: '[Blog Post Title 1]',
    date: '2024-01-15',
    category: 'Machine Learning',
    readTime: '5 min read',

    // Full blog post content
    content: `
## Introduction

Write your blog post content here. You can use Markdown formatting.

## Section 1

Your content for the first section. Explain concepts, share code snippets, or discuss your experiences.

\`\`\`python
# Example code block
import numpy as np
import pandas as pd

def example_function():
    return "Hello, Data Science!"
\`\`\`

## Section 2

Continue with more sections as needed. Share your insights, learnings, and knowledge.

## Conclusion

Wrap up your blog post with key takeaways and conclusions.
    `,
  },
  'post-2': {
    title: '[Blog Post Title 2]',
    date: '2024-01-10',
    category: 'Data Science',
    readTime: '7 min read',

    content: `
## Introduction

Your second blog post content...

## Main Content

More detailed content about data science topics...
    `,
  },
  'post-3': {
    title: '[Blog Post Title 3]',
    date: '2024-01-05',
    category: 'Deep Learning',
    readTime: '10 min read',

    content: `
## Introduction

Your third blog post content...

## Deep Dive

Detailed exploration of deep learning concepts...
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id: id,
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <div className="flex gap-4 text-sm text-gray-600 mb-4">
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

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </div>
  )
}
