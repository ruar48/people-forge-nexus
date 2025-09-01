import SidebarLayout from "@/components/layout/SidebarLayout";
import { PageHeader } from "@/components/ui/page-header";
import { DocumentGenerator } from "@/components/enhanced/DocumentGenerator";

export default function DocumentGeneratorPage() {
  return (
    <SidebarLayout type="admin">
      <div className="container mx-auto px-6 py-8">
        <PageHeader
          title="AI Document Generator"
          subtitle="Generate professional HR documents with AI assistance"
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Settings", href: "/admin/settings" },
            { label: "Document Generator" }
          ]}
        />

        <DocumentGenerator />
      </div>
    </SidebarLayout>
  );
}