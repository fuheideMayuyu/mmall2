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
- 1. npm 安装jquery 然后在页面中引入，使用,这种方式每个页面都需要引入才能使用，比较繁琐
- 2. 在项目入口html文件中使用 script脚本的方式引入


