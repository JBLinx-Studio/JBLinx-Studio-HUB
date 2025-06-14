
import React from "react";
import { Code, Zap, Globe } from "lucide-react";

export default function HeroGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
      <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
        <Code className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Development</h3>
        <p className="text-muted-foreground text-center">Modern web & mobile solutions</p>
      </div>
      <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
        <Zap className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Innovation</h3>
        <p className="text-muted-foreground text-center">Cutting-edge technology stack</p>
      </div>
      <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
        <Globe className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
        <p className="text-muted-foreground text-center">Worldwide client solutions</p>
      </div>
    </div>
  );
}
