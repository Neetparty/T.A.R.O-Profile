module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Main',
        permanent: true,
      },
    ]
  },
}
