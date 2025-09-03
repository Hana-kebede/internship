import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight, Search, Filter, Eye, Heart, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


const categories = ["All", "Web Development", "Mobile Development", "Software Architecture", "Design", "DevOps", "Security"];


const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [readMorePost, setReadMorePost] = useState(null);
  const [articlesToShow, setArticlesToShow] = useState(4);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    import("@/lib/services").then(({ blogService }) => {
      blogService.getBlogPosts({ page: 1, limit: 20 }).then(res => {
        if (isMounted) {
          if (res.success) {
            setPosts(res.data || []);
            setError("");
          } else {
            setError(res.error || "Failed to load blog posts");
          }
          setLoading(false);
        }
      }).catch(() => {
        if (isMounted) {
          setError("Failed to load blog posts");
          setLoading(false);
        }
      });
    });
    return () => { isMounted = false; };
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : (post.likes || 0) + 1 }
        : post
    ));
  };

  const filteredPosts = posts.filter((post: any) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Loading blog posts...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight tracking-wide font-extrabold relative z-10">
                Our Blog
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Industry insights, development tips, and the latest technology updates from our expert team
              </p>
            </div>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="animate-scale-in hover-scale"
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
      {/* Featured Post (guarded) */}
      {filteredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="glass-card hover-scale max-w-4xl mx-auto animate-slide-in-up">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{filteredPosts[0].category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(filteredPosts[0].date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{filteredPosts[0].author}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span className="text-sm">{filteredPosts[0].readTime}</span>
                    </div>
                    <Button className="group" onClick={() => { setReadMorePost(filteredPosts[0]); setReadMoreOpen(true); }}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{filteredPosts[0].views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`p-1 h-auto ${filteredPosts[0].isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                        onClick={() => handleLike(filteredPosts[0].id)}
                      >
                        <Heart className={`h-4 w-4 ${filteredPosts[0].isLiked ? 'fill-current' : ''}`} />
                      </Button>
                      <span>{filteredPosts[0].likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

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
                      {Array.isArray(post.tags) && post.tags.map((tag) => (
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
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={`p-1 h-auto ${post.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                        </Button>
                        <span>{post.likes} likes</span>
                      </div>
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