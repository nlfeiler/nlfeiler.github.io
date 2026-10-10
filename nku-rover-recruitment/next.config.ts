
import type { NextConfig } from "next";

const repoName = "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_ACTIONS
      ? `/${repoName}`
      : "",
  },
};

export default nextConfig;
