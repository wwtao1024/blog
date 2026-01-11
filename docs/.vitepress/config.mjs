import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  vpHome: true,
  // 深色、浅色模式切换过渡动画配置。
  viewTransition: {
    enabled: true, // 是否启用深浅色切换动画效果
    mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
    duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
    easing: "ease-in", // 缓动函数
  },
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: true, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },
  // 是否启用侧边栏展开/折叠触发器
  sidebarTrigger: true,
  author: {
    name: "wu wen tao", // 作者名称
    link: "https://github.com/wwtao1024", // 点击作者名称后跳转的链接
  },
  // 布局模式
  themeEnhance: {
    // 布局模式
    layoutSwitch: {
      defaultMode: "fullWidth",
    },
    // 主题色
    themeColor: {
      defaultColorName: "ep-green",
    },
  },
});

// VitePress 配置
export default defineConfig({
  extends: teekConfig,
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
