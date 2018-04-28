# Client模块

## 前端部署步骤
### 准备工作
首先确保以下已经安装

* node.js （目前node版本 **9.0.0,9.4.0** 亲测可用，npm版本 **5.6.0**亲测可用。node 10.0.0 **不建议使用** ）

* gcc编译器 （npm install过程中会自动安装gyp，node sass等，这些安装需要C++编译）。

### 部署工作
运行以下命令

```
cd client/framework-webclient
npm install
npm run dev
```



运行成功后可浏览器登录 localhost:3000 查看界面。

### 注意事项

1. 如果发现node版本不支持，需要换版本时，换版本后要**手动清除已安装的gyp包**。（该包位于`~/.node-gyp/`目录下）。

2. 未完待续...大家在部署过程中有什么遇到的问题以及解决办法都可以分享出来，供所有同学参考。