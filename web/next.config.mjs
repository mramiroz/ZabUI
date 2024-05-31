import withMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*{.css,.js,.svg}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, must-revalidate, immutable'
          },
        ],
      },
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, options) =>{
    config.module.rules.push({
      test: /\.jsx?$/,
      include: /@zabui\/comps/,
      use: options.defaultLoaders.babel,
    })
    return config;
  }
};

export default withMdx()(nextConfig);