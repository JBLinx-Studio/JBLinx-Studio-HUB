import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_products",
  title: "List JBLinx Studio products",
  description: "List JBLinx Studio's flagship products with a short description and category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const products = [
      { name: "CodeFusion Studio", category: "Development", description: "Browser-based IDE for building web apps." },
      { name: "CodeCraftAI Pro", category: "Development", description: "AI-powered coding assistant." },
      { name: "VitalitySync", category: "Health Tech", description: "Wellness and habit tracking app." },
      { name: "MindMate", category: "Gaming", description: "Strategy games and puzzle hub." },
      { name: "NestCore", category: "PropTech", description: "Real estate management platform." },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(products, null, 2) }],
      structuredContent: { products },
    };
  },
});
