
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Gamepad2, Code, Filter } from "lucide-react";

interface ProjectTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

export default function ProjectTabs({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: ProjectTabsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <TabsList className="grid w-full max-w-md grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="webapp" className="flex items-center gap-1">
          <Globe className="h-3 w-3" />
          Web
        </TabsTrigger>
        <TabsTrigger value="game" className="flex items-center gap-1">
          <Gamepad2 className="h-3 w-3" />
          Games
        </TabsTrigger>
        <TabsTrigger value="program" className="flex items-center gap-1">
          <Code className="h-3 w-3" />
          Tools
        </TabsTrigger>
      </TabsList>
      <div className="flex items-center gap-2 mt-4 sm:mt-0">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1 border rounded-md bg-background text-foreground"
        >
          <option value="recent">Most Recent</option>
          <option value="featured">Featured First</option>
          <option value="alphabetical">A-Z</option>
        </select>
      </div>
    </div>
  );
}
