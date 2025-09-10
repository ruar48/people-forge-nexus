import { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Download, RefreshCw, Building2, User, RotateCcw, GraduationCap, Briefcase } from "lucide-react";

export default function IDGenerator() {
  const [idFormat, setIdFormat] = useState({
    prefix: "EMP",
    length: 3,
    department: "ENG",
    separator: "none"
  });
  
  const [generatedIds, setGeneratedIds] = useState<string[]>([]);
  const [idDesignType, setIdDesignType] = useState<"national" | "student" | "corporate">("national");
  const [selectedEmployee, setSelectedEmployee] = useState({
    name: "Juan Carlos Dela Cruz",
    position: "Senior Software Developer",
    department: "Engineering",
    id: "EMP001",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
    address: "123 Rizal Street, Quezon City, Metro Manila",
    emergencyContact: "Maria Dela Cruz (+63 917 123 4567)",
    issueDate: "2024-01-15",
    expiryDate: "2029-01-14",
    signature: "Juan C. Dela Cruz",
    bloodType: "O+",
    studentId: "2024-001234",
    course: "Computer Science"
  });

  const generateID = () => {
    const randomNum = Math.floor(Math.random() * Math.pow(10, idFormat.length))
      .toString()
      .padStart(idFormat.length, '0');
    
    const actualSeparator = idFormat.separator === "none" ? "" : idFormat.separator;
    const newId = `${idFormat.prefix}${actualSeparator}${idFormat.department}${actualSeparator}${randomNum}`;
    setGeneratedIds([newId, ...generatedIds.slice(0, 9)]);
    setSelectedEmployee(prev => ({ ...prev, id: newId }));
  };

  const downloadIDCard = () => {
    // In a real app, this would generate and download a PDF
    const designName = idDesignType.charAt(0).toUpperCase() + idDesignType.slice(1);
    alert(`${designName} ID card would be downloaded as PDF`);
  };

  const generateQRCode = (employee: typeof selectedEmployee) => {
    // Generate QR data with employee information
    const qrData = `https://company.com/verify/${employee.id}?name=${encodeURIComponent(employee.name)}&dept=${encodeURIComponent(employee.department)}`;
    return qrData;
  };

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="ID Generator"
        subtitle="Generate Philippine National ID-style employee cards"
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "ID Generator" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ID Format Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <QrCode className="w-5 h-5 mr-2 text-primary" />
              ID Format Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="prefix">Prefix</Label>
                <Input
                  id="prefix"
                  value={idFormat.prefix}
                  onChange={(e) => setIdFormat({...idFormat, prefix: e.target.value})}
                  placeholder="EMP"
                />
              </div>
              <div>
                <Label htmlFor="length">Number Length</Label>
                <Select
                  value={idFormat.length.toString()}
                  onValueChange={(value) => setIdFormat({...idFormat, length: parseInt(value)})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 digits</SelectItem>
                    <SelectItem value="3">3 digits</SelectItem>
                    <SelectItem value="4">4 digits</SelectItem>
                    <SelectItem value="5">5 digits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="department">Department Code</Label>
                <Select
                  value={idFormat.department}
                  onValueChange={(value) => setIdFormat({...idFormat, department: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ENG">ENG - Engineering</SelectItem>
                    <SelectItem value="PRD">PRD - Product</SelectItem>
                    <SelectItem value="DES">DES - Design</SelectItem>
                    <SelectItem value="HR">HR - Human Resources</SelectItem>
                    <SelectItem value="MKT">MKT - Marketing</SelectItem>
                    <SelectItem value="SAL">SAL - Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="separator">Separator</Label>
                <Select
                  value={idFormat.separator}
                  onValueChange={(value) => setIdFormat({...idFormat, separator: value === "none" ? "" : value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="-">Dash (-)</SelectItem>
                    <SelectItem value="_">Underscore (_)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Label>Preview Format</Label>
              <div className="mt-2 p-3 bg-muted rounded-lg">
                <code className="text-lg font-mono">
                  {idFormat.prefix}{idFormat.separator === "none" ? "" : idFormat.separator}{idFormat.department}{idFormat.separator === "none" ? "" : idFormat.separator}{"X".repeat(idFormat.length)}
                </code>
              </div>
            </div>

            <Button onClick={generateID} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Generate New ID
            </Button>

            {generatedIds.length > 0 && (
              <div>
                <Label>Recently Generated IDs</Label>
                <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                  {generatedIds.map((id, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {id}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ID Card Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              {idDesignType === "national" && <Building2 className="w-5 h-5 mr-2 text-primary" />}
              {idDesignType === "student" && <GraduationCap className="w-5 h-5 mr-2 text-primary" />}
              {idDesignType === "corporate" && <Briefcase className="w-5 h-5 mr-2 text-primary" />}
              {idDesignType === "national" && "Philippine National ID Preview"}
              {idDesignType === "student" && "Student ID Preview"}
              {idDesignType === "corporate" && "Corporate ID Preview"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label>ID Design Type</Label>
              <Select value={idDesignType} onValueChange={(value: "national" | "student" | "corporate") => setIdDesignType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">National ID Style</SelectItem>
                  <SelectItem value="student">Student ID Style</SelectItem>
                  <SelectItem value="corporate">Corporate ID Style</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Tabs defaultValue="front" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="front">Front Side</TabsTrigger>
                <TabsTrigger value="back">Back Side</TabsTrigger>
              </TabsList>
              
              {/* Front Side */}
              <TabsContent value="front" className="mt-4">
                {/* National ID Design */}
                {idDesignType === "national" && (
                  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 rounded-xl text-white shadow-lg border-2 border-blue-500 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">TECHCORP INDUSTRIES</h3>
                          <p className="text-xs opacity-90">Employee Identification</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-75">REPUBLIC OF THE PHILIPPINES</p>
                        <p className="text-xs font-semibold">EMPLOYEE ID</p>
                      </div>
                    </div>

                    {/* Photo and Details */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-20 h-24 bg-white rounded-lg overflow-hidden border-2 border-white">
                        <img 
                          src={selectedEmployee.photo} 
                          alt={selectedEmployee.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{selectedEmployee.name}</h4>
                        <p className="text-sm opacity-90 mb-1">{selectedEmployee.position}</p>
                        <p className="text-xs opacity-75 mb-2">{selectedEmployee.department}</p>
                        <div className="bg-white/20 px-2 py-1 rounded text-xs">
                          ID: <span className="font-mono font-bold">{selectedEmployee.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Signature */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="w-24 h-8 bg-white/20 rounded mb-1"></div>
                        <p className="text-xs opacity-75">Employee Signature</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-75">Issued: {selectedEmployee.issueDate}</p>
                        <p className="text-xs opacity-75">Expires: {selectedEmployee.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Student ID Design */}
                {idDesignType === "student" && (
                  <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 p-6 rounded-xl text-white shadow-lg border-2 border-green-400 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="text-center mb-4 border-b border-white/30 pb-3">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <GraduationCap className="w-6 h-6 text-white" />
                        <h3 className="text-lg font-bold">UNIVERSITY OF MANILA</h3>
                      </div>
                      <p className="text-sm opacity-90">Student Identification Card</p>
                      <p className="text-xs opacity-75">Academic Year 2024-2025</p>
                    </div>

                    {/* Photo and Student Info */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-20 h-24 bg-white rounded-lg overflow-hidden border-2 border-white">
                        <img 
                          src={selectedEmployee.photo} 
                          alt={selectedEmployee.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{selectedEmployee.name}</h4>
                        <p className="text-sm opacity-90 mb-1">Course: {selectedEmployee.course}</p>
                        <p className="text-xs opacity-75 mb-2">Department: {selectedEmployee.department}</p>
                        <div className="bg-white/20 px-2 py-1 rounded text-xs mb-1">
                          Student ID: <span className="font-mono font-bold">{selectedEmployee.studentId}</span>
                        </div>
                        <div className="bg-white/20 px-2 py-1 rounded text-xs">
                          Year Level: 4th Year
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <p className="opacity-75">Valid Until: {selectedEmployee.expiryDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="opacity-75">Issued: {selectedEmployee.issueDate}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Corporate ID Design */}
                {idDesignType === "corporate" && (
                  <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 rounded-xl text-white shadow-lg border-2 border-slate-600 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold">TECHCORP</h3>
                          <p className="text-xs opacity-90">CORPORATE ACCESS</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Photo and Corporate Details */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-20 h-24 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg overflow-hidden border-2 border-blue-400/50">
                        <img 
                          src={selectedEmployee.photo} 
                          alt={selectedEmployee.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {selectedEmployee.name}
                        </h4>
                        <p className="text-sm opacity-90 mb-1">{selectedEmployee.position}</p>
                        <p className="text-xs opacity-75 mb-2">Division: {selectedEmployee.department}</p>
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-lg text-xs border border-blue-400/30">
                          <span className="text-blue-300">ID:</span> <span className="font-mono font-bold text-white">{selectedEmployee.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Security Level */}
                    <div className="flex justify-between items-end">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <p className="text-xs text-green-400">Security Level: Executive</p>
                      </div>
                      <div className="text-right text-xs">
                        <p className="opacity-75">Valid: {selectedEmployee.issueDate} - {selectedEmployee.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Back Side */}
              <TabsContent value="back" className="mt-4">
                {/* National ID Back */}
                {idDesignType === "national" && (
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl text-gray-800 shadow-lg border-2 border-gray-300 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="text-center mb-4 border-b border-gray-400 pb-2">
                      <h3 className="text-sm font-bold text-blue-600">EMPLOYEE INFORMATION</h3>
                      <p className="text-xs text-gray-600">For Official Use Only</p>
                    </div>

                    {/* QR Code and Information */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="w-20 h-20 bg-white border-2 border-gray-400 rounded flex items-center justify-center mx-auto mb-2">
                          <QrCode className="w-16 h-16 text-gray-700" />
                        </div>
                        <p className="text-xs text-center text-gray-600">Scan for verification</p>
                        <p className="text-xs text-center text-gray-500 break-all mt-1">
                          {generateQRCode(selectedEmployee).substring(0, 30)}...
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-gray-700">ADDRESS:</p>
                          <p className="text-xs text-gray-600">{selectedEmployee.address}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">EMERGENCY CONTACT:</p>
                          <p className="text-xs text-gray-600">{selectedEmployee.emergencyContact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-400 pt-2">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-semibold text-gray-700">COMPANY:</p>
                          <p className="text-gray-600">TechCorp Industries Inc.</p>
                          <p className="text-gray-600">Manila, Philippines</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700">VALIDITY:</p>
                          <p className="text-gray-600">This ID is valid for</p>
                          <p className="text-gray-600">employment verification</p>
                        </div>
                      </div>
                      <div className="text-center mt-2 pt-2 border-t border-gray-300">
                        <p className="text-xs text-gray-500">For lost ID, contact HR immediately</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Student ID Back */}
                {idDesignType === "student" && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-green-900 shadow-lg border-2 border-green-300 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="text-center mb-4 border-b border-green-400 pb-2">
                      <h3 className="text-sm font-bold text-green-700">STUDENT INFORMATION</h3>
                      <p className="text-xs text-green-600">University of Manila</p>
                    </div>

                    {/* QR Code and Academic Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="w-20 h-20 bg-white border-2 border-green-400 rounded flex items-center justify-center mx-auto mb-2">
                          <QrCode className="w-16 h-16 text-green-700" />
                        </div>
                        <p className="text-xs text-center text-green-600">Student Verification</p>
                        <p className="text-xs text-center text-green-500 break-all mt-1">
                          {generateQRCode(selectedEmployee).substring(0, 30)}...
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-green-700">BLOOD TYPE:</p>
                          <p className="text-xs text-green-600">{selectedEmployee.bloodType}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-green-700">EMERGENCY CONTACT:</p>
                          <p className="text-xs text-green-600">{selectedEmployee.emergencyContact}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-green-700">ADDRESS:</p>
                          <p className="text-xs text-green-600">{selectedEmployee.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Academic Rules */}
                    <div className="border-t border-green-400 pt-2">
                      <div className="text-xs space-y-1">
                        <p className="font-semibold text-green-700">ACADEMIC RULES:</p>
                        <p className="text-green-600">• Present this ID when entering campus</p>
                        <p className="text-green-600">• Report lost ID to Student Services</p>
                        <p className="text-green-600">• Valid only during enrollment period</p>
                      </div>
                      <div className="text-center mt-2 pt-2 border-t border-green-300">
                        <p className="text-xs text-green-500">University of Manila © 2024</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Corporate ID Back */}
                {idDesignType === "corporate" && (
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl text-slate-800 shadow-lg border-2 border-slate-400 aspect-[1.586/1]">
                    {/* Header */}
                    <div className="text-center mb-4 border-b border-slate-400 pb-2">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded"></div>
                        <h3 className="text-sm font-bold text-slate-700">TECHCORP CORPORATE ACCESS</h3>
                      </div>
                      <p className="text-xs text-slate-600">Executive Level Clearance</p>
                    </div>

                    {/* QR Code and Corporate Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-slate-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <QrCode className="w-16 h-16 text-slate-700" />
                        </div>
                        <p className="text-xs text-center text-slate-600">Secure Access Code</p>
                        <p className="text-xs text-center text-slate-500 break-all mt-1">
                          {generateQRCode(selectedEmployee).substring(0, 30)}...
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-slate-700">ACCESS LEVEL:</p>
                          <p className="text-xs text-slate-600">Executive • All Floors</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700">DEPARTMENT:</p>
                          <p className="text-xs text-slate-600">{selectedEmployee.department} Division</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700">SECURITY CODE:</p>
                          <p className="text-xs text-slate-600 font-mono">TC-{selectedEmployee.id}</p>
                        </div>
                      </div>
                    </div>

                    {/* Corporate Policy */}
                    <div className="border-t border-slate-400 pt-2">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-semibold text-slate-700">CORPORATION:</p>
                          <p className="text-slate-600">TechCorp Industries Ltd.</p>
                          <p className="text-slate-600">Makati Business District</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700">SECURITY POLICY:</p>
                          <p className="text-slate-600">• Badge required for entry</p>
                          <p className="text-slate-600">• Report breaches immediately</p>
                        </div>
                      </div>
                      <div className="text-center mt-2 pt-2 border-t border-slate-300">
                        <p className="text-xs text-slate-500">Authorized Personnel Only • TechCorp Security Division</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="employee-select">Select Employee</Label>
                <Select onValueChange={(value) => {
                  // Sample employee data with Philippine-style information
                  const employees = {
                    "Juan Carlos Dela Cruz": {
                      name: "Juan Carlos Dela Cruz",
                      position: "Senior Software Developer",
                      department: "Engineering",
                      address: "123 Rizal Street, Quezon City, Metro Manila",
                      emergencyContact: "Maria Dela Cruz (+63 917 123 4567)",
                      signature: "Juan C. Dela Cruz",
                      bloodType: "O+",
                      studentId: "2024-001234",
                      course: "Computer Science"
                    },
                    "Maria Santos Reyes": {
                      name: "Maria Santos Reyes",
                      position: "Product Manager",
                      department: "Product",
                      address: "456 EDSA Avenue, Makati City, Metro Manila",
                      emergencyContact: "Jose Reyes (+63 918 987 6543)",
                      signature: "Maria S. Reyes",
                      bloodType: "A+",
                      studentId: "2024-001235",
                      course: "Business Administration"
                    },
                    "Carlos Miguel Hernandez": {
                      name: "Carlos Miguel Hernandez",
                      position: "UX Designer",
                      department: "Design",
                      address: "789 Bonifacio Street, Taguig City, Metro Manila",
                      emergencyContact: "Ana Hernandez (+63 919 555 1234)",
                      signature: "Carlos M. Hernandez",
                      bloodType: "B+",
                      studentId: "2024-001236",
                      course: "Fine Arts"
                    },
                    "Ana Patricia Fernandez": {
                      name: "Ana Patricia Fernandez",
                      position: "HR Manager",
                      department: "Human Resources",
                      address: "321 Ayala Avenue, Makati City, Metro Manila",
                      emergencyContact: "Luis Fernandez (+63 920 444 5678)",
                      signature: "Ana P. Fernandez",
                      bloodType: "AB+",
                      studentId: "2024-001237",
                      course: "Psychology"
                    }
                  };
                  
                  const selectedEmp = employees[value as keyof typeof employees];
                  if (selectedEmp) {
                    setSelectedEmployee({
                      ...selectedEmp,
                      id: generatedIds[0] || "EMP001",
                      photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${value}`,
                      issueDate: "2024-01-15",
                      expiryDate: "2029-01-14"
                    });
                  }
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Juan Carlos Dela Cruz">Juan Carlos Dela Cruz</SelectItem>
                    <SelectItem value="Maria Santos Reyes">Maria Santos Reyes</SelectItem>
                    <SelectItem value="Carlos Miguel Hernandez">Carlos Miguel Hernandez</SelectItem>
                    <SelectItem value="Ana Patricia Fernandez">Ana Patricia Fernandez</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={downloadIDCard}>
                  <Download className="w-4 h-4 mr-2" />
                  Download {idDesignType.charAt(0).toUpperCase() + idDesignType.slice(1)} ID
                </Button>
                <Button variant="outline">
                  <QrCode className="w-4 h-4 mr-2" />
                  Print Both Sides
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Generation */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Bulk ID Generation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <Label htmlFor="quantity">Number of IDs to Generate</Label>
              <Input id="quantity" type="number" placeholder="10" />
            </div>
            <Button>Generate Bulk IDs</Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export List
            </Button>
          </div>
        </CardContent>
      </Card>
    </SidebarLayout>
  );
}