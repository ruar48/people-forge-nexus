import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { PageHeader } from "@/components/ui/page-header";
import MainLayout from "@/components/layout/MainLayout";
import { 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Download,
  Edit,
  CheckCircle,
  AlertCircle,
  Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Employee Dashboard"
          subtitle="Welcome back, Sarah! Here's your personal overview."
          breadcrumbs={[
            { label: "Portal Selection", href: "/" },
            { label: "Employee Dashboard" }
          ]}
          actions={
            <>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Download ID Card
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </>
          }
        />

        {/* Personal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Attendance This Month"
            value="22/24"
            subtitle="91.7% attendance rate"
            icon={<CheckCircle className="w-6 h-6" />}
            trend={{ value: 2.3, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Leave Balance"
            value="18"
            subtitle="Days remaining"
            icon={<Calendar className="w-6 h-6" />}
            variant="primary"
          />
          <StatCard
            title="Hours This Week"
            value="38.5"
            subtitle="Target: 40 hours"
            icon={<Clock className="w-6 h-6" />}
            variant="warning"
          />
          <StatCard
            title="Pending Requests"
            value="2"
            subtitle="Awaiting approval"
            icon={<AlertCircle className="w-6 h-6" />}
            variant="default"
          />
        </div>

        {/* Quick Actions & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Personal Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Request Leave
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Clock In/Out
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="w-4 h-4 mr-2" />
                View Payslips
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </Card>

          {/* Recent Announcements */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                Company Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    title: "Q4 All-Hands Meeting", 
                    content: "Join us for the quarterly review and planning session.",
                    date: "Dec 15, 2024",
                    priority: "high"
                  },
                  { 
                    title: "Holiday Schedule Released", 
                    content: "Check the updated holiday calendar for 2025.",
                    date: "Dec 10, 2024",
                    priority: "medium"
                  },
                  { 
                    title: "New Health Benefits", 
                    content: "Enhanced medical coverage starting January 2025.",
                    date: "Dec 8, 2024",
                    priority: "medium"
                  },
                  { 
                    title: "Office Renovation Update", 
                    content: "Temporary workspace changes effective next week.",
                    date: "Dec 5, 2024",
                    priority: "low"
                  }
                ].map((announcement, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{announcement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                        <span className="text-xs text-muted-foreground">{announcement.date}</span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ml-4 mt-2 ${
                        announcement.priority === 'high' ? 'bg-destructive' :
                        announcement.priority === 'medium' ? 'bg-warning' :
                        'bg-success'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Information & Company Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                    <p className="text-sm text-muted-foreground">Engineering Department</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Employee ID</p>
                    <p className="text-sm text-muted-foreground">ENG-2024-001</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Join Date</p>
                    <p className="text-sm text-muted-foreground">March 15, 2022</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Manager</p>
                    <p className="text-sm text-muted-foreground">Alex Rodriguez</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">New York Office</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Portfolio Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Company Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">TechCorp Industries</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Leading the future of technology solutions since 2015. Committed to innovation, 
                    excellence, and creating meaningful impact in the digital world.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <p className="text-2xl font-bold text-primary">8+</p>
                    <p className="text-xs text-muted-foreground">Years of Excellence</p>
                  </div>
                  <div className="p-3 bg-gradient-card rounded-lg">
                    <p className="text-2xl font-bold text-success">250+</p>
                    <p className="text-xs text-muted-foreground">Team Members</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/portfolio')}
                >
                  View Full Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}