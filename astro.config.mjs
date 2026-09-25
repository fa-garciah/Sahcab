// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.sahcab.com',
  // Usa el puerto de la variable PORT si está definida
  server: { port: Number(process.env.PORT) || 4321 },
  vite: { plugins: [tailwindcss()] },
});
