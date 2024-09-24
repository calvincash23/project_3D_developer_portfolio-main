import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Import the React plugin

export default defineConfig({
  plugins: [
    react(),  // Add React plugin
  ],
  base:  "https://calvincash23.github.io/project_3D_developer_portfolio-main/"
});
