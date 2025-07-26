---
# 文章标题
title: Go语言
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
date: 2025-07-10
# 一个页面可以有多个分类
category:
  - 学习笔记
# 一个页面可以有多个标签
tag:
  - Go语言
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: 自我提升
# 你可以自定义版权信息
copyright: Buterr
---

# Go语言

## Go 语言用途
Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。

### Go语言程序结构
#### Go 语言的基础组成有以下几个部分：
* 包声明
* 引入包
* 函数
* 变量
* 语句 & 表达式
* 注释

举例
```go
package main // 包声明

import "fmt" // 引入包

// 函数
func main() {
    fmt.Println("Hello, World!")
}
```
* package main表示一个可独立执行的程序，每个 Go 应用程序都包含一个名为 main 的包。
* import "fmt" 引入了 fmt 包，提供格式化 I/O 函数。
* func main() 定义了一个名为 main 的函数，这是程序的入口点。
* fmt.Println("Hello, World!") 调用 fmt 包中的 Println 函数，输出字符串 "Hello, World!" 到标准输出。

<font color=Red>注意：`{` 符号不可单独成行，否则报错</font>

