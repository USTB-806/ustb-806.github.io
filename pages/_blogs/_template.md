---
title: "806 网站 Blogs 文章模板"
author: "Your Name?"
header:
    overlay_image: http://140.143.188.19:9000/website/static/blogs-banner.jpg
categories: []
tags: []
---

复制本文件，使用 Markdown 内容替换掉本说明文字即可。请将复制的文件按格式 `YYYY-MM-DD-page-name.md` 命名并直接放在 `_blogs` 目录下，它将自动渲染为 `/blogs/YYYY/MM/page-name/` 页面并出现在 `/blogs/` 的分页目录中。然后编辑本文件最开头的 Front Matter（两行 `---` 中间的部分，是个 YAML）写入信息，包括文章标题、作者（参见[主题文档][1]）、分类（可以有多个）和标签（可以有多个）。

若要启用标题背景图片（就像 [blogs 目录](/blogs/) 页面一样），请在 Front Matter 里指定 `header` 标签，详细配置内容请参阅[主题文档][2]。

具体格式样例请参考附近的其他文件。

注意：正文部分请勿将 H1/2/3 放在开头，否则 YAML 头中设置的 title 可能会被覆盖。（如果必须这么排，可以在前面加 `<!-- Workaround for jekyll-titles-from-headings -->`，但是列表展示的时候会没有内容预览）

[1]: https://mmistakes.github.io/minimal-mistakes/docs/authors/
