import withMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
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