import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes asset paths relative, so the build works on GitHub Pages
// whether it's served from a subpath (user.github.io/repo/) or a custom domain.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
