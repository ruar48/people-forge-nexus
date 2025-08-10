import { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  Users,
  Building2,
  Clock,
  DollarSign,
  FileText,
  Settings,
  IdCard,
  Calendar,
  Bell,
  Search,
  Menu,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Globe,
  UserCircle,
  ClipboardList,
  Award,
  HeadphonesIcon,
} from "lucide-react";

interface SidebarLayoutProps {
  children: ReactNode;
  type: "admin" | "employee";
}

const adminMenuItems = [
  { path: "/admin", icon: LayoutDashboard, label: "Dashboard", badge: null },
  { path: "/admin/employees", icon: Users, label: "Employees", badge: "125" },
  { path: "/admin/departments", icon: Building2, label: "Departments", badge: null },
  { path: "/admin/attendance", icon: Clock, label: "Attendance", badge: null },
  { path: "/admin/payroll", icon: DollarSign, label: "Payroll", badge: null },
  { path: "/admin/id-generator", icon: IdCard, label: "ID Generator", badge: null },
  { path: "/admin/reports", icon: FileText, label: "Reports", badge: null },
  { path: "/admin/portfolio-management", icon: Globe, label: "Portfolio", badge: null },
  { path: "/admin/settings", icon: Settings, label: "Settings", badge: null },
];

const employeeMenuItems = [
  { path: "/employee", icon: LayoutDashboard, label: "Dashboard", badge: null },
  { path: "/employee/profile", icon: UserCircle, label: "My Profile", badge: null },
  { path: "/employee/attendance", icon: Clock, label: "Attendance", badge: null },
  { path: "/employee/leave", icon: Calendar, label: "Leave Requests", badge: "2" },
  { path: "/employee/payroll", icon: DollarSign, label: "Payroll", badge: null },
  { path: "/employee/announcements", icon: Bell, label: "Announcements", badge: "3" },
  { path: "/portfolio", icon: Globe, label: "Company Portfolio", badge: null },
  { path: "/employee/support", icon: HeadphonesIcon, label: "Support", badge: null },
];

export default function SidebarLayout({ children, type }: SidebarLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = type === "admin" ? adminMenuItems : employeeMenuItems;

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => {
    const sidebarWidth = mobile ? "w-64" : collapsed ? "w-16" : "w-64";
    
    return (
      <div className={cn("flex flex-col h-full bg-card border-r", sidebarWidth)}>
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            {(!collapsed || mobile) && (
              <div>
                <h2 className="font-bold text-foreground">TechCorp HRIS</h2>
                <p className="text-xs text-muted-foreground">
                  {type === "admin" ? "Admin Panel" : "Employee Portal"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Tooltip key={item.path} delayDuration={0}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.path}
                    onClick={() => mobile && setMobileOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                      "hover:bg-muted group",
                      isActive && "bg-primary/10 text-primary border border-primary/20",
                      (!collapsed || mobile) ? "justify-start" : "justify-center"
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {(!collapsed || mobile) && (
                      <>
                        <span className="font-medium">{item.label}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </NavLink>
                </TooltipTrigger>
                {collapsed && !mobile && (
                  <TooltipContent side="right">
                    <p>{item.label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </nav>

        {/* Collapse Button (Desktop only) */}
        {!mobile && (
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="w-full justify-center"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:flex-col md:z-50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className={cn("md:pl-64", collapsed && "md:pl-16")}>
        {/* Top Navigation */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <SidebarContent mobile />
                </SheetContent>
              </Sheet>

              {/* Search */}
              <div className="relative w-64 hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees, departments..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs">
                  3
                </Badge>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">
                        {type === "admin" ? "Admin User" : "John Doe"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {type === "admin" ? "admin@techcorp.com" : "john.doe@techcorp.com"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}