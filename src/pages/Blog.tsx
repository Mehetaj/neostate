import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Smart Homes',
    excerpt: 'Exploring how AI and IoT are transforming residential properties into intelligent living spaces.',
    date: 'May 15, 2023',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Sustainable Architecture Trends',
    excerpt: 'How eco-friendly design is shaping the future of real estate development.',
    date: 'June 22, 2023',
    image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Virtual Reality in Property Tours',
    excerpt: 'The impact of VR technology on how buyers experience properties remotely.',
    date: 'July 8, 2023',
    image: 'https://images.pexels.com/photos/8069185/pexels-photo-8069185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'Urban Planning for the 22nd Century',
    excerpt: 'Forward-thinking approaches to city development that prioritize community and sustainability.',
    date: 'August 14, 2023',
    image: 'https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Urban Development'
  }
];

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main className="relative z-10 pt-24 pb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-gradient text-center text-4xl md:text-5xl font-bold mb-8">Our Blog</h1>
          <p className="text-light/80 text-center max-w-3xl mx-auto mb-12">
            Stay updated with the latest trends, insights, and news from the world of futuristic real estate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-light/60">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                  <p className="text-light/70 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-primary font-medium text-sm hover:underline">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Blog;