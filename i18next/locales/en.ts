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
      emotionTitle: "How are you feeling now?",
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
  },
};

export default en;
export type Translations = typeof en;
