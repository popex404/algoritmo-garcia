import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En dev: base '/' (localhost:5173/).
// En build (GitHub Pages, proyecto en subruta): base '/algoritmo-garcia/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/algoritmo-garcia/' : '/',
  plugins: [react()],
}))
