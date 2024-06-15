/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'default',
        domains: ['https://itchy-spiders-venomous-army-production.pipeops.app/'], // Add your deployment domain here if you are loading external images
      },
    }

module.exports = nextConfig
