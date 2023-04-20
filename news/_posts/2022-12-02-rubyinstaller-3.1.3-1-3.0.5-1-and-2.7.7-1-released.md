---
layout: post
title:  "发布 RubyInstaller 3.1.3-1, 3.0.5-1 和 2.7.7-1"
authors:
  - Lars Kanis
  - ccmywish
---
RubyInstaller 3.1.3-1, 3.0.5-1和2.7.7-1发布了。这些是维护版本，修复了一些缺陷和安全问题。请分别查看[Ruby 3.1.3发布说明](https://www.ruby-lang.org/en/news/2022/11/24/ruby-3-1-3-released/), [Ruby 3.0.5发布说明](https://www.ruby-lang.org/en/news/2022/11/24/ruby-3-0-5-released/)和[Ruby 2.7.7发布说明](https://www.ruby-lang.org/en/news/2022/11/24/ruby-2-7-7-released/)获悉详情.

除此之外，有一些[RubyInstaller自身的变化](https://github.com/oneclick/rubyinstaller2/blob/a09714dc05786947d77970f387194aafc1f9e2b3/CHANGELOG-3.1.md#rubyinstaller-313-1---2022-11-27).

安装目录(`C:/Ruby31-x64`或其他)现在可以防止其他用户更改，现在只有运行此安装程序的用户才有权限安装gems.

`ridk use`工具现在有了[用来永久保存Ruby version变化的选项](https://github.com/oneclick/rubyinstaller2/wiki/The-ridk-tool#ridk-use)以及在菜单选项中有了几处改动。

一个之前的RubyInstaller 2.7.x或3.0.x安装<b>不应当</b>被通过将RubyInstaller 3.1.x安装同一目录下直接更新。这是因为一些带有C语言扩展的Gem在Ruby 3.0和3.1之间并不兼容。最好像我们提议的，使用新的目录来存放3.1.x

所有安装程序都放在了[下载区域]({{ "/download/" | relative_url }})!
