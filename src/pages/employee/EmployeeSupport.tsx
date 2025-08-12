import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { MessageSquare, Search, Plus, Eye, Clock, CheckCircle, XCircle, AlertCircle, Send } from "lucide-react";

export default function EmployeeSupport() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const supportTickets = [
    {
      id: "SUP-2024-015",
      subject: "Unable to access payroll system",
      category: "Technical",
      priority: "High",
      status: "Open",
      createdDate: "Dec 15, 2024",
      lastUpdate: "Dec 15, 2024",
      assignedTo: "IT Support",
      description: "I'm unable to log into the payroll system. Getting error message 'Invalid credentials' even though I'm using the correct password."
    },
    {
      id: "SUP-2024-014",
      subject: "Request for additional monitor",
      category: "Equipment",
      priority: "Medium",
      status: "In Progress",
      createdDate: "Dec 12, 2024",
      lastUpdate: "Dec 14, 2024",
      assignedTo: "Facilities",
      description: "I would like to request an additional monitor for my workstation to improve productivity."
    },
    {
      id: "SUP-2024-013",
      subject: "Leave balance discrepancy",
      category: "HR",
      priority: "Medium",
      status: "Resolved",
      createdDate: "Dec 10, 2024",
      lastUpdate: "Dec 11, 2024",
      assignedTo: "HR Team",
      description: "There seems to be a discrepancy in my leave balance. The system shows 15 days but I believe it should be 18."
    },
    {
      id: "SUP-2024-012",
      subject: "Office heating issue",
      category: "Facilities",
      priority: "Low",
      status: "Closed",
      createdDate: "Dec 8, 2024",
      lastUpdate: "Dec 9, 2024",
      assignedTo: "Facilities",
      description: "The heating in the engineering department is not working properly. Temperature is too cold."
    }
  ];

  const filteredTickets = supportTickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-warning" />;
      case "Resolved":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "Closed":
        return <XCircle className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive";
      case "In Progress":
        return "secondary";
      case "Resolved":
        return "success";
      case "Closed":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="Support Center"
          subtitle="Get help with technical issues and general inquiries"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Support" }
          ]}
          actions={
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Ticket
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Support Ticket</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="equipment">Equipment</SelectItem>
                        <SelectItem value="facilities">Facilities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please provide detailed information about your issue..."
                      className="min-h-24"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => setIsCreateDialogOpen(false)}
                    >
                      Submit Ticket
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsCreateDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          }
        />

        {/* Support Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                Total Tickets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{supportTickets.length}</div>
              <p className="text-sm text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-destructive" />
                Open
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{supportTickets.filter(t => t.status === 'Open').length}</div>
              <p className="text-sm text-muted-foreground">Awaiting response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="w-5 h-5 mr-2 text-warning" />
                In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">{supportTickets.filter(t => t.status === 'In Progress').length}</div>
              <p className="text-sm text-muted-foreground">Being worked on</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success" />
                Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{supportTickets.filter(t => t.status === 'Resolved' || t.status === 'Closed').length}</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Support Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>My Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by subject, ticket ID, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div className="font-medium text-foreground">{ticket.id}</div>
                        <div className="text-sm text-muted-foreground">Created: {ticket.createdDate}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-foreground">{ticket.subject}</div>
                        <div className="text-sm text-muted-foreground">Assigned to: {ticket.assignedTo}</div>
                      </TableCell>
                      <TableCell>{ticket.category}</TableCell>
                      <TableCell>
                        <Badge variant={getPriorityVariant(ticket.priority) as any}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(ticket.status)}
                          <Badge variant={getStatusVariant(ticket.status) as any}>
                            {ticket.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>{ticket.lastUpdate}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mr-2">
                              <Eye className="w-4 h-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Support Ticket Details</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              {/* Ticket Info */}
                              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground">Ticket ID</p>
                                  <p className="font-medium">{ticket.id}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Category</p>
                                  <p className="font-medium">{ticket.category}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Priority</p>
                                  <Badge variant={getPriorityVariant(ticket.priority) as any}>
                                    {ticket.priority}
                                  </Badge>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Status</p>
                                  <div className="flex items-center space-x-2">
                                    {getStatusIcon(ticket.status)}
                                    <Badge variant={getStatusVariant(ticket.status) as any}>
                                      {ticket.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Created Date</p>
                                  <p className="font-medium">{ticket.createdDate}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Assigned To</p>
                                  <p className="font-medium">{ticket.assignedTo}</p>
                                </div>
                              </div>

                              {/* Subject & Description */}
                              <div>
                                <h4 className="font-semibold mb-2">Subject</h4>
                                <p className="text-foreground">{ticket.subject}</p>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">Description</h4>
                                <p className="text-muted-foreground p-3 bg-muted/30 rounded-lg">{ticket.description}</p>
                              </div>

                              {/* Reply Section */}
                              {ticket.status !== 'Closed' && (
                                <div>
                                  <h4 className="font-semibold mb-3">Add Reply</h4>
                                  <div className="space-y-3">
                                    <Textarea 
                                      placeholder="Type your reply or additional information..."
                                      className="min-h-20"
                                    />
                                    <Button>
                                      <Send className="w-4 h-4 mr-2" />
                                      Send Reply
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
}