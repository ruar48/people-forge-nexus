import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  Building, 
  X,
  ZoomIn
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyGallery() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "office", label: "Office" },
    { id: "team", label: "Team" },
    { id: "events", label: "Events" },
    { id: "projects", label: "Projects" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Modern Office Workspace",
      category: "office",
      description: "Our open-plan workspace designed for collaboration and creativity",
      image: "🏢",
      alt: "Modern office with open workspace design"
    },
    {
      id: 2,
      title: "Team Collaboration",
      category: "team",
      description: "Our developers working together on innovative solutions",
      image: "👥",
      alt: "Team members collaborating in meeting room"
    },
    {
      id: 3,
      title: "Annual Tech Conference 2024",
      category: "events",
      description: "Presenting our latest innovations at the industry conference",
      image: "🎤",
      alt: "Conference presentation stage"
    },
    {
      id: 4,
      title: "AI Healthcare Platform",
      category: "projects",
      description: "Revolutionary healthcare platform powered by AI",
      image: "🔬",
      alt: "Healthcare AI platform interface"
    },
    {
      id: 5,
      title: "Executive Meeting Room",
      category: "office",
      description: "State-of-the-art meeting facilities for client presentations",
      image: "🪑",
      alt: "Executive meeting room with conference table"
    },
    {
      id: 6,
      title: "Development Team",
      category: "team",
      description: "Our talented development team building the future",
      image: "💻",
      alt: "Developers working on code"
    },
    {
      id: 7,
      title: "Company Retreat 2024",
      category: "events",
      description: "Team building activities at our annual company retreat",
      image: "🌲",
      alt: "Team outdoor retreat activities"
    },
    {
      id: 8,
      title: "E-commerce Platform",
      category: "projects",
      description: "Scalable e-commerce solution for enterprise clients",
      image: "🛒",
      alt: "E-commerce platform dashboard"
    },
    {
      id: 9,
      title: "Innovation Lab",
      category: "office",
      description: "Dedicated space for research and experimental projects",
      image: "🔬",
      alt: "Innovation lab with modern equipment"
    },
    {
      id: 10,
      title: "Design Team Workshop",
      category: "team",
      description: "UX/UI designers collaborating on user experience",
      image: "🎨",
      alt: "Design team brainstorming session"
    },
    {
      id: 11,
      title: "Product Launch Event",
      category: "events",
      description: "Launching our latest SaaS platform to the market",
      image: "🚀",
      alt: "Product launch presentation"
    },
    {
      id: 12,
      title: "Mobile Banking App",
      category: "projects",
      description: "Secure mobile banking solution with biometric authentication",
      image: "📱",
      alt: "Mobile banking app interface"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/company/home')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <Building className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">TechCorp Industries</span>
              </div>
            </div>
            <Button onClick={() => navigate('/login')}>Employee Login</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Gallery</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Behind the Scenes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our workspace, team culture, events, and the innovative projects 
            we're building every day.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer group hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-card flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                      {item.image}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </Badge>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative">
                  <div className="aspect-video bg-gradient-card flex items-center justify-center text-8xl mb-6 rounded-lg">
                    {item.image}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        {categories.find(cat => cat.id === item.category)?.label}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        TechCorp Industries
                      </span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}

        {/* Stats Section */}
        <Card className="mt-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Our Workspace</h2>
              <p className="text-muted-foreground">
                A modern, collaborative environment designed for innovation
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50,000", label: "Sq Ft Office Space", icon: "🏢" },
                { number: "12", label: "Meeting Rooms", icon: "🪑" },
                { number: "3", label: "Innovation Labs", icon: "🔬" },
                { number: "24/7", label: "Office Access", icon: "🔑" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{stat.number}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Want to Visit Our Office?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Schedule a tour and see our innovative workspace firsthand.
            </p>
            <Button variant="secondary" size="lg" onClick={() => navigate('/company/contact')}>
              Schedule a Visit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}