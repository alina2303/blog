/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/google8bf0a0a61bd85a52.html',
                destination: '/html/google8bf0a0a61bd85a52.html'
            }
        ]
    }
  }
   
  module.exports = nextConfig