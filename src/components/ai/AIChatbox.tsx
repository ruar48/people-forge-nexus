import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Bot,
  Send,
  User,
  MessageSquare,
  X,
  Minimize2,
  Maximize2,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'action' | 'suggestion';
  actionData?: any;
}

interface AIChatboxProps {
  position?: 'fixed' | 'embedded';
  userType?: 'employee' | 'admin';
}

const AI_RESPONSES = {
  leave_request: {
    content: "I can help you request leave! Based on your message, I understand you want vacation time next week. Here are the details I've prepared:",
    actionData: {
      type: "leave",
      startDate: "2024-12-23",
      endDate: "2024-12-27",
      leaveType: "vacation",
      reason: "Personal vacation time"
    }
  },
  salary_explanation: {
    content: "Let me break down your salary for this month. Your gross pay is ₱45,000, with deductions totaling ₱8,500 (taxes: ₱5,000, SSS: ₱1,500, PhilHealth: ₱1,000, Pag-IBIG: ₱1,000). Your net pay is ₱36,500. The overtime bonus this month was ₱3,000 for 15 extra hours.",
    actionData: null
  },
  policy_question: {
    content: "According to our company policy, you're entitled to 15 vacation days and 10 sick days per year. Unused vacation days can be carried over up to 5 days to the next year. For sick leave, a medical certificate is required for absences longer than 2 consecutive days.",
    actionData: null
  },
  training_recommendation: {
    content: "Based on your recent performance review and current role as Software Developer, I recommend these training programs: 1) Advanced React Development (Internal), 2) Project Management Certification (External), 3) Leadership Skills Workshop (Q1 2025). Would you like me to enroll you in any of these?",
    actionData: null
  },
  default: {
    content: "Hello! I'm your AI HR Assistant. I can help you with leave requests, payroll questions, company policies, training recommendations, and more. How can I assist you today?",
    actionData: null
  }
};

export function AIChatbox({ position = 'fixed', userType = 'employee' }: AIChatboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: AI_RESPONSES.default.content,
      sender: 'ai',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const detectMessageType = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('leave') || lowerMessage.includes('vacation') || lowerMessage.includes('time off')) {
      return 'leave_request';
    }
    if (lowerMessage.includes('salary') || lowerMessage.includes('pay') || lowerMessage.includes('payroll')) {
      return 'salary_explanation';
    }
    if (lowerMessage.includes('policy') || lowerMessage.includes('rule') || lowerMessage.includes('benefit')) {
      return 'policy_question';
    }
    if (lowerMessage.includes('training') || lowerMessage.includes('course') || lowerMessage.includes('skill')) {
      return 'training_recommendation';
    }
    return 'default';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const messageType = detectMessageType(inputValue);
      const response = AI_RESPONSES[messageType as keyof typeof AI_RESPONSES] || AI_RESPONSES.default;
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'ai',
        timestamp: new Date(),
        type: response.actionData ? 'action' : 'text',
        actionData: response.actionData
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessage = (message: Message) => (
    <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      {message.sender === 'ai' && (
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
      )}
      
      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-first' : ''}`}>
        <div className={`rounded-lg p-3 ${
          message.sender === 'user' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-foreground'
        }`}>
          <p className="text-sm">{message.content}</p>
          
          {message.actionData && message.actionData.type === 'leave' && (
            <div className="mt-3 p-3 bg-background rounded border space-y-2">
              <h4 className="font-medium text-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Leave Request Draft
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Type:</strong> {message.actionData.leaveType}</p>
                <p><strong>Start:</strong> {message.actionData.startDate}</p>
                <p><strong>End:</strong> {message.actionData.endDate}</p>
                <p><strong>Reason:</strong> {message.actionData.reason}</p>
              </div>
              <Button size="sm" className="w-full mt-2">
                <FileText className="w-4 h-4 mr-2" />
                Submit Leave Request
              </Button>
            </div>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground mt-1 px-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {message.sender === 'user' && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </div>
  );

  if (position === 'embedded') {
    return (
      <Card className="h-[500px] flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            AI HR Assistant
            <Badge variant="secondary" className="ml-2">Online</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-4 pt-0">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map(renderMessage)}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div className="ml-3 bg-muted rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="flex gap-2">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about leave, payroll, policies, or anything HR-related..."
              className="min-h-[40px] max-h-[100px]"
              rows={1}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isLoading}
              size="sm"
              className="px-3"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 p-0"
        size="sm"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`${isMinimized ? 'h-16' : 'h-[600px]'} w-[400px] p-0 fixed bottom-6 right-6 transition-all duration-300`}>
          <DialogHeader className="p-4 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center text-lg">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                AI HR Assistant
                <Badge variant="secondary" className="ml-2">Online</Badge>
              </DialogTitle>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 p-0"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogHeader>
          
          {!isMinimized && (
            <div className="flex-1 flex flex-col p-4 pt-0">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map(renderMessage)}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <div className="ml-3 bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="flex gap-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about leave, payroll, policies, or anything HR-related..."
                  className="min-h-[40px] max-h-[100px]"
                  rows={1}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}