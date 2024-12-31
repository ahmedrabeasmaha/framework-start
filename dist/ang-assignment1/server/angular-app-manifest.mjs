
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  assets: {
    'index.csr.html': {size: 5015, hash: '30b937bbe8089f92f028dd039c8385275fbc2340c64569ceed396f255e1c8206', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1114, hash: '36c3baee3b2a1f015ecaa54c7bd9993ce56b4b688b3cac32b338d932165d1850', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35074, hash: 'cca9301c67905eb61e5b2f05a094b806ea599b89757c884ee3f78114ae18644e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 43258, hash: '6d55633a47e3c540fa68d89d924e4b4b15db7fa63df7df74a5713efa5b91a89f', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 36342, hash: '69c47c57d18bc5136a50280117c153354f38918fc3c0aec6d32dbd6b336d3b97', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 42245, hash: 'c5806eb0324b2b4752511fa0c3b39e0120beeaac183d34dd2097ad58068847f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
