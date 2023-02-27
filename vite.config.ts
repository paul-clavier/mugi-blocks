import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { dependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ["src/components", "src/index.ts"],
        }),
    ],
    build: {
        lib: {
            entry: path.resolve("src", "index.ts"),
            name: "MugiBlocks",
            formats: ["es", "umd", "cjs"],
            fileName: (format) => `mugi-blocks.${format}.js`,
        },
        rollupOptions: {
            external: Object.keys(dependencies),
        },
    },
});
