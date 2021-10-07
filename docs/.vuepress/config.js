module.exports = {
  title: "Element SaaS 扩展",
  description: "基于 Element UI 对 SaaS 业务开发常见的交互组件",
  plugins: ["demo-container"],
  base: "/element-ui-saas-extend/",
  dest: "./dist",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Element UI SaaS 扩展',
      description: '基于 Element UI 对 SaaS 业务开发常见的交互组件。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Element UI SaaS Extend',
      description: 'Development common interaction component for SaaS business base Element UI.'
    }
  },
  themeConfig: {
    repo: "kwokronny/element-ui-saas-extend",
    repoLabel: "GitHub",
    locales: {
      "/": {
        selectText: '选择语言',
        label: '简体中文',
        lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
        lastUpdated: "最近更新",
        sidebar: [
          "/Changelog",
          "/Installation",
          {
            title: "组件",
            children: ["/components/NumberRange", "/components/FormAuto", "/components/TablePage"],
          },
          "/Donate",
        ],
        nav: [
          { text: "作者", link: "https://kwokronny.top" },
          { text: "Gitee", link: "https://gitee.com/kwokronny/element-ui-saas-extend" },
        ],
      },
      "/en/":{
        selectText: 'Languages',
        label: 'English',
        lastUpdated: "Latest Update",
        nav: [
          { text: "Anthor", link: "https://kwokronny.top" },
          { text: "Gitee", link: "https://gitee.com/kwokronny/element-ui-saas-extend" },
        ],
        sidebar: [
          "/en/Changelog",
          "/en/Installation",
          {
            title: "Components",
            children: ["/en/components/NumberRange", "/en/components/FormAuto", "/en/components/TablePage"],
          },
          "/en/Donate",
        ],
      }
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                configFile: false,
                presets: ["@vue/cli-plugin-babel/preset"],
              },
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
};
