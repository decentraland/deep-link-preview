import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const envVariables = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      'process.env': {
        VITE_REACT_APP_DCL_DEFAULT_ENV: envVariables.VITE_REACT_APP_DCL_DEFAULT_ENV,
      },
    },
    ...(command === 'build' ? { base: envVariables.VITE_BASE_URL } : undefined),
  };
});
