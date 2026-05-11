import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        rollupOptions: {
          external: [
            'express',
            'firebase-admin',
            'firebase-functions',
            'tsx',
            'dotenv',
            'fs',
            'path',
            'http',
            'https',
            'net',
            'tls',
            'crypto',
            'stream',
            'os',
            'util',
            'events',
            'buffer',
            'url',
            'zlib',
            'child_process',
            'cluster',
            'dgram',
            'dns',
            'domain',
            'readline',
            'repl',
            'string_decoder',
            'timers',
            'tty',
            'v8',
            'vm',
            'worker_threads'
          ]
        }
      }
    };
});
