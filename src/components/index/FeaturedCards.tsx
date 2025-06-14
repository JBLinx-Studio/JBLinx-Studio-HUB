
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Rocket, Star, Code } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6 text-green-500" />,
    border: "border-green-400",
    title: "Dev Logs Added",
    description: "Track our development journey with detailed project logs and updates!",
    button: {
      text: "View Dev Logs",
      className: "bg-green-500 hover:bg-green-600",
    },
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    border: "border-blue-400",
    title: "Digital Store",
    description: "Browse our premium apps, templates, and digital products!",
    button: {
      text: "Visit Store",
      className: "bg-blue-500 hover:bg-blue-600",
    },
  },
  {
    icon: <Star className="w-6 h-6 text-purple-500" />,
    border: "border-purple-400",
    title: "New Portfolio",
    description: "Explore our complete collection of web apps, games, and tools!",
    button: {
      text: "View Projects",
      className: "bg-purple-500 hover:bg-purple-600",
    },
  },
];

export default function FeaturedCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <Card key={feature.title} className={`border-2 ${feature.border} shadow-lg`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {feature.icon}
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feature.description}</p>
            <Button className={`mt-4 ${feature.button.className}`}>
              {feature.button.text}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
