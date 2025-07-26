---
# 文章标题
title: Coze Studio 扣子开源项目本地部署
# 页面图标，默认为 [Fontawesome 图标](https://fontawesome.com/search?m=free&o=r)
# 假设希望设定图标为 <i class="fa-solid fa-hashtag"></i>，则是 icon: fa-solid fa-hashtag
icon: 
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
# 是否为长文章，会被放置于博客页
article: true

# 设置作者
author: Buterr
# 设置写作时间
date: 2025-07-26
# 一个页面可以有多个分类
category:
  - 技术实践
# 一个页面可以有多个标签
tag:
  - AI
  - 部署
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: 
# 你可以自定义版权信息
copyright: Buterr
---

# Coze Studio 扣子开源项目本地部署
> Coze Studio 扣子开源项目是一个基于 AI 的协同创作平台，旨在帮助用户更高效地进行内容创作和管理。Coze官方与2025.7.26日发布了Coze Studio的开源版本，支持本地部署。本文将实践如何在本地部署 Coze Studio 扣子开源项目。

## 1. 环境准备
- **操作系统**：macOS 15 Sequoia
- **Docker**：Docker Desktop for macOS

部署步骤：

1. 获取源码。
   ```Bash
   # 克隆代码
   git clone https://github.com/coze-dev/coze-studio.git
   ```

2. 配置模型。
   1. 从模板目录复制模型的模版文件，并粘贴到配置文件目录。
      ```Bash
      # 模版文件目录
      backend/conf/model/template/xxx.yaml
      ```
      ```Bash
      # 配置文件目录
      backend/conf/model/xxx.yaml
      ```
    

   2. 在配置文件目录下，修改模版文件。
      1. 进入目录 `backend/conf/model`。打开复制后的文件`xxx.yaml`。
      2. 设置 `id`、`meta.conn_config.api_key`、`meta.conn_config.model` 字段，并保存文件。
         * **id**：Coze Studio 中的模型 ID，由开发者自行定义，必须是非 0 的整数，且全局唯一。模型上线后请勿修改模型 id 。
         * **meta.conn_config.api_key**：模型服务的 API Key。
         * **meta.conn_config.model**：模型服务的 model ID。
3. 部署并启动服务。
   首次部署并启动 Coze Studio 需要拉取镜像、构建本地镜像，可能耗时较久，请耐心等待。部署过程中，你会看到以下日志信息。如果看到提示 "Container coze-server Started"，表示 Coze Studio 服务已成功启动。 
   ```Bash
   # 启动服务
   cd docker
   cp .env.example .env
   docker compose --profile '*' up -d
   ```
注意：若本地已有SQL服务运行，可能会导致端口占用

4. 访问 Coze Studio。
   打开浏览器，访问 `http://localhost:8888`，即可进入 Coze Studio 的 Web 界面。

项目中，部署使用了Google的Gemini免费API