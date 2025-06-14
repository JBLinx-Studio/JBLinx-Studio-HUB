
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Gamepad2, Code } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  status: string;
  createdAt: Date;
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
      return "bg-green-500";
    case "Beta":
      return "bg-blue-500";
    case "In Development":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};

interface ProjectCardProps {
  project: Project;
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "webapp":
      return <Globe className="h-8 w-8 text-primary" />;
    case "game":
      return <Gamepad2 className="h-8 w-8 text-primary" />;
    case "program":
      return <Code className="h-8 w-8 text-primary" />;
    default:
      return null;
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <CategoryIcon category={project.category} />
          </div>
          <p className="text-sm text-muted-foreground">Project Preview</p>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <div className="flex gap-2">
            {project.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
            <Badge className={`${getStatusColor(project.status)} text-white text-xs`}>
              {project.status}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
