
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/framework-start/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/framework-start"
  },
  {
    "renderMode": 2,
    "route": "/framework-start/about"
  },
  {
    "renderMode": 2,
    "route": "/framework-start/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/framework-start/contact"
  }
],
  assets: {
    'index.csr.html': {size: 5031, hash: 'd0900d87ae070e3451203b9361933fb2eab7392dda1f381a06ff3662f88b0e39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1130, hash: '2875cc3925e902ac576e1fcc589d1491e43dd56f426e06409e16a4be4f794f91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 36422, hash: '234c0dac8e0d7e850eb2e31628d5a0e1ee0b7909ee214474d3db7e3c5709a785', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 43338, hash: 'b737db817e9d2dc618ce7acad8b84b82f789b551a8da534e6ded32920bdfb034', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 42325, hash: '95570851c0d39e960587d442ded724149543090bce637cefa349d1de84eac62f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 35154, hash: '28cdf4a5b6b6010665928d23e0e8343aad624ece75be0826689ba4d4a1edda4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
