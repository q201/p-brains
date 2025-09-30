import Image from "next/image";
import Link from "next/link";
import { getFeaturedBlogPosts } from "@/data/blog";
import Footer from "@/components/Footer";

const featuredTutorials = [
  {
    title: "Getting Started with React",
    description: "Learn the fundamentals of React and build your first application",
    category: "React",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&crop=center",
    imageAlt: "React components and code on a dark background"
  },
  {
    title: "Advanced TypeScript Patterns",
    description: "Master TypeScript with advanced design patterns and best practices",
    category: "TypeScript",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=400&h=250&fit=crop&crop=center",
    imageAlt: "TypeScript code with advanced patterns and interfaces"
  },
  {
    title: "Next.js 13 Features",
    description: "Explore the latest features in Next.js 13 and how to use them",
    category: "Next.js",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
    imageAlt: "Modern web development with Next.js framework"
  }
];

export default function Home() {
  const blogPosts = getFeaturedBlogPosts(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-500  text-white py-20">
        <div className="mx-auto px-[200px]">
          <div className="mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Programming Brains</h1>
            <p className="text-xl mb-8">Your journey to becoming a better developer starts here</p>
            <div className="flex gap-4 justify-center">
              <a href="/latest" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Latest Tutorials
              </a>
              <a href="#featured" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section id="featured" className="py-16 bg-white">
        <div className="mx-auto px-[200px]">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Featured Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial, index) => (
              <Link key={index} href={`/tutorials/${tutorial.category.toLowerCase()}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 group cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-sm font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full">{tutorial.category}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{tutorial.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{tutorial.readTime} read</span>
                      <div className="text-blue-500 hover:text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Read More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-[200px]">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden group cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5">
                    <span className="text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">{post.category}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">{post.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <div className="ml-2">
                          <p className="text-sm font-medium text-gray-800">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <div className="text-blue-500 hover:text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Read →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View All Posts
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 py-16">
        <div className="mx-auto px-[200px] text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-white text-xl mb-8">Join our community and accelerate your programming journey</p>
          <button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
       <Footer />
    </div>
  );
}
