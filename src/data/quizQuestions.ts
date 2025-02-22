
interface QuizQuestion {
  id: number;
  category: string;
  question_en: string;
  question_ar: string;
  options_en: string[];
  options_ar: string[];
  correct_answer: string;
  image_url: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {
  islamic: [
    {
      id: 1,
      category: "islamic",
      question_en: "Which month is Ramadan in the Hijri calendar?",
      question_ar: "شنو ترتيب شهر رمضان في التقويم الهجري؟",
      options_en: ["8th month", "9th month", "10th month", "11th month"],
      options_ar: ["الشهر الثامن", "الشهر التاسع", "الشهر العاشر", "الشهر الحادي عشر"],
      correct_answer: "9th month",
      image_url: "/lovable-uploads/c24ba42d-67f5-453d-ab72-3fca08c655ff.png" // Ramadan calendar image
    },
    {
      id: 2,
      category: "islamic",
      question_en: "How many rak'ahs are in Fajr prayer?",
      question_ar: "جم ركعة في صلاة الفجر؟",
      options_en: ["2", "3", "4", "5"],
      options_ar: ["ركعتين", "ثلاث ركعات", "أربع ركعات", "خمس ركعات"],
      correct_answer: "2",
      image_url: "/lovable-uploads/37ecfaeb-2752-4837-934e-fc5d0b12c0fd.png" // Prayer image
    },
    {
      id: 3,
      category: "islamic",
      question_en: "What is the name of the holy book in Islam?",
      question_ar: "شنو اسم الكتاب المقدس في الإسلام؟",
      options_en: ["Quran", "Bible", "Torah", "Zabur"],
      options_ar: ["القرآن", "الإنجيل", "التوراة", "الزبور"],
      correct_answer: "Quran",
      image_url: "/lovable-uploads/351ef804-c80b-49ad-bf79-74d9d5581ae6.png" // Quran image
    },
    {
      id: 4,
      category: "islamic",
      question_en: "Which city is the holiest in Islam?",
      question_ar: "أي مدينة هي أقدس مدينة في الإسلام؟",
      options_en: ["Mecca", "Medina", "Jerusalem", "Damascus"],
      options_ar: ["مكة", "المدينة", "القدس", "دمشق"],
      correct_answer: "Mecca",
      image_url: "/lovable-uploads/3c6a5c69-554a-4c4e-aaf9-b8b31422068d.png" // Mecca/Kaaba image
    }
  ],
  general: [
    {
      id: 1,
      category: "general",
      question_en: "When did Kuwait gain independence?",
      question_ar: "متى استقلت الكويت؟",
      options_en: ["1960", "1961", "1962", "1963"],
      options_ar: ["١٩٦٠", "١٩٦١", "١٩٦٢", "١٩٦٣"],
      correct_answer: "1961",
      image_url: "/lovable-uploads/18ec46b9-4e58-4420-a305-5878ef0a128a.png" // Kuwait Independence celebration image
    },
    {
      id: 2,
      category: "general",
      question_en: "What is the name of Kuwait's currency?",
      question_ar: "شنو اسم عملة الكويت؟",
      options_en: ["Dinar", "Riyal", "Dirham", "Pound"],
      options_ar: ["دينار", "ريال", "درهم", "جنيه"],
      correct_answer: "Dinar",
      image_url: "/lovable-uploads/24d532d7-e4f2-4b93-a8b9-e37b26d3e741.png" // Kuwaiti Dinar image
    },
    {
      id: 3,
      category: "general",
      question_en: "Which landmark is known as the symbol of Kuwait?",
      question_ar: "أي معلم يعرف برمز الكويت؟",
      options_en: ["Kuwait Towers", "Liberation Tower", "Grand Mosque", "Al Hamra Tower"],
      options_ar: ["أبراج الكويت", "برج التحرير", "المسجد الكبير", "برج الحمراء"],
      correct_answer: "Kuwait Towers",
      image_url: "/lovable-uploads/37fe5675-8e85-498e-a6dc-d8fbf86d8517.png" // Kuwait Towers image
    },
    {
      id: 4,
      category: "general",
      question_en: "What is the official language of Kuwait?",
      question_ar: "ما هي اللغة الرسمية في الكويت؟",
      options_en: ["Arabic", "English", "Persian", "Urdu"],
      options_ar: ["العربية", "الإنجليزية", "الفارسية", "الأوردو"],
      correct_answer: "Arabic",
      image_url: "/lovable-uploads/3ff2886a-7520-432f-a635-2d10478bbb6c.png" // Arabic calligraphy/text image
    }
  ],
  football: [
    {
      id: 1,
      category: "football",
      question_en: "Which year did Kuwait win the Gulf Cup?",
      question_ar: "في أي سنة فازت الكويت بكأس الخليج؟",
      options_en: ["1972", "1974", "1976", "1978"],
      options_ar: ["١٩٧٢", "١٩٧٤", "١٩٧٦", "١٩٧٨"],
      correct_answer: "1974",
      image_url: "/lovable-uploads/57252626-29fe-4261-be42-add20c9153d4.png" // Kuwait Gulf Cup victory image
    },
    {
      id: 2,
      category: "football",
      question_en: "Which Kuwaiti club has won the most Kuwait Premier League titles?",
      question_ar: "أي نادي كويتي فاز بأكثر عدد من ألقاب الدوري الكويتي الممتاز؟",
      options_en: ["Al-Qadsia", "Kuwait SC", "Al-Arabi", "Al-Salmiya"],
      options_ar: ["القادسية", "الكويت", "العربي", "السالمية"],
      correct_answer: "Kuwait SC",
      image_url: "/lovable-uploads/83408199-56a3-442c-8a41-3f8f0faaf9ee.png" // Kuwait SC team/logo image
    },
    {
      id: 3,
      category: "football",
      question_en: "When did Kuwait first qualify for the FIFA World Cup?",
      question_ar: "متى تأهلت الكويت لأول مرة لكأس العالم؟",
      options_en: ["1978", "1980", "1982", "1986"],
      options_ar: ["١٩٧٨", "١٩٨٠", "١٩٨٢", "١٩٨٦"],
      correct_answer: "1982",
      image_url: "/lovable-uploads/a9eb7d1f-f816-4a90-9609-4afa0cbd18df.png" // Kuwait 1982 World Cup team image
    },
    {
      id: 4,
      category: "football",
      question_en: "Which Kuwaiti footballer is known as 'The Sniper'?",
      question_ar: "أي لاعب كويتي معروف باسم 'القناص'؟",
      options_en: ["Jasem Al-Huwaidi", "Bader Al-Mutawa", "Yousef Nasser", "Fahad Al-Ansari"],
      options_ar: ["جاسم الهويدي", "بدر المطوع", "يوسف ناصر", "فهد الأنصاري"],
      correct_answer: "Jasem Al-Huwaidi",
      image_url: "/lovable-uploads/20361938-90d0-4130-9ad6-f113d520d7f1.png" // Jasem Al-Huwaidi image
    }
  ]
};
