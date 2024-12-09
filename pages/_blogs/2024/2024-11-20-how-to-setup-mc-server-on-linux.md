---
title: "如何在 Linux 上部署一个 MC 纯净/整合包服务器"
author: "bosswnx"
header:
    overlay_image: https://blog-s3.806.group/post/2024/2024-11-20-how-to-setup-mc-server-on-linux/banner.png
categories: ["教程"]
tags: ["Minecraft", "Linux"]
---

> 作为 806 系统部的一员，能够在 Linux 服务器上部署一个 MC 服务端是所有人必须要会的技能。——系统部传统

要想和好基友们开黑 MC，一般会采用单人游戏+对局域网开放的方式。但是这样有一个弊端：每次游戏的时候都需要主机在线，这对于随时随地都可能想上线种田的大四老登来说是不可容忍的，而 806 正好又不缺服务器，所以在服务器上部署一个 MC 服务端是更合适的方式。

本文的环境是：

- Ubuntu 24.04 LTS
- [冬季救援整合包](https://www.mcmod.cn/modpack/273.html)（1.16.5 Forge）

一些背景知识：

- 连接服务器使用 SSH，这里推荐一个很好用的 SSH 客户端 [MobaXTerm](https://mobaxterm.mobatek.net/)，其能直接通过自带的 sftp 工具传输文件。
- 在服务器上下载文件可以使用 `wget`，复制想要下载的文件的链接，直接在终端输入 `wget <下载链接>` 回车即可。
- 启动游戏推荐使用第三方客户端，这里推荐 [PCL](https://afdian.com/p/0164034c016c11ebafcb52540025c377) 和 [HMCL](https://hmcl.huangyuhui.net/)，尽量不要用官方启动器，功能贫乏。

## 配置 Java 环境

MC 是用 Java 写的，所以配置 Java 环境也很合理。

安装 Java 运行环境之前，首先需要知道想要运行的 MC 版本对应的 Java 版本是多少，这里搬运 [MC 官方 Wiki](https://zh.minecraft.wiki/w/Tutorial:%E6%9B%B4%E6%96%B0Java?variant=zh-cn) 里关于 Java 版本的说明：

| Minecraft 开发版本                                                                                     | Minecraft 正式版本                                                                                 | 最低要求 Java 版本 | 官启绑定 Java 版本 |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| [24w14a](https://zh.minecraft.wiki/w/24w14a)及以上                                                     | [1.20.5](https://zh.minecraft.wiki/w/Java版1.20.5)及以上                                           | Java 21            | 21.0.3             |
| [22w18a](https://zh.minecraft.wiki/w/22w18a)至[24w13a](https://zh.minecraft.wiki/w/24w13a)             | [1.19](https://zh.minecraft.wiki/w/Java版1.19)至[1.20.4](https://zh.minecraft.wiki/w/Java版1.20.4) | Java 17            | 17.0.8             |
| [1.18-pre2](https://zh.minecraft.wiki/w/Java版1.18-pre2)至[22w17a](https://zh.minecraft.wiki/w/22w17a) | [1.18](https://zh.minecraft.wiki/w/Java版1.18)至[1.18.2](https://zh.minecraft.wiki/w/Java版1.18.2) | Java 17            | 17.0.1             |
| [21w19a](https://zh.minecraft.wiki/w/21w19a)至[1.18-pre1](https://zh.minecraft.wiki/w/Java版1.18-pre1) | [1.17](https://zh.minecraft.wiki/w/Java版1.17)至[1.17.1](https://zh.minecraft.wiki/w/Java版1.17.1) | Java 16            | 16.0.1             |
| [21w18a](https://zh.minecraft.wiki/w/21w18a)及以下                                                     | [1.16.5](https://zh.minecraft.wiki/w/Java版1.16.5)及以下                                           | Java 8             | 1.8.0_51           |

由于我需要运行的版本是 1.16.5，因此这里需要安装 Java 8。

```bash
sudo apt install openjdk-8-jdk
```

对于其他的 Java 版本，一般来说将上面指令中的 `8` 替换成对应的版本号就可以了。

安装完成后可以使用 `java --version` 来查看版本是否正确。

如果服务器同时安装了多个版本的 Java，可以使用下面的指令来切换默认的 Java 版本：

```bash
sudo update-alternatives --config java
```

## 配置服务端

对于原版、Forge 和 Fabric，初始化服务端的方式各不相同。

国内的 MCSL 维护了一套服务端文件的镜像（[这里](https://sync.mcsl.com.cn/)），后文讲到的文件可以先在这里尝试下载。

### 原版（Vanilla）

MC 原版的服务端文件可以直接在 Minecraft 官网上下载。直接 Bing/Google 搜索 `minecraft server <版本号> 下载`，找到官方网站对应的下载链接即可。下载下来的服务端一般是一个名为 `server.jar`的 jar 文件。

需要注意两点：

- 不要用百度，百度只会把你导航到网易（MC 的国内代理，但是依托\*\*）。
- 进入官网后，如果你没有挂梯子的话，那么同样会弹窗让你跳转到网易，注意点击下方的 `Stay on Minecraft.net` 留在国际版官网。

当然，也可以使用上面提到的 [MCSL 镜像源](https://sync.mcsl.com.cn/core/Vanilla)下载。

接下来找到一个合适的目录，初始化服务端：

```bash
java -jar server.jar nogui
```

第一次运行服务端，会创建一个 `eula.txt`然后报错退出，这个文件的作用是同意许可。使用 vim 或 nano 或其他方式打开 ，将里面的 `false` 改成 `true`，保存退出，重新启动即可。

等到终端出现 `Done!` 等文字的时候，说明服务器已经成功启动，此时已经可以直接开始玩了。不过后面会配置一些优化体验的东西，请继续阅读下文。

### Forge

Forge 端可以在 [Forge 官网](https://files.minecraftforge.net/net/minecraftforge/forge/)上下载（可能需要挂梯子）。当然，也可以使用上面提到的 [MCSL 镜像源](https://sync.mcsl.com.cn/core/Forge)下载。

**注意**：Forge 的小版本之间也会出现不兼容的情况，所以如果是配置整合包的话，一定要下载和整合包的 Forge 版本完全一致的服务端。

下载下来后会得到一个名为 `forge-<游戏版本>-<Forge版本>-installer.jar` 的文件。这里我下载的文件名为 `forge-1.16.5-36.2.34-installer.jar`。

找到一个合适的目录，启动：

```bash
java -jar forge-1.16.5-36.2.34-installer.jar --installServer  # 注意要把文件替换为自己下载的
```

接下来 Forge Installer 会下载一系列文件，包括服务端原始文件，然后自动进行配置。这个阶段需要保持服务器有良好的网络。该过程有可能需要翻墙。

配置完成之后，会留下一些文件，其中最重要的是三个（注意替换成自己的版本号）：

- `forge-1.16.5-36.2.34.jar`：Forge 的主体文件，也是 Forge 端运行的入口；
- `libraries`：资源文件；
- `minecraft_server.1.16.5.jar`：Forge 运行的服务端文件。

接下来就可以启动服务器了：

```bash
java -jar forge-1.16.5-36.2.34.jar nogui  # 注意把文件替换为自己的
```

和原版服务器一样，第一次启动会创建 `eula.txt` 文件并报错退出，需要将该文件里面的 `false` 修改为 `true` 保存退出，重新启动即可。

重新启动服务器后，服务器会生成一系列游戏文件，包括存档文件夹 `world` 和放置 mod 的文件夹 `mods`。只需要将想要添加的 mod 放入 `mods` 文件夹，重新启动，即可加载 mod。

不过如果是想配置整合包的话，还需要做接下来的工作。

整合包一般分为两种发布方法，一种是直接把整个游戏打成压缩包，而另一种是采用配置文件压缩包的形式（压缩包内部有一个 `overrides` 文件夹，需要从 PCL 等第三方启动器的 `导入整合包` 来进行导入）：

- 对于第一种方法，需要将压缩包内的 `mods`文件夹和所有的与「配置」相关的文件夹都复制到服务器目录下（包括但不限于 `config`、`kubejs`、`scripts`）。**这一步很重要，如果漏掉了任何一个配置文件都可能会导致整合包运行不正确，所以务必仔细检查。**
- 而对于第二种方法，首先在本地客户端导入整合包，在本地安装完之后，进入游戏版本根目录，将 `mods` 文件夹复制到服务器目录下。然后，将配置文件压缩包里 `overrides`文件夹下的所有文件复制到服务器目录下即可。

完成上述操作后，将刚刚启动生成的 `world` 文件夹删除（如果没有就不用管了，这一步是因为整合包可能会对地图生成进行改动，需要将原版生成的地图删除了重新生成），重新启动服务端即可。

### Fabric

Fabric 和 Forge 的安装步骤除了下载文件以外基本上相同。

相比于 Forge 完全不提供中文安装教程，Fabric 提供了一个非常友好的[官方中文安装教程](https://wiki.fabricmc.net/zh_cn:player:tutorials:install_server)，请参考这个教程进行安装，然后跳转到 [Forge 章节](#forge)的整合包配置部分。

## 更多的配置（可选）

进行完上述的步骤后，服务器文件夹下大致会有以下文件：

![](https://blog-s3.806.group/post/2024/2024-11-20-how-to-setup-mc-server-on-linux/1.png)

我配置的是 Forge 整合包服务器，所以文件会多出许多，但大致的内容都差不多，多一些少一些差别不大。

其中和整合包 mod 配置相关的文件有：`config`，`kubejs`，`defaultconfigs`，`worldshape`；

此时，其实就可以启动服务器开始玩了！但是我们还可以再进一步配置一些东西更方便我们运维。

### Screen

启动服务器的时候可以使用 screen、tmux 等工具将其挂在后台，这样就可以切断 SSH 连接而不会导致服务器关闭。接下来简单介绍 screen。

首先安装 screen：

```bash
sudo apt install screen
```

可以通过指令 `screen` 启动一个新的 screen 会话。可以发现，screen 会话和普通的终端没有什么不同，因为其直接沿用了当前终端的配置。不过，screen 会话可以通过快捷键 `<Ctrl-A> + z` 来挂起当前会话，通过指令 `screen -r` 来重新连接挂起的会话。

这样每次使用 screen 启动服务器之后，就可以直接关闭终端，让服务器在后台继续运行，下次需要运维的时候重新连接回来即可。

### server.properties

`server.properties` 文件是 MC 服务器的配置文件。我们可以更改里面的一些内容来实现更好的效果：

- `allow-flight`：建议改为 `true`，因为很多整合包提供了飞行的能力，如果不开启的话会被服务器误认为是在作弊而直接踢出；
- `difficulty`：服务器的难度，有 `peaceful`、`easy`、`normal`和 `hard` 四个选项；
- `motd`：服务器显示在游戏内的说明文字；
- `pvp`：玩家之间是否相互可以攻击；
- `server-port`：服务器的端口，如果一台机子上需要运行多个服务器的话，需要分别设置不同的端口才能运行，否则会冲突。
- `online-mode`：正版验证，开启了的话需要服务器联网才能加入，好处是能有皮肤。
- `view-distance`：服务器渲染的视距，依照服务器的性能进行调整，如果卡了就调低一点；

### 启动参数

启动服务器的时候可以在 java 指令后添加一些参数来优化性能，这里我只设置了服务器的内存：

```bash
java -jar -Xmx16G -Xms16G server.jar nogui
```

其中：

- `-Xmx`：设置最大内存；
- `-Xms`：设置最小内存；
- `nogui`：以命令行模式启动，必须要添加，否在在命令行里会报错。

### 开放防火墙端口

由于 Ubuntu 默认开启了防火墙 ufw，所以需要在防火墙开放 MC 服务器默认的端口 `25565` 才能链接到服务器。

```bash
sudo ufw allow 25565  # 开放 25565 端口
```

如果服务器使用了其他的端口的话，需要改成开放对应的其他端口。

### 记分板

你可能在看别的人玩服务器的时候发现，可以在 `<Tab>` 键的玩家列表里看到所有玩家的血量，在显示屏右边有一个榜单显示当前死亡数等……这些都是通过原版的记分板实现的。

在 MC 服务端的控制台输入以下指令：

- 启用 `<Tab>` 显示血量：

  ```text
  scoreboard objectives add health health "血量"
  scoreboard objectives setdisplay list health
  ```

- 启用侧边栏死亡计数：

  ```text
  scoreboard objectives add deathCount deathCount "死亡数"
  scoreboard objectives setdisplay sidebar deathCount
  ```

## 配置 MCDReforged（可选）

接下来我们会配置一个非常好用的 MC 服务端管理工具 [MCDReforged](https://mcdreforged.com/zh-CN)。这个工具是 TIS 服务器开发的，能够在不修改原版任何东西的基础上，给服务端添加很多很好用的功能，比如：自动备份、自动启停、显示玩家位置等。

MCDReforged 的安装请参考[官方手册](https://docs.mcdreforged.com/zh-cn/latest/quick_start/index.html)。注意，安装方式最好选择 pipx，实测在 Ubuntu 24.04 LTS 下只能使用 pipx 安装方式。

配置好后，每次启动服务器就是在 MCDReforged 的目录下使用指令 `mcdreforged` 启动。

除了接管 MC 那难用的控制台以外，MCDReforged 最好用的功能就是丰富的插件生态。可以查看[官方插件仓库](https://mcdreforged.com/zh-CN/plugins)来查找自己喜欢的插件。这里我列举我每次都会安装的几个插件：

- [Info](https://mcdreforged.com/zh-CN/plugin/info)：能够获取当前服务器的各种信息，例如 CPU 利用率、内存使用率、存档大小等。
- [Where2go](https://mcdreforged.com/zh-CN/plugin/where2go)：一个功能强大的位置插件，包含共享坐标点、查询玩家位置等功能。
- [Prime Backup](https://mcdreforged.com/zh-CN/plugin/prime_backup)：一个强大的 MCDR 备份插件，一套先进的 Minecraft 存档备份解决方案。
- [HibernateR](https://mcdreforged.com/zh-CN/plugin/hibernate_r/readme)：在服务器没有人的时候让服务器休眠，有人连接时开启。
- [Simple OP](https://mcdreforged.com/zh-CN/plugin/simple_op)：`!!op` 以获取 op, `!!restart` 以重启服务器。

## 本文完

最后是夹带私货时间！

![](https://blog-s3.806.group/post/2024/2024-11-20-how-to-setup-mc-server-on-linux/banner.png)
