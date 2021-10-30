import { defineConfig } from "vite";
import path from 'path';
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}],
  },
  plugins: [
    vue(),
    WindiCSS(),
    Pages({
      pagesDir: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/features/login/pages", baseRoute: "login" },
      ],
      extensions: ["vue"],
    }),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "app",
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.ts$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ["vue"],
    }),
  ],
});