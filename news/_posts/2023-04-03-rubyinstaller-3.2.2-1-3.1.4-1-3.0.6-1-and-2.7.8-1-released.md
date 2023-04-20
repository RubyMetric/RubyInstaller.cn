---
layout: post
title:  "发布 RubyInstaller 3.2.2-1, 3.1.4-1, 3.0.6-1 和 2.7.8-1"
authors:
  - Lars Kanis
  - ccmywish
---
RubyInstaller 3.2.2-1, 3.1.4-1, 3.0.6-1和2.7.8-1发布了。这些是带有bug和安全补丁的维护版本。
请查看[Ruby 3.2.2发布说明](https://www.ruby-lang.org/en/news/2023/03/30/ruby-3-2-2-released/), [Ruby 3.1.4发布说明](https://www.ruby-lang.org/en/news/2023/03/30/ruby-3-1-4-released/), [Ruby 3.0.6发布说明](https://www.ruby-lang.org/en/news/2023/03/30/ruby-3-0-6-released/)以及[Ruby 2.7.8发布说明](https://www.ruby-lang.org/en/news/2023/03/30/ruby-2-7-8-released/)获悉更新详情。

除了Ruby core更新之外，RubyInstaller还有几个变化。RubyInstaller 3.1.4-1, 3.0.6-1 和 2.7.8-1现在更新了[3.2.x版本引入的变化]({% post_url /news/2022-12-31-rubyinstaller-3.2.0-1-released %})。这意味着安装程序现在提供了一个全用户安装，并将gem安装到用户主目录中。仍然建议使用单用户模式，除非您希望在同一系统上由多个用户实际使用Ruby。

请查看wiki[获取更多安装模式的信息](https://github.com/oneclick/rubyinstaller2/wiki/FAQ#user-content-install-mode)以及[CHANGELOGs](https://github.com/oneclick/rubyinstaller2/tree/b33ff754ee35fcb4bc2b6532d2a0201ef05d3c94)来获取更多的Ruby安装变化。

一如既往的：一个之前的RubyInstaller 3.1.x或2.7.x安装<b>不应当</b>被通过将RubyInstaller 3.2.x安装同一目录下直接更新。这是因为一些带有C语言扩展的Gem在Ruby 3.1和3.2之间并不兼容。最好按照安装程序的建议为每个小(minor)版本使用一个新目录。

所有安装程序都放在了[下载区域]({{ "/download/" | relative_url }})!
