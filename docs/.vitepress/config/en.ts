import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "FPV ABCs",
  title: "FPV ABCs",

  themeConfig: {
    sidebarMenuLabel: "Menu",
    outline: {
      label: "Content:",
    },
    sidebar: [
      {
        text: "Intro",
      },
    ],
    docFooter: {
      prev: "Back",
      next: "Next",
    },
    editLink: {
      pattern: "https://github.com/ikherty/droneDocs/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/roneDocs/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/ikherty">PropWash Service</a>',
    },
  },
});
