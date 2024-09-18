/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Ensure no basePath is set if assets are at root
  env: {
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
    NODEMAILER_PW: process.env.NODEMAILER_PW,
  },
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

export default nextConfig;
