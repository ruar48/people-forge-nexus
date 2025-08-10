import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, User, Building, Shield } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

export default function PortalSelection() {
  const navigate = useNavigate();

  return (
    <MainLayout className="flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <Building className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl font-bold text-foreground mb-4">
            People Forge Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Human Resource Information System for modern organizations. 
            Choose your portal to access the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Admin Portal */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-strong group cursor-pointer animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Admin Portal</CardTitle>
              <CardDescription className="text-base">
                Complete administrative dashboard for HR management, employee records, and system administration.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Employee Management
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building className="w-4 h-4 mr-2 text-primary" />
                  Department & Payroll Management
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Reports & Analytics
                </div>
              </div>
              <Button 
                variant="gradient" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/admin')}
              >
                Access Admin Portal
              </Button>
            </CardContent>
          </Card>

          {/* Employee Portal */}
          <Card className="relative overflow-hidden border-2 hover:border-success/50 transition-all duration-300 hover:shadow-strong group cursor-pointer animate-scale-in [animation-delay:150ms]">
            <div className="absolute inset-0 bg-gradient-success opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success/20 transition-colors">
                <User className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-2xl">Employee Portal</CardTitle>
              <CardDescription className="text-base">
                Self-service portal for employees to manage personal information, attendance, and requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="w-4 h-4 mr-2 text-success" />
                  Personal Dashboard
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building className="w-4 h-4 mr-2 text-success" />
                  Attendance & Leave Management
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-success" />
                  Company Portfolio & Support
                </div>
              </div>
              <Button 
                variant="success" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/employee')}
              >
                Access Employee Portal
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/portfolio')}
            className="mr-4"
          >
            View Company Portfolio
          </Button>
          <Button variant="ghost" size="lg">
            Need Help?
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}