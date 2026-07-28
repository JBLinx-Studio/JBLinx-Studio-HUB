import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List JBLinx Studio services",
  description: "List the services JBLinx Studio offers to clients.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      { name: "Game Development", description: "Custom game development across Unity and web platforms." },
      { name: "Web Applications", description: "Modern full-stack web apps with React, TypeScript, and backend APIs." },
      { name: "Backend & APIs", description: "Production-ready backend APIs, databases, and DevOps." },
      { name: "Developer Tools", description: "Open-source templates, CLIs, and component libraries." },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
