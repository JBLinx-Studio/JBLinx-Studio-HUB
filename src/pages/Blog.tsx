
import React from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends and technologies shaping the web development landscape',
    content: '',
    author: 'JBLinx Team',
    publishedAt: new Date('2024-01-15'),
    tags: ['Web Development', 'Technology', 'Trends'],
    readTime: 5
  }
]

export default function Blog() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-primary hover:underline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
