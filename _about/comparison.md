---
layout: about
title: 对比其他安装方式
permalink: /about/comparison/
order: 15
---

# 这是为你准备的吗?

**[Ruby](https://www.ruby-lang.org)**是一个**[很棒的编程语言](http://www.bestprogramminglanguagefor.me/why-learn-ruby)**，适合初学者和专业人士。它既适用于小型脚本，也适用于大型应用程序。

RubyInstaller是Windows上最简单、应用最广泛的Ruby环境，它将本机Windows程序的可能性与丰富的UNIX工具集**[MSYS2](http://www.msys2.org)**以及**[大型的MinGW库](https://github.com/msys2/MINGW-packages)**结合起来。因此RubyInstaller是使用Ruby进行开发和生产的一种很好的方法，特别是当您只想使用Ruby进行日常脚本编写或需要访问Windows资源（如硬件设备、DLL、OLE、图形用户界面或GPU）时。

### 对比

尽管Ruby社区一直在努力使在Windows上使用Ruby的体验尽可能流畅，但与Linux或MacOS相比，它仍然比较慢，也不太方便。一些缺点是由于某些Windows操作系统内部(比如它糟糕的shell支持)造成的，而另一些缺点则是由于许多Ruby开发人员只喜欢UNIX风格的系统。

Ruby在跨平台开发方面很强大，因此在Linux上使用Ruby进行开发和在Windows上使用RubyInstaller进行生产都很容易，反之亦然。

#### 使用类Unix系统

[**Ubuntu Linux**](https://ubuntu.com)或[**MacOS**](https://www.apple.com/de/macos/what-is/)非常适合作为Ruby开发平台。它们提供了最好的整体Ruby体验。如果您将Ruby用于一个更大的项目，您可能会考虑迁移到这些操作系统中的一个。

Ruby可以作为一个软件包从选定的Linux发行版(比如Ubuntu)或通过**[rbenv](https://gitee.com/RubyMetric/rbenv-cn)**安装或者类似的Ruby版本管理器。

#### 使用WSL2

[**Windows的Linux子系统(WSL2)**](https://docs.microsoft.com/en-us/windows/wsl/about)在Windows上提供Linux环境。大多数Linux可用的开发工具都可以直接在WSL2中使用。它非常适合使用Rails进行Web开发，并提供网络和文件系统访问，但是对硬件设备的访问以及与本地Windows软件的互操作性有一定限制，但是随着Windows的改进，您现在完全可以在WSL2中开发您的项目。

#### 使用Cygwin

[**Cygwin**](https://www.cygwin.com/)是RubyInstaller的另一个替代品。它在Windows上提供了POSIX环境。Ruby可以与许多其他工具一起安装，但是Cygwin不能直接执行任意Linux二进制文件（与WSL2相反）。Cygwin与RubyInstaller相比只提供了一些优势，比如更好的shell和通用UTF-8支持。但是它速度较慢，并且使得访问Windows的本机资源更加困难。
