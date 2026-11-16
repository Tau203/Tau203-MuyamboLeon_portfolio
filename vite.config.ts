import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// username.github.io repo (muyamboleon.github.io) -> base '/'
// normal project repo -> build with VITE_BASE=/repo-name/
export default defineConfig({ base: process.env.VITE_BASE ?? '/', plugins: [react()] })
