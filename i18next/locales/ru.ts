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
      signUpButtonText: "Создать аккаунт",
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
      emotionTitle: "Как ты себя чувствуешь сейчас?",
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
      numberLabel: "Номер телефона",
      birthdayLabel: "Дата рождения",
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
  },
};

export default ru;
export type Translations = typeof ru;
