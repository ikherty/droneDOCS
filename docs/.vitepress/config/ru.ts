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
      ru: { items: sidebar() },
    },
  },
});

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Введение",
      collapsed: true,
      items: [
        { text: "Вход в хобби", link: "/ru/intro/beginning" },
        { text: "Стили полета", link: "/ru/intro/flightstyles" },
        { text: "Симулятор", link: "/ru/intro/sim" },
        { text: "Аппаратура", link: "/ru/intro/tx" },
        { text: "Видеосвязь", link: "/ru/intro/vrx" },
        { text: "Источники питания", link: "/ru/intro/power" },
      ],
    },
    {
      text: "Покупки",
      collapsed: false,
      items: [
        { text: "Магазины", link: "/ru/shop/shops" },
        { text: "Must have вещи для хоббистов", link: "/ru/shop/nessesary" },
        { text: "Для самолетчиков", link: "/ru/shop/airplanes" },
        { text: "Стартовые наборы", link: "/ru/shop/set" },
        { text: "Компоненты для самосборов", link: "/ru/shop/DIY" },
      ],
    },
    {
      text: "Сообщество",
      collapsed: false,
      items: [
        { text: "Глоссарий", link: "/ru/community/glossarium" },
        { text: "Чаты", link: "/ru/community/chats" },
        { text: "Полезные материалы", link: "/ru/community/usefull" },
        { text: "Программное обеспечение", link: "/ru/community/software" },
        { text: "Пайка", link: "/ru/community/soldering" },
        { text: "Влагозащита", link: "/ru/community/coating" },
        { text: "Правила полетов", link: "https://fpvcodex.ru/" }, // Внешняя ссылка
        { text: "Перевозка дронов и оборудования", link: "/ru/community/bags" },
      ],
    },
    {
      text: "Настройки",
      collapsed: false,
      items: [
        { text: "Вопросы новичков", link: "/ru/settings/FAQ" },
        { text: "Рейты", link: "/ru/settings/rates" },
        { text: "Скрипты для аппаратуры", link: "/ru/settings/scripts" },
        { text: "Пользователям FrSky", link: "/ru/settings/frsky" },
        { text: "Skyzone SteadyView", link: "/ru/settings/skyzone" },
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
