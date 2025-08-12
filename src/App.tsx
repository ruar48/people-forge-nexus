import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortalSelection from "./pages/PortalSelection";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CompanyPortfolio from "./pages/CompanyPortfolio";
import EmployeeManagement from "./pages/admin/EmployeeManagement";
import DepartmentManagement from "./pages/admin/DepartmentManagement";
import AttendanceManagement from "./pages/admin/AttendanceManagement";
import PayrollManagement from "./pages/admin/PayrollManagement";
import ReportsManagement from "./pages/admin/ReportsManagement";
import PortfolioManagement from "./pages/admin/PortfolioManagement";
import IDGenerator from "./pages/admin/IDGenerator";
import Settings from "./pages/admin/Settings";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import EmployeeDepartment from "./pages/employee/EmployeeDepartment";
import EmployeeAttendance from "./pages/employee/EmployeeAttendance";
import EmployeePayroll from "./pages/employee/EmployeePayroll";
import EmployeeLeaves from "./pages/employee/EmployeeLeaves";
import EmployeeNotifications from "./pages/employee/EmployeeNotifications";
import EmployeeSupport from "./pages/employee/EmployeeSupport";
import EmployeePortfolio from "./pages/employee/EmployeePortfolio";
import EmployeeSettings from "./pages/employee/EmployeeSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortalSelection />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/employees" element={<EmployeeManagement />} />
          <Route path="/admin/departments" element={<DepartmentManagement />} />
          <Route path="/admin/attendance" element={<AttendanceManagement />} />
          <Route path="/admin/payroll" element={<PayrollManagement />} />
          <Route path="/admin/reports" element={<ReportsManagement />} />
          <Route path="/admin/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/admin/id-generator" element={<IDGenerator />} />
          <Route path="/admin/settings" element={<Settings />} />
          
          {/* Employee Routes */}
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />
          <Route path="/employee/department" element={<EmployeeDepartment />} />
          <Route path="/employee/attendance" element={<EmployeeAttendance />} />
          <Route path="/employee/payroll" element={<EmployeePayroll />} />
          <Route path="/employee/leaves" element={<EmployeeLeaves />} />
          <Route path="/employee/notifications" element={<EmployeeNotifications />} />
          <Route path="/employee/support" element={<EmployeeSupport />} />
          <Route path="/employee/portfolio" element={<EmployeePortfolio />} />
          <Route path="/employee/settings" element={<EmployeeSettings />} />
          
          {/* Shared Routes */}
          <Route path="/portfolio" element={<CompanyPortfolio />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
