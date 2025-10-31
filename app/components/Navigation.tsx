'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Your Name</Link>
          <ul className="flex gap-8">
            <li><Link href="/" className={isActive('/')}>Home</Link></li>
            <li><Link href="/projects" className={isActive('/projects')}>Projects</Link></li>
            <li><Link href="/blog" className={isActive('/blog')}>Blog</Link></li>
            <li><Link href="/timeline" className={isActive('/timeline')}>Timeline</Link></li>
            <li><Link href="/resources" className={isActive('/resources')}>Resources</Link></li>
            <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
