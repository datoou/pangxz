export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "胖小子",
  /** your name */
  author: "Pangxz",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://pangxz.com",
  /** your locale */
  locale: "zh-tw",
  /** theme style */
  themeStyle: "auto",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/datoou",
    },
    // {
    //   name: "rss",
    //   href: "/atom.xml",
    // },
    // {
    //   name: "twitter",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // },
    // {
    //   name: "mastodon",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // },
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [{ name: "胡适", path: "hu-shi" }],
  /** your comment provider */
  comments: {
    // disqus: {
    //   shortname: "typography-astro",
    // },
    giscus: {
      repo: "datoou/pangxz",
      repoId: "R_kgDOLr6fzg",
      category: "General",
      categoryId: "DIC_kwDOLr6fzs4Cek0b",
      mapping: "title",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "1",
      inputPosition: "top",
      theme: "light",
      lang: "zh-CN",
      loading: "lazy",
    },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  },
};
