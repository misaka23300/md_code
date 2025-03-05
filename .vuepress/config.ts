import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "/opt/1panel/apps/openresty/openresty/www/sites/laffey4590.asia/index",
  lang: "zh-CN",
  title: "基于vuepress的网站",
  description: "vuepress-theme-hope 的博客演示",
  head: [
    [
      'script',
      {
        defer: true,
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': 'd6406fbe-3b30-48e5-b521-10ca81982f58'
      }
    ]
  ], 
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});



