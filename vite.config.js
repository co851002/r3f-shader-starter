import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import {glslify} from 'vite-plugin-glslify';




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glslify(),
    glsl({
      include: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      compress: false,
      glslify: true // Enable glslify support
    })
  ],
});
