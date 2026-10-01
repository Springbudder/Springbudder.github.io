# Springbudder 博客源码

Hexo 7 + Yilia 主题（`themes/yilia`，沿用旧站的主题与配置）。

`source` 分支放源码。推送到这个分支后，GitHub Actions 会自动构建，并把生成的网站发布到 `master` 分支（也就是 GitHub Pages）。

## 发一篇文章

在 `source/_posts/` 下新建 `文章名.md`，开头写：

```
---
title: 标题
date: 2026-10-01 20:00:00
tags: 标签
---
```

图片放进同名文件夹 `source/_posts/文章名/`，正文里写 `![](图片.png)` 引用。写完提交并推送到 `source` 分支即可；在 GitHub 网页上直接新建文件也行。

## 本地预览（可选）

```
npm ci
npx hexo server      # 打开 http://localhost:4000
```

## 配置在哪

- 站点名、副标题：`_config.yml`
- 头像、左栏、About me：`themes/yilia/_config.yml`
