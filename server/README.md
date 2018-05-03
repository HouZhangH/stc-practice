# Server模块

## 后端部署步骤

### 准备工作
首先确保以下已安装

* docker
* maven
* java 1.8
* docker-compose.

如果没有docker-compose命令，可以用以下命令获取：
```
curl -L https://github.com/docker/compose/releases/download/1.21.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```
### 部署工作

1. 进入server目录,执行`docker-compose up -d`,启动 mysql 镜像。
2. 执行命令
`docker exec -i mymysql mysql -uroot -pmysql stc < framework.sql `
   将framework.sql导入数据库stc中。
3. 执行`mvn clean package -DskipTests` 打包项目
4. 执行`mvn spring-boot:run` 启动项目up


### 注意事项

1. 如碰到spring-boot:run编译时间过长的问题，卡在随机数产生，可通过以下步骤解决：
```
vim $JAVA_home/jre/lib/security/java.security
```
找到`securerandom.source = file:/dev/random`这一行，修改为:
`securerandom.source = file:/dev/urandom`

2. Java 请务必使用1.8，否则可能导致编译失败。

2. 未完待续...大家在部署过程中有什么遇到的问题以及解决办法都可以分享出来，供所有同学参考。



## 代码整合
代码结构如下：
```aidl
├── java
│   └── com
│       └── sinosteel
│           ├── FrameworkApplication.java
│           ├── domain                     --实体对象
│           ├── framework                  
│           │   ├── config                 --配置文件
│           │   │   ├── database           --数据库配置
│           │   │   ├── druid              --数据库连接池
│           │   │   ├── http               --处理跨域访问
│           │   │   ├── listener           --ApplicationListener
│           │   │   ├── system             --系统环境配置
│           │   │   └── web                --web配置
│           │   ├── core
│           │   │   ├── listener           --定义ApplicationListener
│           │   │   └── web                --定义Request和Response类
│           │   ├── helpers
│           │   │   ├── hierarchy          --特殊的有层次结构的类
│           │   │   │   ├── domain
│           │   │   │   └── helper         --提供对Hierarchy类的基本操作
│           │   │   └── pagination         --分页
│           │   ├── mybatis                --查询数据库
│           │   └── utils                  --工具类
│           │       ├── date               --日期工具
│           │       ├── encryption         --加密工具
│           │       ├── json               --json工具
│           │       ├── list               --list工具
│           │       ├── map                --map工具
│           │       └── string             --字符串工具
│           ├── repository                 --仓库
│           ├── service                    --service
│           └── web                        --web
└── resources                              
    ├── application.properties
    ├── banner.txt
    ├── config
    │   ├── datasource.properties          --数据库配置
    │   └── system.properties              --系统配置
    └── structure.json                     --整个框架的结构
```

> 特别感谢李青坪师兄帮助我们整理框架
