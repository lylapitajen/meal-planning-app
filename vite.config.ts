import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindccs from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindccs(), sveltekit()],
});
