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
import { QrCode, Download, RefreshCw, Building2, User } from "lucide-react";

export default function IDGenerator() {
  const [idFormat, setIdFormat] = useState({
    prefix: "EMP",
    length: 3,
    department: "ENG",
    separator: ""
  });
  
  const [generatedIds, setGeneratedIds] = useState<string[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState({
    name: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    id: "EMP001",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  });

  const generateID = () => {
    const randomNum = Math.floor(Math.random() * Math.pow(10, idFormat.length))
      .toString()
      .padStart(idFormat.length, '0');
    
    const newId = `${idFormat.prefix}${idFormat.separator}${idFormat.department}${idFormat.separator}${randomNum}`;
    setGeneratedIds([newId, ...generatedIds.slice(0, 9)]);
    setSelectedEmployee(prev => ({ ...prev, id: newId }));
  };

  const downloadIDCard = () => {
    // In a real app, this would generate and download a PDF
    alert("ID Card download functionality would be implemented here");
  };

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="ID Generator"
        subtitle="Generate unique employee IDs and printable ID cards"
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
                  onValueChange={(value) => setIdFormat({...idFormat, separator: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">None</SelectItem>
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
                  {idFormat.prefix}{idFormat.separator}{idFormat.department}{idFormat.separator}{"X".repeat(idFormat.length)}
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
              <Building2 className="w-5 h-5 mr-2 text-primary" />
              ID Card Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* ID Card Design */}
            <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl text-white shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">TechCorp Industries</h3>
                  <p className="text-sm opacity-90">Employee ID Card</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                  <img 
                    src={selectedEmployee.photo} 
                    alt={selectedEmployee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{selectedEmployee.name}</h4>
                  <p className="text-sm opacity-90">{selectedEmployee.position}</p>
                  <p className="text-xs opacity-75">{selectedEmployee.department}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-75">Employee ID</p>
                  <p className="font-mono font-bold text-lg">{selectedEmployee.id}</p>
                </div>
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="employee-select">Select Employee</Label>
                <Select onValueChange={(value) => {
                  // In a real app, this would fetch employee data
                  setSelectedEmployee({
                    name: value,
                    position: "Senior Developer",
                    department: "Engineering",
                    id: generatedIds[0] || "EMP001",
                    photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${value}`
                  });
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="John Doe">John Doe</SelectItem>
                    <SelectItem value="Sarah Wilson">Sarah Wilson</SelectItem>
                    <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                    <SelectItem value="Emily Brown">Emily Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={downloadIDCard}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <QrCode className="w-4 h-4 mr-2" />
                  Print Card
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