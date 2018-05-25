### 目录
- src 源代码文件
--- page view 页面
--- service 数据层内容
--- util 工具层内容
--- image 图片

- dist 项目打包文件

### 脚手架搭建
- 在项目目录下 npm init
- npm install
- --save-dev 开发环境依赖
- --save 生产环境依赖

### webpack配置
- npm install webpack webpack-cli --save-dev 安装 
- 安装4.0以上版本时还需要安装 webpack-cli 需要安装lodash依赖模块
- package.json 文件配置："build": "webpack"
- entry 文件路口
- output 文件出口
- loader 编译依赖
- external jquery配置,可以将一个插件分别配置成全局变量和局部变量
- plugins 公用模块配置
- 1. npm 安装jquery 然后在页面中引入，使用,这种方式每个页面都需要引入才能使用，比较繁琐
- 2. 在项目入口html文件中使用 script脚本的方式引入
- webpack4 移除了 CommonsChunkPlugin,[配置修改](http://ju.outofmemory.cn/entry/343762),[图片](tupian/1527239153(1).jpg)
- loader 依赖配置: module模块中配置
- css单独打包[配置],使用 mini-css-extract-plugin(https://www.jianshu.com/p/439764e3eff2)

- 在webpack4中loader配置变化较大，详情可以参考官方文档
- 关于favicon.icon的问题，编译打包之后将其移到view文件夹中。
- 将公用部分抽离到layout文件夹，然后用ejx模板来引入(需要依赖html-loader)