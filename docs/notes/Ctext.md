---
# 文章标题
title: C语言经典题
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
date: 2023-06-07
# 一个页面可以有多个分类
category:
  - 学习笔记
# 一个页面可以有多个标签
tag:
  - C语言
  - 题目
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: BUPT2023春季课程
# 你可以自定义版权信息
copyright: Buterr
---

## 判断闰年

思路：判断整除4，整除100，不能整除400

```c
if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
		day = 31;
}
if (month==4||month==6||month==9||month==11){
		day = 30;
}
if (month==2){
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
				day = 29;
		}
		else {
				day = 28;
		}
}
```

## 计算正整数的长度

思路：若`n!=0;	n=n/10`，则加一位数字

## 幂函数

递归；运用`for`循环，直接将x乘y次

```c
int mypow(int x,int y)
{
    int num=1;
    for (int i=1; i<=y; i++) {
        num*=x;
    }
    return num;
}
```

## 判断回文数

思路：一个数除以10所得到的余数便是个位数，商是排除掉最后一位的数，则经过循环之后便可以得到反转而来的数

```c
while (origin>0){
        after=after*10+origin%10;
        origin=origin/10;
    }
    if(n==after){
        printf("Yes");
    }
    else{
        printf("No");
    }
```

运用递归求解：不断向前推算

```c
void reverse(int n) {
    if (n < 10) {
        printf("%d", n);
        return;
    }
    printf("%d", n % 10);
    reverse(n / 10);
}

```

**return 回去**

# 一些注意的点

输出”要使用`/"`来表示

两个整数相除需要获得小数，那么将`a/b`转换成`float`形式，使用`(float)a/b`

计算的时候遵循数学规律

可以使用`#define FORMATE"%d\n%d\n"`类似的语句实现输出格式的定义，之后只需要`printf(FORMATE,a,b);`即可实现输出
