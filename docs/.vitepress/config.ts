import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "dronedocs",
  description: "guides and reviews",
  themeConfig: {
    sidebar: [
      {
        text: "Введение",
        collapsible: false,
        items: [
          { text: "Купить Velocidrone", link: "/shop/sim" },
          { text: "Вход в хобби", link: "/intro/README" },
          { text: "Стили полета", link: "/intro/flightstyles" },
          { text: "Аппаратура", link: "/intro/tx" },
          { text: "Видеосвязь", link: "/intro/videoRx" },
          { text: "Зарядное устройство", link: "/intro/power" }
        ]
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
            { text: "Как экономить?", link: "/shop/lifehacks" }
        ]
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
            { text: "Перевозка дронов и оборудования", link: "/community/bags" }
        ]
      },
      {
        text: "Настройки",
        collapsible: false,
        items: [
            { text: "Рейты", link: "/settings/rates" },
            { text: "Пресеты", link: "/settings/presets" },
            { text: "Пользователям FrSky", link: "/settings/frsky" }
        ]
      }
    ],
  },
});
