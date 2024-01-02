---
layout: post
title:  "发布 RubyInstaller 3.3.0-1"
authors:
  - Lars Kanis
  - ccmywish
---
RubyInstaller 3.3.0-1 发布了。
该版本包含了许多新功能与改进。
请查看[Ruby 3.3.0发布说明](https://www.ruby-lang.org/en/news/2023/12/25/ruby-3-3-0-released/)和[RubyInstaller-变更记录](https://github.com/oneclick/rubyinstaller2/blob/master/CHANGELOG-3.3.md#rubyinstaller-330-1---2023-12-26)以获悉详情。

最新的RJIT和对YJIT的改进在Windows上仍不可用，但是其他主要的改进都已可用。比如`irb`获得了更多的增强和bug的修复。请查阅[这里](https://railsatscale.com/2023-12-19-irb-for-ruby-3-3/)。

请注意，一些gems在Windows上还并不与Ruby 3.3兼容。这种情况下，你可能还需要停留使用3.2，直到3.3被更好地支持。

一个之前的RubyInstaller 3.2.x或3.1.x安装<b>不应当</b>被通过将RubyInstaller 3.3.x安装同一目录下直接更新。这是因为一些带有C语言扩展的Gem在Ruby 3.2和3.3之间并不兼容。最好按照安装程序的建议为每个小(minor)版本使用一个新目录。

所有安装程序都放在了[下载区域]({{ "/download/" | relative_url }})!
