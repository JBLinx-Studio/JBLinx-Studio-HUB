
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Star, Download, ShoppingCart, Filter } from 'lucide-react'

const books = [
  {
    id: '1',
    title: 'Modern Web Development with React & TypeScript',
    description: 'Comprehensive guide to building scalable web applications',
    author: 'JBLinx Studio',
    category: 'Web Development',
    pages: 450,
    rating: 4.8,
    price: 29.99,
    coverImage: '/api/placeholder/300/400',
    tags: ['React', 'TypeScript', 'Web Development'],
    status: 'Published',
    format: ['PDF', 'EPUB', 'Print']
  },
  {
    id: '2',
    title: 'Game Development Fundamentals with Unity',
    description: 'Learn game development from basics to advanced concepts',
    author: 'Game Dev Team',
    category: 'Game Development',
    pages: 380,
    rating: 4.9,
    price: 34.99,
    coverImage: '/api/placeholder/300/400',
    tags: ['Unity', 'C#', 'Game Design'],
    status: 'Published',
    format: ['PDF', 'EPUB']
  },
  {
    id: '3',
    title: 'AI & Machine Learning for Developers',
    description: 'Practical guide to implementing AI in your applications',
    author: 'AI Research Team',
    category: 'Artificial Intelligence',
    pages: 520,
    rating: 4.7,
    price: 39.99,
    coverImage: '/api/placeholder/300/400',
    tags: ['AI/ML', 'Python', 'TensorFlow'],
    status: 'Coming Soon',
    format: ['PDF', 'EPUB', 'Print']
  }
]

export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Web Development', 'Game Development', 'Artificial Intelligence', 'DevOps']

  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory)

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Technical Books & Guides</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides and tutorials written by our expert team. Learn the technologies and techniques we use in our projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-primary" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={book.status === 'Published' ? 'default' : 'secondary'}>
                    {book.status}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{book.title}</CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Author: {book.author}</span>
                  <span>{book.pages} pages</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                  <span>Available in:</span>
                  {book.format.map((format, idx) => (
                    <Badge key={format} variant="outline" className="text-xs">
                      {format}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-primary">${book.price}</span>
                  <div className="flex gap-2">
                    {book.status === 'Published' ? (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            <BookOpen className="w-4 h-4 mr-2" />
            Suggest a Book Topic
          </Button>
        </div>
      </div>
    </div>
  )
}
