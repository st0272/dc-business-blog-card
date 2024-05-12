import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    base: "/dc-business-blog-card/",
    outDir: "../docs",
    emptyOutDir: true,
  },
  root: "src",
});
