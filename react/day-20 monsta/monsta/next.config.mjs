/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wscubetech.co',
                port: '',
                pathname: 'Assignments/furniture/storage/app/public/uploads/images/products/**',
                search: '',
            },
        ],
    },
};



export default nextConfig;
