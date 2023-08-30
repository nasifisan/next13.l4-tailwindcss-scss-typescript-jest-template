/** @type {import('next').NextConfig} */
// const path = require('path');

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'no-referrer-when-downgrade'
    }
];



const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: false,
    swcMinify: true,
    // images: {
    //     formats: ['image/webp'],
    //     domains: process.env.IMAGE_WHITE_LIST_DOMAINS.split(',')
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: 'Home',
    //             permanent: true
    //         }
    //     ]
    // },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders
            }
        ]
    }
}

module.exports = nextConfig
