import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Users, Search, Eye, Mail, Phone, Building } from "lucide-react";

export default function EmployeeDepartment() {
  const [searchTerm, setSearchTerm] = useState("");

  const departmentMembers = [
    { id: "ENG-001", name: "Sarah Johnson", position: "Senior Frontend Developer", email: "sarah.johnson@company.com", phone: "+1 234-567-8901", status: "Active", avatar: "SJ" },
    { id: "ENG-002", name: "Alex Rodriguez", position: "Department Manager", email: "alex.rodriguez@company.com", phone: "+1 234-567-8902", status: "Active", avatar: "AR" },
    { id: "ENG-003", name: "Michael Chen", position: "Backend Developer", email: "michael.chen@company.com", phone: "+1 234-567-8903", status: "Active", avatar: "MC" },
    { id: "ENG-004", name: "Emily Davis", position: "UI/UX Designer", email: "emily.davis@company.com", phone: "+1 234-567-8904", status: "On Leave", avatar: "ED" },
    { id: "ENG-005", name: "David Wilson", position: "DevOps Engineer", email: "david.wilson@company.com", phone: "+1 234-567-8905", status: "Active", avatar: "DW" },
    { id: "ENG-006", name: "Lisa Thompson", position: "QA Engineer", email: "lisa.thompson@company.com", phone: "+1 234-567-8906", status: "Active", avatar: "LT" }
  ];

  const filteredMembers = departmentMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="My Department"
          subtitle="Engineering Department Team Members"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "My Department" }
          ]}
        />

        {/* Department Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Total Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{departmentMembers.length}</div>
              <p className="text-sm text-muted-foreground">Active team members</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Department
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold text-foreground">Engineering</div>
              <p className="text-sm text-muted-foreground">Software Development</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Manager
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold text-foreground">Alex Rodriguez</div>
              <p className="text-sm text-muted-foreground">Department Manager</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, position, or employee ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Members Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow key={member.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">{member.avatar}</span>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{member.name}</div>
                            <div className="text-sm text-muted-foreground">{member.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-foreground">{member.position}</div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Mail className="w-3 h-3 mr-1" />
                            {member.email}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="w-3 h-3 mr-1" />
                            {member.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={member.status === "Active" ? "success" : "secondary"}>
                          {member.status}
                        </Badge>
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
                              <DialogTitle>Employee Profile</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                  <span className="text-lg font-medium text-primary">{member.avatar}</span>
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                                  <p className="text-muted-foreground">{member.position}</p>
                                  <Badge variant={member.status === "Active" ? "success" : "secondary"} className="mt-1">
                                    {member.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-foreground">Employee ID</label>
                                  <p className="text-sm text-muted-foreground">{member.id}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Department</label>
                                  <p className="text-sm text-muted-foreground">Engineering</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Email</label>
                                  <p className="text-sm text-muted-foreground">{member.email}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-foreground">Phone</label>
                                  <p className="text-sm text-muted-foreground">{member.phone}</p>
                                </div>
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