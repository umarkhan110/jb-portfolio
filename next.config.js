/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapibucketforjunaidmalikportfolio.s3.amazonaws.com',
        port: '',
        pathname: '/**'
      },
    ],
  },
}

module.exports = nextConfig
