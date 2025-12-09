---
# 文章标题
title: Gemini API 使用笔记
# 页面图标，默认为 [Fontawesome 图标](https://fontawesome.com/search?m=free&o=r)
# 假设希望设定图标为 <i class="fa-solid fa-hashtag"></i>，则是 icon: fa-solid fa-hashtag
icon: 
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
# 是否为长文章，会被放置于博客页
article: false

# 设置作者
author: Buterr
# 设置写作时间
date: 2025-09-10
# 一个页面可以有多个分类
category:
  - 学习笔记
# 一个页面可以有多个标签
tag:
  - AI
  - API
  - 程序设计
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false

# 你可以自定义页脚
footer: BUPT毕业设计附属文档
# 你可以自定义版权信息
copyright: Buterr
---

# Gemini API 使用笔记
>  Gemini API 是 Google 提供的一个强大接口，用于与 Gemini 系列大语言模型（LLM）进行交互。

## 1.获取 API 密钥
要使用 Gemini API，首先需要获取 API 密钥。访问 [Google AI Studio](https://aistudio.google.com/)，创建一个项目并启用 Gemini API。然后，导航到“API 和服务”部分，生成一个新的 API 密钥。

## 2.调用API密钥
在这个项目中，我们直接使用LangChain提供的接口来调用Gemini API。以下是一个简单的示例代码，展示了如何使用LangChain与Gemini API进行交互：

```python
from langchain.llms import Gemini
gemini = Gemini(model_name="gemini-2.5-flash", api_key="YOUR_API_KEY")
response = gemini("Hello, how can I use Gemini API?")
print(response)
```
