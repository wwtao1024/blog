import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点目录路径
  base: "/blog/",
  // 站点标题
  title: "Forge Code",
  // todo 允许自定义每个页面的标题后缀或整个标题
  // titleTemplate: "Forge Code",
  description: "Based on vitepress's blog",
  // icon设置
  head: [["link", { rel: "icon", href: "/blog/favicon.ico" }]],
  // 显示文章最后更新时间
  lastUpdated: true,
  themeConfig: {
    // logo设置
    logo: "/logo.png",
    // 全局搜索
    search: {
      provider: "local",
    },
    // 导航链接
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wwtao1024/blog" },
    ],
    // 底部版权
    footer: {
      // message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present wuwentao",
    },
  },
});
