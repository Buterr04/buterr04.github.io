---
# 文章标题
title: Java高级语言程序设计 笔记📒
# 页面图标，默认为 [Fontawesome 图标](https://fontawesome.com/search?m=free&o=r)
# 假设希望设定图标为 <i class="fa-solid fa-hashtag"></i>，则是 icon: fa-solid fa-hashtag
icon: fa-solid fa-hashtag
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
# 是否为长文章，会被放置于博客页
article: false

# 设置作者
author: Buterr
# 设置写作时间
date: 2024-06-02
# 一个页面可以有多个分类
category:
  - 学习笔记
# 一个页面可以有多个标签
tag:
  - Java
  - 程序设计
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: BUPT2024春季课程
# 你可以自定义版权信息
copyright: Buterr
---

# 结构化程序设计

标识符：$

首字母不得是数字，区分大小写

除去关键字

（字母，数字，下划线，美元符号$）

`public static void main{}` main方法

`System.out.println` 

Public 本包均能访问

protected 当前类的子类

private 本类访问

默认 本

static  静态方法

class   类

### 直接量

布尔：boolean

String字符串，null，基本数据

long：34L

float：1.5F

char

int

转义字符

### 变量

类型转换：自动：低级到高级

目标类型 变量=(目标类型) 值

### 运算符

`Math.pow(2.0,3.0);` $2.0^{3.0}$

`7/5`=$7 div5$

`7%5`=$7mod5$  	也可对浮点数运算，运算结果符号与第一个操作符的符号相同

#### 布尔型

& AND			| OR			^ XOR			! NOT

条件

&& AND		|| OR

#### 位运算符

<< 左移

\>> 右移

\>>> 无符号右移

写成二进制形式然后按位操作产生一个新的数

instanceof 

new 

`(Cond ? express1 : express2)`

# 面向对象程序设计

行为方法功能等封装成类（classes）：具有共同特征的数据等

对象（objects）：类的实例

具有封装性，继承性，多态性

基本思想：构建和组织对象解决问题

### class

是实例对象的模版

基本组成：域和方法

修饰词 class 类名称 extends父类名 implements接口名

类修饰词：public 可被所有Java软件包使用

abstract 抽象类

final 最终类，不能被继承

strictfp 浮点运算

default 只能在当前包内使用

##### 成员域

表示和存储类所需要的数据

域修饰词 类型 变量名或带初始化的变量名列表

类型：当前成员域的类型 包括基本数据类型和引用数据类型

方法修饰词 返回类型 方法名

返回类型：返回数据的类型

方法名：标识符

参数列表：，分割

方法修饰词：`public protected private abstract static final synchronized strictfp`

##### 构造方法

创建类的实例对象

同时完成初始化

默认构造方法：不含任何参数

0 bool false

格式

【修饰词】类名称（参数）

{

方法体

​	}

定义顺序：成员域 构造方法 成员方法

引用数据类型变量：四个基本属性：变量名，数据类型，变量值和存储单元

Java不允许有多重继承：有多个父类



类型转换

隐式 子类型——>父类型 不用强制转换符（）

显式 父类型——>子类型 需要用强制转换符



instanceof 判断一个引用类型表达式所指向的实例对象是否是某引用类型的实例对象

多态性：在类定义里出现多个构造方法或出现多个同名的成员方法。

重载：同一个类中的同名方法在功能上的重载

覆盖：子类和父类类体中均定义了具有相同声明的非静态成员方法，称为对父类的覆盖



super 调用父类型被覆盖的成员方法

this 当前类的对象

package 创建包

import 导入包

java.lang java.math



String.valueOf() 转换为字符串



迭代器

Java.util.Iterator 判断迭代器下一个位置上是否还有元素



### 枚举

修饰词只能是public，或者默认值

不能通过new运算符

常用：switch语句，采用枚举常量标识符
