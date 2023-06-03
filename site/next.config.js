/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Snis Kasm Registry',
    description: 'My Store of Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://djsni.github.io/kasm_workspaces_registry/list.json',
    contactUrl: 'https://github.com/DjSni/kasm_workspaces_registry',
    schema: '1.0',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
