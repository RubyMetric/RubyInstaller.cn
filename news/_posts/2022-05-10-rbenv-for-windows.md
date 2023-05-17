---
layout: post
title:  "推荐您使用rbenv for Windows在命令行上安装管理多个Ruby版本"
author: ccmywish
permalink: rbenv-for-windows
---

无论您是初级用户还是高级用户，我都建议您直接使用`rbenv for Windows`，从命令行上安装管理多个Ruby版本，从而无需手动处理您不熟悉的内容(比如`MSYS2`,`ridk`工具等)。我们已经利用了该站所提供的下载链接，所以您可放心使用，不会遇到网络问题。

现在该工具已被Ruby官方网站收录并推荐使用:

- [https://www.ruby-lang.org/en/documentation/installation/#rbenv-for-windows](https://www.ruby-lang.org/en/documentation/installation/#rbenv-for-windows)
- [https://www.ruby-lang.org/zh_cn/documentation/installation/#rbenv-for-windows](https://www.ruby-lang.org/zh_cn/documentation/installation/#rbenv-for-windows)

> 本文最后修订日期: <2023-04-12>

## 安装

在终端中运行:

<!-- 注意，使用Markdown语法 ``` 是无效的 -->
{% highlight PowerShell %}
# 自定义你想安装到的位置，最好不要有空格，因为没有测试过
$env:RBENV_ROOT = "C:\Ruby-on-Windows"
$s = (iwr -useb "https://gitee.com/ccmywish/rbenv-for-windows/raw/main/tools/install.ps1")
icm -sc ([scriptblock]::Create($s.Content)) -arg "install", "cn"
{% endhighlight %}

然后在`$profile`中添加这些内容:

{% highlight PowerShell %}
# rbenv for Windows
$env:RBENV_ROOT = "C:\Ruby-on-Windows"

# 国内用户使用内置镜像
# 注意，这一行必须放在init之前
$env:RBENV_USE_MIRROR = "CN"

& "$env:RBENV_ROOT\rbenv\bin\rbenv.ps1" init
{% endhighlight %}

<br>

## 链接参考

1. [Ruby China上的介绍帖](https://ruby-china.org/topics/42378)
2. [位于Github上的源代码](https://github.com/ccmywish/rbenv-for-windows)
3. [位于Gitee上的源代码](https://gitee.com/ccmywish/rbenv-for-windows)

下载安装方式均在上述链接中展示。
