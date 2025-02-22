
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
      question_en: "What is the first pillar of Islam?",
      question_ar: "ما هو الركن الأول من أركان الإسلام؟",
      options_en: ["Shahada", "Salah", "Zakat", "Sawm"],
      options_ar: ["الشهادة", "الصلاة", "الزكاة", "الصوم"],
      correct_answer: "Shahada",
      image_url: "/lovable-uploads/351ef804-c80b-49ad-bf79-74d9d5581ae6.png" // Islamic calligraphy of Shahada
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
      question_en: "Which is the holiest month in Islam?",
      question_ar: "ما هو أقدس شهر في الإسلام؟",
      options_en: ["Ramadan", "Shawwal", "Rajab", "Sha'ban"],
      options_ar: ["رمضان", "شوال", "رجب", "شعبان"],
      correct_answer: "Ramadan",
      image_url: "/lovable-uploads/c24ba42d-67f5-453d-ab72-3fca08c655ff.png" // Ramadan-specific image
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
      question_en: "When was Kuwait National Day first celebrated?",
      question_ar: "متى احتفلت الكويت بأول عيد وطني؟",
      options_en: ["1961", "1962", "1963", "1964"],
      options_ar: ["١٩٦١", "١٩٦٢", "١٩٦٣", "١٩٦٤"],
      correct_answer: "1962",
      image_url: "/lovable-uploads/18ec46b9-4e58-4420-a305-5878ef0a128a.png" // Kuwait National Day celebration image
    },
    {
      id: 2,
      category: "general",
      question_en: "What is the value of 1 Kuwaiti Dinar in US Dollars (approximately)?",
      question_ar: "كم يساوي الدينار الكويتي بالدولار الأمريكي (تقريباً)؟",
      options_en: ["$2.5", "$3.3", "$3.8", "$4.2"],
      options_ar: ["٢.٥ دولار", "٣.٣ دولار", "٣.٨ دولار", "٤.٢ دولار"],
      correct_answer: "$3.3",
      image_url: "/lovable-uploads/24d532d7-e4f2-4b93-a8b9-e37b26d3e741.png" // Kuwaiti Dinar currency image
    },
    {
      id: 3,
      category: "general",
      question_en: "What is the height of Kuwait Towers?",
      question_ar: "كم يبلغ ارتفاع أبراج الكويت؟",
      options_en: ["147m", "167m", "187m", "207m"],
      options_ar: ["١٤٧ متر", "١٦٧ متر", "١٨٧ متر", "٢٠٧ متر"],
      correct_answer: "187m",
      image_url: "/lovable-uploads/37fe5675-8e85-498e-a6dc-d8fbf86d8517.png" // Kuwait Towers image
    },
    {
      id: 4,
      category: "general",
      question_en: "Which is Kuwait's largest island?",
      question_ar: "ما هي أكبر جزيرة في الكويت؟",
      options_en: ["Bubiyan", "Failaka", "Warba", "Miskan"],
      options_ar: ["بوبيان", "فيلكا", "وربة", "مسكان"],
      correct_answer: "Bubiyan",
      image_url: "/lovable-uploads/3ff2886a-7520-432f-a635-2d10478bbb6c.png" // Bubiyan Island image
    }
  ],
  football: [
    {
      id: 1,
      category: "football",
      question_en: "In which Gulf Cup did Kuwait win their first title?",
      question_ar: "في أي كأس خليج فازت الكويت بأول لقب لها؟",
      options_en: ["Gulf Cup 2", "Gulf Cup 3", "Gulf Cup 4", "Gulf Cup 5"],
      options_ar: ["خليجي ٢", "خليجي ٣", "خليجي ٤", "خليجي ٥"],
      correct_answer: "Gulf Cup 3",
      image_url: "/lovable-uploads/57252626-29fe-4261-be42-add20c9153d4.png" // Kuwait Gulf Cup victory image
    },
    {
      id: 2,
      category: "football",
      question_en: "How many Kuwait Premier League titles has Kuwait SC won?",
      question_ar: "كم مرة فاز نادي الكويت بالدوري الكويتي الممتاز؟",
      options_en: ["13", "15", "17", "19"],
      options_ar: ["١٣", "١٥", "١٧", "١٩"],
      correct_answer: "17",
      image_url: "/lovable-uploads/83408199-56a3-442c-8a41-3f8f0faaf9ee.png" // Kuwait SC team/trophy image
    },
    {
      id: 3,
      category: "football",
      question_en: "Who scored Kuwait's first World Cup goal in 1982?",
      question_ar: "من سجل أول هدف كويتي في كأس العالم ١٩٨٢؟",
      options_en: ["Faisal Al-Dakhil", "Jasem Yaqoub", "Abdullah Al-Buloushi", "Fathi Kameel"],
      options_ar: ["فيصل الدخيل", "جاسم يعقوب", "عبدالله البلوشي", "فتحي كميل"],
      correct_answer: "Faisal Al-Dakhil",
      image_url: "/lovable-uploads/a9eb7d1f-f816-4a90-9609-4afa0cbd18df.png" // Historical World Cup moment image
    },
    {
      id: 4,
      category: "football",
      question_en: "Which stadium is Kuwait's national team home ground?",
      question_ar: "ما هو الملعب الرئيسي للمنتخب الكويتي؟",
      options_en: ["Jaber Al-Ahmad", "Kuwait Sports Club", "Sabah Al-Salem", "Al-Sadaqua Walsalam"],
      options_ar: ["جابر الأحمد", "نادي الكويت", "صباح السالم", "الصداقة والسلام"],
      correct_answer: "Jaber Al-Ahmad",
      image_url: "/lovable-uploads/20361938-90d0-4130-9ad6-f113d520d7f1.png" // Jaber Al-Ahmad Stadium image
    }
  ]
};
