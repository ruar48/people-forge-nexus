import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, User, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleLogin = () => {
    if (userType === "admin") {
      navigate("/admin");
    } else if (userType === "employee") {
      navigate("/employee");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-strong">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <p className="text-muted-foreground mt-2">
                Sign in to your TechCorp Industries account
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user-type">User Type</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    defaultValue={userType === "admin" ? "admin@techcorp.com" : "employee@techcorp.com"}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    defaultValue="password"
                  />
                </div>
              </div>
            </div>

            <Button 
              className="w-full transition-all duration-200 hover:shadow-medium" 
              onClick={handleLogin}
              disabled={!userType}
            >
              Sign In
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Demo credentials are pre-filled</p>
              <p className="mt-1">Select user type and click Sign In</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}