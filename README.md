## renren-ui
- renren-ui是基于Vue3、TypeScript、Element Plus、Vue Router、Pinia、Axios、Vite等开发，实现 【[renren-security](https://gitee.com/renrenio/renren-security)】 后台管理前端功能，提供一套更优的前端解决方案
- 前后端分离，通过token进行数据交互，可独立部署
- 动态菜单，通过菜单管理统一管理访问路由
- 后端地址：https://gitee.com/renrenio/renren-security
- 演示地址：http://demo.open.renren.io/renren-security (账号密码：admin/admin)

<br> 


## 安装

您需要提前在本地安装[Node.js](https://nodejs.org/en/)，版本号为：[14.18+、16.x]，再使用[Git](https://git-scm.com/)克隆项目或者直接下载项目后，然后通过`终端命令行`执行以下命令。

```bash
# 切换到项目根目录

# 安装插件
npm install

# 启动项目
npm run dev
```

> 如网络不稳定，安装时出错或进度过慢！请移步 [cnpm](https://npmmirror.com/) 淘宝镜像进行安装。

启动完成后，会自动打开浏览器访问 [http://localhost:8001](http://localhost:8001)，如您看到下面的页面代表`前端项目`运行成功！因为前后端分离项目，需保证`前端项目`和`后台项目`分别独立正常运行。

请留意下面的页面，其中`验证码`未能正常显示，控制台有`API请求`报错信息！这时需检查`后台项目`是否正常运行。



