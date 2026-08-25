const ru = {
  translation: {
    bottomTabs: {
      home: "Главная",
      care: "Забота",
      statistics: "Статистика",
      profile: "Профиль",
    },
    firstScreen: {
      title: "Отслеживай своё эмоциональное состояние каждый день.",
      description:
        "Отмечай своё настроение каждый день, слушай расслабляющие медитации и отслеживай свой эмоциональный путь в календаре",
      buttonText: "Начать",
    },
    authScreen: {
      title: "Добро пожаловать!",
      subtitle: "У тебя уже есть аккаунт?",
      signInButtonText: "Войти",
      signUpButtonText: "Создать аккаунт",
    },
    signInScreen: {
      title: "Войти",
      subtitle: "Привет! Рады видеть тебя снова",
      emailPlaceholder: "Электронная почта",
      passwordPlaceholder: "Пароль",
      forgotPassword: "Забыли пароль?",
      signInButtonText: "Войти",
      signUpReminder: "У тебя нет аккаунта?",
      signUpButtonText: "Создать аккаунт",
    },
    signUpScreen: {
      title: "Создать аккаунт",
      subtitle: "Давай начнем - создай свой аккаунт ниже",
      namePlaceholder: "Имя",
      emailPlaceholder: "Электронная почта",
      passwordPlaceholder: "Пароль",
      confirmPasswordPlaceholder: "Подтвердите пароль",
      signUpButtonText: "Зарегистрироваться",
      signInReminder: "У тебя уже есть аккаунт?",
      signInButtonText: "Войти",
    },
    formik: {
      nameMin: "Имя должно быть не менее 2 символов",
      nameMax: "Имя должно быть не более 30 символов",
      emailInvalid:
        "Пожалуйста, введите действительный адрес электронной почты",
      passwordMin: "Этот пароль недействителен. Пожалуйста, попробуйте еще раз",
      matchPassword: "Пароли должны совпадать",
      required: "Обязательное поле",
    },
    home: {
      title: "Привет",
      subtitle: "Всё, что ты чувствуешь, имеет значение!",
      emotionTitle: "Что ты чувствуешь сейчас?",
      emotions: {
        sad: "Грусть",
        laugh: "Смех",
        angry: "Злость",
        tired: "Усталость",
        happy: "Счастье",
        inLove: "Влюбленность",
        thinking: "Задумчивость",
        confused: "Растерянность",
        inspiration: "Вдохновение",
        calm: "Спокойствие",
        anxious: "Тревога",
        stressed: "Стресс",
      },
      statisticsTitle: "Обзор",
      emptyTitle: "Нет записей",
      emptySubtitle: "Выбери, как ты себя чувствуешь!",
      deleteButtonText: "Удалить",
    },
    successModal: {
      modalText: "Твоя эмоция была успешно добавлена.",
      closeButtonText: "Закрыть",
    },
    successChangesModal: {
      modalText: "Изменения успешно сохранены.",
      closeButtonText: "Закрыть",
    },
    emotionModal: {
      modalText:
        "Вы выбрали <accent>{{emotion}}</accent>.\nПодтвердите свой выбор?",
      confirmButtonText: "Подтвердить",
    },
    statsModal: {
      buttonText: "Понятно",
    },
    avatarModal: {
      title: "Выбери свой аватар",
      buttonText: "Подтвердить",
    },
    careScreen: {
      title: "Твоя внутренняя гармония",
      subtitle:
        "Замедлись, дыши глубоко и восстанавливай свой внутренний покой",
      itemTitles: {
        Calm: "Спокойствие",
        Energize: "Энергия",
        Sleep: "Сон",
        Balance: "Равновесие",
        Focus: "Фокус",
      },
      session: "сессий",
    },
    audioPlayer: {
      headerTitle: "Сейчас играет",
    },
    statisticsScreen: {
      title: "Статистика настроения",
      subtitle: "Отслеживай свой эмоциональный путь день за днём",
      emptyEmotions: "Нет записей эмоций на {{date}}",
      header: "Статистика",
      dayTitle: "Каким было твое настроение {{formattedDate}}",
    },
    profileScreen: {
      editButtonText: "Редактировать профиль",
      settingsButtonText: "Настройки",
      logoutButtonText: "Выйти",
    },
    accountScreen: {
      headerTitle: "Мой аккаунт",
      editButtonText: "Редактировать",
      usernameLabel: "Имя пользователя",
      emailLabel: "Электронная почта",
      cancelButtonText: "Отмена",
      saveButtonText: "Сохранить изменения",
    },
    settingsScreen: {
      headerTitle: "Настройки",
      passwordLabel: "Сменить пароль",
      themeLabel: "Тема",
      languageLabel: "Язык",
      languageTitle: "Сменить язык",
      deleteAccountLabel: "Удалить аккаунт",
      changePasswordTitle: "Сменить пароль",
      currentPasswordLabel: "Текущий пароль",
      currentPasswordPlaceholder: "Введите текущий пароль",
      newPasswordLabel: "Новый пароль",
      newPasswordPlaceholder: "Введите новый пароль",
      changePasswordButton: "Сменить пароль",
      aboutLabel: "О приложении",
    },
    deleteAccountModal: {
      title: "Удалить аккаунт?",
      description:
        "Это действие нельзя отменить. Все ваши данные будут безвозвратно удалены.",
      cancelButtonText: "Отмена",
      deleteButtonText: "Удалить",
    },
    loadingScreen: {
      loadingText: "Загрузка...",
    },
    forgotPassword: {
      headerForgotPassword: "Сброс пароля",
      headerStep2: "Новый пароль",
      step1Description:
        "Введите email, указанный при регистрации. Мы отправим на него код для сброса пароля.",
      step2Description:
        "Мы отправили 6-значный код на почту {{email}}. Введите его и задайте новый пароль.",
      step3Description:
        "Введите новый пароль и подтвердите его, чтобы завершить процесс сброса пароля.",
      emailPlaceholder: "Email",
      codePlaceholder: "Код из письма",
      newPasswordPlaceholder: "Новый пароль",
      confirmPasswordPlaceholder: "Повторите новый пароль",
      sendCodeButton: "Получить код",
      sendCode: "Отправить код",
      resetButton: "Сохранить новый пароль",
      resendCode: "Отправить код повторно",
      resendCodeIn: "Повторная отправка через {{seconds}} с",
      successTitle: "Успешно!",
      successMessage: "Ваш пароль был успешно изменен.",
      errors: {
        invalidEmail: "Введите корректный адрес электронной почты",
        emptyField: "Введите код подтверждения",
        passwordTooShort: "Пароль должен содержать не менее 6 символов",
        passwordsDoNotMatch: "Пароли не совпадают",
      },
    },
    about: {
      headerTitle: "О приложении",
      welcomeTitle: "Добро пожаловать в Mindery",
      introParagraph1:
        "Mindery был создан с простой идеей: каждая эмоция важна, и понимание того, что вы чувствуете, — первый шаг к сбалансированной жизни.",
      introParagraph2:
        "Легко фиксируйте свое настроение в течение дня, проверяйте историю настроений в календаре и расслабляйтесь с помощью медитаций. Mindery также является полезным помощником для терапии — он позволяет просматривать конкретные даты и делиться четкими записями о настроении с вашим психологом во время сеансов.",
      featuresTitle: "Главные возможности",
      featureSimplicityTitle: "Быстро и легко",
      featureSimplicityDesc:
        "Фиксация настроения занимает всего пару секунд и не отвлекает от жизни.",
      featureCalendarTitle: "Календарь эмоций",
      featureCalendarDesc:
        "Наглядная история ваших чувств и триггеров по дням и месяцам.",
      featureMeditationsTitle: "Медитации и практики",
      featureMeditationsDesc:
        "Короткие аудиопрактики, чтобы снять стресс, выдохнуть и перезагрузиться.",
      featureTherapyTitle: "Помощник в терапии",
      featureTherapyDesc:
        "Готовая аналитика для сессий с психологом — без необходимости вспоминать всё на ходу.",
      featurePrivacyTitle: "Полная конфиденциальность",
      featurePrivacyDesc:
        "Ваши личные записи надежно защищены. Ваши чувства — только ваша территория.",
      thankYou: "Спасибо, что выбираете заботу о себе вместе с Mindery!",
      version: "Версия {{version}}",
    },
    common: {
      error: "Ошибка",
      somethingWentWrong: "Произошла ошибка. Попробуйте позже.",
    },
  },
};

export default ru;
export type Translations = typeof ru;
