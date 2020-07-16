const visit = require('unist-util-visit')
const types = ['link', 'linkReference', 'image', 'imageReference', 'definition']

module.exports = function (options) {
  const base = process.env.ROUTER_BASE

  function visitor(node) {
    const regex = /^\\/
    if (regex.test(node.url)) {
      node.url = node.url.replace(regex, base)
    }
  }

  function visitorHtml(node) {
    const regex = /(src|href)="\//g
    if (regex.test(node.value)) {
      node.value = node.value.replace(regex, `$1="${base}`)
    }
  }

  function transform(tree) {
    visit(tree, types, visitor)
    visit(tree, ['html'], visitorHtml)
  }

  return transform
}
