

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'cdn-icons-png.freepik.com',
                pathname: '**',
              },
          ],
       
    },
};

export default nextConfig;
