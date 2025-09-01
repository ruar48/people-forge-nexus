import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Brain,
  Target,
  Award,
  Calendar,
  DollarSign,
  Clock,
  Sparkles,
  Eye,
  CheckCircle,
  XCircle
} from "lucide-react";

interface AIInsight {
  id: string;
  type: 'warning' | 'prediction' | 'recommendation' | 'celebration';
  title: string;
  description: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
  category: string;
  actionable?: boolean;
  data?: any;
}

const mockInsights: AIInsight[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Potential Resignation Risk',
    description: 'Sarah Chen and Mike Rodriguez show patterns indicating 73% likelihood of resignation within 3 months.',
    confidence: 73,
    priority: 'high',
    category: 'Retention',
    actionable: true,
    data: { employees: ['Sarah Chen', 'Mike Rodriguez'], timeframe: '3 months' }
  },
  {
    id: '2',
    type: 'prediction',
    title: 'Payroll Cost Forecast',
    description: 'Next quarter payroll costs predicted to increase by ₱45,000 due to overtime and performance bonuses.',
    confidence: 85,
    priority: 'medium',
    category: 'Financial',
    data: { amount: 45000, quarter: 'Q1 2025' }
  },
  {
    id: '3',
    type: 'recommendation',
    title: 'Training Program Needed',
    description: 'Development team would benefit from React Advanced training based on recent project challenges.',
    confidence: 68,
    priority: 'medium',
    category: 'Training',
    actionable: true,
    data: { department: 'Development', training: 'React Advanced' }
  },
  {
    id: '4',
    type: 'celebration',
    title: 'Anniversary Alerts',
    description: '3 employees celebrating work anniversaries this month. Auto-generated greetings are ready.',
    confidence: 100,
    priority: 'low',
    category: 'Recognition',
    actionable: true,
    data: { count: 3, month: 'December' }
  },
  {
    id: '5',
    type: 'warning',
    title: 'Attendance Pattern Alert',
    description: 'Marketing department shows 15% increase in Monday absences over the past month.',
    confidence: 67,
    priority: 'medium',
    category: 'Attendance',
    data: { department: 'Marketing', increase: '15%' }
  },
  {
    id: '6',
    type: 'recommendation',
    title: 'Recruitment Optimization',
    description: 'AI screened 127 resumes for Frontend Developer position. 8 candidates match requirements perfectly.',
    confidence: 91,
    priority: 'high',
    category: 'Recruitment',
    actionable: true,
    data: { position: 'Frontend Developer', screened: 127, matches: 8 }
  }
];

export function AIInsightsDashboard() {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-warning" />;
      case 'prediction': return <TrendingUp className="w-5 h-5 text-primary" />;
      case 'recommendation': return <Target className="w-5 h-5 text-success" />;
      case 'celebration': return <Award className="w-5 h-5 text-success" />;
      default: return <Brain className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string): "default" | "destructive" | "outline" | "secondary" | "success" => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  const highPriorityInsights = mockInsights.filter(insight => insight.priority === 'high');
  const otherInsights = mockInsights.filter(insight => insight.priority !== 'high');

  return (
    <div className="space-y-6">
      {/* AI Insights Header */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-primary" />
            AI Insights Dashboard
            <Badge variant="secondary" className="ml-2">Live</Badge>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Real-time AI analysis of your organization's data and patterns
          </p>
        </CardHeader>
      </Card>

      {/* High Priority Insights */}
      {highPriorityInsights.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
            Critical Insights
          </h3>
          <div className="grid gap-4">
            {highPriorityInsights.map((insight) => (
              <Card key={insight.id} className="border-l-4 border-l-destructive">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getInsightIcon(insight.type)}
                        <h4 className="font-semibold">{insight.title}</h4>
                        <Badge variant={getPriorityColor(insight.priority)}>
                          {insight.priority}
                        </Badge>
                        <Badge variant="outline">{insight.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Confidence:</span>
                          <Progress value={insight.confidence} className="w-20 h-2" />
                          <span className="text-xs font-medium">{insight.confidence}%</span>
                        </div>
                        {insight.actionable && (
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Other Insights Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-primary" />
          Additional Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherInsights.map((insight) => (
            <Card key={insight.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getInsightIcon(insight.type)}
                    <Badge variant={getPriorityColor(insight.priority)}>
                      {insight.priority}
                    </Badge>
                    <Badge variant="outline">{insight.category}</Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{insight.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Confidence:</span>
                    <Progress value={insight.confidence} className="w-16 h-2" />
                    <span className="text-xs font-medium">{insight.confidence}%</span>
                  </div>
                  {insight.actionable && (
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Performance Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-success" />
            AI Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">94%</div>
              <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">127</div>
              <p className="text-sm text-muted-foreground">Insights Generated</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">23</div>
              <p className="text-sm text-muted-foreground">Actions Recommended</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">89%</div>
              <p className="text-sm text-muted-foreground">User Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
