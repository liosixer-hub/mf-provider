import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
const publicUrl = process.env.PUBLIC_URL || 'http://localhost';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 80,
    htmlFallback: false,
  },
  dev: {
    assetPrefix: publicUrl,
    writeToDisk: false,
  },
  output: {
    assetPrefix: publicUrl,
  },
});
