import { defineConfig, type DefaultTheme } from "vitepress";

export const ru = defineConfig({
  lang: "ru-RU",
  description: "Справочник по FPV хобби",
  title: "Справочник по FPV хобби",

  themeConfig: {
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Оформление",
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    langMenuLabel: "Изменить язык",
    outline: { label: "Содержание:" },
    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    docFooter: {
      prev: "Назад",
      next: "Далее",
    },
    editLink: {
      pattern: "https://github.com/ikherty/droneDocs/edit/master/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },
    sidebar: {
      ru: { base: "/ru/", items: sidebar() },
    },
  },
});

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Введение",
      collapsed: true,
      items: [
        { text: "Вход в хобби", link: "/intro/beginning" },
        { text: "Стили полета", link: "/intro/flightstyles" },
        { text: "Симулятор", link: "/intro/sim" },
        { text: "Аппаратура", link: "/intro/tx" },
        { text: "Видеосвязь", link: "/intro/vrx" },
        { text: "Источники питания", link: "/intro/power" },
      ],
    },
    {
      text: "Покупки",
      collapsed: false,
      items: [
        { text: "Магазины", link: "/shop/shops" },
        { text: "Must have вещи для хоббистов", link: "/shop/nessesary" },
        { text: "Для самолетчиков", link: "/shop/airplanes" },
        { text: "Стартовые наборы", link: "/shop/set" },
        { text: "Компоненты для самосборов", link: "/shop/DIY" },
      ],
    },
    {
      text: "Сообщество",
      collapsed: false,
      items: [
        { text: "Глоссарий", link: "/community/glossarium" },
        { text: "Чаты", link: "/community/chats" },
        { text: "Полезные материалы", link: "/community/usefull" },
        { text: "Программное обеспечение", link: "/community/software" },
        { text: "Пайка", link: "/community/soldering" },
        { text: "Влагозащита", link: "/community/coating" },
        { text: "Правила полетов", link: "https://fpvcodex.ru/" },
        { text: "Перевозка дронов и оборудования", link: "/community/bags" },
      ],
    },
    {
      text: "Настройки",
      collapsed: false,
      items: [
        { text: "Вопросы новичков", link: "/settings/FAQ" },
        { text: "Рейты", link: "/settings/rates" },
        { text: "Скрипты для аппаратуры", link: "/settings/scripts" },
        { text: "Пользователям FrSky", link: "/settings/frsky" },
        { text: "Skyzone SteadyView", link: "/settings/skyzone" },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  ru: {
    placeholder: "Поиск в документации",
    translations: {
      button: {
        buttonText: "Поиск",
        buttonAriaLabel: "Поиск",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Сбросить поиск",
          resetButtonAriaLabel: "Сбросить поиск",
          cancelButtonText: "Отменить поиск",
          cancelButtonAriaLabel: "Отменить поиск",
        },
        startScreen: {
          recentSearchesTitle: "История поиска",
          noRecentSearchesText: "Нет истории поиска",
          saveRecentSearchButtonTitle: "Сохранить в истории поиска",
          removeRecentSearchButtonTitle: "Удалить из истории поиска",
          favoriteSearchesTitle: "Избранное",
          removeFavoriteSearchButtonTitle: "Удалить из избранного",
        },
        errorScreen: {
          titleText: "Невозможно получить результаты",
          helpText: "Вам может потребоваться проверить подключение к Интернету",
        },
        footer: {
          selectText: "выбрать",
          navigateText: "перейти",
          closeText: "закрыть",
          searchByText: "поставщик поиска",
        },
        noResultsScreen: {
          noResultsText: "Нет результатов для",
          suggestedQueryText: "Вы можете попытаться узнать",
          reportMissingResultsText: "Считаете, что поиск даёт ложные результаты？",
          reportMissingResultsLinkText: "Нажмите на кнопку «Обратная связь»",
        },
      },
    },
  },
};
