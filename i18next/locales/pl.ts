const pl = {
  translation: {
    bottomTabs: {
      home: "Strona główna",
      care: "Troska",
      statistics: "Statystyki",
      profile: "Profil",
    },
    firstScreen: {
      title: "Śledź swoje samopoczucie każdego dnia.",
      description:
        "Zapisuj swój nastrój, słuchaj relaksujących medytacji i śledź swoją emocjonalną podróż w kalendarzu",
      buttonText: "Rozpocznij",
    },
    authScreen: {
      title: "Witaj!",
      subtitle: "Masz już konto?",
      signInButtonText: "Zaloguj się",
      signUpButtonText: "Utwórz konto",
    },
    signInScreen: {
      title: "Logowanie",
      subtitle: "Cześć! Miło znów Cię widzieć",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Hasło",
      forgotPassword: "Nie pamiętasz hasła?",
      signInButtonText: "Zaloguj się",
      signUpReminder: "Nie masz jeszcze konta?",
      signUpButtonText: "Zarejestruj się",
    },
    signUpScreen: {
      title: "Utwórz konto",
      subtitle: "Zacznijmy - utwórz swoje konto poniżej",
      namePlaceholder: "Imię",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Hasło",
      confirmPasswordPlaceholder: "Potwierdź hasło",
      signUpButtonText: "Zarejestruj się",
      consentText: "Rejestrując się, akceptujesz",
      termsOfUse: " Warunki korzystania",
      and: " oraz ",
      privacyPolicy: "Politykę prywatności",
      signInReminder: "Masz już konto?",
      signInButtonText: "Zaloguj się",
    },
    formik: {
      nameMin: "Imię musi mieć co najmniej 2 znaki",
      nameMax: "Imię może mieć najwyżej 30 znaków",
      emailInvalid: "Wprowadź prawidłowy adres e-mail",
      passwordMin: "To hasło jest nieprawidłowe. Spróbuj ponownie",
      matchPassword: "Hasła muszą być takie same",
      required: "To pole jest wymagane",
    },
    home: {
      title: "Cześć",
      subtitle: "Wszystko, co czujesz, ma znaczenie!",
      emotionTitle: "Co teraz czujesz?",
      emotions: {
        sad: "Smutek",
        laugh: "Śmiech",
        angry: "Złość",
        tired: "Zmęczenie",
        happy: "Szczęście",
        inLove: "Zakochanie",
        thinking: "Zamyślenie",
        confused: "Zagubienie",
        inspiration: "Inspiracja",
        calm: "Spokój",
        anxious: "Niepokój",
        stressed: "Stres",
      },
      statisticsTitle: "Podsumowanie",
      emptyTitle: "Nie zapisano jeszcze żadnych emocji",
      emptySubtitle: "Zacznij od wybrania swojego samopoczucia!",
      deleteButtonText: "Usuń",
    },
    successModal: {
      modalText: "Twoja emocja została pomyślnie dodana.",
      closeButtonText: "Zamknij",
      passwordChangedText: "Hasło zostało pomyślnie zaktualizowane!",
    },
    successChangesModal: {
      modalText: "Zmiany zostały pomyślnie zapisane.",
      closeButtonText: "Zamknij",
    },
    emotionModal: {
      modalText: "Wybrano <accent>{{emotion}}</accent>.\nPotwierdzić wybór?",
      confirmButtonText: "Potwierdź",
    },
    statsModal: {
      buttonText: "Rozumiem",
    },
    avatarModal: {
      title: "Wybierz swój awatar",
      buttonText: "Potwierdź",
    },
    careScreen: {
      title: "Twoja wewnętrzna harmonia",
      subtitle: "Zwolnij, głęboko odetchnij i odzyskaj spokój",
      itemTitles: {
        Calm: "Spokój",
        Energize: "Energia",
        Sleep: "Sen",
        Balance: "Równowaga",
        Focus: "Skupienie",
      },
      session: "sesji",
    },
    audioPlayer: {
      headerTitle: "Teraz odtwarzane",
    },
    statisticsScreen: {
      title: "Statystyki nastroju",
      subtitle: "Śledź swoją emocjonalną podróż dzień po dniu",
      emptyEmotions: "Brak zapisanych emocji dla {{date}}",
      header: "Statystyki",
      dayTitle: "Twój nastrój w dniu {{formattedDate}}",
    },
    profileScreen: {
      editButtonText: "Edytuj profil",
      settingsButtonText: "Ustawienia",
      logoutButtonText: "Wyloguj się",
    },
    accountScreen: {
      headerTitle: "Moje konto",
      editButtonText: "Edytuj",
      usernameLabel: "Nazwa użytkownika",
      emailLabel: "E-mail",
      cancelButtonText: "Anuluj",
      saveButtonText: "Zapisz zmiany",
    },
    settingsScreen: {
      headerTitle: "Ustawienia",
      passwordLabel: "Zmień hasło",
      themeLabel: "Motyw",
      languageLabel: "Język",
      languageTitle: "Zmień język",
      deleteAccountLabel: "Usuń konto",
      changePasswordTitle: "Zmień hasło",
      currentPasswordLabel: "Obecne hasło",
      currentPasswordPlaceholder: "Wpisz obecne hasło",
      newPasswordLabel: "Nowe hasło",
      newPasswordPlaceholder: "Wpisz nowe hasło",
      changePasswordButton: "Zmień hasło",
      aboutLabel: "O aplikacji",
      privacyPolicyLabel: "Polityka prywatności",
      termsOfUseLabel: "Warunki korzystania",
      contactUsLabel: "Skontaktuj się z nami",
      mailUnavailableTitle: "Poczta niedostępna",
      mailUnavailableMessage:
        "Na tym urządzeniu nie znaleziono aplikacji pocztowej.",
    },
    deleteAccountModal: {
      title: "Usunąć konto?",
      description:
        "Tej czynności nie można cofnąć. Wszystkie Twoje dane zostaną trwale usunięte.",
      cancelButtonText: "Anuluj",
      deleteButtonText: "Usuń",
    },
    loadingScreen: {
      loadingText: "Ładowanie...",
    },
    forgotPassword: {
      headerForgotPassword: "Resetowanie hasła",
      headerStep2: "Nowe hasło",
      step1Description:
        "Wpisz adres e-mail użyty podczas rejestracji. Wyślemy na niego kod do zresetowania hasła.",
      step2Description:
        "Wysłaliśmy 6-cyfrowy kod na adres {{email}}. Wpisz go i ustaw nowe hasło.",
      step3Description:
        "Wpisz nowe hasło i potwierdź je, aby zakończyć proces resetowania.",
      emailPlaceholder: "E-mail",
      codePlaceholder: "Kod z wiadomości",
      newPasswordPlaceholder: "Nowe hasło",
      confirmPasswordPlaceholder: "Potwierdź nowe hasło",
      sendCodeButton: "Wyślij kod",
      sendCode: "Wyślij kod",
      resetButton: "Zapisz nowe hasło",
      resendCode: "Wyślij kod ponownie",
      resendCodeIn: "Wyślij ponownie za {{seconds}} s",
      successTitle: "Sukces!",
      successMessage: "Twoje hasło zostało pomyślnie zmienione.",
      errors: {
        invalidEmail: "Wpisz prawidłowy adres e-mail",
        emptyField: "Wpisz kod potwierdzający",
        passwordTooShort: "Hasło musi mieć co najmniej 6 znaków",
        passwordsDoNotMatch: "Hasła nie są takie same",
      },
    },
    about: {
      headerTitle: "O aplikacji",
      welcomeTitle: "Witaj w Mindery",
      introParagraph1:
        "Mindery powstało z prostą ideą: każda emocja ma znaczenie, a zrozumienie własnych uczuć jest pierwszym krokiem do zrównoważonego życia.",
      introParagraph2:
        "Z łatwością zapisuj swój nastrój w ciągu dnia, sprawdzaj historię nastroju w kalendarzu i odpoczywaj przy medytacjach z przewodnikiem. Mindery jest także pomocnym wsparciem w terapii - pozwala wrócić do konkretnych dat i udostępnić psychologowi przejrzyste zapisy nastroju podczas sesji.",
      featuresTitle: "Najważniejsze funkcje",
      featureSimplicityTitle: "Szybko i łatwo",
      featureSimplicityDesc:
        "Zapisanie nastroju zajmuje tylko kilka sekund i nie odciąga od codziennego życia.",
      featureCalendarTitle: "Kalendarz nastroju",
      featureCalendarDesc:
        "Przejrzysta historia Twoich uczuć i czynników wywołujących emocje według dni i miesięcy.",
      featureMeditationsTitle: "Medytacje i ćwiczenia",
      featureMeditationsDesc:
        "Krótkie praktyki audio, które pomagają zmniejszyć stres, odetchnąć i zacząć od nowa.",
      featureTherapyTitle: "Wsparcie terapii",
      featureTherapyDesc:
        "Gotowe analizy na sesje z psychologiem - nie musisz pamiętać wszystkiego na bieżąco.",
      featurePrivacyTitle: "Pełna prywatność",
      featurePrivacyDesc:
        "Twoje osobiste zapisy są bezpiecznie chronione. Twoje uczucia należą do Ciebie.",
      thankYou: "Dziękujemy, że wybierasz troskę o siebie z Mindery!",
      version: "Wersja {{version}}",
    },
    common: {
      error: "Błąd",
      somethingWentWrong: "Coś poszło nie tak. Spróbuj ponownie później.",
    },
  },
};

export default pl;
export type Translations = typeof pl;
