module.exports = {
  root: true,
  env: {
    node: true
  },
  'globals':{
    "clientWindow":true,
    "":true,
    "showIncentiveVideoAd":true,
    "shareWechatMoments":true,
    "getUserToken":true
  },
 extends: [ 'plugin:vue/essential'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": 'off'
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
}