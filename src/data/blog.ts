// Blog data and functions - easily replaceable with API calls later
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  authorImage: string;
  readTime: string;
  tags: string[];
}

// Sample blog posts data
const blogPostsData: BlogPost[] = [
  {
    slug: 'future-of-web-development',
    title: 'The Future of Web Development',
    excerpt: 'Discover upcoming trends and technologies shaping the web',
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and frameworks emerging at a rapid pace. In this comprehensive guide, we'll explore the key trends that are shaping the future of web development.</p>

      <h2>Key Trends to Watch</h2>

      <h3>1. AI-Powered Development</h3>
      <p>Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent debugging, AI tools are becoming essential in modern development workflows.</p>

      <h3>2. Web3 and Blockchain Integration</h3>
      <p>Decentralized applications (dApps) are gaining traction, bringing blockchain technology to mainstream web development. This includes cryptocurrency payments, NFT marketplaces, and decentralized storage solutions.</p>

      <h3>3. Progressive Web Apps (PWAs)</h3>
      <p>PWAs continue to blur the line between web and native applications, offering offline functionality, push notifications, and app-like experiences directly in the browser.</p>

      <h3>4. Edge Computing</h3>
      <p>With the rise of edge computing, web applications can now process data closer to the user, resulting in faster load times and better performance for global audiences.</p>

      <h2>Technologies to Master</h2>

      <p>To stay ahead in web development, focus on mastering these technologies:</p>
      <ul>
        <li>Next.js 14+ with App Router</li>
        <li>TypeScript for type safety</li>
        <li>Tailwind CSS for rapid UI development</li>
        <li>React Server Components</li>
        <li>WebAssembly for high-performance applications</li>
      </ul>

      <h2>Best Practices for 2024</h2>

      <p>As we move forward, here are some best practices to adopt:</p>
      <ol>
        <li>Prioritize performance and Core Web Vitals</li>
        <li>Implement proper SEO from the ground up</li>
        <li>Focus on accessibility and inclusive design</li>
        <li>Use modern CSS features like Grid and Flexbox</li>
        <li>Implement proper error handling and monitoring</li>
      </ol>

      <p>The future of web development is bright, with endless possibilities for creating amazing user experiences. Stay curious, keep learning, and embrace these emerging technologies to build the next generation of web applications.</p>
    `,
    author: 'John Doe',
    date: '2025-09-20',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    imageAlt: 'Futuristic web interfaces with holographic displays',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    readTime: '8 min read',
    tags: ['Web Development', 'Future Trends', 'Technology', 'AI', 'Web3']
  },
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications',
    excerpt: 'Learn best practices for building enterprise-level applications',
    content: `
      <p>Building scalable applications is crucial for modern businesses that need to handle growth and increased user demand. This guide covers the essential principles and practices for creating robust, scalable systems.</p>

      <h2>Understanding Scalability</h2>

      <p>Scalability refers to the ability of a system to handle increased load by adding resources to the system. There are two main types:</p>

      <h3>Vertical Scaling (Scale Up)</h3>
      <p>Adding more power to existing machines - more CPU, RAM, or storage. This is simpler but has physical limitations and can be expensive.</p>

      <h3>Horizontal Scaling (Scale Out)</h3>
      <p>Adding more machines to handle the load. This is more complex but offers better fault tolerance and potentially unlimited scaling.</p>

      <h2>Database Scalability</h2>

      <h3>Read Replicas</h3>
      <p>Use read replicas to distribute read queries across multiple database instances while keeping writes on the primary database.</p>

      <h3>Sharding</h3>
      <p>Partition your data across multiple databases based on a shard key. This allows you to distribute both reads and writes.</p>

      <h3>Caching Strategies</h3>
      <p>Implement multi-level caching with Redis or Memcached to reduce database load and improve response times.</p>

      <h2>Application Architecture</h2>

      <h3>Microservices</h3>
      <p>Break down your application into smaller, independent services that can be scaled individually.</p>

      <h3>Load Balancing</h3>
      <p>Distribute incoming traffic across multiple servers to ensure no single server becomes a bottleneck.</p>

      <h3>CDN Integration</h3>
      <p>Use Content Delivery Networks to serve static assets and reduce the load on your origin servers.</p>

      <h2>Monitoring and Observability</h2>

      <p>Implement comprehensive monitoring to track system performance and identify bottlenecks:</p>
      <ul>
        <li>Application Performance Monitoring (APM)</li>
        <li>Infrastructure monitoring</li>
        <li>Log aggregation and analysis</li>
        <li>Distributed tracing</li>
      </ul>

      <h2>Best Practices</h2>

      <ol>
        <li>Design for failure - assume components will fail</li>
        <li>Implement proper error handling and graceful degradation</li>
        <li>Use asynchronous processing for non-critical operations</li>
        <li>Implement rate limiting to prevent abuse</li>
        <li>Regular load testing to identify bottlenecks</li>
      </ol>

      <p>Building scalable applications requires careful planning and the right architectural decisions. By following these principles, you can create systems that grow with your business needs.</p>
    `,
    author: 'Jane Smith',
    date: '2025-09-19',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageAlt: 'Complex system architecture diagram with connected nodes',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    readTime: '12 min read',
    tags: ['Scalability', 'Architecture', 'Performance', 'Microservices', 'Database']
  },
  {
    slug: 'ai-in-modern-web-apps',
    title: 'AI in Modern Web Apps',
    excerpt: 'Implementing AI features in your web applications',
    content: `
      <p>Artificial Intelligence is transforming how we build and interact with web applications. From chatbots to personalized recommendations, AI features are becoming essential components of modern web development.</p>

      <h2>AI Integration Options</h2>

      <h3>1. Third-Party AI Services</h3>
      <p>Leverage powerful AI APIs from providers like OpenAI, Google Cloud AI, and AWS AI services. These offer pre-trained models for various use cases.</p>

      <h3>2. Custom AI Models</h3>
      <p>Train your own models using frameworks like TensorFlow.js or PyTorch. This gives you more control but requires more expertise and resources.</p>

      <h3>3. Edge AI</h3>
      <p>Run AI models directly in the browser using libraries like TensorFlow.js or ONNX.js for better privacy and reduced latency.</p>

      <h2>Popular AI Features</h2>

      <h3>Chatbots and Virtual Assistants</h3>
      <p>Implement conversational AI to provide 24/7 customer support and handle common queries automatically.</p>

      <h3>Personalized Recommendations</h3>
      <p>Use machine learning algorithms to suggest content, products, or services based on user behavior and preferences.</p>

      <h3>Image and Video Analysis</h3>
      <p>Extract insights from visual content using computer vision models for object detection, facial recognition, and content moderation.</p>

      <h3>Natural Language Processing</h3>
      <p>Analyze text for sentiment, extract entities, translate languages, or generate human-like text responses.</p>

      <h2>Implementation Examples</h2>

      <h3>Smart Search</h3>
      <p>Enhance search functionality with semantic understanding and natural language queries.</p>

      <h3>Content Generation</h3>
      <p>Automatically generate product descriptions, social media posts, or email content using AI.</p>

      <h3>Predictive Analytics</h3>
      <p>Forecast user behavior, sales trends, or system performance using historical data.</p>

      <h2>Best Practices</h2>

      <h3>Privacy and Ethics</h3>
      <ul>
        <li>Be transparent about AI usage</li>
        <li>Obtain user consent for data processing</li>
        <li>Implement data anonymization techniques</li>
        <li>Regularly audit AI decisions for bias</li>
      </ul>

      <h3>Performance Optimization</h3>
      <ul>
        <li>Cache AI responses when possible</li>
        <li>Use web workers for heavy AI computations</li>
        <li>Implement progressive loading for AI features</li>
        <li>Monitor API usage and costs</li>
      </ul>

      <h3>User Experience</h3>
      <ul>
        <li>Provide fallback options when AI fails</li>
        <li>Show loading states for AI operations</li>
        <li>Allow users to override AI suggestions</li>
        <li>Design intuitive interfaces for AI interactions</li>
      </ul>

      <h2>Future Trends</h2>

      <p>The future of AI in web applications includes:</p>
      <ul>
        <li>More sophisticated conversational interfaces</li>
        <li>Real-time AI processing with WebRTC</li>
        <li>Multi-modal AI combining text, voice, and vision</li>
        <li>Edge AI for better privacy and performance</li>
      </ul>

      <p>AI integration in web applications is no longer a luxury but a necessity for staying competitive. Start small, experiment with different approaches, and gradually expand your AI capabilities based on user feedback and business needs.</p>
    `,
    author: 'Mike Johnson',
    date: '2025-09-18',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageAlt: 'Neural network visualization with glowing connections',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    readTime: '10 min read',
    tags: ['AI', 'Machine Learning', 'Web Development', 'Chatbots', 'NLP']
  }
];

// API-like functions for easy future integration
export const getAllBlogPosts = (): BlogPost[] => {
  // In the future, this could be: return await fetch('/api/blog').then(res => res.json())
  return blogPostsData;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  // In the future, this could be: return await fetch(\`/api/blog/\${slug}\`).then(res => res.json())
  return blogPostsData.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  // In the future, this could be: return await fetch(\`/api/blog?category=\${category}\`).then(res => res.json())
  return blogPostsData.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedBlogPosts = (limit: number = 3): BlogPost[] => {
  // In the future, this could be: return await fetch(\`/api/blog?featured=true&limit=\${limit}\`).then(res => res.json())
  return blogPostsData.slice(0, limit);
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  // In the future, this could be: return await fetch(\`/api/blog/search?q=\${query}\`).then(res => res.json())
  const lowercaseQuery = query.toLowerCase();
  return blogPostsData.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Static generation helpers
export const generateStaticParams = () => {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = (slug: string) => {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  return {
    title: `${post.title} | Programming Brains`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
};
