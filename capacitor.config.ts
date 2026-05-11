import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trustrium.app',
  appName: 'Trustrium',
  webDir: 'dist',
  android: {
    allowMixedContent: true,
    backgroundColor: '#0a0a1a'
  }
};

export default config;
