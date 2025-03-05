// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/JavaScript/": "structure",
  "/Docker/": "structure",
  "/ChatGPT\u95EE\u7B54/": "structure",
  "/Python/": "structure"
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "laffey4590.asia",
  author: {
    name: "menherachan",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/love.gif",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  // 导航栏
  navbar: navbar_default,
  // 侧边栏
  sidebar: sidebar_default,
  // 页脚
  footer: "Ciallo\uFF5E(\u2220\u30FB\u03C9< )\u2312\u2606",
  displayFooter: true,
  // 博客相关
  blog: {
    description: "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/3537114346032000",
      Email: "laffey4590@gmail.com ",
      GitHub: "https://example.com",
      QQ: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press"
      }
    }
  },
  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    }
  },
  // 多语言配置
  metaLocales: {
    //editLink: "在 GitHub 上编辑此页",
  },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    comment: {
      // 选择一个评论服务
      provider: "Artalk",
      // 服务选项
      server: "http://116.196.95.227:23366/"
      // your serverURL
    },
    components: {
      components: ["Badge", "VPCard"]
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // 在启用之前安装 chart.js
      // chart: true,
      // insert component easily
      // 在启用之前安装 echarts
      // echarts: true,
      // 在启用之前安装 flowchart.ts
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // 在启用之前安装 katex
      // katex: true,
      // 在启用之前安装 mathjax-full
      // mathjax: true,
      // 在启用之前安装 mermaid
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // 在启用之前安装 @vue/repl
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  dest: "/opt/1panel/apps/openresty/openresty/www/sites/laffey4590.asia/index",
  lang: "zh-CN",
  title: "\u57FA\u4E8Evuepress\u7684\u7F51\u7AD9",
  description: "vuepress-theme-hope \u7684\u535A\u5BA2\u6F14\u793A",
  head: [
    [
      "script",
      {
        defer: true,
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "d6406fbe-3b30-48e5-b521-10ca81982f58"
      }
    ]
  ],
  theme: theme_default
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvb3B0L3Z1ZXByZXNzL25vY2hhbmdlL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9vcHQvdnVlcHJlc3Mvbm9jaGFuZ2Uvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuICBkZXN0OiBcIi9vcHQvMXBhbmVsL2FwcHMvb3BlbnJlc3R5L29wZW5yZXN0eS93d3cvc2l0ZXMvbGFmZmV5NDU5MC5hc2lhL2luZGV4XCIsXG4gIGxhbmc6IFwiemgtQ05cIixcbiAgdGl0bGU6IFwiXHU1N0ZBXHU0RThFdnVlcHJlc3NcdTc2ODRcdTdGNTFcdTdBRDlcIixcbiAgZGVzY3JpcHRpb246IFwidnVlcHJlc3MtdGhlbWUtaG9wZSBcdTc2ODRcdTUzNUFcdTVCQTJcdTZGMTRcdTc5M0FcIixcbiAgaGVhZDogW1xuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge1xuICAgICAgICBkZWZlcjogdHJ1ZSxcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9jbG91ZC51bWFtaS5pcy9zY3JpcHQuanMnLFxuICAgICAgICAnZGF0YS13ZWJzaXRlLWlkJzogJ2Q2NDA2ZmJlLTNiMzAtNDhlNS1iNTIxLTEwY2E4MTk4MmY1OCdcbiAgICAgIH1cbiAgICBdXG4gIF0sIFxuICB0aGVtZSxcblxuICAvLyBcdTU0OEMgUFdBIFx1NEUwMFx1OEQ3N1x1NTQyRlx1NzUyOFxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcblxuXG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvb3B0L3Z1ZXByZXNzL25vY2hhbmdlL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwibGFmZmV5NDU5MC5hc2lhXCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJtZW5oZXJhY2hhblwiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcblxuICBsb2dvOiBcIi9sb3ZlLmdpZlwiLFxuXG4gIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcbiAgbmF2YmFyLFxuXG4gIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlxuICBzaWRlYmFyLFxuXG4gIC8vIFx1OTg3NVx1ODExQVxuICBmb290ZXI6IFwiQ2lhbGxvXHVGRjVFKFx1MjIyMFx1MzBGQlx1MDNDOTwgKVx1MjMxMlx1MjYwNlwiLFxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIC8vIFx1NTM1QVx1NUJBMlx1NzZGOFx1NTE3M1xuICBibG9nOiB7XG4gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4MDA1XCIsXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcbiAgICBtZWRpYXM6IHtcbiAgICAgIEJpbGlCaWxpOiBcImh0dHBzOi8vc3BhY2UuYmlsaWJpbGkuY29tLzM1MzcxMTQzNDYwMzIwMDBcIixcbiAgICBcbiAgICAgIEVtYWlsOiBcImxhZmZleTQ1OTBAZ21haWwuY29tIFwiLFxuICAgIFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgXG4gICAgICBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBWdWVQcmVzc1RoZW1lSG9wZToge1xuICAgICAgICBpY29uOiBcImh0dHBzOi8vdGhlbWUtaG9wZS1hc3NldHMudnVlanMucHJlc3MvbG9nby5zdmdcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3NcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBcdTUyQTBcdTVCQzZcdTkxNERcdTdGNkVcbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFx1NTkxQVx1OEJFRFx1OEEwMFx1OTE0RFx1N0Y2RVxuICBtZXRhTG9jYWxlczoge1xuICAgIC8vZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgfSxcblxuICAvLyBcdTU5ODJcdTY3OUNcdTYwRjNcdTg5ODFcdTVCOUVcdTY1RjZcdTY3RTVcdTc3MEJcdTRFRkJcdTRGNTVcdTY1MzlcdTUzRDhcdUZGMENcdTU0MkZcdTc1MjhcdTVCODNcdTMwMDJcdTZDRTg6IFx1OEZEOVx1NUJGOVx1NjZGNFx1NjVCMFx1NjAyN1x1ODBGRFx1NjcwOVx1NUY4OFx1NTkyN1x1OEQxRlx1OTc2Mlx1NUY3MVx1NTRDRFxuICAvLyBob3RSZWxvYWQ6IHRydWUsXG5cbiAgLy8gXHU1NzI4XHU4RkQ5XHU5MUNDXHU5MTREXHU3RjZFXHU0RTNCXHU5ODk4XHU2M0QwXHU0RjlCXHU3Njg0XHU2M0QyXHU0RUY2XG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuXG4gICAgLy8gXHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU5NzAwXHU1Qjg5XHU4OEM1IEB3YWxpbmUvY2xpZW50XG4gICAgLy8gXHU4QjY2XHU1NDRBOiBcdThGRDlcdTY2MkZcdTRFMDBcdTRFMkFcdTRFQzVcdTRGOUJcdTZGMTRcdTc5M0FcdTc2ODRcdTZENEJcdThCRDVcdTY3MERcdTUyQTFcdUZGMENcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMkRcdThCRjdcdTgxRUFcdTg4NENcdTkwRThcdTdGNzJcdTVFNzZcdTRGN0ZcdTc1MjhcdTgxRUFcdTVERjFcdTc2ODRcdTY3MERcdTUyQTFcdUZGMDFcbiAgICAvLyBjb21tZW50OiB7XG4gICAgLy8gICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAvLyAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS1jb21tZW50LnZ1ZWpzLnByZXNzXCIsXG4gICAgLy8gfSxcblxuICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgLy8gXHU5MDA5XHU2MkU5XHU0RTAwXHU0RTJBXHU4QkM0XHU4QkJBXHU2NzBEXHU1MkExXG4gICAgICAgIHByb3ZpZGVyOiBcIkFydGFsa1wiLFxuXG4gICAgICAgIC8vIFx1NjcwRFx1NTJBMVx1OTAwOVx1OTg3OVxuICAgICAgICBzZXJ2ZXI6IFwiaHR0cDovLzExNi4xOTYuOTUuMjI3OjIzMzY2L1wiLCAvLyB5b3VyIHNlcnZlclVSTFxuICAgICAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGNvbXBvbmVudHM6IFtcIkJhZGdlXCIsIFwiVlBDYXJkXCJdLFxuICAgIH0sXG5cbiAgICAvLyBcdTZCNjRcdTU5MDRcdTVGMDBcdTU0MkZcdTRFODZcdTVGODhcdTU5MUFcdTUyOUZcdTgwRkRcdTc1MjhcdTRFOEVcdTZGMTRcdTc5M0FcdUZGMENcdTRGNjBcdTVFOTRcdTRFQzVcdTRGRERcdTc1NTlcdTc1MjhcdTUyMzBcdTc2ODRcdTUyOUZcdTgwRkRcdTMwMDJcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudDogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxuICAgICAgc3BvaWxlcjogdHJ1ZSxcbiAgICAgIHN0eWxpemU6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGNoYXJ0LmpzXG4gICAgICAvLyBjaGFydDogdHJ1ZSxcblxuICAgICAgLy8gaW5zZXJ0IGNvbXBvbmVudCBlYXNpbHlcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGVjaGFydHNcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG5cbiAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBmbG93Y2hhcnQudHNcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgICAgLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XG4gICAgICAvLyBnZm06IHRydWUsXG5cbiAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBrYXRleFxuICAgICAgLy8ga2F0ZXg6IHRydWUsXG5cbiAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBtYXRoamF4LWZ1bGxcbiAgICAgIC8vIG1hdGhqYXg6IHRydWUsXG5cbiAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBtZXJtYWlkXG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IHJldmVhbC5qc1xuICAgICAgLy8gcmV2ZWFsSnM6IHtcbiAgICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBAdnVlL3JlcGxcbiAgICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHNhbmRwYWNrOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTk3MDBcdTg5ODEgUFdBXHUzMDAyXHU1Qjg5XHU4OEM1IEB2dWVwcmVzcy9wbHVnaW4tcHdhIFx1NUU3Nlx1NTNENlx1NkQ4OFx1NEUwQlx1NjVCOVx1NkNFOFx1OTFDQVxuICAgIC8vIHB3YToge1xuICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAvLyAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAvLyAgIGNhY2hlSW1hZ2U6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvb3B0L3Z1ZXByZXNzL25vY2hhbmdlL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9vcHQvdnVlcHJlc3Mvbm9jaGFuZ2Uvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuXG4gIHtcbiAgICB0ZXh0OiBcIlYyIFx1NjU4N1x1Njg2M1wiLFxuICAgIGljb246IFwiYm9va1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL3poL1wiLFxuICB9LFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9vcHQvdnVlcHJlc3Mvbm9jaGFuZ2Uvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL29wdC92dWVwcmVzcy9ub2NoYW5nZS9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL0phdmFTY3JpcHQvXCI6IFwic3RydWN0dXJlXCIsXG4gIFwiL0RvY2tlci9cIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvQ2hhdEdQVFx1OTVFRVx1N0I1NC9cIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvUHl0aG9uL1wiOiBcInN0cnVjdHVyZVwiLFxuXG5cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRTNTLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFFQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUNWcVIsU0FBUyxlQUFlO0FBRTlTLElBQU8sa0JBQVEsUUFBUTtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLHlCQUFlO0FBQUEsRUFDZixZQUFZO0FBR2QsQ0FBQzs7O0FGSkQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElB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
