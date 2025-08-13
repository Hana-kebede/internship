import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    content: "Full content here...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    tags: ["React", "AI", "PWA"]
  },
  {
    id: 2,
    title: "Mobile App Development Best Practices",
    excerpt: "Learn essential best practices for creating mobile applications that users love and engage with.",
    content: "Full content here...",
    author: "Ahmed Hassan",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["React Native", "Flutter", "UX"]
  },
  {
    id: 3,
    title: "Building Scalable Software Architecture",
    excerpt: "Discover how to design software systems that can grow with your business needs.",
    content: "Full content here...",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Software Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Architecture", "Scalability", "Backend"]
  },
  {
    id: 4,
    title: "UI/UX Design Principles for Modern Applications",
    excerpt: "Master the fundamental design principles that create exceptional user experiences.",
    content: "Full content here...",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    tags: ["UI/UX", "Design", "User Experience"]
  },
  {
    id: 5,
    title: "DevOps and Continuous Integration Strategies",
    excerpt: "Streamline your development workflow with effective DevOps practices and CI/CD pipelines.",
    content: "Full content here...",
    author: "David Park",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    tags: ["DevOps", "CI/CD", "Automation"]
  },
  {
    id: 6,
    title: "Cybersecurity in Software Development",
    excerpt: "Essential security practices every developer should implement to protect applications and data.",
    content: "Full content here...",
    author: "Lisa Thompson",
    date: "2024-01-03",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    tags: ["Security", "Development", "Best Practices"]
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Software Architecture", "Design", "DevOps", "Security"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [readMorePost, setReadMorePost] = useState(null);
  const [articlesToShow, setArticlesToShow] = useState(4);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5 mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Industry insights, development tips, and the latest technology updates
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="animate-scale-in"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
          <Card className="glass-card hover-scale max-w-4xl mx-auto animate-slide-in-up">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{blogPosts[0].author}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span className="text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="group" onClick={() => { setReadMorePost(blogPosts[0]); setReadMoreOpen(true); }}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1, articlesToShow+1).map((post, index) => (
                <Card key={post.id} className="glass-card hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group" onClick={() => { setReadMorePost(post); setReadMoreOpen(true); }}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-scale" onClick={() => setArticlesToShow(articlesToShow + 3)}>
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Read More Modal */}
      <Dialog open={readMoreOpen} onOpenChange={setReadMoreOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{readMorePost?.title}</DialogTitle>
          </DialogHeader>
          <p>{readMorePost?.content}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;