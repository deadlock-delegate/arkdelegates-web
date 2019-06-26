const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes
  .add('delegates', '/delegates/')
  .add('delegate', '/delegate/:slug/')
  .add({
    name: 'delegate-contributions',
    page: 'delegate',
    pattern: '/delegate/:slug/contributions/',
  })
  .add({ name: 'delegate-news', page: 'delegate', pattern: '/delegate/:slug/news/' })
  .add({ name: 'claim-delegate', page: 'auth/claim', pattern: '/auth/claim/:slug/' })
  .add({ name: 'login', page: 'auth/login', pattern: '/auth/login/' })
  .add({ name: 'edit-delegate', page: 'edit/delegate', pattern: '/edit/delegate/' })
