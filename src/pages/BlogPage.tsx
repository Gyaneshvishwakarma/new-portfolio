
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author?: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and understand the basics of typing components and hooks.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
    date: "May 15, 2023",
    category: "Development",
    slug: "getting-started-react-typescript",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Understanding Data Structures for Interviews",
    excerpt: "A comprehensive guide to the most common data structures asked in technical interviews and how to implement them.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop",
    date: "April 28, 2023",
    category: "Computer Science",
    slug: "data-structures-for-interviews",
    author: "John Doe"
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals for Beginners",
    excerpt: "Explore the core concepts of machine learning, including supervised and unsupervised learning, algorithms, and practical applications.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&auto=format&fit=crop",
    date: "March 10, 2023",
    category: "AI & ML",
    slug: "machine-learning-fundamentals",
    author: "John Doe"
  },
  {
    id: 4,
    title: "The Power of CSS Grid Layout",
    excerpt: "Dive deep into CSS Grid Layout and learn how to create complex, responsive web designs with ease.",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=500&auto=format&fit=crop",
    date: "February 22, 2023",
    category: "Web Design",
    slug: "power-of-css-grid-layout",
    author: "John Doe"
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js",
    excerpt: "A step-by-step guide to creating robust RESTful APIs using Node.js, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=500&auto=format&fit=crop",
    date: "January 15, 2023",
    category: "Development",
    slug: "building-restful-apis-nodejs",
    author: "John Doe"
  },
  {
    id: 6,
    title: "Understanding Big O Notation",
    excerpt: "Learn how to analyze algorithm efficiency using Big O notation and why it matters for coding interviews.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=500&auto=format&fit=crop",
    date: "December 5, 2022",
    category: "Computer Science",
    slug: "understanding-big-o-notation",
    author: "John Doe"
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs glass px-2 py-1 rounded-full">{post.category}</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="flex items-center text-primary hover:underline">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container mx-auto py-32 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">My Blog</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thoughts, insights, and tutorials on web development, computer science, and my journey in tech.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
