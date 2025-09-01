import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileText,
  Award,
  Briefcase,
  UserPlus,
  Download,
  Eye,
  Plus,
  Sparkles,
  Calendar,
  Building
} from "lucide-react";

interface DocumentTemplate {
  id: string;
  type: 'certificate' | 'contract' | 'offer' | 'memo' | 'policy';
  title: string;
  description: string;
  icon: React.ReactNode;
  fields: DocumentField[];
}

interface DocumentField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'select' | 'number';
  required: boolean;
  options?: string[];
}

const documentTemplates: DocumentTemplate[] = [
  {
    id: 'employment-certificate',
    type: 'certificate',
    title: 'Employment Certificate',
    description: 'Generate certificates for employee verification',
    icon: <Award className="w-5 h-5" />,
    fields: [
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
      { name: 'position', label: 'Position', type: 'text', required: true },
      { name: 'department', label: 'Department', type: 'text', required: true },
      { name: 'startDate', label: 'Employment Start Date', type: 'date', required: true },
      { name: 'purpose', label: 'Certificate Purpose', type: 'textarea', required: true },
      { name: 'salary', label: 'Monthly Salary', type: 'number', required: false }
    ]
  },
  {
    id: 'employment-contract',
    type: 'contract',
    title: 'Employment Contract',
    description: 'Create employment contracts for new hires',
    icon: <Briefcase className="w-5 h-5" />,
    fields: [
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
      { name: 'position', label: 'Position Title', type: 'text', required: true },
      { name: 'department', label: 'Department', type: 'text', required: true },
      { name: 'startDate', label: 'Start Date', type: 'date', required: true },
      { name: 'contractType', label: 'Contract Type', type: 'select', required: true, options: ['Permanent', 'Fixed-term', 'Probationary', 'Part-time'] },
      { name: 'salary', label: 'Monthly Salary', type: 'number', required: true },
      { name: 'workingHours', label: 'Working Hours', type: 'text', required: true },
      { name: 'benefits', label: 'Benefits Package', type: 'textarea', required: true }
    ]
  },
  {
    id: 'job-offer',
    type: 'offer',
    title: 'Job Offer Letter',
    description: 'Generate professional job offer letters',
    icon: <UserPlus className="w-5 h-5" />,
    fields: [
      { name: 'candidateName', label: 'Candidate Name', type: 'text', required: true },
      { name: 'position', label: 'Position Title', type: 'text', required: true },
      { name: 'department', label: 'Department', type: 'text', required: true },
      { name: 'startDate', label: 'Proposed Start Date', type: 'date', required: true },
      { name: 'salary', label: 'Offered Salary', type: 'number', required: true },
      { name: 'benefits', label: 'Benefits Summary', type: 'textarea', required: true },
      { name: 'reportingTo', label: 'Reports To', type: 'text', required: true },
      { name: 'validUntil', label: 'Offer Valid Until', type: 'date', required: true }
    ]
  },
  {
    id: 'company-memo',
    type: 'memo',
    title: 'Company Memorandum',
    description: 'Create official company memos and announcements',
    icon: <FileText className="w-5 h-5" />,
    fields: [
      { name: 'memoNumber', label: 'Memo Number', type: 'text', required: true },
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'recipient', label: 'To (Recipients)', type: 'text', required: true },
      { name: 'content', label: 'Memo Content', type: 'textarea', required: true },
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: false },
      { name: 'priority', label: 'Priority Level', type: 'select', required: true, options: ['High', 'Medium', 'Low'] }
    ]
  }
];

export function DocumentGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const generateDocument = () => {
    // In a real app, this would generate the actual document
    console.log('Generating document with data:', formData);
    setIsPreviewOpen(true);
  };

  const renderPreview = () => {
    if (!selectedTemplate) return null;

    switch (selectedTemplate.id) {
      case 'employment-certificate':
        return (
          <div className="space-y-4 p-6 bg-white text-black">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">TechCorp Industries</h1>
              <p className="text-gray-600">Employment Certificate</p>
            </div>
            
            <div className="space-y-4">
              <p>TO WHOM IT MAY CONCERN:</p>
              
              <p>
                This is to certify that <strong>{formData.employeeName || '[Employee Name]'}</strong> is 
                currently employed with TechCorp Industries as <strong>{formData.position || '[Position]'}</strong> in 
                the <strong>{formData.department || '[Department]'}</strong> department since <strong>{formData.startDate || '[Start Date]'}</strong>.
              </p>
              
              {formData.salary && (
                <p>
                  The employee receives a monthly compensation of <strong>₱{Number(formData.salary).toLocaleString()}</strong>.
                </p>
              )}
              
              <p>
                This certification is issued for <strong>{formData.purpose || '[Purpose]'}</strong>.
              </p>
              
              <div className="mt-8">
                <p>Issued this {new Date().toLocaleDateString()} at Manila, Philippines.</p>
              </div>
              
              <div className="mt-12 text-right">
                <div className="inline-block">
                  <div className="border-b border-black w-48 mb-2"></div>
                  <p>HR Manager</p>
                  <p>TechCorp Industries</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'job-offer':
        return (
          <div className="space-y-4 p-6 bg-white text-black">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">TechCorp Industries</h1>
              <p className="text-gray-600">Job Offer Letter</p>
            </div>
            
            <div className="space-y-4">
              <p>Dear {formData.candidateName || '[Candidate Name]'},</p>
              
              <p>
                We are pleased to offer you the position of <strong>{formData.position || '[Position]'}</strong> in 
                our <strong>{formData.department || '[Department]'}</strong> department.
              </p>
              
              <div className="my-6">
                <h3 className="font-semibold mb-2">Position Details:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Position: {formData.position || '[Position]'}</li>
                  <li>Department: {formData.department || '[Department]'}</li>
                  <li>Start Date: {formData.startDate || '[Start Date]'}</li>
                  <li>Reporting To: {formData.reportingTo || '[Manager Name]'}</li>
                  <li>Monthly Salary: ₱{formData.salary ? Number(formData.salary).toLocaleString() : '[Salary]'}</li>
                </ul>
              </div>
              
              <div className="my-6">
                <h3 className="font-semibold mb-2">Benefits Package:</h3>
                <p>{formData.benefits || '[Benefits details]'}</p>
              </div>
              
              <p>
                This offer is valid until <strong>{formData.validUntil || '[Valid Until Date]'}</strong>.
              </p>
              
              <p>We look forward to having you join our team!</p>
              
              <div className="mt-8">
                <p>Sincerely,</p>
                <div className="mt-12">
                  <div className="border-b border-black w-48 mb-2"></div>
                  <p>HR Manager</p>
                  <p>TechCorp Industries</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6 text-center">
            <p>Document preview will appear here</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-primary" />
            AI Document Generator
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Generate professional HR documents with AI assistance
          </p>
        </CardHeader>
      </Card>

      {/* Template Selection */}
      {!selectedTemplate && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Document Template</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentTemplates.map((template) => (
              <Card 
                key={template.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedTemplate(template)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {template.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{template.title}</h4>
                      <Badge variant="outline">{template.type}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Document Form */}
      {selectedTemplate && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  {selectedTemplate.icon}
                  <span className="ml-2">{selectedTemplate.title}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedTemplate(null)}
                >
                  Change Template
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedTemplate.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
                  </Label>
                  
                  {field.type === 'text' && (
                    <Input
                      id={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.required}
                    />
                  )}
                  
                  {field.type === 'textarea' && (
                    <Textarea
                      id={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.required}
                      rows={3}
                    />
                  )}
                  
                  {field.type === 'date' && (
                    <Input
                      id={field.name}
                      type="date"
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.required}
                    />
                  )}
                  
                  {field.type === 'number' && (
                    <Input
                      id={field.name}
                      type="number"
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.required}
                    />
                  )}
                  
                  {field.type === 'select' && (
                    <Select 
                      value={formData[field.name] || ''} 
                      onValueChange={(value) => handleFieldChange(field.name, value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${field.label}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
              
              <div className="flex gap-2 pt-4">
                <Button onClick={generateDocument} className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Document
                </Button>
                <Button variant="outline">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Enhance
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Live Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Live Preview
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg bg-gray-50 min-h-[400px] overflow-auto">
                {renderPreview()}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}