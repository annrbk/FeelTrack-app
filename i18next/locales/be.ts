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
      signUpButtonText: "Зарэгістравацца",
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
      emotionTitle: "Што ты адчуваеш зараз?",
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
      aboutLabel: "Аб дадатку",
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
    forgotPassword: {
      headerForgotPassword: "Скід пароля",
      headerStep2: "Новы пароль",
      step1Description:
        "Увядзіце email, указаны пры рэгістрацыі. Мы вышлем на яго код для скіду пароля.",
      step2Description:
        "Мы адправілі 6-значны код на пошту {{email}}. Увядзіце яго і ўсталюйце новы пароль.",
      step3Description:
        "Увядзіце новы пароль і пацвердзіце яго, каб завяршыць працэс скіду пароля.",
      emailPlaceholder: "Email",
      codePlaceholder: "Код з ліста",
      newPasswordPlaceholder: "Новы пароль",
      confirmPasswordPlaceholder: "Паўтарыце новы пароль",
      sendCodeButton: "Атрымаць код",
      sendCode: "Адправіць код",
      resetButton: "Захаваць новы пароль",
      resendCode: "Адправіць код паўторна",
      resendCodeIn: "Паўторная адпраўка праз {{seconds}} с",
      successTitle: "Паспяхова!",
      successMessage: "Ваш пароль быў паспяхова зменены.",
      errors: {
        invalidEmail: "Увядзіце карэктны адрас электроннай пошты",
        emptyField: "Увядзіце код пацверджання",
        passwordTooShort: "Пароль павінен утрымліваць не менш за 6 сімвалаў",
        passwordsDoNotMatch: "Паролі не супадаюць",
      },
    },
    about: {
      headerTitle: "Аб дадатку",
      welcomeTitle: "Сардэчна запрашаем у Mindery",
      introParagraph1:
        "Mindery быў створаны з простай ідэяй: кожная эмоцыя важная, і разуменне таго, што вы адчуваеце, — першы крок да збалансаванага жыцця.",
      introParagraph2:
        "Лёгка фіксуйце свой настрой на працягу дня, правярайце гісторыю настрояў у календары і расслабляйцеся з дапамогай медытацый. Mindery таксама з'яўляецца карысным памочнікам для тэрапіі — ён дазваляе праглядаць канкрэтныя даты і дзяліцца дакладнымі запісамі аб настроі з вашым псіхолагам падчас сеансаў.",
      featuresTitle: "Галоўныя магчымасці",
      featureSimplicityTitle: "Хутка і лёгка",
      featureSimplicityDesc:
        "Фіксацыя настрою займае ўсяго пару секунд і не адцягвае ад жыцця.",
      featureCalendarTitle: "Каляндар эмоцый",
      featureCalendarDesc:
        "Наглядная гісторыя вашых пачуццяў і трыгераў па днях і месяцах.",
      featureMeditationsTitle: "Медытацыі і практыкі",
      featureMeditationsDesc:
        "Кароткія аўдыёпрактыкі, каб зняць стрэс, выдыхнуць і перазагрузіцца.",
      featureTherapyTitle: "Памочнік у тэрапіі",
      featureTherapyDesc:
        "Гатовая аналітыка для сесій з псіхолагам — без неабходнасці ўспамінаць усё на хаду.",
      featurePrivacyTitle: "Поўная канфідэнцыяльнасць",
      featurePrivacyDesc:
        "Вашы асабістыя запісы надзейна абаронены. Вашы пачуцці — толькі ваша тэрыторыя.",
      thankYou: "Дзякуй, што выбіраеце клопат пра сябе разам з Mindery!",
      version: "Версія {{version}}",
    },
    common: {
      error: "Памылка",
      somethingWentWrong: "Адбылася памылка. Паспрабуйце пазней.",
    },
  },
};

export default be;
export type Translations = typeof be;
