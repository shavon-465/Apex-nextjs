import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md in the project root
  agentRules: false,
};

export default nextConfig;
