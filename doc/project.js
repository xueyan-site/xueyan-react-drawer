const pkg = require('../package.json')

module.exports = {
  type: 'react-csr',
  index: 'zh',
  path: pkg.name,
  alias: {
    'ast': 'pub/ast',
    'com': 'pub/com',
    'utl': 'pub/utl',
    'ark-drawer': '../src',
    'xueyan-react-style': '../node_modules/xueyan-react-style'
  },
  serve: {
    port: 12002
  },
  module: {
    externals: {
      'typescript': 'ts',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'classnames': 'classNames',
      'lodash': '_'
    },
    rules: {
      raw: {
        test: /\.(txt|md)$/i
      }
    }
  },
  page: {
    metas: [
      {
        key: 'ie',
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        key: 'viewport',
        name: 'viewport',
        content: 'viewport-fit=cover,width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
      }
    ],
    links: [
      {
        key: 'favicon',
        rel: "icon",
        type: "image/png",
        href: "{{XT_ASSETS_PATH}}favicon.png"
      }
    ],
    styles: [
      {
        key: 'global',
        rel: 'stylesheet',
        href: '{{XT_ASSETS_PATH}}global.css'
      }
    ],
    scripts: [
      {
        key: 'typescript',
        defer: true,
        src: 'https://xueyan.site/ast/typescript.js'
      },
      {
        key: 'react',
        defer: true,
        src: "https://xueyan.site/ast/react.js"
      },
      {
        key: 'react-dom',
        defer: true,
        src: "https://xueyan.site/ast/react-dom.js"
      },
      {
        key: 'classnames',
        defer: true,
        src: "https://xueyan.site/ast/classnames.js"
      },
      {
        key: 'lodash',
        defer: true,
        src: "https://xueyan.site/ast/lodash.js"
      }
    ]
  }
}