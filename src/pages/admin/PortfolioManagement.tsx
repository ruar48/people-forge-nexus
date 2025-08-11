import { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe, Edit, Plus, Award, Users, Building2, Image } from "lucide-react";

const portfolioSections = [
  {
    id: "1",
    section: "Company Overview",
    status: "Published",
    lastUpdated: "2024-01-15",
    content: "About TechCorp Industries and our mission..."
  },
  {
    id: "2",
    section: "Leadership Team",
    status: "Published",
    lastUpdated: "2024-01-10",
    content: "Meet our executive leadership team..."
  },
  {
    id: "3",
    section: "Company History",
    status: "Draft",
    lastUpdated: "2024-01-08",
    content: "Our journey from startup to industry leader..."
  },
  {
    id: "4",
    section: "Awards & Recognition",
    status: "Published",
    lastUpdated: "2024-01-05",
    content: "Industry awards and certifications..."
  },
  {
    id: "5",
    section: "Office Gallery",
    status: "Published",
    lastUpdated: "2024-01-01",
    content: "Photos of our modern office spaces..."
  }
];

const achievements = [
  {
    id: "1",
    title: "Best Tech Employer 2023",
    category: "Award",
    date: "2023-12-15",
    description: "Recognized for outstanding employee satisfaction and workplace culture."
  },
  {
    id: "2",
    title: "ISO 27001 Certification",
    category: "Certification",
    date: "2023-11-20",
    description: "Achieved information security management certification."
  },
  {
    id: "3",
    title: "1 Million Users Milestone",
    category: "Milestone",
    date: "2023-10-10",
    description: "Our platform reached 1 million active users worldwide."
  }
];

export default function PortfolioManagement() {
  const [sections] = useState(portfolioSections);
  const [awards] = useState(achievements);

  return (
    <SidebarLayout type="admin">
      <PageHeader
        title="Portfolio Management"
        subtitle="Manage company portfolio, showcase achievements and culture"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Portfolio", href: "/admin/portfolio-management" }
        ]}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sections</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Portfolio sections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">6</div>
            <p className="text-xs text-muted-foreground">Live sections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Awards</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">Total achievements</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Sections */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary" />
              Portfolio Sections
            </CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Section
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Portfolio Section</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="section-title">Section Title</Label>
                    <Input id="section-title" placeholder="e.g., Company Culture" />
                  </div>
                  <div>
                    <Label htmlFor="section-content">Content</Label>
                    <Textarea id="section-content" placeholder="Enter section content..." rows={4} />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium">{section.section}</h4>
                    <p className="text-sm text-muted-foreground mt-1 truncate">{section.content}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant={section.status === "Published" ? "success" : "secondary"}>
                        {section.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Updated {section.lastUpdated}</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit {section.section}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="edit-title">Section Title</Label>
                          <Input id="edit-title" defaultValue={section.section} />
                        </div>
                        <div>
                          <Label htmlFor="edit-content">Content</Label>
                          <Textarea id="edit-content" defaultValue={section.content} rows={4} />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Save Draft</Button>
                          <Button>Update & Publish</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards & Achievements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Awards & Achievements
            </CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Achievement
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Achievement</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="achievement-title">Title</Label>
                    <Input id="achievement-title" placeholder="e.g., Best Workplace Award" />
                  </div>
                  <div>
                    <Label htmlFor="achievement-category">Category</Label>
                    <Input id="achievement-category" placeholder="e.g., Award, Certification, Milestone" />
                  </div>
                  <div>
                    <Label htmlFor="achievement-date">Date</Label>
                    <Input id="achievement-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="achievement-description">Description</Label>
                    <Textarea id="achievement-description" placeholder="Brief description..." rows={3} />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Achievement</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {awards.map((award) => (
                <div key={award.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{award.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{award.category}</Badge>
                        <span className="text-sm text-muted-foreground">{award.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Media Management */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Image className="w-5 h-5 mr-2 text-primary" />
            Media Gallery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                <Image className="w-8 h-8 text-muted-foreground" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
          </div>
        </CardContent>
      </Card>
    </SidebarLayout>
  );
}