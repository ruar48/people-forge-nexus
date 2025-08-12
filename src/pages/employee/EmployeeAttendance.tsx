import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Clock, Search, Download, Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function EmployeeAttendance() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const attendanceRecords = [
    { date: "Dec 15, 2024", timeIn: "9:00 AM", timeOut: "6:30 PM", totalHours: "8.5", status: "Present", breaks: "1h" },
    { date: "Dec 14, 2024", timeIn: "9:15 AM", timeOut: "6:45 PM", totalHours: "8.5", status: "Present", breaks: "1h" },
    { date: "Dec 13, 2024", timeIn: "9:00 AM", timeOut: "6:00 PM", totalHours: "8", status: "Present", breaks: "1h" },
    { date: "Dec 12, 2024", timeIn: "9:30 AM", timeOut: "6:30 PM", totalHours: "8", status: "Late", breaks: "1h" },
    { date: "Dec 11, 2024", timeIn: "9:00 AM", timeOut: "6:30 PM", totalHours: "8.5", status: "Present", breaks: "1h" },
    { date: "Dec 10, 2024", timeIn: "-", timeOut: "-", totalHours: "0", status: "Absent", breaks: "-" },
    { date: "Dec 9, 2024", timeIn: "9:00 AM", timeOut: "3:00 PM", totalHours: "5", status: "Half Day", breaks: "1h" },
    { date: "Dec 8, 2024", timeIn: "9:00 AM", timeOut: "6:30 PM", totalHours: "8.5", status: "Present", breaks: "1h" }
  ];

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.status.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Present":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "Late":
        return <AlertCircle className="w-4 h-4 text-warning" />;
      case "Absent":
        return <XCircle className="w-4 h-4 text-destructive" />;
      case "Half Day":
        return <Clock className="w-4 h-4 text-primary" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Present":
        return "success";
      case "Late":
        return "secondary";
      case "Absent":
        return "destructive";
      case "Half Day":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="My Attendance"
          subtitle="Track your daily attendance and work hours"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Attendance" }
          ]}
          actions={
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" />
              Export Records
            </Button>
          }
        />

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success" />
                Present Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">22</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-warning" />
                Late Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">3</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Total Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">180.5</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">91.7%</div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Clock In/Out Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Button className="bg-success hover:bg-success/90">
                <CheckCircle className="w-4 h-4 mr-2" />
                Clock In
              </Button>
              <Button variant="outline">
                <XCircle className="w-4 h-4 mr-2" />
                Clock Out
              </Button>
              <div className="flex-1 text-center">
                <p className="text-sm text-muted-foreground">Current Time</p>
                <p className="text-lg font-semibold text-foreground">9:30 AM</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant="success">Clocked In</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Records */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by date or status..."
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
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="half day">Half Day</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Time In</TableHead>
                    <TableHead>Time Out</TableHead>
                    <TableHead>Total Hours</TableHead>
                    <TableHead>Breaks</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{record.date}</TableCell>
                      <TableCell>{record.timeIn}</TableCell>
                      <TableCell>{record.timeOut}</TableCell>
                      <TableCell>{record.totalHours}</TableCell>
                      <TableCell>{record.breaks}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(record.status)}
                          <Badge variant={getStatusVariant(record.status) as any}>
                            {record.status}
                          </Badge>
                        </div>
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