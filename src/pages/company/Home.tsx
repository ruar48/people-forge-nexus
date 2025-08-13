import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building, 
  Users, 
  Award, 
  Globe,
  Zap,
  Shield,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">TechCorp Industries</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate('/company/home')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/company/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/company/services')}>Services</Button>
              <Button variant="ghost" onClick={() => navigate('/company/gallery')}>Gallery</Button>
              <Button variant="ghost" onClick={() => navigate('/company/contact')}>Contact</Button>
            </div>
            <Button onClick={() => navigate('/login')}>
              Employee Login
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-background/10" />
        <div className="relative container mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-6">
            Leading Technology Solutions Since 2015
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Transforming Ideas Into
            <span className="text-primary block">Digital Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We partner with businesses to create innovative technology solutions that drive growth, 
            enhance efficiency, and deliver exceptional user experiences across all digital platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/company/about')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "8+", label: "Years of Excellence", icon: Award },
              { number: "250+", label: "Team Members", icon: Users },
              { number: "500+", label: "Projects Delivered", icon: TrendingUp },
              { number: "50+", label: "Countries Served", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="text-3xl font-bold text-foreground">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Modernize your business processes with cutting-edge technology solutions and strategic digital initiatives."
              },
              {
                icon: Shield,
                title: "Cybersecurity Solutions",
                description: "Protect your digital assets with comprehensive security frameworks and advanced threat protection."
              },
              {
                icon: Lightbulb,
                title: "AI & Innovation",
                description: "Leverage artificial intelligence and machine learning to unlock new possibilities for your business."
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => navigate('/company/services')}>
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" size="lg" onClick={() => navigate('/company/contact')}>
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building className="w-6 h-6 text-primary" />
              <span className="font-semibold">TechCorp Industries</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 TechCorp Industries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}