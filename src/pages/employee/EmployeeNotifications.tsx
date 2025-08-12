import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Bell, Search, Eye, MessageSquare, DollarSign, Users, Settings, Check, CheckCheck } from "lucide-react";

export default function EmployeeNotifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const notifications = [
    {
      id: "NOT-001",
      title: "Payslip Generated for December 2024",
      message: "Your payslip for December 2024 has been generated and is ready for download.",
      category: "Payroll",
      date: "Dec 15, 2024",
      time: "2:30 PM",
      read: false,
      priority: "high"
    },
    {
      id: "NOT-002",
      title: "Leave Request Approved",
      message: "Your annual leave request for December 20-24, 2024 has been approved by your manager.",
      category: "HR",
      date: "Dec 14, 2024",
      time: "10:15 AM",
      read: false,
      priority: "medium"
    },
    {
      id: "NOT-003",
      title: "Department Meeting Reminder",
      message: "Engineering team meeting scheduled for tomorrow at 10:00 AM in Conference Room A.",
      category: "Department",
      date: "Dec 13, 2024",
      time: "4:45 PM",
      read: true,
      priority: "medium"
    },
    {
      id: "NOT-004",
      title: "Performance Review Scheduled",
      message: "Your quarterly performance review has been scheduled for December 18, 2024 at 2:00 PM.",
      category: "HR",
      date: "Dec 12, 2024",
      time: "9:20 AM",
      read: true,
      priority: "high"
    },
    {
      id: "NOT-005",
      title: "New Company Policy Update",
      message: "Updated work-from-home policy has been published. Please review the changes in the employee handbook.",
      category: "HR",
      date: "Dec 10, 2024",
      time: "1:15 PM",
      read: true,
      priority: "medium"
    },
    {
      id: "NOT-006",
      title: "Birthday Celebration",
      message: "Join us in celebrating Michael Chen's birthday today at 3:00 PM in the break room.",
      category: "Department",
      date: "Dec 9, 2024",
      time: "11:30 AM",
      read: true,
      priority: "low"
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || notification.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Payroll":
        return <DollarSign className="w-4 h-4" />;
      case "HR":
        return <Users className="w-4 h-4" />;
      case "Department":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Payroll":
        return "text-success";
      case "HR":
        return "text-primary";
      case "Department":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive";
      case "medium":
        return "bg-warning";
      case "low":
        return "bg-success";
      default:
        return "bg-muted";
    }
  };

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Notifications"
          subtitle="Stay updated with important announcements and messages"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Notifications" }
          ]}
          actions={
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Check className="w-4 h-4" />
                Mark All Read
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          }
        />

        {/* Notification Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Bell className="w-5 h-5 mr-2 text-primary" />
                Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{notifications.length}</div>
              <p className="text-sm text-muted-foreground">All notifications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-warning" />
                Unread
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">{unreadCount}</div>
              <p className="text-sm text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-success" />
                Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{notifications.filter(n => n.category === 'Payroll').length}</div>
              <p className="text-sm text-muted-foreground">Payroll updates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                HR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{notifications.filter(n => n.category === 'HR').length}</div>
              <p className="text-sm text-muted-foreground">HR announcements</p>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <CardTitle>All Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="payroll">Payroll</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="department">Department</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 border rounded-lg transition-all duration-200 hover:shadow-soft ${
                    !notification.read ? 'bg-primary/5 border-primary/20' : 'bg-background border-border'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`p-2 rounded-full bg-muted/30 ${getCategoryColor(notification.category)}`}>
                        {getCategoryIcon(notification.category)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`} />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{notification.category}</Badge>
                          <span className="text-xs text-muted-foreground">{notification.date} at {notification.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {notification.read ? (
                        <CheckCheck className="w-4 h-4 text-success" />
                      ) : (
                        <Button variant="ghost" size="sm">
                          <Check className="w-4 h-4" />
                        </Button>
                      )}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Notification Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className={`p-3 rounded-full bg-muted/30 ${getCategoryColor(notification.category)}`}>
                                {getCategoryIcon(notification.category)}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{notification.title}</h3>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="outline">{notification.category}</Badge>
                                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`} />
                                  <span className="text-sm text-muted-foreground">{notification.priority} priority</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-foreground">Message</label>
                              <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted/30 rounded-lg">
                                {notification.message}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-foreground">Date</label>
                                <p className="text-sm text-muted-foreground">{notification.date}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">Time</label>
                                <p className="text-sm text-muted-foreground">{notification.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                              <div className="flex items-center space-x-2">
                                {notification.read ? (
                                  <div className="flex items-center space-x-2 text-success">
                                    <CheckCheck className="w-4 h-4" />
                                    <span className="text-sm">Read</span>
                                  </div>
                                ) : (
                                  <Button size="sm">
                                    <Check className="w-4 h-4 mr-2" />
                                    Mark as Read
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
}