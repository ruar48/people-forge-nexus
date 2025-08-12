import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { PageHeader } from "@/components/ui/page-header";
import SidebarLayout from "@/components/layout/SidebarLayout";
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
  Building,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  const recentActivities = [
    { date: "Dec 15, 2024", action: "Clocked In", time: "9:00 AM", status: "success" },
    { date: "Dec 14, 2024", action: "Leave Request Approved", time: "2:30 PM", status: "success" },
    { date: "Dec 13, 2024", action: "Payslip Generated", time: "5:00 PM", status: "info" },
    { date: "Dec 12, 2024", action: "Profile Updated", time: "11:15 AM", status: "info" },
    { date: "Dec 11, 2024", action: "Clocked Out", time: "6:30 PM", status: "success" }
  ];

  return (
    <SidebarLayout type="employee">
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

        {/* Quick Actions & Recent Activity */}
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
              <Button 
                variant="outline" 
                className="w-full justify-start hover-scale transition-transform duration-200"
                onClick={() => navigate('/employee/leaves')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Request Leave
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover-scale transition-transform duration-200"
                onClick={() => navigate('/employee/attendance')}
              >
                <Clock className="w-4 h-4 mr-2" />
                Clock In/Out
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover-scale transition-transform duration-200"
                onClick={() => navigate('/employee/payroll')}
              >
                <DollarSign className="w-4 h-4 mr-2" />
                View Payslips
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover-scale transition-transform duration-200"
                onClick={() => navigate('/employee/profile')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start hover-scale transition-transform duration-200"
                onClick={() => navigate('/employee/support')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50 hover:shadow-soft transition-all duration-200">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-success' : 
                        activity.status === 'warning' ? 'bg-warning' : 'bg-primary'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
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
    </SidebarLayout>
  );
}