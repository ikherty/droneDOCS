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
        { text: "Getting started", link: "/intro/beginning" },
        { text: "Flight styles", link: "/intro/flightstyles" },
        { text: "Simulators", link: "/intro/sim" },
        { text: "Transmitters", link: "/intro/tx" },
        { text: "Video systems", link: "/intro/vrx" },
        { text: "Chargers & Batteries", link: "/intro/power" },
      ],
    },
    {
      text: "Community",
      collapsed: false,
      items: [
        { text: "Dictionary", link: "https://oscarliang.com/fpv-dictionary/" },
        // { text: "Chats", link: "/community/chats" },
        // { text: "Useful Resources", link: "/community/usefull" },
        { text: "Software", link: "/community/software" },
        { text: "Soldering", link: "/community/soldering" },
        // { text: "Waterproofing", link: "/community/coating" },
      ],
    },
    /*{
      text: "Shopping",
      collapsed: false,
      items: [
        { text: "Must-have items", link: "/shop/nessesary" },
        { text: "For Airplane Pilots", link: "/shop/airplanes" },
        { text: "Starter Kits", link: "/shop/set" },
        { text: "DIY Components", link: "/shop/DIY" },
      ],
    },*/
    {
      text: "Settings",
      collapsed: false,
      items: [
        // { text: "Beginner Questions", link: "/settings/FAQ" },
        // { text: "Rates", link: "/settings/rates" },
        // { text: "TX Scripts", link: "/settings/scripts" },
        { text: "For FrSky Users", link: "/settings/frsky" },
        // { text: "Skyzone SteadyView", link: "/settings/skyzone" },
      ],
    },
  ];
}
