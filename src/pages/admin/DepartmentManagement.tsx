import { useState } from "react";
import { 
  ColumnDef, 
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable 
} from "@tanstack/react-table";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Building2, Users, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Department = {
  id: string;
  name: string;
  head: string;
  employeeCount: number;
  budget: number;
  status: "active" | "inactive";
  description: string;
};

const sampleDepartments: Department[] = [
  {
    id: "DEPT001",
    name: "Engineering",
    head: "Sarah Wilson",
    employeeCount: 45,
    budget: 2500000,
    status: "active",
    description: "Develops and maintains all technical products and platforms."
  },
  {
    id: "DEPT002",
    name: "Human Resources",
    head: "Mike Johnson",
    employeeCount: 8,
    budget: 800000,
    status: "active",
    description: "Manages recruitment, employee relations, and organizational development."
  },
  {
    id: "DEPT003",
    name: "Marketing",
    head: "Jessica Davis",
    employeeCount: 12,
    budget: 1200000,
    status: "active",
    description: "Drives brand awareness and customer acquisition strategies."
  },
  {
    id: "DEPT004",
    name: "Sales",
    head: "Robert Chen",
    employeeCount: 18,
    budget: 900000,
    status: "active",
    description: "Manages customer relationships and revenue generation."
  },
  {
    id: "DEPT005",
    name: "Operations",
    head: "Linda Martinez",
    employeeCount: 15,
    budget: 750000,
    status: "inactive",
    description: "Oversees daily business operations and process optimization."
  },
];

export default function DepartmentManagement() {
  const [departments, setDepartments] = useState<Department[]>(sampleDepartments);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  const columns: ColumnDef<Department>[] = [
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => {
        const dept = row.original;
        return (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">{dept.name}</p>
              <p className="text-sm text-muted-foreground">{dept.id}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "head",
      header: "Department Head",
      cell: ({ row }) => {
        const head = row.getValue("head") as string;
        return (
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{head}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "employeeCount",
      header: "Employees",
      cell: ({ row }) => {
        const count = row.getValue("employeeCount") as number;
        return (
          <Badge variant="secondary">
            {count} {count === 1 ? 'employee' : 'employees'}
          </Badge>
        );
      },
    },
    {
      accessorKey: "budget",
      header: "Annual Budget",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("budget"));
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(amount);
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge variant={status === "active" ? "success" : "secondary"}>
            {status}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const department = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleEdit(department)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-destructive"
                onClick={() => handleDelete(department.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: departments,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleEdit = (department: Department) => {
    setSelectedDepartment(department);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (departmentId: string) => {
    setDepartments(departments.filter(dept => dept.id !== departmentId));
  };

  const DepartmentForm = ({ department }: { department?: Department }) => (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue={department?.name} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="head" className="text-right">Department Head</Label>
        <Input id="head" defaultValue={department?.head} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="budget" className="text-right">Annual Budget</Label>
        <Input id="budget" type="number" defaultValue={department?.budget} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        <Label htmlFor="description" className="text-right pt-2">Description</Label>
        <Textarea 
          id="description" 
          defaultValue={department?.description} 
          className="col-span-3"
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="Department Management"
        subtitle="Organize and manage company departments and their structures"
        actions={
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Department</DialogTitle>
                <DialogDescription>
                  Enter the department information below to add it to the system.
                </DialogDescription>
              </DialogHeader>
              <DepartmentForm />
              <DialogFooter>
                <Button type="submit">Add Department</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <DataTable 
        table={table} 
        columns={columns} 
        data={departments}
        searchPlaceholder="Search departments..."
      />

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Department</DialogTitle>
            <DialogDescription>
              Update the department information below.
            </DialogDescription>
          </DialogHeader>
          <DepartmentForm department={selectedDepartment || undefined} />
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarLayout>
  );
}