const ka = {
  translation: {
    bottomTabs: {
      home: "მთავარი",
      care: "ზრუნვა",
      statistics: "სტატისტიკა",
      profile: "პროფილი",
    },
    firstScreen: {
      title: "თვალი ადევნე შენს ემოციურ მდგომარეობას ყოველდღე.",
      description:
        "ჩაინიშნე ყოველდღიური განწყობა, მოუსმინე დამამშვიდებელ მედიტაციებს და კალენდარში თვალი ადევნე შენს ემოციურ გზას",
      buttonText: "დაწყება",
    },
    authScreen: {
      title: "კეთილი იყოს შენი მობრძანება!",
      subtitle: "უკვე გაქვს ანგარიში?",
      signInButtonText: "შესვლა",
      signUpButtonText: "ანგარიშის შექმნა",
    },
    signInScreen: {
      title: "შესვლა",
      subtitle: "გამარჯობა! მიხარია, რომ დაბრუნდი",
      emailPlaceholder: "ელფოსტა",
      passwordPlaceholder: "პაროლი",
      forgotPassword: "დაგავიწყდა პაროლი?",
      signInButtonText: "შესვლა",
      signUpReminder: "ანგარიში არ გაქვს?",
      signUpButtonText: "რეგისტრაცია",
    },
    signUpScreen: {
      title: "ანგარიშის შექმნა",
      subtitle: "დავიწყოთ - შექმენი შენი ანგარიში ქვემოთ",
      namePlaceholder: "სახელი",
      emailPlaceholder: "ელფოსტა",
      passwordPlaceholder: "პაროლი",
      confirmPasswordPlaceholder: "დაადასტურე პაროლი",
      signUpButtonText: "რეგისტრაცია",
      consentText: "რეგისტრაციით ეთანხმები",
      termsOfUse: " გამოყენების პირობებს",
      and: " და ",
      privacyPolicy: "კონფიდენციალურობის პოლიტიკას",
      signInReminder: "უკვე გაქვს ანგარიში?",
      signInButtonText: "შესვლა",
    },
    formik: {
      nameMin: "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს",
      nameMax: "სახელი უნდა შეიცავდეს მაქსიმუმ 30 სიმბოლოს",
      emailInvalid: "შეიყვანე ელფოსტის სწორი მისამართი",
      passwordMin: "პაროლი არასწორია. გთხოვ, სცადე თავიდან",
      matchPassword: "პაროლები ერთმანეთს უნდა ემთხვეოდეს",
      required: "სავალდებულო ველი",
    },
    home: {
      title: "გამარჯობა",
      subtitle: "ყველაფერს, რასაც გრძნობ, მნიშვნელობა აქვს!",
      emotionTitle: "რას გრძნობ ახლა?",
      emotions: {
        sad: "სევდა",
        laugh: "სიცილი",
        angry: "ბრაზი",
        tired: "დაღლილობა",
        happy: "ბედნიერება",
        inLove: "შეყვარებული",
        thinking: "ჩაფიქრებული",
        confused: "დაბნეულობა",
        inspiration: "შთაგონება",
        calm: "სიმშვიდე",
        anxious: "შფოთვა",
        stressed: "სტრესი",
      },
      statisticsTitle: "შეჯამება",
      emptyTitle: "ემოციები ჯერ არ დაგიფიქსირებია",
      emptySubtitle: "დაიწყე იმით, რომ აირჩიო, როგორ გრძნობ თავს!",
      deleteButtonText: "წაშლა",
    },
    successModal: {
      modalText: "შენი ემოცია წარმატებით დაემატა.",
      closeButtonText: "დახურვა",
      passwordChangedText: "პაროლი წარმატებით განახლდა!",
    },
    successChangesModal: {
      modalText: "ცვლილებები წარმატებით შეინახა.",
      closeButtonText: "დახურვა",
    },
    emotionModal: {
      modalText: "შენ აირჩიე <accent>{{emotion}}</accent>.\nდაადასტურო არჩევანი?",
      confirmButtonText: "დადასტურება",
    },
    statsModal: {
      buttonText: "გასაგებია",
    },
    avatarModal: {
      title: "აირჩიე ავატარი",
      buttonText: "დადასტურება",
    },
    careScreen: {
      title: "შენი შინაგანი ჰარმონია",
      subtitle: "შეანელე ტემპი, ღრმად ისუნთქე და დაუბრუნდი სიმშვიდეს",
      itemTitles: {
        Calm: "სიმშვიდე",
        Energize: "ენერგია",
        Sleep: "ძილი",
        Balance: "ბალანსი",
        Focus: "კონცენტრაცია",
      },
      session: "სესია",
    },
    audioPlayer: {
      headerTitle: "ახლა იკვრება",
    },
    statisticsScreen: {
      title: "განწყობის სტატისტიკა",
      subtitle: "თვალი ადევნე შენს ემოციურ გზას ყოველდღე",
      emptyEmotions: "{{date}}-ისთვის ემოციები არ არის ჩაწერილი",
      header: "სტატისტიკა",
      dayTitle: "შენი განწყობა {{formattedDate}}-ს",
    },
    profileScreen: {
      editButtonText: "პროფილის რედაქტირება",
      settingsButtonText: "პარამეტრები",
      logoutButtonText: "გასვლა",
    },
    accountScreen: {
      headerTitle: "ჩემი ანგარიში",
      editButtonText: "რედაქტირება",
      usernameLabel: "მომხმარებლის სახელი",
      emailLabel: "ელფოსტა",
      cancelButtonText: "გაუქმება",
      saveButtonText: "ცვლილებების შენახვა",
    },
    settingsScreen: {
      headerTitle: "პარამეტრები",
      passwordLabel: "პაროლის შეცვლა",
      themeLabel: "თემა",
      languageLabel: "ენა",
      languageTitle: "ენის შეცვლა",
      deleteAccountLabel: "ანგარიშის წაშლა",
      changePasswordTitle: "პაროლის შეცვლა",
      currentPasswordLabel: "მიმდინარე პაროლი",
      currentPasswordPlaceholder: "შეიყვანე მიმდინარე პაროლი",
      newPasswordLabel: "ახალი პაროლი",
      newPasswordPlaceholder: "შეიყვანე ახალი პაროლი",
      changePasswordButton: "პაროლის შეცვლა",
      aboutLabel: "აპლიკაციის შესახებ",
      privacyPolicyLabel: "კონფიდენციალურობის პოლიტიკა",
      termsOfUseLabel: "გამოყენების პირობები",
      contactUsLabel: "დაგვიკავშირდი",
      mailUnavailableTitle: "ელფოსტა მიუწვდომელია",
      mailUnavailableMessage:
        "ამ მოწყობილობაზე ელფოსტის აპლიკაცია ვერ მოიძებნა.",
    },
    deleteAccountModal: {
      title: "წავშალოთ ანგარიში?",
      description:
        "ამ მოქმედების გაუქმება შეუძლებელია. შენი ყველა მონაცემი სამუდამოდ წაიშლება.",
      cancelButtonText: "გაუქმება",
      deleteButtonText: "წაშლა",
    },
    loadingScreen: {
      loadingText: "იტვირთება...",
    },
    forgotPassword: {
      headerForgotPassword: "პაროლის აღდგენა",
      headerStep2: "ახალი პაროლი",
      step1Description:
        "შეიყვანე რეგისტრაციისას გამოყენებული ელფოსტა. გამოგიგზავნით კოდს პაროლის აღსადგენად.",
      step2Description:
        "6-ნიშნა კოდი გამოგიგზავნეთ ელფოსტაზე {{email}}. შეიყვანე ის და დააყენე ახალი პაროლი.",
      step3Description:
        "შეიყვანე ახალი პაროლი და დაადასტურე, რომ პაროლის აღდგენა დაასრულო.",
      emailPlaceholder: "ელფოსტა",
      codePlaceholder: "კოდი ელფოსტიდან",
      newPasswordPlaceholder: "ახალი პაროლი",
      confirmPasswordPlaceholder: "დაადასტურე ახალი პაროლი",
      sendCodeButton: "კოდის გაგზავნა",
      sendCode: "კოდის გაგზავნა",
      resetButton: "ახალი პაროლის შენახვა",
      resendCode: "კოდის ხელახლა გაგზავნა",
      resendCodeIn: "ხელახლა გაგზავნა {{seconds}} წამში",
      successTitle: "წარმატება!",
      successMessage: "შენი პაროლი წარმატებით შეიცვალა.",
      errors: {
        invalidEmail: "შეიყვანე ელფოსტის სწორი მისამართი",
        emptyField: "შეიყვანე დადასტურების კოდი",
        passwordTooShort: "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს",
        passwordsDoNotMatch: "პაროლები ერთმანეთს არ ემთხვევა",
      },
    },
    about: {
      headerTitle: "აპლიკაციის შესახებ",
      welcomeTitle: "კეთილი იყოს შენი მობრძანება Mindery-ში",
      introParagraph1:
        "Mindery შეიქმნა მარტივი იდეით: ყველა ემოციას აქვს მნიშვნელობა, ხოლო საკუთარი გრძნობების გაგება დაბალანსებული ცხოვრებისკენ გადადგმული პირველი ნაბიჯია.",
      introParagraph2:
        "მარტივად ჩაინიშნე განწყობა დღის განმავლობაში, შეამოწმე განწყობის ისტორია კალენდარში და დაისვენე მართვადი მედიტაციების დახმარებით. Mindery ასევე სასარგებლო დამხმარეა თერაპიის დროს - ის საშუალებას გაძლევს გადახედო კონკრეტულ თარიღებს და სესიებზე ფსიქოლოგს განწყობის მკაფიო ჩანაწერები გაუზიარო.",
      featuresTitle: "ძირითადი ფუნქციები",
      featureSimplicityTitle: "სწრაფი და მარტივი",
      featureSimplicityDesc:
        "განწყობის ჩანიშნვას მხოლოდ რამდენიმე წამი სჭირდება და ყოველდღიური ცხოვრებიდან არ გაშორებს.",
      featureCalendarTitle: "განწყობის კალენდარი",
      featureCalendarDesc:
        "შენი გრძნობებისა და გამომწვევი ფაქტორების მკაფიო ისტორია დღეებისა და თვეების მიხედვით.",
      featureMeditationsTitle: "მედიტაციები და პრაქტიკები",
      featureMeditationsDesc:
        "მოკლე აუდიოპრაქტიკები სტრესის შესამსუბუქებლად, ამოსასუნთქად და თავიდან დასაწყებად.",
      featureTherapyTitle: "თერაპიის დამხმარე",
      featureTherapyDesc:
        "მზა ანალიტიკა ფსიქოლოგთან სესიებისთვის - აღარ დაგჭირდება ყველაფრის დამახსოვრება.",
      featurePrivacyTitle: "სრული კონფიდენციალურობა",
      featurePrivacyDesc:
        "შენი პირადი ჩანაწერები საიმედოდ არის დაცული. შენი გრძნობები მხოლოდ შენ გეკუთვნის.",
      thankYou: "გმადლობთ, რომ Mindery-სთან ერთად საკუთარ თავზე ზრუნვას ირჩევ!",
      version: "ვერსია {{version}}",
    },
    common: {
      error: "შეცდომა",
      somethingWentWrong: "რაღაც არასწორად მოხდა. გთხოვ, მოგვიანებით სცადე.",
    },
  },
};

export default ka;
export type Translations = typeof ka;
