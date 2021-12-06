module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Team',
        permanent: true,
      },
    ]
  },
}
