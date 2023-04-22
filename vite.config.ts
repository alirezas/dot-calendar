import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dot Calendar',
        short_name: 'Dot Calendar',
        start_url: '.',
        display: 'standalone',
        background_color: '#020617',
        description: 'Just a Calendar.',
        icons: [
          {
            src: 'images/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'images/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'images/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})
