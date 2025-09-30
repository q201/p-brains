// Layout 1: Modern Clean Design
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, generateStaticParams as generateParams, generateMetadata as generateMeta } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return generateParams();
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  return generateMeta(params.slug);
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sticky Header with Blur Effect */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-16 text-white">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                {post.category}
              </span>
              <span className="text-white/90">{post.readTime}</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90">{post.date}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Author Section */}
          <div className="p-8 lg:p-12 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{post.author}</h3>
                <p className="text-gray-600 text-lg">Published {post.date}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 lg:p-12">
            <div className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Enhanced Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics covered</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Enhanced CTA Section */}
        <div className="mt-16 mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Love what you're reading?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers getting the latest insights on web development, AI, and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Explore More Articles
                </Link>
                <Link
                  href="/tutorials"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Browse Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Layout 2: Magazine Style
export function MagazineStyleBlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Magazine Header */}
      <header className="border-b-4 border-red-600 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-gray-900 hover:text-red-600 font-medium flex items-center transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              TECH MAG
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Meta */}
            <div className="flex items-center space-x-6 mb-8">
              <span className="bg-red-600 text-white px-4 py-2 rounded font-bold uppercase tracking-wider text-sm">
                {post.category}
              </span>
              <span className="text-gray-600 font-medium">{post.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-medium">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              {post.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative h-[500px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-800 prose-p:leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-start space-x-6">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.author}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Senior Full-Stack Developer and Tech Writer with over 8 years of experience 
                    in modern web technologies. Passionate about sharing knowledge and helping 
                    developers build better applications.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-red-600 hover:text-red-700 font-semibold">Follow</button>
                    <button className="text-red-600 hover:text-red-700 font-semibold">More Articles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Related Articles */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Trending Articles</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex space-x-4 group cursor-pointer">
                      <div className="w-20 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform"></div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-red-600 transition-colors">
                          React 18 Features You Need to Know
                        </h4>
                        <p className="text-gray-600 text-xs">5 min read</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white border-2 border-gray-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-red-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Layout 3: Minimal Elegant
export function MinimalElegantBlogPost({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Clean Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <Link
            href="/"
            className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide uppercase font-medium"
          >
            ← Back to Articles
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-20">
        {/* Article Header */}
        <header className="text-center mb-20">
          <div className="text-stone-500 text-sm tracking-wider uppercase mb-6 font-medium">
            {post.category} / {post.date}
          </div>
          <h1 className="text-6xl md:text-7xl font-light text-stone-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-light">
            {post.excerpt}
          </p>
          <div className="mt-8 text-stone-500 text-sm">
            {post.readTime} • By {post.author}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[500px] mb-20 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-2xl prose-stone max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:font-light prose-p:leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Divider */}
        <div className="my-20 text-center">
          <div className="inline-block w-20 h-px bg-stone-300"></div>
        </div>

        {/* Author Section */}
        <div className="text-center">
          <Image
            src={post.authorImage}
            alt={post.author}
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6 grayscale"
          />
          <h3 className="text-2xl font-light text-stone-900 mb-2 tracking-tight">{post.author}</h3>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto">
            Designer & Writer focused on the intersection of technology and human experience.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-stone-500 tracking-wider uppercase">
            <button className="hover:text-stone-900 transition-colors">Follow</button>
            <button className="hover:text-stone-900 transition-colors">More Articles</button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-20 pt-16 border-t border-stone-200 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-stone-600 text-sm tracking-wide hover:text-stone-900 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-8 tracking-tight">Continue the Journey</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="px-8 py-3 bg-stone-900 text-white font-medium tracking-wide hover:bg-stone-800 transition-colors"
            >
              More Articles
            </Link>
            <Link
              href="/tutorials"
              className="px-8 py-3 border border-stone-300 text-stone-700 font-medium tracking-wide hover:bg-stone-100 transition-colors"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}