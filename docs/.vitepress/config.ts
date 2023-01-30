import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Drone Docs",
  description: "Справочник по FPV хобби",
  lang: "ru",
  // base: "/droneDOCS/",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    ["meta", { name: "yandex-verification", content: "70a661cfc8a7eb46" }],
    [
      "script",
      { type: "text/javascript" },
      '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(92209567, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });',
    ],
    // ["noscript", {}, ['div', {}, ["img", {src: "https://mc.yandex.ru/watch/92209567", style: "position:absolute; left:-9999px;"}]]],
  ],
  themeConfig: {
    siteTitle: "Drone Docs",
    logo: "/favicon.svg",
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/ikherty">PropWash Service</a>',
    },
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Сменить тему",
    outline: { label: "Содержание:" },
    docFooter: {
      prev: "Назад",
      next: "Далее",
    },
    editLink: {
      pattern: "https://github.com/ikherty/droneDocs/edit/master/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
        },
        link: "https://t.me/propwash",
      },
      { icon: "github", link: "https://github.com/ikherty/droneDocs" },
      { icon: "youtube", link: "https://www.youtube.com/@PropWashService" },
    ],
    algolia: {
      appId: "T2WUNRWNAH",
      apiKey: "682cbd880443f6771b3b4c37c137984e",
      indexName: "propwashservice_ru",
    },
    sidebar: [
      {
        text: "Введение",
        collapsible: false,
        items: [
          { text: "Купить Velocidrone", link: "/shop/buyVeloci" },
          { text: "Вход в хобби", link: "/intro/beginning" },
          { text: "Стили полета", link: "/intro/flightstyles" },
          { text: "Аппаратура", link: "/intro/tx" },
          { text: "Видеосвязь", link: "/intro/videoRx" },
          { text: "Источники питания", link: "/intro/power" },
        ],
      },
      {
        text: "Покупки",
        collapsible: false,
        items: [
          { text: "Магазины", link: "/shop/shops" },
          { text: "Must have вещи для хоббистов", link: "/shop/nessesary" },
          { text: "Для самолетчиков", link: "/shop/airplanes" },
          { text: "Компоненты для самосборов", link: "/shop/DIY" },
          { text: "Выбор готового аппарата", link: "/shop/KIT" },
          { text: "Как экономить?", link: "/shop/lifehacks" },
        ],
      },
      {
        text: "Сообщество",
        collapsible: false,
        items: [
          { text: "Голоссарий", link: "/community/glossarium" },
          { text: "Чаты", link: "/community/chats" },
          { text: "Полезные материалы", link: "/community/usefull" },
          { text: "Программное обеспечение", link: "/community/software" },
          { text: "Пайка", link: "/community/soldering" },
          { text: "Влагозащита", link: "/community/coating" },
          { text: "Перевозка дронов и оборудования", link: "/community/bags" },
        ],
      },
      {
        text: "Настройки",
        collapsible: false,
        items: [
          { text: "Рейты", link: "/settings/rates" },
          { text: "Пресеты", link: "/settings/presets" },
          { text: "Пользователям FrSky", link: "/settings/frsky" },
        ],
      },
    ],
  },
});
