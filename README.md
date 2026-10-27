<div align="center">

<img src="public/favicon.svg" width="72" alt="Minims Logo" />

# 极简软件 · Minims

**把复杂留给自己，把简单留给你。**

[![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![Element Plus](https://img.shields.io/badge/Element_Plus-2.9-409eff?logo=element&logoColor=white)](https://element-plus.org)
[![Version](https://img.shields.io/badge/version-1.0.1-0a5f4a)](https://github.com/cosolar/minims/releases)

**www.minims.cn** · 极简软件官方门户 · 纯静态、无后端、无追踪

[在线访问](https://www.minims.cn) · [问题反馈](https://github.com/cosolar/minims/issues)

<img src="public/og-cover.png" alt="Minims 官网预览" width="880" />

</div>

---

## 关于

极简软件（Minims）是 [Cosolar](https://github.com/cosolar) 维护的独立开源项目集合。名字里的 Mini 不是简陋，而是克制：去掉不必要的功能、装饰和打扰，只留下真正要解决的问题。

这个仓库是品牌门户站——一张单页，讲清楚我们是谁、做了什么、为什么这样做。纯前端实现，直接部署在任意静态托管上。

## 特性

- **单页长滚动** — 理念、产品、开源数据、关于，一页讲完，锚点直达
- **纸感编辑风** — 暖白纸底、衬线标题、细分隔线，把排版当设计语言
- **明暗双主题** — 一键切换，`localStorage` 持久化，无闪屏初始化
- **GitHub 实时数据** — 仓库星标、更新时间客户端直连 GitHub API，30 分钟缓存 + 静态兜底
- **真实界面截图** — 三款产品均使用实际运行截图，不做概念图
- **SEO 友好** — Meta / Open Graph / JSON-LD 结构化数据 / sitemap / robots 一应俱全
- **无障碍与动效** — 语义化标签、焦点样式、`prefers-reduced-motion` 降级、320–1920px 全宽适配

## 旗下开源项目

| 项目 | 简介 | 在线体验 | 源码 |
| --- | --- | --- | --- |
| **MiniDocs** 极简知识库 | 开源 Markdown 知识库，多库管理、全文检索、可控分享 | [docs.minims.cn](https://docs.minims.cn) | [cosolar/minidocs](https://github.com/cosolar/minidocs) |
| **极简笔记** | 为 Halo 2.x 打造的内容优先博客主题 | [note.minims.cn](https://note.minims.cn) | [cosolar/halo-theme-cosolar](https://github.com/cosolar/halo-theme-cosolar) |
| **MiniWho** 极简简历 | 开源可自托管的在线简历工作台，服务端导出 PDF | [who.minims.cn](https://who.minims.cn) | [cosolar/miniwho](https://github.com/cosolar/miniwho) |

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 类型检查 + 生产构建
npm run build

# 预览生产构建
npm run preview
```

环境要求：Node.js ≥ 20。

## 目录结构

```
├── public/              # 静态资源（favicon、OG 图、sitemap、robots）
├── src/
│   ├── assets/shots/    # 产品真实界面截图（WebP）
│   ├── components/      # 页面区块与通用组件
│   ├── composables/     # 主题切换、GitHub 数据
│   ├── data/            # 产品数据（单数据源）
│   ├── directives/      # v-reveal 滚动入场
│   └── styles/          # 设计变量与区块样式
├── index.html
└── vite.config.ts
```

## 部署

`npm run build` 产出纯静态 `dist/`，任意静态托管均可：

- Nginx / OpenResty：`root` 指向 `dist`，SPA 回退 `try_files $uri /index.html;`
- 或托管到 GitHub Pages、Vercel、Netlify、Cloudflare Pages 等平台

## 相关仓库

[![minidocs](https://img.shields.io/badge/GitHub-minidocs-0a5f4a?logo=github)](https://github.com/cosolar/minidocs)
[![halo-theme-cosolar](https://img.shields.io/badge/GitHub-halo--theme--cosolar-0a5f4a?logo=github)](https://github.com/cosolar/halo-theme-cosolar)
[![miniwho](https://img.shields.io/badge/GitHub-miniwho-0a5f4a?logo=github)](https://github.com/cosolar/miniwho)

---

<div align="center">

**Minims** · 半年后再打开，它依然简单、依然好用。

</div>
