import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CompanyContact() {
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
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact TechCorp Industries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                        <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        <SelectItem value="consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-budget">Project Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="over-500k">Over $500,000</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="w-5 h-5 mr-2 text-primary" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Headquarters</p>
                    <p className="text-sm text-muted-foreground">
                      123 Tech Avenue<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567<br />
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      contact@techcorp.com<br />
                      sales@techcorp.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-foreground mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope and complexity. Most projects range from 3-12 months, with smaller implementations taking 4-8 weeks."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes, we provide comprehensive maintenance and support packages to ensure your solutions continue to perform optimally."
                },
                {
                  question: "Can you work with our existing systems?",
                  answer: "Absolutely! We specialize in integration and can work with your current infrastructure to enhance rather than replace."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and more."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}