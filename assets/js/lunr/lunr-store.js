var store = [{
"title": "如何在 Linux 上部署一个 MC 纯净/整合包服务器",
"excerpt":"作为 806 系统部的一员，能够在 Linux 服务器上部署一个 MC 服务端是所有人必须要会的技能。——系统部宗旨 要想和好基友们开黑 MC，一般会采用单人游戏 + 对局域网开放的方式。但是这样有一个弊端：每次游戏的时候都需要主机在线，这对于随时随地都可能想上线种田的大四老登来说是不可容忍的，而 806 正好又不缺服务器，所以在服务器上部署一个 MC 服务端是更合适的方式。 本文的环境是： Ubuntu 24.04 LTS 冬季救援整合包（1.16.5 Forge） 一些背景知识： 连接服务器使用 SSH，这里推荐一个很好用的 SSH 客户端 MobaXTerm，其能直接通过自带的 sftp 工具传输文件。 在服务器上下载文件可以使用 wget，复制想要下载的文件的链接，直接在终端输入 wget &lt;下载链接&gt; 回车即可。 配置 Java 环境 MC 是用 Java 写的，所以配置 Java 环境也很合理。 安装 Java 运行环境之前，首先需要知道想要运行的 MC 版本对应的 Java 版本是多少，这里搬运...","categories": [],
"tags": [],
"url": "/blogs/2024/11/how-to-setup-mc-server-on-linux/",
"teaser": null
},{
"title": "祝贺刁明轩、丁正枫、王雨辰在“第八届全国大学生计算机系统能力培养大赛（龙芯杯）”取得佳绩",
"excerpt":"全国大学生计算机系统能力培养大赛（龙芯杯）是由系统能力培养研究专家组和系统能力培养示范高校共同发起，以学科竞赛推动专业建设和计算机领域创新人才培养体系改革、培育我国高端芯片及核心系统的技术突破与产业化后备人才为目标，面向高校大学生举办的全国性大赛。   第八届全国大学生计算机系统能力培养大赛（龙芯杯）分为团体赛和个人赛两项赛事。团队赛共 110 支队伍报名，个人赛共 782 人报名。经过初赛的激烈角逐，全国共有 28 支代表队和 40 位个人进入决赛。    决赛合影   在个人赛方面，刁明轩同学设计了基于 MIPS 指令集的 32 位单发射五级流水线 CPU。初赛中，该作品可以通过三级功能测试和性能测试，时钟频率可以稳定运行在 58MHz。现场决赛阶段，刁明轩同学顺利完成了现场汇编代码的编写，最终获得龙芯杯个人赛三等奖。    个人赛颁奖（左五：刁明轩）   在团队赛方面，北科队伍 tesserae of tantalus（成员：丁正枫、王雨辰、赖烁喆、张卓立）实现了一个六级流水顺序双发射的处理器软核，同时实现了分支预测，指令数据缓存，TLB 等模块，可以顺利启动经典的 bootloader 并完成指定功能。    团队赛决赛现场（从左到右：王雨辰、赖烁喆、丁正枫）   现场决赛阶段，经过团队指令集答题，汇编代码编写，团队答辩等环节的重重考验，最终获得全国二等奖，实现了我校在该项赛事成绩的新突破。    团队赛颁奖   获奖证书：    个人赛三等奖    团队赛二等奖  ","categories": ["获奖","系统部"],
"tags": [],
"url": "/news/2024/10/lxb/",
"teaser": null
},{
"title": "祝贺陈宽宽、王诺贤在“第四届全国大学生计算机系统能力大赛（操作系统设计赛）”取得佳绩",
"excerpt":"近日，第四届全国大学生计算机系统能力大赛“操作系统设计”赛在杭州电子科技大学落下帷幕。   全国大学生计算机系统能力大赛是由系统能力培养研究专家组发起、由全国高校计算机教育研究会主办、面向高校大学生的全国性大赛。目标是以学科竞赛推动专业建设和计算机领域创新人才培养体系改革，培育我国高端芯片、关键基础软件的后备人才。大赛服务国家人才培养战略，以赛促学、以赛促教，鼓励学生设计、实现综合性的计算机系统，培养学生系统级的设计、分析、优化与应用能力，提升学生的技术创新、工程实践、团队协作能力，并为高水平计算机人才成长搭建交流、展示、合作的开放平台。   本届大赛吸引了全国百余所高校的 589 支参赛队报名，209 支赛队入围全国总决赛。经过激烈的初赛和决赛现场赛、答辩，全国总决赛内核实现赛最终评选出一等奖 6 项，二等奖 9 项，三等奖 12 项。   来自北京科技大学计通学院的“chaos”队从来自清华大学、北京大学、上海交通大学、哈尔滨工业大学、北京航空航天大学、华中科技大学等全国百余所高校 209 支入围总决赛的队伍中脱颖而出，获得了“操作系统设计”赛内核实现赛道（基于 RISCV 硬件）全国总决赛全国二等奖，这是我校连续第三年在大赛内核赛道获奖。    颁奖现场（右数第二、三分别为陈宽宽、王诺贤）      该队基于清华大学“rCore”类 UNIX 内核设计和开发的 ChaOS 操作系统内核使用 Rust 语言编写，可在基于 RISCV 架构的 visionfive2 开发板及其虚拟机上稳定运行。内核在页表架构与文件系统上相较 rCore 进行了大幅的重构，支持几十个 POSIX 标准系统调用和 FAT32/EXT4 文件系统。    ChaOS 的 GitHub 仓库   获奖证书：    全国二等奖  ","categories": ["获奖","系统部"],
"tags": [],
"url": "/news/2024/10/os-competition/",
"teaser": null
},{
"title": "806 实验室 2024 届招新",
"excerpt":"806 实验室从即日起开始 2024 届招新，共四个部门：系统部、人工智能部、游戏部、开发部。报名截止时间为北京时间 2024 年 10 月 25 日 23:59。 报名方式 按照以下格式发送邮件到 806 官方邮箱： 主题：2024招新-&lt;报名的部门&gt;-&lt;学号&gt;-&lt;姓名&gt;；（报名人工智能部仅需填写人工智能部） 举例：2024招新-系统部-U1234567-张三； 注意：请严格按照格式填写主题，否则我们可能无法收到邮件； 正文：若报名人工智能部，请在此告知报名的小组； 附件：个人简历（必须，pdf 格式，内容任意），其他能够证明个人能力的内容（可选）。 我们会不定期查看邮件。若我们成功收到了你的邮件，并且你通过了简历筛选，我们会回复一封邮件以告知面试地点和时间。 面试时，请携带至少三张打印好的个人简历和电脑（用以展示项目）。 若对本次招新有任何疑问，请邮件询问 wnx@xs.ustb.edu.cn。 各部门招新介绍 系统部 系统部是 806 实验室历史最为悠久的部门，专注于计算机系统能力的培养，鼓励督促成员参加高水平系统能力竞赛，如龙芯杯、系统能力大赛等，部内多届成员均参与竞赛，超过一半人在系统能力大赛中获得国家级奖项。 系统部的成果丰富，曾多次在操作系统赛、编译系统赛、ICPC 等计算机顶级赛事获国家级奖项，今年还首次在龙芯杯获得国二，为我校实现了从零到一的突破。毕业学长学姐均前往北京大学、北京航空航天大学、南京大学、中科院计算所、中科院软件所等顶级高校深造，或是前往百度、腾讯等大厂工作。 系统部根据传统 CS 的主要方向，分为 OS 组、CPU 组、编译组、数据库组，每个方向均由相关学长学姐指导，积累了丰富的学习资料和比赛经验，欢迎在对应领域有兴趣、有研究的同学加入。 我们希望你： 基础扎实：对 C/C++、Rust 或是 Verilog 语言有扎实的基础； 目标明确：对于传统 CS 中的领域有强烈的兴趣，希望提升系统能力； 吃苦耐劳，脚踏实地：参与系统能力大赛需要至少 6 个月的持续投入和努力，牺牲大部分假期时间（寒暑假），且短期没有正反馈；...","categories": ["其他"],
"tags": [],
"url": "/news/2024/10/recruitment/",
"teaser": null
},{
"title": "806 实验室 2024 届招新面试安排",
"excerpt":"面试地点为「机电楼 806 室」，时间安排如下： 部门 学号 日期 时间 系统部 U202442544 10/26 Sat. 19:00   U202341236   19:10   U202241800   19:30   U202442610   19:40   U202341615   19:50   U202342599   20:00   U202340562   20:10   U202340533   20:20   U202342109   20:30 人工智能部 U202342602   20:40   U202342494...","categories": ["其他"],
"tags": [],
"url": "/news/2024/10/recruitment-iterview-schedule/",
"teaser": null
},{
"title": "祝贺刁明轩、丁正枫、王雨辰在“第八届全国大学生计算机系统能力培养大赛（龙芯杯）”取得佳绩",
"excerpt":"全国大学生计算机系统能力培养大赛（龙芯杯）是由系统能力培养研究专家组和系统能力培养示范高校共同发起，以学科竞赛推动专业建设和计算机领域创新人才培养体系改革、培育我国高端芯片及核心系统的技术突破与产业化后备人才为目标，面向高校大学生举办的全国性大赛。   第八届全国大学生计算机系统能力培养大赛（龙芯杯）分为团体赛和个人赛两项赛事。团队赛共 110 支队伍报名，个人赛共 782 人报名。经过初赛的激烈角逐，全国共有 28 支代表队和 40 位个人进入决赛。    决赛合影   在个人赛方面，刁明轩同学设计了基于 MIPS 指令集的 32 位单发射五级流水线 CPU。初赛中，该作品可以通过三级功能测试和性能测试，时钟频率可以稳定运行在 58MHz。现场决赛阶段，刁明轩同学顺利完成了现场汇编代码的编写，最终获得龙芯杯个人赛三等奖。    个人赛颁奖（左五：刁明轩）   在团队赛方面，北科队伍 tesserae of tantalus（成员：丁正枫、王雨辰、赖烁喆、张卓立）实现了一个六级流水顺序双发射的处理器软核，同时实现了分支预测，指令数据缓存，TLB 等模块，可以顺利启动经典的 bootloader 并完成指定功能。    团队赛决赛现场（从左到右：王雨辰、赖烁喆、丁正枫）   现场决赛阶段，经过团队指令集答题，汇编代码编写，团队答辩等环节的重重考验，最终获得全国二等奖，实现了我校在该项赛事成绩的新突破。    团队赛颁奖   获奖证书：    个人赛三等奖    团队赛二等奖  ","categories": ["获奖","系统部"],
"tags": [],
"url": "/news/2024/10/lxb/",
"teaser": null
},{
"title": "祝贺陈宽宽、王诺贤在“第四届全国大学生计算机系统能力大赛（操作系统设计赛）”取得佳绩",
"excerpt":"近日，第四届全国大学生计算机系统能力大赛“操作系统设计”赛在杭州电子科技大学落下帷幕。   全国大学生计算机系统能力大赛是由系统能力培养研究专家组发起、由全国高校计算机教育研究会主办、面向高校大学生的全国性大赛。目标是以学科竞赛推动专业建设和计算机领域创新人才培养体系改革，培育我国高端芯片、关键基础软件的后备人才。大赛服务国家人才培养战略，以赛促学、以赛促教，鼓励学生设计、实现综合性的计算机系统，培养学生系统级的设计、分析、优化与应用能力，提升学生的技术创新、工程实践、团队协作能力，并为高水平计算机人才成长搭建交流、展示、合作的开放平台。   本届大赛吸引了全国百余所高校的 589 支参赛队报名，209 支赛队入围全国总决赛。经过激烈的初赛和决赛现场赛、答辩，全国总决赛内核实现赛最终评选出一等奖 6 项，二等奖 9 项，三等奖 12 项。   来自北京科技大学计通学院的“chaos”队从来自清华大学、北京大学、上海交通大学、哈尔滨工业大学、北京航空航天大学、华中科技大学等全国百余所高校 209 支入围总决赛的队伍中脱颖而出，获得了“操作系统设计”赛内核实现赛道（基于 RISCV 硬件）全国总决赛全国二等奖，这是我校连续第三年在大赛内核赛道获奖。    颁奖现场（右数第二、三分别为陈宽宽、王诺贤）      该队基于清华大学“rCore”类 UNIX 内核设计和开发的 ChaOS 操作系统内核使用 Rust 语言编写，可在基于 RISCV 架构的 visionfive2 开发板及其虚拟机上稳定运行。内核在页表架构与文件系统上相较 rCore 进行了大幅的重构，支持几十个 POSIX 标准系统调用和 FAT32/EXT4 文件系统。    ChaOS 的 GitHub 仓库   获奖证书：    全国二等奖  ","categories": ["获奖","系统部"],
"tags": [],
"url": "/news/2024/10/os-competition/",
"teaser": null
},{
"title": "806 实验室 2024 届招新",
"excerpt":"806 实验室从即日起开始 2024 届招新，共四个部门：系统部、人工智能部、游戏部、开发部。报名截止时间为北京时间 2024 年 10 月 25 日 23:59。 报名方式 按照以下格式发送邮件到 806 官方邮箱： 主题：2024招新-&lt;报名的部门&gt;-&lt;学号&gt;-&lt;姓名&gt;；（报名人工智能部仅需填写人工智能部） 举例：2024招新-系统部-U1234567-张三； 注意：请严格按照格式填写主题，否则我们可能无法收到邮件； 正文：若报名人工智能部，请在此告知报名的小组； 附件：个人简历（必须，pdf 格式，内容任意），其他能够证明个人能力的内容（可选）。 我们会不定期查看邮件。若我们成功收到了你的邮件，并且你通过了简历筛选，我们会回复一封邮件以告知面试地点和时间。 面试时，请携带至少三张打印好的个人简历和电脑（用以展示项目）。 若对本次招新有任何疑问，请邮件询问 wnx@xs.ustb.edu.cn。 各部门招新介绍 系统部 系统部是 806 实验室历史最为悠久的部门，专注于计算机系统能力的培养，鼓励督促成员参加高水平系统能力竞赛，如龙芯杯、系统能力大赛等，部内多届成员均参与竞赛，超过一半人在系统能力大赛中获得国家级奖项。 系统部的成果丰富，曾多次在操作系统赛、编译系统赛、ICPC 等计算机顶级赛事获国家级奖项，今年还首次在龙芯杯获得国二，为我校实现了从零到一的突破。毕业学长学姐均前往北京大学、北京航空航天大学、南京大学、中科院计算所、中科院软件所等顶级高校深造，或是前往百度、腾讯等大厂工作。 系统部根据传统 CS 的主要方向，分为 OS 组、CPU 组、编译组、数据库组，每个方向均由相关学长学姐指导，积累了丰富的学习资料和比赛经验，欢迎在对应领域有兴趣、有研究的同学加入。 我们希望你： 基础扎实：对 C/C++、Rust 或是 Verilog 语言有扎实的基础； 目标明确：对于传统 CS 中的领域有强烈的兴趣，希望提升系统能力； 吃苦耐劳，脚踏实地：参与系统能力大赛需要至少 6 个月的持续投入和努力，牺牲大部分假期时间（寒暑假），且短期没有正反馈；...","categories": ["其他"],
"tags": [],
"url": "/news/2024/10/recruitment/",
"teaser": null
},{
"title": "806 实验室 2024 届招新面试安排",
"excerpt":"面试地点为「机电楼 806 室」，时间安排如下： 部门 学号 日期 时间 系统部 U202442544 10/26 Sat. 19:00   U202341236   19:10   U202241800   19:30   U202442610   19:40   U202341615   19:50   U202342599   20:00   U202340562   20:10   U202340533   20:20   U202342109   20:30 人工智能部 U202342602   20:40   U202342494...","categories": ["其他"],
"tags": [],
"url": "/news/2024/10/recruitment-iterview-schedule/",
"teaser": null
},{
"title": "如何在 Linux 上部署一个 MC 纯净/整合包服务器",
"excerpt":"作为 806 系统部的一员，能够在 Linux 服务器上部署一个 MC 服务端是所有人必须要会的技能。——系统部宗旨 要想和好基友们开黑 MC，一般会采用单人游戏 + 对局域网开放的方式。但是这样有一个弊端：每次游戏的时候都需要主机在线，这对于随时随地都可能想上线种田的大四老登来说是不可容忍的，而 806 正好又不缺服务器，所以在服务器上部署一个 MC 服务端是更合适的方式。 本文的环境是： Ubuntu 24.04 LTS 冬季救援整合包（1.16.5 Forge） 一些背景知识： 连接服务器使用 SSH，这里推荐一个很好用的 SSH 客户端 MobaXTerm，其能直接通过自带的 sftp 工具传输文件。 在服务器上下载文件可以使用 wget，复制想要下载的文件的链接，直接在终端输入 wget &lt;下载链接&gt; 回车即可。 配置 Java 环境 MC 是用 Java 写的，所以配置 Java 环境也很合理。 安装 Java 运行环境之前，首先需要知道想要运行的 MC 版本对应的 Java 版本是多少，这里搬运...","categories": [],
"tags": [],
"url": "/blogs/2024/11/how-to-setup-mc-server-on-linux/",
"teaser": null
},{
"title": "联系我们",
"excerpt":"官方邮件地址   806@ustb.edu.cn   您可以向我们直接发送电子邮件。如需联系 806 负责人，请转至「负责人」页面。   无特殊情况时，请不要单独联系负责人。  ","categories": [],
"tags": [],
"url": "/wiki/806/contact/",
"teaser": null
},{
"title": "加入 806",
"excerpt":"806 会在每学年的秋季学期进行较大规模的招新，具体情况请关注 806 新闻以及校内的各个渠道。   对于能力较强的同学，通过 806 学长学姐的邀请，经过负责人认可后，也可以随时加入 806。   对于加入 806 后却不活跃的同学，806 有权利随时进行清退。  ","categories": [],
"tags": [],
"url": "/wiki/806/contribute/",
"teaser": null
},{
"title": "友情链接",
"excerpt":"   北京科技大学   北京科技大学计算机与通信工程学院   中国科学技术大学   中国科学技术大学 Linux 用户协会  ","categories": [],
"tags": [],
"url": "/wiki/806/links/",
"teaser": null
},{
"title": "806 成员",
"excerpt":"不在下列名单内的皆不为 806 正式成员。 2024 届 部门 姓名 联系方式 系统部 王诺贤 个人网站, GitHub   陈宽宽 个人网站, GitHub   王雨辰 个人网站, GitHub   丁正枫 GitHub   刁明轩 GitHub   周奔成 GitHub 人工智能部 陈铎友 个人网站, GitHub   祁珏瑜 GitHub   崔永亮 GitHub   张灿 GitHub   王苏晴 个人网站, GitHub 开发部 廖玮珑 个人网站, GitHub...","categories": [],
"tags": [],
"url": "/wiki/806/members/",
"teaser": null
},{
"title": "806 负责人",
"excerpt":"2024 届                  身份       姓名       联系方式                       指导老师       崔晓龙       cuixl@ustb.edu.cn                 系统部负责人       王诺贤       个人网站, GitHub                 人工智能部负责人       陈铎友       个人网站, GitHub                 开发部负责人       崔永亮（代理）       GitHub                 游戏组负责人       黄昊                   2023 届                  身份       姓名       联系方式                       指导老师       崔晓龙       cuixl@ustb.edu.cn                 系统组负责人       王诺贤       个人网站, GitHub                 AI 组负责人       祁珏瑜       GitHub                 开发组负责人       廖玮珑       个人网站, GitHub                 游戏组负责人       敖立鑫       GitHub          ","categories": [],
"tags": [],
"url": "/wiki/806/person-in-charge/",
"teaser": null
},{
"title": "添加文章",
"excerpt":"若需要在 806 官网上添加文章（新闻、博客、……)，请严格遵循以下步骤：           告知所在部门的负责人并经过其同意            fork 本仓库，配置环境并按照格式编写文章（请注意不同类型的文章的编写要求）                       添加新闻请在 /pages/_news 目录下按照年份分类添加                        添加博客请在 /pages/_blogs 目录下添加                        格式化代码（否则将无法通过代码审查）            在本网站的 GitHub 仓库提交一个 pull request            待负责人审查通过后合并进 main 分支，完成更新      ","categories": [],
"tags": [],
"url": "/wiki/doc/add-new-post/",
"teaser": null
},{
"title": "学习资源推荐",
"excerpt":"如果你是初入 CS 领域的小白，可以先看一下这篇文章：一个仅供参考的 CS 学习规划。      计算机科学速成课：计算机领域的科普向视频，能让你对计算机科学有个全貌性的感知，墙裂推荐。   CS 自学指南：北大信科学长收集的自学课程资源网站，涵盖了计算机所有领域的国内外优秀课程。   计算机教育中缺失的一课：MIT 开设的计算机领域必学工具的课程。  ","categories": [],
"tags": [],
"url": "/wiki/doc/learning-resources/",
"teaser": null
},{
"title": "提问的智慧",
"excerpt":"How To Ask Questions The Smart Way Copyright © 2001,2006,2014 Eric S. Raymond, Rick Moen 本指南英文版版权为 Eric S. Raymond, Rick Moen 所有。 原文网址：http://www.catb.org/~esr/faqs/smart-questions.html 中文翻译仓库网址：https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way。以下内容来自简体中文版。 Copyleft 2001 by D.H.Grand(nOBODY/Ginux), 2010 by Gasolin, 2015 by Ryan Wu 本中文指南是基于原文 3.10 版以及 2010 年由 Gasolin 所翻译版本的最新翻译； 协助指出翻译问题，请发 issue，或直接发 pull request 给我。 本文另有繁體中文版。 原文版本历史 声明...","categories": [],
"tags": [],
"url": "/wiki/doc/smart-questions/",
"teaser": null
},{
"title": "好用的工具推荐",
"excerpt":"前端开发      FontAwesome：本网站所使用的图标库。   系统相关      Compiler Explorer：汇编代码翻译工具。  ","categories": [],
"tags": [],
"url": "/wiki/doc/tools/",
"teaser": null
},{
"title": "北京科技大学「勤敏轩」学生创新实验室",
"excerpt":"北京科技大学「勤敏轩」学生创新实验室是北京科技大学计算机与通信工程学院下属的本科生实验室，位于机电信息楼 806 室，简称「806 实验室」。   806 实验室全部成员皆为在校本科生，主要关注于各类高含金量的计算机专业学科竞赛，以及创新创业竞赛。   了解更多   联系我们      官方邮箱：806@ustb.edu.cn   实验室地址：北京科技大学本部机电信息楼 806 室   了解更多  ","categories": [],
"tags": [],
"url": "/wiki/",
"teaser": null
},{
"title": "北京科技大学「勤敏轩」学生创新实验室",
"excerpt":"关于我们   北京科技大学「勤敏轩」学生创新实验室是北京科技大学计算机与通信工程学院下属的本科生实验室，位于机电信息楼 806 室，简称「806 实验室」。   806 实验室全部成员皆为在校本科生，主要关注于各类高含金量的计算机专业学科竞赛，以及创新创业竞赛。   806 目前下设四个部门，分别为系统部、人工智能部、游戏部和开发部。   实验室标志   LOGO      牌匾      铭牌      实验室照片               更多信息      联系方式  ","categories": [],
"tags": [],
"url": "/wiki/intro/",
"teaser": null
}]