import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnpluginTypia from "@kennethwkz/unplugin-typia/vite";

export default defineConfig({
  clearScreen: false,
  plugins: [
    UnpluginTypia({
      log: "verbose",
      cache: false,
    }),
    sveltekit(),
  ],
});
