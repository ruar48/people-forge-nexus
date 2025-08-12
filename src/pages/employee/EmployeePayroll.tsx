import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { DollarSign, Search, Download, Eye, Calendar, TrendingUp } from "lucide-react";

export default function EmployeePayroll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const payrollRecords = [
    {
      id: "PAY-2024-12",
      period: "December 2024",
      basicSalary: 75000,
      allowances: 15000,
      overtime: 5000,
      deductions: 12000,
      netPay: 83000,
      status: "Paid",
      payDate: "Dec 30, 2024"
    },
    {
      id: "PAY-2024-11",
      period: "November 2024",
      basicSalary: 75000,
      allowances: 12000,
      overtime: 3000,
      deductions: 11500,
      netPay: 78500,
      status: "Paid",
      payDate: "Nov 30, 2024"
    },
    {
      id: "PAY-2024-10",
      period: "October 2024",
      basicSalary: 75000,
      allowances: 14000,
      overtime: 4500,
      deductions: 12200,
      netPay: 81300,
      status: "Paid",
      payDate: "Oct 31, 2024"
    },
    {
      id: "PAY-2024-09",
      period: "September 2024",
      basicSalary: 70000,
      allowances: 13000,
      overtime: 2000,
      deductions: 11000,
      netPay: 74000,
      status: "Paid",
      payDate: "Sep 30, 2024"
    }
  ];

  const filteredRecords = payrollRecords.filter(record => {
    const matchesSearch = record.period.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const currentPay = payrollRecords[0];
  const previousPay = payrollRecords[1];
  const payIncrease = currentPay.netPay - previousPay.netPay;
  const increasePercentage = ((payIncrease / previousPay.netPay) * 100).toFixed(1);

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="My Payroll"
          subtitle="View your salary details and payslips"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Payroll" }
          ]}
          actions={
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" />
              Download All Payslips
            </Button>
          }
        />

        {/* Payroll Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-success" />
                Current Salary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">₱{currentPay.basicSalary.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Basic monthly salary</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Net Pay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">₱{currentPay.netPay.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                YTD Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">₱{(payrollRecords.reduce((sum, record) => sum + record.netPay, 0)).toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Year to date</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-success" />
                Pay Increase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">+{increasePercentage}%</div>
              <p className="text-sm text-muted-foreground">vs last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Payslip Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-primary" />
              Current Month Summary - {currentPay.period}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Basic Salary</p>
                <p className="text-xl font-bold text-foreground">₱{currentPay.basicSalary.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Allowances</p>
                <p className="text-xl font-bold text-success">₱{currentPay.allowances.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Deductions</p>
                <p className="text-xl font-bold text-warning">₱{currentPay.deductions.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Net Pay</p>
                <p className="text-xl font-bold text-primary">₱{currentPay.netPay.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payroll History */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by period or payroll ID..."
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
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pay Period</TableHead>
                    <TableHead>Basic Salary</TableHead>
                    <TableHead>Allowances</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div>
                          <div className="font-medium text-foreground">{record.period}</div>
                          <div className="text-sm text-muted-foreground">{record.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>₱{record.basicSalary.toLocaleString()}</TableCell>
                      <TableCell className="text-success">₱{record.allowances.toLocaleString()}</TableCell>
                      <TableCell className="text-warning">₱{record.deductions.toLocaleString()}</TableCell>
                      <TableCell className="font-semibold text-primary">₱{record.netPay.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="success">{record.status}</Badge>
                      </TableCell>
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
                              <DialogTitle>Payslip Details - {record.period}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              {/* Employee Info */}
                              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground">Employee Name</p>
                                  <p className="font-medium">Sarah Johnson</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Employee ID</p>
                                  <p className="font-medium">ENG-2024-001</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Department</p>
                                  <p className="font-medium">Engineering</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Pay Date</p>
                                  <p className="font-medium">{record.payDate}</p>
                                </div>
                              </div>

                              {/* Earnings */}
                              <div>
                                <h4 className="font-semibold mb-3">Earnings</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>Basic Salary</span>
                                    <span>₱{record.basicSalary.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Allowances</span>
                                    <span className="text-success">₱{record.allowances.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Overtime</span>
                                    <span className="text-success">₱{record.overtime.toLocaleString()}</span>
                                  </div>
                                  <hr />
                                  <div className="flex justify-between font-semibold">
                                    <span>Total Earnings</span>
                                    <span>₱{(record.basicSalary + record.allowances + record.overtime).toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Deductions */}
                              <div>
                                <h4 className="font-semibold mb-3">Deductions</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span className="text-warning">₱{(record.deductions * 0.6).toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>SSS</span>
                                    <span className="text-warning">₱{(record.deductions * 0.2).toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>PhilHealth</span>
                                    <span className="text-warning">₱{(record.deductions * 0.1).toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Pag-IBIG</span>
                                    <span className="text-warning">₱{(record.deductions * 0.1).toLocaleString()}</span>
                                  </div>
                                  <hr />
                                  <div className="flex justify-between font-semibold">
                                    <span>Total Deductions</span>
                                    <span className="text-warning">₱{record.deductions.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Net Pay */}
                              <div className="p-4 bg-primary/10 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-lg font-semibold">Net Pay</span>
                                  <span className="text-2xl font-bold text-primary">₱{record.netPay.toLocaleString()}</span>
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <Button className="flex-1">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download PDF
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  <Download className="w-4 h-4 mr-2" />
                                  Print
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
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