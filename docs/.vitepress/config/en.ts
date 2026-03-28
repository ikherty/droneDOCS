import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "FPV ABCs",
  title: "FPV ABCs",

  themeConfig: {
    sidebarMenuLabel: "Menu",
    outline: { label: "Content:" },
    sidebar: sidebar(),
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
      copyright: 'Copyright © 2025-present <a href="https://github.com/ikherty">PropWash Service</a>',
    },
  },
});

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "Getting started", link: "/en/intro/beginning" },
        { text: "Glossary", link: "/en/intro/glossarium" },
        { text: "Flight styles", link: "/en/intro/flightstyles" },
        { text: "Simulators", link: "/en/intro/sim" },
        { text: "Transmitters", link: "/en/intro/tx" },
        { text: "Video systems", link: "/en/intro/vrx" },
        { text: "Chargers & Batteries", link: "/en/intro/power" },
      ],
    },
    /* {
      text: "Shopping",
      collapsed: true,
      items: [
        { text: "Must-have items", link: "/en/shop/nessesary" },
        { text: "For Airplane Pilots", link: "/en/shop/airplanes" },
        { text: "Starter Kits", link: "/en/shop/set" },
        { text: "DIY Components", link: "/en/shop/DIY" },
      ],
    }, */
    {
      text: "Community",
      collapsed: true,
      items: [
        { text: "Dictionary", link: "https://oscarliang.com/fpv-dictionary/" },
        { text: "Chats", link: "/en/community/chats" },
        { text: "Useful Resources", link: "/en/community/usefull" },
        { text: "Software", link: "/en/community/software" },
        { text: "Soldering", link: "/en/community/soldering" },
        { text: "Waterproofing", link: "/en/community/coating" },
        { text: "Law", link: "/en/community/law" },
        { text: "Traveling with drones", link: "/en/community/bag" },
      ],
    },
    {
      text: "Settings",
      collapsed: true,
      items: [
        { text: "Beginner Questions", link: "/en/settings/FAQ" },
        { text: "Rates", link: "/en/settings/rates" },
        { text: "TX Scripts", link: "/en/settings/scripts" },
        { text: "For FrSky Users", link: "/en/settings/frsky" },
        { text: "Skyzone SteadyView", link: "/en/settings/skyzone" },
      ],
    },
  ];
}
