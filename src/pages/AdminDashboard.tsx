import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { PageHeader } from "@/components/ui/page-header";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Users, 
  Building2, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  Clock, 
  FileText,
  Plus,
  Download,
  Settings,
  Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Admin Dashboard"
          subtitle="Welcome back! Here's an overview of your organization."
          breadcrumbs={[
            { label: "Portal Selection", href: "/" },
            { label: "Admin Dashboard" }
          ]}
          actions={
            <>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </>
          }
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Employees"
            value="248"
            subtitle="Active employees"
            icon={<Users className="w-6 h-6" />}
            trend={{ value: 12, isPositive: true }}
            variant="primary"
          />
          <StatCard
            title="Departments"
            value="8"
            subtitle="Active departments"
            icon={<Building2 className="w-6 h-6" />}
            variant="default"
          />
          <StatCard
            title="Present Today"
            value="234"
            subtitle="94.4% attendance"
            icon={<UserCheck className="w-6 h-6" />}
            trend={{ value: 2.1, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Pending Requests"
            value="12"
            subtitle="Leave requests"
            icon={<Clock className="w-6 h-6" />}
            variant="warning"
          />
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Add New Employee
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="w-4 h-4 mr-2" />
                Create Department
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate ID Card
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Review Leave Requests
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="w-4 h-4 mr-2" />
                Process Payroll
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New employee onboarded", name: "Sarah Johnson", time: "2 hours ago", type: "success" },
                  { action: "Leave request submitted", name: "Mike Chen", time: "4 hours ago", type: "warning" },
                  { action: "Department updated", name: "Engineering Team", time: "6 hours ago", type: "default" },
                  { action: "Payroll processed", name: "Monthly Payroll", time: "1 day ago", type: "success" },
                  { action: "ID card generated", name: "Alex Rodriguez", time: "2 days ago", type: "default" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-success' :
                        activity.type === 'warning' ? 'bg-warning' :
                        'bg-primary'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.name}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-primary" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Engineering", employees: 45, present: 42, percentage: 93.3 },
                { name: "Sales & Marketing", employees: 32, present: 30, percentage: 93.8 },
                { name: "Human Resources", employees: 12, present: 12, percentage: 100 },
                { name: "Finance", employees: 18, present: 17, percentage: 94.4 },
                { name: "Operations", employees: 28, present: 26, percentage: 92.9 },
                { name: "Customer Support", employees: 22, present: 21, percentage: 95.5 },
                { name: "Design", employees: 15, present: 14, percentage: 93.3 },
                { name: "Legal", employees: 8, present: 8, percentage: 100 }
              ].map((dept, index) => (
                <div key={index} className="p-4 bg-gradient-card rounded-lg border hover:shadow-soft transition-all duration-300">
                  <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {dept.present}/{dept.employees} present
                    </p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${dept.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{dept.percentage}% attendance</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}