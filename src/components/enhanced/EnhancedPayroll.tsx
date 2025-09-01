import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DollarSign,
  Download,
  Eye,
  FileText,
  TrendingUp,
  TrendingDown,
  Calculator,
  Clock,
  AlertCircle,
  CheckCircle,
  Sparkles,
  HelpCircle
} from "lucide-react";

interface PayrollData {
  employeeId: string;
  period: string;
  basicSalary: number;
  allowances: {
    transportation: number;
    meal: number;
    housing: number;
    overtime: number;
  };
  deductions: {
    tax: number;
    sss: number;
    philhealth: number;
    pagibig: number;
    lates: number;
    loans: number;
  };
  netPay: number;
  status: 'paid' | 'pending' | 'processing';
  payDate: string;
}

const mockPayrollData: PayrollData[] = [
  {
    employeeId: "EMP-001",
    period: "December 2024",
    basicSalary: 45000,
    allowances: {
      transportation: 2000,
      meal: 1500,
      housing: 5000,
      overtime: 3000
    },
    deductions: {
      tax: 5000,
      sss: 1500,
      philhealth: 1000,
      pagibig: 1000,
      lates: 0,
      loans: 0
    },
    netPay: 49000,
    status: 'paid',
    payDate: '2024-12-15'
  },
  {
    employeeId: "EMP-001",
    period: "November 2024",
    basicSalary: 45000,
    allowances: {
      transportation: 2000,
      meal: 1500,
      housing: 5000,
      overtime: 1500
    },
    deductions: {
      tax: 4800,
      sss: 1500,
      philhealth: 1000,
      pagibig: 1000,
      lates: 200,
      loans: 0
    },
    netPay: 46500,
    status: 'paid',
    payDate: '2024-11-15'
  }
];

export function EnhancedPayroll() {
  const [selectedPayroll, setSelectedPayroll] = useState<PayrollData | null>(null);
  const [showAIExplanation, setShowAIExplanation] = useState(false);
  
  const currentPayroll = mockPayrollData[0];
  const totalAllowances = Object.values(currentPayroll.allowances).reduce((sum, val) => sum + val, 0);
  const totalDeductions = Object.values(currentPayroll.deductions).reduce((sum, val) => sum + val, 0);
  const grossPay = currentPayroll.basicSalary + totalAllowances;

  const aiExplanation = `Your December 2024 salary breakdown:

🏢 **Base Salary**: ₱45,000
📈 **Total Allowances**: ₱${totalAllowances.toLocaleString()} 
   - Transportation: ₱2,000
   - Meal: ₱1,500  
   - Housing: ₱5,000
   - Overtime: ₱3,000 (15 hours × ₱200/hour)

💰 **Gross Pay**: ₱${grossPay.toLocaleString()}

📉 **Total Deductions**: ₱${totalDeductions.toLocaleString()}
   - Income Tax: ₱5,000 (11.1% effective rate)
   - SSS: ₱1,500
   - PhilHealth: ₱1,000  
   - Pag-IBIG: ₱1,000
   - Late Deductions: ₱0

💵 **Net Pay**: ₱${currentPayroll.netPay.toLocaleString()}

**Key Changes This Month:**
- Your overtime increased by ₱1,500 compared to November
- No late deductions this month (great improvement!)
- Tax rate slightly higher due to increased gross income`;

  return (
    <div className="space-y-6">
      {/* Current Payroll Summary */}
      <Card className="bg-gradient-to-r from-success/5 to-success/10 border-success/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-success" />
              Current Payroll - {currentPayroll.period}
            </div>
            <Badge variant="secondary" className="bg-success/10 text-success">
              <CheckCircle className="w-4 h-4 mr-1" />
              {currentPayroll.status}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success">₱{currentPayroll.netPay.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Net Pay</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">₱{grossPay.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Gross Pay</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">₱{totalAllowances.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Total Allowances</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">₱{totalDeductions.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Total Deductions</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Eye className="w-4 h-4 mr-2" />
                  View Detailed Payslip
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Payslip - {currentPayroll.period}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Employee Info */}
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">Employee Information</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>Employee ID: {currentPayroll.employeeId}</div>
                      <div>Pay Period: {currentPayroll.period}</div>
                      <div>Pay Date: {currentPayroll.payDate}</div>
                      <div>Status: <Badge variant="secondary">{currentPayroll.status}</Badge></div>
                    </div>
                  </div>

                  {/* Salary Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-success">Earnings</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Basic Salary</span>
                          <span>₱{currentPayroll.basicSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transportation Allowance</span>
                          <span>₱{currentPayroll.allowances.transportation.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Meal Allowance</span>
                          <span>₱{currentPayroll.allowances.meal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Housing Allowance</span>
                          <span>₱{currentPayroll.allowances.housing.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overtime Pay</span>
                          <span>₱{currentPayroll.allowances.overtime.toLocaleString()}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Gross Pay</span>
                          <span>₱{grossPay.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-destructive">Deductions</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Income Tax</span>
                          <span>₱{currentPayroll.deductions.tax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SSS Contribution</span>
                          <span>₱{currentPayroll.deductions.sss.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PhilHealth</span>
                          <span>₱{currentPayroll.deductions.philhealth.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pag-IBIG</span>
                          <span>₱{currentPayroll.deductions.pagibig.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Late Deductions</span>
                          <span>₱{currentPayroll.deductions.lates.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Loan Deductions</span>
                          <span>₱{currentPayroll.deductions.loans.toLocaleString()}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Total Deductions</span>
                          <span>₱{totalDeductions.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>NET PAY</span>
                      <span className="text-success">₱{currentPayroll.netPay.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>

            <Button 
              variant="outline"
              onClick={() => setShowAIExplanation(true)}
              className="bg-primary/5 hover:bg-primary/10"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI Explanation
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Salary Explanation Dialog */}
      <Dialog open={showAIExplanation} onOpenChange={setShowAIExplanation}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-primary" />
              AI Salary Breakdown Explanation
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm font-mono">{aiExplanation}</pre>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAIExplanation(false)}>
                Close
              </Button>
              <Button>
                <HelpCircle className="w-4 h-4 mr-2" />
                Ask Follow-up Question
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payroll History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary" />
            Payroll History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPayrollData.map((payroll, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{payroll.period}</h4>
                    <p className="text-sm text-muted-foreground">
                      Net: ₱{payroll.netPay.toLocaleString()} • Paid: {payroll.payDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={payroll.status === 'paid' ? 'secondary' : 'destructive'}>
                    {payroll.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Salary Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-success" />
            Salary Trends & Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-success mr-2" />
                <span className="text-2xl font-bold text-success">+5.4%</span>
              </div>
              <p className="text-sm text-muted-foreground">YTD Growth</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold">₱47,750</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Monthly</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calculator className="w-6 h-6 text-warning mr-2" />
                <span className="text-2xl font-bold">86%</span>
              </div>
              <p className="text-sm text-muted-foreground">Tax Efficiency</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}