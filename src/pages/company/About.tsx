import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Building, 
  Target,
  Lightbulb,
  Heart,
  Users,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyAbout() {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold text-foreground mb-4">About TechCorp Industries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our journey, values, and the passionate team that drives innovation 
            and excellence in every project we undertake.
          </p>
        </div>

        {/* Company Story */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2015, TechCorp Industries began as a small team of passionate developers 
                with a vision to transform how businesses leverage technology. What started as a 
                startup in a small office has grown into a global technology partner serving clients 
                across 50+ countries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to be at the forefront of digital transformation, helping 
                businesses of all sizes unlock their potential through innovative technology solutions, 
                strategic consulting, and unwavering commitment to excellence.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Users className="w-6 h-6 mr-2 text-primary" />
              Leadership Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Chen",
                  position: "Chief Executive Officer",
                  bio: "Visionary leader with 15+ years in technology strategy and business development. Michael guides our company's strategic direction and global expansion.",
                  image: "👨‍💼"
                },
                {
                  name: "Sarah Williams",
                  position: "Chief Technology Officer",
                  bio: "Innovation expert specializing in AI, cloud architecture, and digital transformation. Sarah leads our technical excellence and research initiatives.",
                  image: "👩‍💻"
                },
                {
                  name: "David Rodriguez",
                  position: "Chief People Officer",
                  bio: "HR strategist focused on building inclusive culture and employee empowerment. David ensures we maintain our people-first approach as we grow.",
                  image: "👨‍🎓"
                }
              ].map((leader, index) => (
                <div key={index} className="text-center p-6 bg-gradient-card rounded-lg">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h4 className="font-semibold text-foreground mb-1 text-lg">{leader.name}</h4>
                  <p className="text-sm text-primary mb-3 font-medium">{leader.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Company Culture */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Company Culture & Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Why Work With Us?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flexible remote and hybrid work options</li>
                  <li>• Comprehensive health and wellness programs</li>
                  <li>• Professional development and learning opportunities</li>
                  <li>• Competitive compensation and equity packages</li>
                  <li>• Innovation time for personal projects</li>
                  <li>• Inclusive and diverse work environment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Our Work Environment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We foster a collaborative, innovative environment where every team member's 
                  contribution is valued. Our culture promotes continuous learning, creative 
                  problem-solving, and work-life balance. We believe that happy employees 
                  create exceptional results.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Recent Achievements
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
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">{achievement.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}