/**
 *@desc    webpack配置文件baba
 *@author  hx
 *@date    2021/04/08
 */

 module.exports = {
   // 放置静态资源的地方 (js/css/img/font/...)
   assetsDir: 'static',
 
   // 是否为生产环境构建生成 source map？
   productionSourceMap: false,
   configureWebpack: {
     devtool: 'source-map', // 配置本地调试
     module: {
       rules: [
         {
           test: /\.js/,
           enforce: 'pre',
           include: /node_modules[\\/]monaco-editor[\\/]esm/,
         }
       ]
     }
   },
   // 配置 webpack-dev-server 行为。
   devServer: {
     open: true
   },
 }
 