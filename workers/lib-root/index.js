const ADS_TXT = 'google.com, pub-5629262559745276, DIRECT, f08c47fec0942fa0\n'

export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === '/ads.txt') {
      return new Response(ADS_TXT, {
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      })
    }

    return Response.redirect(`https://test.lib.lc${url.pathname}${url.search}`, 301)
  },
}
