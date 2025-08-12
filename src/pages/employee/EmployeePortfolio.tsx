import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { FolderOpen, Search, Plus, Eye, Download, Upload, FileText, Image, Video, Archive } from "lucide-react";

export default function EmployeePortfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const portfolioItems = [
    {
      id: "PF-001",
      name: "Q4 Marketing Campaign",
      type: "Document",
      size: "2.4 MB",
      uploadDate: "Dec 15, 2024",
      lastModified: "Dec 15, 2024",
      status: "Published",
      description: "Comprehensive marketing campaign strategy for Q4 product launch",
      tags: ["Marketing", "Strategy", "Campaign"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PF-002",
      name: "Product Demo Video",
      type: "Video",
      size: "45.2 MB",
      uploadDate: "Dec 12, 2024",
      lastModified: "Dec 13, 2024",
      status: "Published",
      description: "Product demonstration video for new feature release",
      tags: ["Demo", "Product", "Video"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PF-003",
      name: "UI Design Mockups",
      type: "Image",
      size: "8.7 MB",
      uploadDate: "Dec 10, 2024",
      lastModified: "Dec 11, 2024",
      status: "Draft",
      description: "UI/UX design mockups for mobile application redesign",
      tags: ["Design", "UI", "Mockup"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PF-004",
      name: "Project Documentation",
      type: "Archive",
      size: "12.1 MB",
      uploadDate: "Dec 8, 2024",
      lastModified: "Dec 9, 2024",
      status: "Published",
      description: "Complete project documentation including technical specifications",
      tags: ["Documentation", "Technical", "Project"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PF-005",
      name: "Training Materials",
      type: "Document",
      size: "5.6 MB",
      uploadDate: "Dec 5, 2024",
      lastModified: "Dec 6, 2024",
      status: "Published",
      description: "Employee training materials for new software tools",
      tags: ["Training", "Education", "Materials"],
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PF-006",
      name: "Performance Report",
      type: "Document",
      size: "1.8 MB",
      uploadDate: "Dec 1, 2024",
      lastModified: "Dec 2, 2024",
      status: "Published",
      description: "Monthly performance analysis and recommendations",
      tags: ["Report", "Performance", "Analysis"],
      thumbnail: "/placeholder.svg"
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = typeFilter === "all" || item.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Document":
        return <FileText className="w-5 h-5" />;
      case "Image":
        return <Image className="w-5 h-5" />;
      case "Video":
        return <Video className="w-5 h-5" />;
      case "Archive":
        return <Archive className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Document":
        return "text-primary";
      case "Image":
        return "text-success";
      case "Video":
        return "text-warning";
      case "Archive":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Published":
        return "success";
      case "Draft":
        return "secondary";
      case "Private":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <SidebarLayout type="employee">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="My Portfolio"
          subtitle="Manage your projects, documents, and creative work"
          breadcrumbs={[
            { label: "Employee Portal", href: "/employee" },
            { label: "Portfolio" }
          ]}
          actions={
            <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Upload Portfolio Item</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="itemName">Item Name</Label>
                    <Input 
                      id="itemName" 
                      placeholder="Enter item name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="itemType">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="document">Document</SelectItem>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="archive">Archive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="file">File</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">Max file size: 50MB</p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Brief description of the item..."
                      className="min-h-20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input 
                      id="tags" 
                      placeholder="Enter tags separated by commas"
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => setIsUploadDialogOpen(false)}
                    >
                      Upload
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsUploadDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          }
        />

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FolderOpen className="w-5 h-5 mr-2 text-primary" />
                Total Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{portfolioItems.length}</div>
              <p className="text-sm text-muted-foreground">All portfolio items</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{portfolioItems.filter(item => item.type === 'Document').length}</div>
              <p className="text-sm text-muted-foreground">Text documents</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Image className="w-5 h-5 mr-2 text-success" />
                Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{portfolioItems.filter(item => item.type === 'Image').length}</div>
              <p className="text-sm text-muted-foreground">Visual content</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Video className="w-5 h-5 mr-2 text-warning" />
                Media
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">{portfolioItems.filter(item => item.type === 'Video' || item.type === 'Archive').length}</div>
              <p className="text-sm text-muted-foreground">Videos & archives</p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Items */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="document">Documents</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="archive">Archives</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-soft transition-all duration-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg bg-muted/30 ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <Badge variant={getStatusVariant(item.status) as any}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.type} • {item.size}</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p>Uploaded: {item.uploadDate}</p>
                      <p>Modified: {item.lastModified}</p>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="w-4 h-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Portfolio Item Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Item Info */}
                            <div className="flex items-center space-x-4">
                              <div className={`p-4 rounded-lg bg-muted/30 ${getTypeColor(item.type)}`}>
                                {getTypeIcon(item.type)}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                                <p className="text-muted-foreground">{item.type} • {item.size}</p>
                                <Badge variant={getStatusVariant(item.status) as any} className="mt-1">
                                  {item.status}
                                </Badge>
                              </div>
                            </div>

                            {/* Description */}
                            <div>
                              <label className="text-sm font-medium text-foreground">Description</label>
                              <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted/30 rounded-lg">
                                {item.description}
                              </p>
                            </div>

                            {/* Details */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-foreground">Upload Date</label>
                                <p className="text-sm text-muted-foreground">{item.uploadDate}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">Last Modified</label>
                                <p className="text-sm text-muted-foreground">{item.lastModified}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">File Size</label>
                                <p className="text-sm text-muted-foreground">{item.size}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-foreground">Item ID</label>
                                <p className="text-sm text-muted-foreground">{item.id}</p>
                              </div>
                            </div>

                            {/* Tags */}
                            <div>
                              <label className="text-sm font-medium text-foreground">Tags</label>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {item.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button className="flex-1">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" className="flex-1">
                                <Eye className="w-4 h-4 mr-2" />
                                Preview
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
}