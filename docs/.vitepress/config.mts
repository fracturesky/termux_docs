import { DefaultTheme, defineConfig } from 'vitepress'
import markdownItCheckbox from 'markdown-it-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Termux для разработчиков: Установка и настройка для быстрого терминала',
  base: "/termux_docs/",
  description: 'Этот гайд расскажет, как установить и настроить Termux для разработчиков, чтобы создать быстрый и эффективный терминал на Android. Узнайте, как настроить Termux для максимальной производительности, оптимизировать работу с кодом и автоматизировать задачи. Весь процесс установки и настройки описан шаг за шагом, чтобы вы могли быстро превратить свой мобильный терминал в мощный инструмент для разработки.',
  lang: 'ru-RU',
  outDir: '../public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/termux-installation' }
    ],

    sidebar: [
      {
        text: 'Termux: Установка и конфигурация',
        collapsed: false,
        base: '/',
        items: [
          { text: 'Установка F-Droid', link: 'f-droid-installation' },
          { text: 'Установка Termux', link: 'termux-installation' },
          {
            text: 'Настройка Termux',
            link: 'termux-setup',
          },
        ]
      },
      {
        text: 'ArchLinux: Настройка',
        collapsed: false,
        base: '/',
        items: [
          {
            text: 'Настройка ArchLinux',
            link: 'archlinux-setup'
          },
          {
            text: 'Установка zsh плагинов',
            link: 'zsh-plugins-installation'
          },
          {
            text: 'Настройка neovim',
            link: 'neovim-setup'
          },
          {
            text: 'Конфигурация .zshrc',
            link: 'zshrc-setup'
          }
        ]
      }
    ],

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Редактировать страницу",
    },

    footer: {
      message: "Опубликовано под лицензией MIT.",
      copyright: "© Charles R. Tyrrell",
    },

    outline: { label: "Содержание страницы" },

    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },

    lastUpdated: {
      text: "Обновлено",
    },

    darkModeSwitchLabel: "Оформление",
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Вернуться к началу",
    langMenuLabel: "Изменить язык",
  },
  markdown: {
    config: (md) => {
      md.use(markdownItCheckbox)
    }
  }
});

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
          reportMissingResultsText:
            "Считаете, что поиск даёт ложные результаты？",
          reportMissingResultsLinkText: "Нажмите на кнопку «Обратная связь»",
        },
      },
    },
  },
};
