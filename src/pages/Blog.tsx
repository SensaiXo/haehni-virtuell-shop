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
  },
  {
    id: 2,
    title: "AI in der Buchhaltung Schweiz: Zukunftstrends für KMU im Jahr 2025",
    excerpt: "Die Buchhaltung in der Schweiz erlebt einen tiefgreifenden Wandel. Gerade für Schweizer KMU eröffnet die Digitalisierung neue Wege, um mit schlanken Prozessen und smarten Tools die Buchhaltung zu vereinfachen.",
    author: "Laura Hähni",
    date: "15. Juli 2025",
    readTime: "12 Min.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "ai-buchhaltung-schweiz-2025"
  },
  {
    id: 3,
    title: "Mein Weg zu neuen AI-Partnern: Persönliche Erfahrungen mit virtueller Assistenz & AI-Influencer",
    excerpt: "Es gibt diese Momente im Unternehmertum, in denen du spürst: 'Jetzt ist Zeit für den nächsten Schritt.' Für mich war genau dieser Moment gekommen, als ich merkte, wie sehr KI meine tägliche Arbeit bereichern kann.",
    author: "Laura Hähni",
    date: "17. Juli 2025",
    readTime: "10 Min.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "ai-partner-erfahrungen-schweiz"
  },
  {
    id: 4,
    title: "Digitale Transformation für Schweizer KMU: Praktische Schritte zum Erfolg",
    excerpt: "Die digitale Transformation muss nicht kompliziert sein. Als virtuelle Assistentin zeige ich Ihnen, wie Sie Schritt für Schritt Ihre Prozesse digitalisieren und dabei Zeit und Kosten sparen können.",
    author: "Laura Hähni",
    date: "19. Juli 2025",
    readTime: "9 Min.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "digitale-transformation-kmu-schweiz"
  }
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader 
        title="Blog & Insights"
        subtitle="Praktische Tipps und Einblicke für Schweizer KMU."
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
                    loading="lazy"
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