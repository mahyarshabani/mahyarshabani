/** @type {import('next').NextConfig} */

const cspHeader = `
    frame-ancestors https://pol.qa.testifi.io;
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
