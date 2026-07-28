import { defineMcp } from "@lovable.dev/mcp-js";
import listProductsTool from "./tools/list-products";
import listServicesTool from "./tools/list-services";
import getStudioInfoTool from "./tools/get-studio-info";

export default defineMcp({
  name: "jblinx-studio-mcp",
  title: "JBLinx Studio MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring JBLinx Studio's public catalog: products, services, and studio info. All data returned is public.",
  tools: [listProductsTool, listServicesTool, getStudioInfoTool],
});
