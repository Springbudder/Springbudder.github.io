# Springbudder 博客源码

Hexo 7 + Fluid 主题。这个仓库的 `source` 分支放源码，GitHub Actions 自动构建后发布到 `master` 分支（GitHub Pages）。

## 发一篇文章

1. 在 `source/_posts/` 下新建 `文章名.md`，文件开头写：
   ```
   ---
   title: 标题
   date: 2026-10-01 20:00:00
   tags: [AI, 医药数字化]
   categories: AI 与数字化
   ---
   ```
   正文里用 `<!-- more -->` 标出首页摘要截断的位置。图片放进同名文件夹 `source/_posts/文章名/`，正文里写 `![](图片.png)` 即可引用。
2. 提交并推送到 `source` 分支，一两分钟后网站自动更新。网页上直接在 GitHub 新建文件也可以。

草稿放在 `source/_drafts/`，不会发布；要发布时把文件挪到 `_posts/`。

现有分类：AI 与数字化、医药与诊断、数据科学与编程、读史。文章里要用公式的话，在开头加一行 `math: true`。

## 本地预览（可选）

```
npm ci
npx hexo server --draft     # 打开 http://localhost:4000
```

## 配置在哪

- 站点名、副标题、网址：`_config.yml`
- 配色、头图、关于页卡片：`_config.fluid.yml`
- 关于页正文：`source/about/index.md`
- 样式微调：`source/css/custom.css`
