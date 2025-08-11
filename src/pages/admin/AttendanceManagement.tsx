import { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, TrendingUp } from "lucide-react";

const attendanceData = [
  {
    id: "1",
    employee: "John Doe",
    department: "Engineering",
    date: "2024-01-15",
    timeIn: "09:00 AM",
    timeOut: "05:30 PM",
    totalHours: "8.5h",
    status: "Present",
    overtime: "0.5h"
  },
  {
    id: "2",
    employee: "Sarah Wilson",
    department: "Design",
    date: "2024-01-15",
    timeIn: "09:15 AM",
    timeOut: "05:15 PM",
    totalHours: "8h",
    status: "Present",
    overtime: "0h"
  },
  {
    id: "3",
    employee: "Mike Johnson",
    department: "Marketing",
    date: "2024-01-15",
    timeIn: "-",
    timeOut: "-",
    totalHours: "0h",
    status: "Absent",
    overtime: "0h"
  },
  {
    id: "4",
    employee: "Emily Brown",
    department: "HR",
    date: "2024-01-15",
    timeIn: "08:45 AM",
    timeOut: "06:00 PM",
    totalHours: "9.25h",
    status: "Present",
    overtime: "1.25h"
  },
  {
    id: "5",
    employee: "David Lee",
    department: "Sales",
    date: "2024-01-15",
    timeIn: "10:00 AM",
    timeOut: "05:00 PM",
    totalHours: "7h",
    status: "Late",
    overtime: "0h"
  }
];

const columns = [
  {
    header: "Employee",
    accessorKey: "employee",
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Time In",
    accessorKey: "timeIn",
  },
  {
    header: "Time Out",
    accessorKey: "timeOut",
  },
  {
    header: "Total Hours",
    accessorKey: "totalHours",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }: any) => {
      const status = row.getValue("status") as string;
      const variant = status === "Present" ? "success" : 
                     status === "Late" ? "secondary" : "destructive";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    header: "Overtime",
    accessorKey: "overtime",
  },
];

export default function AttendanceManagement() {
  const [data] = useState(attendanceData);

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="Attendance Management"
        subtitle="Track and manage employee attendance records"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Attendance", href: "/admin/attendance" }
        ]}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">125</div>
            <p className="text-xs text-muted-foreground">+2% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">8</div>
            <p className="text-xs text-muted-foreground">-1 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">12</div>
            <p className="text-xs text-muted-foreground">Same as yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Hours</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2h</div>
            <p className="text-xs text-muted-foreground">+0.1h from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            Daily Attendance Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            searchPlaceholder="Search employees..."
          />
        </CardContent>
      </Card>
    </SidebarLayout>
  );
}