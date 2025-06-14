
import React from "react";
import { Rocket, Star } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="w-6 h-6 animate-bounce" />
          <span className="text-lg font-bold">🚀 WEBSITE UPDATED! NEW FEATURES LIVE NOW! 🚀</span>
          <Star className="w-6 h-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
