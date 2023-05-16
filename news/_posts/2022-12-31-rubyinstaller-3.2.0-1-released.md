---
layout: post
title:  "发布 RubyInstaller 3.2.0-1"
authors:
  - Lars Kanis
  - ccmywish
---
RubyInstaller 3.2.0-1发布了！此次发布包含了许多新功能与改善。请查看[Ruby 3.2.0发布说明](https://www.ruby-lang.org/en/news/2022/12/25/ruby-3-2-0-released/)获悉详情。

Ruby在Windows平台上的一个显著的增进是[对UNIXSocket的支持](https://bugs.ruby-lang.org/issues/19135)。

现在RubyInstaller安装过程提供了一个系统范围的安装，需要获得管理员权限。

![installer_all_users](/assets/images/posts/installer_all_users.png){:class="img-responsive"}

在这种情况下，普通用户可以使用公用的Ruby，但对此公用Ruby目录没有写权限。Gems可以被系统管理员集中安装，或者被自动的重定向到一个用户的私有目录。

请查阅我们的Wiki来进一步了解[安装模式](https://github.com/oneclick/rubyinstaller2/wiki/FAQ#user-content-install-mode)。

RubyInstaller-3.2.0将`libssl`库更改为OpenSSL-3. 这对某些Ruby API有影响，取消了对以往遗留的加密算法的支持。请查阅[ruby-openssl](https://github.com/ruby/openssl/blob/master/History.md#version-300)以及[OpenSSL-3](https://github.com/openssl/openssl/blob/master/doc/man7/migration_guide.pod#openssl-30).由于这些不兼容性，RubyInstaller 3.1以下版本将继续使用OpenSSL-1.1.

请注意，一些Gems还不兼容Windows上的Ruby 3.2，在这种情况下，您可能会一直使用3.1，直到3.2得到良好的支持。

一个之前的RubyInstaller 3.1.x或2.7.x安装<b>不应当</b>被通过将RubyInstaller 3.2.x安装同一目录下直接更新。这是因为一些带有C语言扩展的Gem在Ruby 3.1和3.2之间并不兼容。最好像我们提议的，使用新的目录来存放3.2.x

所有安装程序都放在了[下载区域]({{ "/download/" | relative_url }})!
