/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com' //liberando acesso de imagens a nossa aplicacao
            }
        ]
    }
};


export default nextConfig;
