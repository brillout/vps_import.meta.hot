import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [
    react(),
    ssr(),
    {
      plugin: "tmp-plugin",
      configResolved(config) {
        console.log("config.isProduction", config.isProduction);
      },
    },
  ],
};
