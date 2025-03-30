
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    slug: "getting-started-react-typescript",
    title: "Getting Started with React and TypeScript",
    date: "May 15, 2023",
    author: "John Doe",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>React and TypeScript are a powerful combination for building robust web applications. This post will guide you through setting up a new project and explain key concepts for typing your components.</p>
      <h2>Setting Up Your Project</h2>
      <p>The easiest way to start a React TypeScript project is using Create React App with the TypeScript template:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      <p>This sets up a new React project with TypeScript configurations ready to go. You'll notice that your component files use the .tsx extension instead of .js or .jsx.</p>
      <h2>Typing Props</h2>
      <p>With TypeScript, you can define the shape of your component's props:</p>
      <pre><code>type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
}

const Button = ({ text, onClick, color = 'primary' }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={\`btn \${color}\`}
    >
      {text}
    </button>
  );
};</code></pre>
      <h2>Typing Hooks</h2>
      <p>TypeScript also works well with React hooks. Here's how to type useState:</p>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);</code></pre>
      <p>By providing the type to useState, TypeScript will ensure that you only set values that match the User interface.</p>
      <h2>Conclusion</h2>
      <p>Using TypeScript with React improves your development experience by catching errors early and providing better tooling support. As your application grows, you'll appreciate the added type safety and documentation that TypeScript provides.</p>
    `
  },
  {
    slug: "data-structures-for-interviews",
    title: "Understanding Data Structures for Interviews",
    date: "April 28, 2023",
    author: "John Doe",
    category: "Computer Science",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Data structures are fundamental concepts in computer science and are frequently tested in technical interviews. This guide covers the essential data structures you should know.</p>
      <h2>Arrays</h2>
      <p>Arrays store elements in contiguous memory locations. They provide O(1) access time but have fixed size in many languages.</p>
      <h2>Linked Lists</h2>
      <p>Linked lists consist of nodes where each node contains data and a reference to the next node. They allow dynamic size but have O(n) access time.</p>
      <h2>Stacks and Queues</h2>
      <p>Stacks follow LIFO (Last In, First Out) while queues follow FIFO (First In, First Out). Both are useful for specific algorithms and problems.</p>
      <h2>Hash Tables</h2>
      <p>Hash tables provide O(1) average case for insertions, deletions, and lookups. They're essential for solving many interview problems efficiently.</p>
      <h2>Trees</h2>
      <p>Binary trees, BSTs, AVL trees, and other tree structures are common in interviews. Understanding tree traversals (inorder, preorder, postorder) is crucial.</p>
      <h2>Graphs</h2>
      <p>Graphs represent relationships between objects. Knowing BFS, DFS, and shortest path algorithms like Dijkstra's is important for graph problems.</p>
      <h2>Practice Tips</h2>
      <p>When practicing, focus on implementing these data structures from scratch and solving related problems. Understanding the time and space complexity of operations is essential for optimizing solutions.</p>
    `
  },
  {
    slug: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals for Beginners",
    date: "March 10, 2023",
    author: "John Doe",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Machine learning is transforming industries across the globe. This post introduces core concepts for beginners looking to enter this exciting field.</p>
      <h2>Types of Machine Learning</h2>
      <p><strong>Supervised Learning:</strong> Models learn from labeled training data to make predictions. Examples include classification and regression problems.</p>
      <p><strong>Unsupervised Learning:</strong> Models find patterns in unlabeled data. Clustering and dimensionality reduction are common applications.</p>
      <p><strong>Reinforcement Learning:</strong> Agents learn to make decisions by receiving rewards or penalties based on their actions.</p>
      <h2>Key Concepts</h2>
      <p><strong>Features and Labels:</strong> Features are input variables used to make predictions. Labels are the outputs we're trying to predict.</p>
      <p><strong>Training and Testing:</strong> Models learn from training data and are evaluated on separate testing data to assess performance.</p>
      <p><strong>Overfitting and Underfitting:</strong> Overfitting occurs when models learn training data too well, including noise. Underfitting happens when models are too simple to capture patterns.</p>
      <h2>Popular Algorithms</h2>
      <p><strong>Linear Regression:</strong> Predicts continuous values based on linear relationships between variables.</p>
      <p><strong>Decision Trees:</strong> Create a flowchart-like structure to make decisions based on feature values.</p>
      <p><strong>Neural Networks:</strong> Inspired by the human brain, these powerful models are behind many advanced AI applications.</p>
      <h2>Getting Started</h2>
      <p>Begin with Python and libraries like scikit-learn, TensorFlow, or PyTorch. Complete practical projects to apply what you've learned, and participate in Kaggle competitions for real-world experience.</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-32 px-4">
          <div className="glass-card rounded-xl p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/#blog" className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg transition-all">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <main className="container mx-auto py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/#blog" className="inline-flex items-center glass-card px-4 py-2 rounded-lg hover:bg-primary/20 transition-all mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="h-64 md:h-96 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-sm glass px-2 py-1 rounded-full">{post.category}</span>
                <span className="text-sm text-muted-foreground">Published on {post.date}</span>
                <span className="text-sm text-muted-foreground">by {post.author}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
              
              <div 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
