import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building, 
  Zap,
  Shield,
  Lightbulb,
  Cloud,
  Smartphone,
  Database,
  Users,
  BarChart,
  Cog,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyServices() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions and strategic digital initiatives.",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy Consulting", "Change Management"],
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with comprehensive security frameworks and advanced threat protection.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Security Training"],
      color: "text-red-500"
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence and machine learning to unlock new possibilities for your business.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Intelligent Automation"],
      color: "text-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your business growth and digital transformation.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Cloud Security"],
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
      color: "text-purple-500"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      features: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Visualization"],
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Custom enterprise software solutions designed to streamline operations and boost productivity.",
      features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Integration Services"],
      color: "text-cyan-500"
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to enhance your online presence and customer engagement.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
      color: "text-pink-500"
    },
    {
      icon: Cog,
      title: "IT Consulting",
      description: "Strategic IT consulting services to align technology with your business objectives and goals.",
      features: ["Technology Strategy", "IT Infrastructure", "Vendor Management", "Cost Optimization"],
      color: "text-indigo-500"
    }
  ];

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
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full spectrum of technology services designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Development Process</CardTitle>
            <p className="text-center text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your business needs and objectives"
                },
                {
                  step: "02", 
                  title: "Strategy",
                  description: "Developing a comprehensive technology strategy"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Building and deploying your solution"
                },
                {
                  step: "04",
                  title: "Support",
                  description: "Ongoing maintenance and optimization"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">{phase.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industries We Serve */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Industries We Serve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                "Healthcare", "Finance & Banking", "E-commerce", "Manufacturing",
                "Education", "Real Estate", "Transportation", "Government"
              ].map((industry, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg" onClick={() => navigate('/company/contact')}>
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}