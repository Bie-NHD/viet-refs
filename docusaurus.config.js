// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Việt References",
  tagline:
    "Tài liệu tổng hợp về tài nguyên sáng tạo cho các sản phẩm sáng tạo Việt",
  favicon: "img/favicon.ico",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Tài liệu tổng hợp các nguồn sưu tầm về cổ phục Việt, các tác phẩm lấy cảm hứng từ văn hóa dân gian Việt và các sân chơi, chủ đề, ý tưởng cho các tác phẩm sáng tạo từ chất liệu Việt Nam.",
      },
    },
  ],

  // Set the production url of your site here
  url: "https://vietrefs.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bie-nhd", // Usually your GitHub org/user name.
  projectName: "viet-refs", // Usually your repo name.
  deploymentBranch: "publish",

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "description",
          content:
            "Tài liệu tổng hợp các nguồn sưu tầm về cổ phục Việt, các tác phẩm lấy cảm hứng từ văn hóa dân gian Việt và các sân chơi, chủ đề, ý tưởng cho các tác phẩm sáng tạo từ chất liệu Việt Nam.",
        },
        {
          name: "keywords",
          content:
            "Việt Nam, Việt phục, cổ phong, tài liệu, thuần Việt, văn hóa, truyền thống, trang phục, cổ truyền",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          "http-equiv": "audience",
          content: "General",
        },
      ],
      navbar: {
        title: "Viet References",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          //   {
          //     type: "docSidebar",
          //     sidebarId: "tutorialSidebar",
          //     position: "left",
          //     label: "Tutorial",
          //   },
          //   { to: "/blog", label: "Blog", position: "left" },
          //   {
          //     href: "https://github.com/facebook/docusaurus",
          //     label: "GitHub",
          //     position: "right",
          //   },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      announcementBar: {
        id: "announce",
        content: "⚠ <i>Trang web hiện đang trong quá trình xây dựng</i> ⚠",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "vi",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,
      },
    ],
  ],
};

module.exports = config;
