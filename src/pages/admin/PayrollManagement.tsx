import { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Download, FileText, TrendingUp } from "lucide-react";

const payrollData = [
  {
    id: "1",
    employee: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    baseSalary: "$8,500",
    overtime: "$320",
    bonus: "$500",
    deductions: "$850",
    netPay: "$8,470",
    status: "Paid",
    payDate: "2024-01-31"
  },
  {
    id: "2",
    employee: "Sarah Wilson",
    position: "UI/UX Designer",
    department: "Design",
    baseSalary: "$6,800",
    overtime: "$0",
    bonus: "$300",
    deductions: "$680",
    netPay: "$6,420",
    status: "Paid",
    payDate: "2024-01-31"
  },
  {
    id: "3",
    employee: "Mike Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    baseSalary: "$7,200",
    overtime: "$150",
    bonus: "$400",
    deductions: "$720",
    netPay: "$7,030",
    status: "Processing",
    payDate: "2024-02-01"
  },
  {
    id: "4",
    employee: "Emily Brown",
    position: "HR Specialist",
    department: "HR",
    baseSalary: "$5,500",
    overtime: "$100",
    bonus: "$200",
    deductions: "$550",
    netPay: "$5,250",
    status: "Paid",
    payDate: "2024-01-31"
  },
  {
    id: "5",
    employee: "David Lee",
    position: "Sales Executive",
    department: "Sales",
    baseSalary: "$4,800",
    overtime: "$200",
    bonus: "$800",
    deductions: "$480",
    netPay: "$5,320",
    status: "Pending",
    payDate: "2024-02-01"
  }
];

const columns = [
  {
    header: "Employee",
    accessorKey: "employee",
  },
  {
    header: "Position",
    accessorKey: "position",
  },
  {
    header: "Base Salary",
    accessorKey: "baseSalary",
  },
  {
    header: "Overtime",
    accessorKey: "overtime",
  },
  {
    header: "Bonus",
    accessorKey: "bonus",
  },
  {
    header: "Deductions",
    accessorKey: "deductions",
  },
  {
    header: "Net Pay",
    accessorKey: "netPay",
    cell: ({ row }: any) => (
      <span className="font-semibold text-success">{row.getValue("netPay")}</span>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }: any) => {
      const status = row.getValue("status") as string;
      const variant = status === "Paid" ? "success" : 
                     status === "Processing" ? "secondary" : "default";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    header: "Pay Date",
    accessorKey: "payDate",
  },
  {
    header: "Actions",
    id: "actions",
    cell: () => (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Download className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <FileText className="w-4 h-4" />
        </Button>
      </div>
    ),
  }
];

export default function PayrollManagement() {
  const [data] = useState(payrollData);

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="Payroll Management"
        subtitle="Manage employee salaries, bonuses, and payroll processing"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Payroll", href: "/admin/payroll" }
        ]}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">$892,340</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Salary</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,498</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid</CardTitle>
            <Badge className="h-4 w-4 p-0 text-xs bg-success">✓</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">118</div>
            <p className="text-xs text-muted-foreground">Employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Badge className="h-4 w-4 p-0 text-xs bg-secondary">⏳</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">7</div>
            <p className="text-xs text-muted-foreground">Employees</p>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-primary" />
            Monthly Payroll Records
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button>
              Process Payroll
            </Button>
          </div>
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