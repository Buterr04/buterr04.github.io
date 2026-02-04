---
# 文章标题
title: 基于大模型Agent的快递包裹检测与赔付决策系统
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
date: 2025-12-10
# 一个页面可以有多个分类
category:
  - 技术实践
# 一个页面可以有多个标签
tag:
  - Python
  - AI Agent
  - 程序设计
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: BUPT毕业设计
# 你可以自定义版权信息
copyright: Buterr
---

# 基于大模型Agent的快递包裹检测与赔付决策系统

仓库地址
- [GitHub 仓库](https://github.com/Buterr04/MyPackages_Checker)

## 项目概述
本项目旨在利用多模态大模型，对破损快递包裹进行识别，获取破损程度，并结合快递公司赔付政策，利用增强检索（RAG）技术，快速检索相关条款并生成赔付结果。项目集成多模态大模型图像识别，数据向量化存储检索，Agent决策等技术，为物流行业提供智能化解决方案。

## 技术栈
- 多模态大模型 Gemini 2.5 Flash/OpenAI GPT-5
- 向量数据库 Chroma
- Agent 框架 LangChain
- 前端框架 Vite + React
- 后端框架 FastAPI
- 数据库 SQLite

## 项目流程
1. **图像识别**：使用 Gemini 2.5 Flash 等多模态大模型对上传的快递包裹图像进行分析，识别破损类型和程度。
2. **文本处理**：将快递公司的赔付政策文档进行预处理，分段存储至 Chroma 向量数据库，便于后续检索。
3. **增强检索（RAG）**：基于用户上传的破损图像识别结果，从 Chroma 数据库中检索相关赔付政策条款。
4. **Agent决策**：使用 LangChain 框架构建赔付决策Agent，结合识别结果和赔付条款进行决策。
5. **用户界面**：使用 Vite+React+TS 构建用户界面，允许用户快速查看赔付结果以及维护数据

## 项目收获
- 掌握了多模态大模型在图像识别中的应用，提升了对图像处理技术的理解。
- 熟悉了向量数据库的使用，理解了文本向量化和相似度检索的原理。
- 学习了Agent框架的构建与应用，提升了复杂任务自动化处理能力。
- 通过前后端集成，提升了全栈开发能力。
- 项目成果可应用于实际物流场景，提高快递公司处理破损包裹的效率和准确性。
- 尝试使用了ReactBits前端组件动效库，美化了前端界面。