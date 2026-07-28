import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_studio_info",
  title: "Get JBLinx Studio info",
  description: "Get an overview of JBLinx Studio: what it does, focus areas, and how to get in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "JBLinx Studio",
      tagline: "Premium development studio building products, games, and developer tools.",
      focusAreas: ["Web Applications", "Game Development", "Health Tech", "PropTech", "Developer Tools"],
      github: "https://github.com/JBLinx-Studio",
      contact: "Visit the site's Support page to get in touch.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
