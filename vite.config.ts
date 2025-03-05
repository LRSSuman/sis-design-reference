import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    resolve: {
        alias: {
            '@routes': resolve(__dirname, 'src/routes'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@layouts': resolve(__dirname, 'src/layouts'),
            '@ui': resolve(__dirname, 'src/ui'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@data': resolve(__dirname, 'src/data'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    plugins: [react(), tsconfigPaths(), tailwindcss()],
});
