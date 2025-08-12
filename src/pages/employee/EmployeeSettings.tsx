import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Settings, User, Bell, Shield, Palette, Save, Eye, EyeOff } from "lucide-react";

export default function EmployeeSettings() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Settings"
          subtitle="Manage your account preferences and settings"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Settings" }
          ]}
        />

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Sarah" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="sarah.johnson@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 234-567-8901" />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Engineering" disabled />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" defaultValue="Senior Frontend Developer" disabled />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main Street, New York, NY 10001" />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Passionate frontend developer with 5+ years of experience in React and TypeScript." />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-primary" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Email Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="payroll-email">Payroll Updates</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications about payslips and salary changes</p>
                      </div>
                      <Switch id="payroll-email" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="leave-email">Leave Approvals</Label>
                        <p className="text-sm text-muted-foreground">Get notified when leave requests are approved or rejected</p>
                      </div>
                      <Switch id="leave-email" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="hr-email">HR Announcements</Label>
                        <p className="text-sm text-muted-foreground">Receive important HR policy updates and announcements</p>
                      </div>
                      <Switch id="hr-email" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="department-email">Department Updates</Label>
                        <p className="text-sm text-muted-foreground">Get updates about your department activities</p>
                      </div>
                      <Switch id="department-email" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Push Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="urgent-push">Urgent Messages</Label>
                        <p className="text-sm text-muted-foreground">Receive push notifications for urgent messages</p>
                      </div>
                      <Switch id="urgent-push" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="meeting-push">Meeting Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get reminded about upcoming meetings</p>
                      </div>
                      <Switch id="meeting-push" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="deadline-push">Task Deadlines</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications about approaching deadlines</p>
                      </div>
                      <Switch id="deadline-push" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Notification Frequency</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email-frequency">Email Frequency</Label>
                      <Select defaultValue="immediate">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="daily">Daily Digest</SelectItem>
                          <SelectItem value="weekly">Weekly Summary</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quiet-hours">Quiet Hours</Label>
                      <Select defaultValue="22-07">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Quiet Hours</SelectItem>
                          <SelectItem value="22-07">10 PM - 7 AM</SelectItem>
                          <SelectItem value="21-08">9 PM - 8 AM</SelectItem>
                          <SelectItem value="23-06">11 PM - 6 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Change Password</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <div className="relative">
                        <Input 
                          id="current-password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your current password"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                          id="new-password" 
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input 
                          id="confirm-password" 
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Enable 2FA</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Login Activity</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">New York, NY • Chrome on Windows</p>
                        </div>
                        <span className="text-xs text-muted-foreground">Active now</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Previous Session</p>
                          <p className="text-sm text-muted-foreground">New York, NY • Safari on iPhone</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Update Password
                  </Button>
                  <Button variant="outline">
                    View All Login Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-primary" />
                  Application Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Appearance</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="theme">Theme</Label>
                      <Select defaultValue="system">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="est">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">Eastern Time</SelectItem>
                          <SelectItem value="cst">Central Time</SelectItem>
                          <SelectItem value="mst">Mountain Time</SelectItem>
                          <SelectItem value="pst">Pacific Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Dashboard Preferences</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sidebar-collapsed">Collapse Sidebar by Default</Label>
                        <p className="text-sm text-muted-foreground">Start with a collapsed sidebar on desktop</p>
                      </div>
                      <Switch id="sidebar-collapsed" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="animations">Enable Animations</Label>
                        <p className="text-sm text-muted-foreground">Show smooth transitions and hover effects</p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-refresh">Auto-refresh Data</Label>
                        <p className="text-sm text-muted-foreground">Automatically update dashboard data</p>
                      </div>
                      <Switch id="auto-refresh" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Data & Privacy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics">Usage Analytics</Label>
                        <p className="text-sm text-muted-foreground">Help improve the application by sharing usage data</p>
                      </div>
                      <Switch id="analytics" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-save">Auto-save Forms</Label>
                        <p className="text-sm text-muted-foreground">Automatically save form data as you type</p>
                      </div>
                      <Switch id="auto-save" defaultChecked />
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarLayout>
  );
}