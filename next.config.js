/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    frame-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'https://pol.qa.testifi.io';
    block-all-mixed-content;
    upgrade-insecure-requests;
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
