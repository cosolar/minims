import minidocsShot from '../assets/shots/minidocs-doc.webp'
import noteShot from '../assets/shots/note-home.webp'
import whoShot from '../assets/shots/who-home.webp'

export interface ProductFeature {
  title: string
  text: string
}

export interface Product {
  id: string
  index: string
  kicker: string
  name: string
  cn: string
  tagline: string
  description: string
  features: ProductFeature[]
  tags: string[]
  siteUrl: string
  repoUrl: string
  siteLabel: string
  siteCta: string
  shot: string
  shotAlt: string
  shotUrl: string
  shotCaption: string
}

export const products: Product[] = [
  {
    id: 'minidocs',
    index: '01',
    kicker: 'KNOWLEDGE BASE',
    name: 'MiniDocs',
    cn: '极简知识库',
    tagline: '把知识放进结构里。',
    description:
      '面向个人、团队与工作室的开源 Markdown 知识库。多知识库独立管理、树形目录、全文检索、分享口令与细粒度权限；一条链接就能把文档交给需要的人，不必让对方注册账号。',
    features: [
      {
        title: 'Markdown 原生创作',
        text: 'GFM、Mermaid、KaTeX 与提示块，写作时看到的就是最终排版。',
      },
      {
        title: '分享始终可控',
        text: '整库或单篇分享，支持口令、有效期、自定义短链与访问统计。',
      },
      {
        title: '团队有边界',
        text: '多组织、角色权限、维护名单与操作审计，协作清晰可追溯。',
      },
    ],
    tags: ['docs.minims.cn', '可自托管', '源码公开'],
    siteUrl: 'https://docs.minims.cn',
    repoUrl: 'https://github.com/cosolar/minidocs',
    siteLabel: '在线演示',
    siteCta: '打开在线演示',
    shot: minidocsShot,
    shotAlt: 'MiniDocs 知识库的三栏文档阅读界面',
    shotUrl: 'docs.minims.cn',
    shotCaption: '三栏文档阅读 · 真实界面',
  },
  {
    id: 'note',
    index: '02',
    kicker: 'HALO THEME',
    name: '极简笔记',
    cn: 'halo-theme-cosolar',
    tagline: '让技术写作回到文字本身。',
    description:
      '为 Halo 2.x 打造的现代博客主题。内容优先的排版、明暗双模、悬浮目录与阅读进度，把力气花在阅读体验上，而不是堆满首页的装饰。',
    features: [
      {
        title: '为长文而设计',
        text: '悬浮目录、阅读进度与零依赖图片查看器，长文章也能读得从容。',
      },
      {
        title: '后台可调',
        text: '轮播、侧栏、动态背景与登录页，全部可视化配置，无需改代码。',
      },
      {
        title: '与 MiniDocs 打通',
        text: '知识库列表与三栏阅读页，博客和文档共享同一套阅读体验。',
      },
    ],
    tags: ['note.minims.cn', 'Halo ≥ 2.26', 'GPL-3.0'],
    siteUrl: 'https://note.minims.cn',
    repoUrl: 'https://github.com/cosolar/halo-theme-cosolar',
    siteLabel: '在线预览',
    siteCta: '在线预览',
    shot: noteShot,
    shotAlt: '极简笔记 Halo 主题的博客首页界面',
    shotUrl: 'note.minims.cn',
    shotCaption: '内容优先 · 明暗双模',
  },
  {
    id: 'miniwho',
    index: '03',
    kicker: 'RESUME',
    name: 'MiniWho',
    cn: '极简简历',
    tagline: '把履历写清楚，让机会看见你。',
    description:
      '一套开源、免费、可自托管的在线简历工作台。结构化模块代替花哨排版，A4 模板实时预览，服务端导出 PDF；分享链接可加密码与有效期，隐私留在自己手里。',
    features: [
      {
        title: '结构化编辑',
        text: '18 种内容模块，边填边看 A4 效果，内容永远比装饰重要。',
      },
      {
        title: '12 套官方模板',
        text: '单栏、双栏、时间轴、色带，也支持导入和分享社区模板包。',
      },
      {
        title: '五维简历诊断',
        text: '完整度、匹配度、表达、量化与格式，规则透明、结果可复现。',
      },
    ],
    tags: ['who.minims.cn', '免费使用', 'Apache-2.0'],
    siteUrl: 'https://who.minims.cn',
    repoUrl: 'https://github.com/cosolar/miniwho',
    siteLabel: '免费使用',
    siteCta: '免费制作简历',
    shot: whoShot,
    shotAlt: 'MiniWho 极简简历的宣传首页与 A4 简历预览',
    shotUrl: 'who.minims.cn',
    shotCaption: '结构化填写 · A4 实时排版',
  },
]
