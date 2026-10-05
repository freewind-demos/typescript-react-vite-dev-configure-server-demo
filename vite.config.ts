import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import {devApiPlugin} from "./src/server/devApiPlugin.ts";

export default defineConfig({
    plugins: [react(), devApiPlugin()],
});
