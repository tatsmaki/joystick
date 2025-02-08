import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "joystick",
      fileName: "main",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
