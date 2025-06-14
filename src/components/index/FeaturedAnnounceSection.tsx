
import React from "react";
import { Badge } from "@/components/ui/badge";
import FeaturedCards from "./FeaturedCards";

export default function FeaturedAnnounceSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-green-500 text-white text-lg px-6 py-2">
            ✨ LATEST UPDATES ✨
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            🎉 JBLinx Studio is Now Live with New Features! 🎉
          </h2>
        </div>
        <FeaturedCards />
      </div>
    </section>
  );
}
