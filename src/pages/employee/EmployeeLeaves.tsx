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
import { Calendar, Search, Plus, Eye, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function EmployeeLeaves() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);

  const leaveRecords = [
    {
      id: "LV-2024-015",
      type: "Annual Leave",
      startDate: "Dec 20, 2024",
      endDate: "Dec 24, 2024",
      days: 5,
      status: "Approved",
      appliedDate: "Dec 10, 2024",
      reason: "Christmas vacation with family"
    },
    {
      id: "LV-2024-014",
      type: "Sick Leave",
      startDate: "Nov 15, 2024",
      endDate: "Nov 16, 2024",
      days: 2,
      status: "Approved",
      appliedDate: "Nov 15, 2024",
      reason: "Flu symptoms"
    },
    {
      id: "LV-2024-013",
      type: "Personal Leave",
      startDate: "Oct 28, 2024",
      endDate: "Oct 28, 2024",
      days: 1,
      status: "Approved",
      appliedDate: "Oct 25, 2024",
      reason: "Personal errands"
    },
    {
      id: "LV-2024-012",
      type: "Annual Leave",
      startDate: "Dec 30, 2024",
      endDate: "Jan 2, 2025",
      days: 4,
      status: "Pending",
      appliedDate: "Dec 15, 2024",
      reason: "New Year vacation"
    }
  ];

  const leaveBalance = {
    annual: { used: 12, total: 30, remaining: 18 },
    sick: { used: 2, total: 15, remaining: 13 },
    personal: { used: 3, total: 10, remaining: 7 },
    emergency: { used: 0, total: 5, remaining: 5 }
  };

  const filteredRecords = leaveRecords.filter(record => {
    const matchesSearch = record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.reason.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "Pending":
        return <Clock className="w-4 h-4 text-warning" />;
      case "Rejected":
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "secondary";
      case "Rejected":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="My Leaves"
          subtitle="Manage your leave applications and balances"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Leaves" }
          ]}
          actions={
            <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Apply for Leave
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Apply for Leave</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="leaveType">Leave Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="annual">Annual Leave</SelectItem>
                        <SelectItem value="sick">Sick Leave</SelectItem>
                        <SelectItem value="personal">Personal Leave</SelectItem>
                        <SelectItem value="emergency">Emergency Leave</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input type="date" id="startDate" />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date</Label>
                      <Input type="date" id="endDate" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="reason">Reason</Label>
                    <Textarea 
                      id="reason" 
                      placeholder="Please provide a reason for your leave application..."
                      className="min-h-20"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => setIsApplyDialogOpen(false)}
                    >
                      Submit Application
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsApplyDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          }
        />

        {/* Leave Balance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Annual Leave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{leaveBalance.annual.remaining}</div>
              <p className="text-sm text-muted-foreground">{leaveBalance.annual.used}/{leaveBalance.annual.total} used</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${(leaveBalance.annual.used / leaveBalance.annual.total) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-warning" />
                Sick Leave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">{leaveBalance.sick.remaining}</div>
              <p className="text-sm text-muted-foreground">{leaveBalance.sick.used}/{leaveBalance.sick.total} used</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-warning h-2 rounded-full" 
                  style={{ width: `${(leaveBalance.sick.used / leaveBalance.sick.total) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="w-5 h-5 mr-2 text-success" />
                Personal Leave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{leaveBalance.personal.remaining}</div>
              <p className="text-sm text-muted-foreground">{leaveBalance.personal.used}/{leaveBalance.personal.total} used</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-success h-2 rounded-full" 
                  style={{ width: `${(leaveBalance.personal.used / leaveBalance.personal.total) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-destructive" />
                Emergency Leave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">{leaveBalance.emergency.remaining}</div>
              <p className="text-sm text-muted-foreground">{leaveBalance.emergency.used}/{leaveBalance.emergency.total} used</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-destructive h-2 rounded-full" 
                  style={{ width: `${(leaveBalance.emergency.used / leaveBalance.emergency.total) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leave Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Leave Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by leave type, ID, or reason..."
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
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Leave ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div className="font-medium text-foreground">{record.id}</div>
                        <div className="text-sm text-muted-foreground">Applied: {record.appliedDate}</div>
                      </TableCell>
                      <TableCell>{record.type}</TableCell>
                      <TableCell>{record.startDate}</TableCell>
                      <TableCell>{record.endDate}</TableCell>
                      <TableCell>{record.days} day{record.days > 1 ? 's' : ''}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(record.status)}
                          <Badge variant={getStatusVariant(record.status) as any}>
                            {record.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Leave Application Details</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-foreground">Application ID</label>
                                  <p className="text-sm text-muted-foreground">{record.id}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Leave Type</label>
                                  <p className="text-sm text-muted-foreground">{record.type}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Start Date</label>
                                  <p className="text-sm text-muted-foreground">{record.startDate}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">End Date</label>
                                  <p className="text-sm text-muted-foreground">{record.endDate}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Total Days</label>
                                  <p className="text-sm text-muted-foreground">{record.days} day{record.days > 1 ? 's' : ''}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Status</label>
                                  <div className="flex items-center space-x-2 mt-1">
                                    {getStatusIcon(record.status)}
                                    <Badge variant={getStatusVariant(record.status) as any}>
                                      {record.status}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">Reason</label>
                                <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted/30 rounded-lg">{record.reason}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">Applied Date</label>
                                <p className="text-sm text-muted-foreground">{record.appliedDate}</p>
                              </div>
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