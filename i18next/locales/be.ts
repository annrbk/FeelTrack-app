const be = {
  translation: {
    bottomTabs: {
      home: "Галоўная",
      care: "Клопат",
      statistics: "Статыстыка",
      profile: "Профіль",
    },
    firstScreen: {
      title: "Адсочвай свой эмацыйны стан кожны дзень.",
      description:
        "Адзначай свой настрой кожны дзень, слухай расслабляльныя медытацыі і адсочвай свой эмацыйны шлях у календары",
      buttonText: "Пачаць",
    },
    authScreen: {
      title: "Вітаем!",
      subtitle: "У цябе ўжо ёсць акаўнт?",
      signInButtonText: "Увайсці",
      signUpButtonText: "Стварыць акаўнт",
    },
    signInScreen: {
      title: "Увайсці",
      subtitle: "Прывітанне! Рады бачыць цябе зноў",
      emailPlaceholder: "Электронная пошта",
      passwordPlaceholder: "Пароль",
      forgotPassword: "Забылі пароль?",
      signInButtonText: "Увайсці",
      signUpReminder: "У цябе няма акаўнта?",
      signUpButtonText: "Стварыць акаўнт",
    },
    signUpScreen: {
      title: "Стварыць акаўнт",
      subtitle: "Давай пачнем - ствары свой акаўнт ніжэй",
      namePlaceholder: "Імя",
      emailPlaceholder: "Электронная пошта",
      passwordPlaceholder: "Пароль",
      confirmPasswordPlaceholder: "Пацвердзі пароль",
      signUpButtonText: "Стварыць акаўнт",
      signInReminder: "У цябе ўжо ёсць акаўнт?",
      signInButtonText: "Увайсці",
    },
    formik: {
      nameMin: "Імя павінна быць не менш за 2 сімвалы",
      nameMax: "Імя павінна быць не больш за 30 сімвалаў",
      emailInvalid: "Калі ласка, увядзіце сапраўдны адрас электроннай пошты",
      passwordMin: "Гэты пароль несапраўдны. Калі ласка, паспрабуйце яшчэ раз",
      matchPassword: "Паролі павінны супадаць",
      required: "Абавязковае поле",
    },
    home: {
      title: "Прывітанне",
      subtitle: "Усё, што ты адчуваеш, мае значэнне!",
      emotionTitle: "Як ты сябе адчуваеш зараз?",
      emotions: {
        sad: "Смутак",
        laugh: "Смех",
        angry: "Злосць",
        tired: "Стомленасць",
        happy: "Шчасце",
        inLove: "Закаханасць",
        thinking: "Задуменнасць",
        confused: "Разгубленасць",
        inspiration: "Натхненне",
        calm: "Спакой",
        anxious: "Трывога",
        stressed: "Стрэс",
      },
      statisticsTitle: "Агляд",
      emptyTitle: "Няма запісаў",
      emptySubtitle: "Выберы, як ты сябе адчуваеш!",
      deleteButtonText: "Выдаліць",
    },
    successModal: {
      modalText: "Твая эмоцыя была паспяхова дададзена.",
      closeButtonText: "Закрыць",
    },
    successChangesModal: {
      modalText: "Змены паспяхова захаваны.",
      closeButtonText: "Закрыць",
    },
    emotionModal: {
      modalText:
        "Вы выбралі <accent>{{emotion}}</accent>.\nПацвердзіце свой выбар?",
      confirmButtonText: "Пацвердзіць",
    },
    statsModal: {
      buttonText: "Прыняць",
    },
    avatarModal: {
      title: "Выберы свой аватар",
      buttonText: "Пацвердзіць",
    },
    careScreen: {
      title: "Твая ўнутраная гармонія",
      subtitle: "Павольна, дыхай глыбока і аднаўляй свой спакой",
      itemTitles: {
        Calm: "Спакой",
        Energize: "Энергія",
        Sleep: "Сон",
        Balance: "Раўнавага",
        Focus: "Фокус",
      },
      session: "сесій",
    },
    audioPlayer: {
      headerTitle: "Зараз грае",
    },
    statisticsScreen: {
      title: "Статыстыка настрою",
      subtitle: "Адсочвай свой эмацыйны шлях дзень за днём",
      emptyEmotions: "Няма запісаў эмоцый на {{date}}",
      header: "Статыстыка",
      dayTitle: "Якім быў твой настрой {{formattedDate}}",
    },
    profileScreen: {
      editButtonText: "Рэдагаваць профіль",
      settingsButtonText: "Настройкі",
      logoutButtonText: "Выйсці",
    },
    accountScreen: {
      headerTitle: "Мой акаўнт",
      editButtonText: "Рэдагаваць",
      usernameLabel: "Імя карыстальніка",
      emailLabel: "Электронная пошта",
      cancelButtonText: "Адмяніць",
      saveButtonText: "Захаваць змены",
    },
    settingsScreen: {
      headerTitle: "Настройкі",
      passwordLabel: "Змяніць пароль",
      themeLabel: "Тэма",
      languageLabel: "Мова",
      languageTitle: "Змяніць мову",
      deleteAccountLabel: "Выдаліць акаўнт",
      changePasswordTitle: "Змяніць пароль",
      currentPasswordLabel: "Цяперашні пароль",
      currentPasswordPlaceholder: "Увядзіце цяперашні пароль",
      newPasswordLabel: "Новы пароль",
      newPasswordPlaceholder: "Увядзіце новы пароль",
      changePasswordButton: "Змяніць пароль",
    },
    deleteAccountModal: {
      title: "Выдаліць акаўнт?",
      description:
        "Гэта дзеянне нельга адмяніць. Усе вашы дадзеныя будуць назаўсёды выдалены.",
      cancelButtonText: "Адмяніць",
      deleteButtonText: "Выдаліць",
    },
    loadingScreen: {
      loadingText: "Загрузка...",
    },
  },
};

export default be;
export type Translations = typeof be;
