const en = {
  translation: {
    bottomTabs: {
      home: "Home",
      care: "Care",
      statistics: "Statistics",
      profile: "Profile",
    },
    firstScreen: {
      title: "Track your emotional well-being every day.",
      description:
        "Log your daily mood, listen to relaxing meditations, and track your emotional journey in the calendar",
      buttonText: "Start",
    },
    authScreen: {
      title: "Welcome!",
      subtitle: "Do you already have an account?",
      signInButtonText: "Sign In",
      signUpButtonText: "Create an account",
    },
    signInScreen: {
      title: "Sign In",
      subtitle: "Hi! Welcome back, you've been missed",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      forgotPassword: "Forgot password?",
      signInButtonText: "Sign in",
      signUpReminder: "Don't have an account?",
      signUpButtonText: "Sign Up",
    },
    signUpScreen: {
      title: "Create an account",
      subtitle: "Let's get you started - create your account below",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Confirm Password",
      signUpButtonText: "Sign Up",
      signInReminder: "Already have an account?",
      signInButtonText: "Sign In",
    },
    formik: {
      nameMin: "Name must be at least 2 characters",
      nameMax: "Name must be at most 30 characters",
      emailInvalid: "Please enter a valid email address",
      passwordMin: "This password is not valid. Please try again",
      matchPassword: "Passwords must match",
      required: "Required",
    },
    home: {
      title: "Hello",
      subtitle: "Everything you feel matters!",
      emotionTitle: "What are you feeling now?",
      emotions: {
        sad: "Sad",
        laugh: "Laugh",
        angry: "Angry",
        tired: "Tired",
        happy: "Happy",
        inLove: "In Love",
        thinking: "Thinking",
        confused: "Confused",
        inspiration: "Inspiration",
        calm: "Calm",
        anxious: "Anxious",
        stressed: "Stressed",
      },
      statisticsTitle: "Summary",
      emptyTitle: "No emotions tracked yet",
      emptySubtitle: "Start by selecting how you feel!",
      deleteButtonText: "Delete",
    },
    successModal: {
      modalText: "Your emotion has been successfully added.",
      closeButtonText: "Close",
      passwordChangedText: "Password updated successfully!",
    },
    successChangesModal: {
      modalText: "Changes saved successfully.",
      closeButtonText: "Close",
    },
    emotionModal: {
      modalText:
        "You have chosen <accent>{{emotion}}</accent>.\nConfirm your choice?",
      confirmButtonText: "Confirm",
    },
    statsModal: {
      buttonText: "Got it",
    },
    avatarModal: {
      title: "Choose your avatar",
      buttonText: "Confirm",
    },
    careScreen: {
      title: "Your Inner Harmony",
      subtitle: "Slow down, breathe deeply, and reconnect with your calm",
      itemTitles: {
        Calm: "Calm",
        Energize: "Energize",
        Sleep: "Sleep",
        Balance: "Balance",
        Focus: "Focus",
      },
      session: "sessions",
    },
    audioPlayer: {
      headerTitle: "Now playing",
    },
    statisticsScreen: {
      title: "Mood Statistics",
      subtitle: "Track your emotional journey day by day",
      emptyEmotions: "No emotions recorded for {{date}}",
      header: "Statistics",
      dayTitle: "Your mood on {{formattedDate}}",
    },
    profileScreen: {
      editButtonText: "Edit Profile",
      settingsButtonText: "Settings",
      logoutButtonText: "Logout",
    },
    accountScreen: {
      headerTitle: "My account",
      editButtonText: "Edit",
      usernameLabel: "Username",
      emailLabel: "Email",
      cancelButtonText: "Cancel",
      saveButtonText: "Save changes",
    },
    settingsScreen: {
      headerTitle: "Settings",
      passwordLabel: "Change password",
      themeLabel: "Theme",
      languageLabel: "Language",
      languageTitle: "Change language",
      deleteAccountLabel: "Delete account",
      changePasswordTitle: "Change password",
      currentPasswordLabel: "Current password",
      currentPasswordPlaceholder: "Enter current password",
      newPasswordLabel: "New password",
      newPasswordPlaceholder: "Enter new password",
      changePasswordButton: "Change new password",
      aboutLabel: "About",
    },
    deleteAccountModal: {
      title: "Delete account?",
      description:
        "This action cannot be undone. All your data will be permanently removed.",
      cancelButtonText: "Cancel",
      deleteButtonText: "Delete",
    },
    loadingScreen: {
      loadingText: "Loading...",
    },
    forgotPassword: {
      headerForgotPassword: "Reset password",
      headerStep2: "New password",
      step1Description:
        "Enter the email you used to register. We will send a code to reset your password.",
      step2Description:
        "We have sent a 6-digit code to {{email}}. Enter it and set a new password.",
      step3Description:
        "Enter a new password and confirm it to complete the password reset process.",
      emailPlaceholder: "Email",
      codePlaceholder: "Code from email",
      newPasswordPlaceholder: "New password",
      confirmPasswordPlaceholder: "Confirm new password",
      sendCodeButton: "Send code",
      sendCode: "Send code",
      resetButton: "Save new password",
      resendCode: "Resend code",
      resendCodeIn: "Resend in {{seconds}} s",
      successTitle: "Success!",
      successMessage: "Your password has been successfully changed.",
      errors: {
        invalidEmail: "Enter a valid email address",
        emptyField: "Enter the confirmation code",
        passwordTooShort: "Password must be at least 6 characters long",
        passwordsDoNotMatch: "Passwords do not match",
      },
    },
    about: {
      headerTitle: "About",
      welcomeTitle: "Welcome to Mindery",
      introParagraph1:
        "Mindery was created with a simple idea: every emotion matters, and understanding how you feel is the first step toward a balanced life.",
      introParagraph2:
        "Easily log your mood throughout the day, check your mood history on the calendar, and unwind with guided meditations. Mindery is also a helpful companion for therapy — it allows you to look back at specific dates and share clear mood records with your psychologist during sessions.",
      featuresTitle: "Key features",
      featureSimplicityTitle: "Fast and easy",
      featureSimplicityDesc:
        "Logging your mood takes just a few seconds and doesn't distract from life.",
      featureCalendarTitle: "Mood calendar",
      featureCalendarDesc:
        "A clear history of your feelings and triggers by day and month.",
      featureMeditationsTitle: "Meditations and practices",
      featureMeditationsDesc:
        "Short audio practices to relieve stress, exhale, and reset.",
      featureTherapyTitle: "Therapy assistant",
      featureTherapyDesc:
        "Ready-made analytics for sessions with your psychologist — no need to remember everything on the go.",
      featurePrivacyTitle: "Complete privacy",
      featurePrivacyDesc:
        "Your personal records are securely protected. Your feelings are your own territory.",
      thankYou: "Thank you for choosing self-care with Mindery!",
      version: "Version {{version}}",
    },
    common: {
      error: "Error",
      somethingWentWrong: "Something went wrong. Please try again later.",
    },
  },
};

export default en;
export type Translations = typeof en;
