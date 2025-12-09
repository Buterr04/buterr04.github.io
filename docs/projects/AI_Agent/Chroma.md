---
# 文章标题
title: Chroma 向量数据库
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
date: 2025-12-09
# 一个页面可以有多个分类
category:
  - 学习笔记
# 一个页面可以有多个标签
tag:
  - AI Agent
  - 向量数据库
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: BUPT毕业设计附属文档
# 你可以自定义版权信息
copyright: Buterr
---

# Chroma 向量数据库
 > Chroma是一个开源的向量数据库，专为存储和检索高维向量数据而设计。它在处理大规模机器学习和人工智能应用中的向量数据时表现出色，提供了高效的存储和快速的查询能力。

在本项目中，Chroma被用作主要的向量存储解决方案

配置：
 
```terminal
pip install chromadb
```

使用示例：
    
```python
    from langchain.vectorstores import Chroma
    from langchain.embeddings import OpenAIEmbeddings
    from langchain.text_splitter import CharacterTextSplitter
    from langchain.document_loaders import TextLoader
    # 加载文本数据
    loader = TextLoader('example.txt')
    documents = loader.load()
    # 分割文本数据
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    texts = text_splitter.split_documents(documents)
    # 创建嵌入模型
    embeddings = OpenAIEmbeddings()
    # 创建Chroma向量存储
    vectorstore = Chroma.from_documents(texts, embeddings)
    # 查询向量存储
    query = "示例查询"
    docs = vectorstore.similarity_search(query)
    for doc in docs:
        print(doc.page_content)
 ```

 
## 数据持久化

Chroma支持数据持久化，允许用户将向量数据存储在磁盘上，以便在应用程序重启后继续使用。可以通过指定`persist_directory`参数来启用持久化功能。