import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Building, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Globe,
  ArrowLeft,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyPortfolio() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Company Portfolio"
          subtitle="Discover our journey, values, and achievements that define TechCorp Industries."
          actions={
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4" />
              Back to Portal
            </Button>
          }
        />

        {/* Hero Section */}
        <Card className="mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <CardContent className="relative p-8">
            <div className="text-center max-w-4xl mx-auto">
              <Building className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold text-foreground mb-4">TechCorp Industries</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Pioneering innovative technology solutions that transform businesses and empower communities 
                worldwide. Since 2015, we've been at the forefront of digital transformation.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">Years of Innovation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-success">250+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-warning">500+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-destructive">50+</p>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create cutting-edge technology solutions that solve real-world problems 
                and drive sustainable growth for businesses globally.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-success" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading technology partner that transforms ideas into impactful 
                digital experiences, shaping the future of innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Innovation:</strong> Embracing creativity and forward-thinking</p>
                <p><strong>Excellence:</strong> Delivering quality in everything we do</p>
                <p><strong>Integrity:</strong> Building trust through transparency</p>
                <p><strong>Collaboration:</strong> Achieving more together</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-6 h-6 mr-2 text-primary" />
              Leadership Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Michael Chen",
                  position: "Chief Executive Officer",
                  bio: "Visionary leader with 15+ years in technology strategy and business development.",
                  image: "👨‍💼"
                },
                {
                  name: "Sarah Williams",
                  position: "Chief Technology Officer",
                  bio: "Innovation expert specializing in AI, cloud architecture, and digital transformation.",
                  image: "👩‍💻"
                },
                {
                  name: "David Rodriguez",
                  position: "Chief People Officer",
                  bio: "HR strategist focused on building inclusive culture and employee empowerment.",
                  image: "👨‍🎓"
                }
              ].map((leader, index) => (
                <div key={index} className="text-center p-6 bg-gradient-card rounded-lg">
                  <div className="text-4xl mb-4">{leader.image}</div>
                  <h4 className="font-semibold text-foreground mb-1">{leader.name}</h4>
                  <p className="text-sm text-primary mb-3">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Awards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Achievements & Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  year: "2024",
                  title: "Tech Innovation Award",
                  description: "Recognized for breakthrough AI solutions in healthcare technology."
                },
                {
                  year: "2023",
                  title: "Best Workplace Culture",
                  description: "Awarded for outstanding employee satisfaction and inclusive practices."
                },
                {
                  year: "2023",
                  title: "Sustainability Champion",
                  description: "Leading carbon-neutral operations and green technology initiatives."
                },
                {
                  year: "2022",
                  title: "Customer Excellence Award",
                  description: "Highest client satisfaction scores in enterprise software solutions."
                }
              ].map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">{achievement.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-6 h-6 mr-2 text-primary" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">contact@techcorp.com</p>
                <p className="text-sm text-muted-foreground">careers@techcorp.com</p>
              </div>
              <div className="text-center p-4">
                <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4568</p>
              </div>
              <div className="text-center p-4">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground mb-2">Headquarters</h4>
                <p className="text-sm text-muted-foreground">123 Tech Avenue</p>
                <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}