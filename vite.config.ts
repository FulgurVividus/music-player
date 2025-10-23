import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import observerPlugin from "mobx-react-observer/swc-plugin";

export default defineConfig({
  plugins: [
    react({
      // @ts-ignore
      plugins: [observerPlugin({ exclude: ["src/ui-components/**"] })],
    }),
    tailwindcss(),
  ],
});
