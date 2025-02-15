# Pysio's Home
![Vue-blog](https://socialify.git.ci/pysio2007/Vue-blog/image?description=1&descriptionEditable=Pysio%27s%20Home%20%E4%B8%80%E4%B8%AA%E6%B8%A9%E6%9A%96%E7%9A%84%E5%AE%B6&forks=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)
[![note build](https://github.com/pysio2007/Vue-blog/actions/workflows/bulid-server.yml/badge.svg)](https://github.com/pysio2007/Vue-blog/actions/workflows/bulid-server.yml)
[![Build Docker Image](https://github.com/pysio2007/Vue-blog/actions/workflows/bulid-docker.yml/badge.svg)](https://github.com/pysio2007/Vue-blog/actions/workflows/bulid-docker.yml)
[![可靠性评级](https://sonarqube.pysio.online/api/project_badges/measure?project=pysio2007_Vue-blog_4ce9d341-7a3c-4327-8552-71bbe67bb1ca&metric=reliability_rating&token=sqb_136ab7accc7d12a217881f398f214de786ad6b55)](https://sonarqube.pysio.online/dashboard?id=pysio2007_Vue-blog_4ce9d341-7a3c-4327-8552-71bbe67bb1ca)
<!-- [![Coverage Status](https://coveralls.io/repos/github/pysio2007/Vue-blog/badge.svg?branch=main)](https://coveralls.io/github/pysio2007/Vue-blog?branch=main) -->
[![wakatime](https://wakatime.com/badge/user/a8344004-6b9a-4a56-8b71-e626b395781c/project/d910a3a5-e3e2-425e-be0f-175d36fa6d19.svg)](https://wakatime.com/badge/user/a8344004-6b9a-4a56-8b71-e626b395781c/project/d910a3a5-e3e2-425e-be0f-175d36fa6d19)     
## 关于本仓库

本仓库是Pysio的个人博客 同时欢迎PR扩充文件 文章会显示GIT提交者  
交换[友链](https://www.pysio.online/other/friends.html)请开Issues :P

### 洋葱网络

本站提供Tor网络的链接[点此访问](http://zwlvi475lpbann6njjdatf2zh7gkao3sdsqrejto6ldoxdvc4okwyqyd.onion/)

### Docker 部署说明

拉取Docker镜像

```bash
docker pull pysio/pysioblog
```
运行Docker镜像

```bash
docker run --name PysioHome -p 80:80 -p 443:443 -d pysio/pysioblog:main
```

443端口会默认提供pysio.online的自签证书 请注意挂载ssl目录替换证书 

### 存储库活动

![Alt](https://repobeats.axiom.co/api/embed/c9774154ac3dd3bf83f24df2cc5a5b688353e549.svg "Repobeats analytics image")