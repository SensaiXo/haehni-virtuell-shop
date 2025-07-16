import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Die Kraft der Virtuellen Assistenz: Wie Schweizer KMU Zeit gewinnen und ihr Potenzial entfalten",
    excerpt: "In einer Welt, in der Zeit unser wertvollstes Gut ist, verbringen viele Unternehmer und Selbstständige Stunden mit administrativen Aufgaben, die sie von ihrem Kernbusiness abhalten. Entdecken Sie, wie virtuelle Assistenz Ihr Geschäft transformieren kann.",
    author: "Laura Hähni",
    date: "13. Juli 2025",
    readTime: "8 Min.",
    image: "/lovable-uploads/554e6c76-d11a-4ec9-88ee-f28460a3b152.png",
    slug: "kraft-der-virtuellen-assistenz"
  }
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader 
        title="Blog & Insights"
        subtitle="Praktische Tipps, Einblicke und Erfahrungen rund um virtuelle Assistenz, Digitalisierung und effizientes Arbeiten für Schweizer KMU."
      />
      
      <div className="min-h-screen py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border border-border shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-card-foreground line-clamp-2 hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-border text-card-foreground hover:bg-muted"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      Weiterlesen
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-card border border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-card-foreground text-2xl">
                  Bleiben Sie auf dem Laufenden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Erhalten Sie regelmäßig praktische Tipps und Insights direkt in Ihr Postfach.
                </p>
                <Button 
                  asChild 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/kontakt">
                    Newsletter abonnieren
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;