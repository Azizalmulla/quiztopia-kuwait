
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
      image_url: "https://images.unsplash.com/photo-1564633351631-e33933312041?w=800&h=600&fit=crop" // Grand Mosque calligraphy
    },
    {
      id: 2,
      category: "islamic",
      question_en: "How many rak'ahs are in Fajr prayer?",
      question_ar: "جم ركعة في صلاة الفجر؟",
      options_en: ["2", "3", "4", "5"],
      options_ar: ["ركعتين", "ثلاث ركعات", "أربع ركعات", "خمس ركعات"],
      correct_answer: "2",
      image_url: "https://images.unsplash.com/photo-1542427262-898871872eed?w=800&h=600&fit=crop" // Dawn prayer time
    },
    {
      id: 3,
      category: "islamic",
      question_en: "Which is the holiest month in Islam?",
      question_ar: "ما هو أقدس شهر في الإسلام؟",
      options_en: ["Ramadan", "Shawwal", "Rajab", "Sha'ban"],
      options_ar: ["رمضان", "شوال", "رجب", "شعبان"],
      correct_answer: "Ramadan",
      image_url: "https://images.unsplash.com/photo-1532443603613-61fa154742cd?w=800&h=600&fit=crop" // Ramadan crescent moon
    },
    {
      id: 4,
      category: "islamic",
      question_en: "Which city is the holiest in Islam?",
      question_ar: "أي مدينة هي أقدس مدينة في الإسلام؟",
      options_en: ["Mecca", "Medina", "Jerusalem", "Damascus"],
      options_ar: ["مكة", "المدينة", "القدس", "دمشق"],
      correct_answer: "Mecca",
      image_url: "https://images.unsplash.com/photo-1566754436893-98224ee05be4?w=800&h=600&fit=crop" // Kaaba in Mecca
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
      image_url: "https://images.unsplash.com/photo-1577225706427-324457890647?w=800&h=600&fit=crop" // Kuwait flag celebration
    },
    {
      id: 2,
      category: "general",
      question_en: "What is the value of 1 Kuwaiti Dinar in US Dollars (approximately)?",
      question_ar: "كم يساوي الدينار الكويتي بالدولار الأمريكي (تقريباً)؟",
      options_en: ["$2.5", "$3.3", "$3.8", "$4.2"],
      options_ar: ["٢.٥ دولار", "٣.٣ دولار", "٣.٨ دولار", "٤.٢ دولار"],
      correct_answer: "$3.3",
      image_url: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop" // Currency exchange concept
    },
    {
      id: 3,
      category: "general",
      question_en: "What is the height of Kuwait Towers?",
      question_ar: "كم يبلغ ارتفاع أبراج الكويت؟",
      options_en: ["147m", "167m", "187m", "207m"],
      options_ar: ["١٤٧ متر", "١٦٧ متر", "١٨٧ متر", "٢٠٧ متر"],
      correct_answer: "187m",
      image_url: "https://images.unsplash.com/photo-1584552147955-75b832847551?w=800&h=600&fit=crop" // Kuwait Towers
    },
    {
      id: 4,
      category: "general",
      question_en: "Which is Kuwait's largest island?",
      question_ar: "ما هي أكبر جزيرة في الكويت؟",
      options_en: ["Bubiyan", "Failaka", "Warba", "Miskan"],
      options_ar: ["بوبيان", "فيلكا", "وربة", "مسكان"],
      correct_answer: "Bubiyan",
      image_url: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=800&h=600&fit=crop" // Aerial view of island
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
      image_url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop" // Football trophy
    },
    {
      id: 2,
      category: "football",
      question_en: "How many Kuwait Premier League titles has Kuwait SC won?",
      question_ar: "كم مرة فاز نادي الكويت بالدوري الكويتي الممتاز؟",
      options_en: ["13", "15", "17", "19"],
      options_ar: ["١٣", "١٥", "١٧", "١٩"],
      correct_answer: "17",
      image_url: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=800&h=600&fit=crop" // Football stadium
    },
    {
      id: 3,
      category: "football",
      question_en: "Who scored Kuwait's first World Cup goal in 1982?",
      question_ar: "من سجل أول هدف كويتي في كأس العالم ١٩٨٢؟",
      options_en: ["Faisal Al-Dakhil", "Jasem Yaqoub", "Abdullah Al-Buloushi", "Fathi Kameel"],
      options_ar: ["فيصل الدخيل", "جاسم يعقوب", "عبدالله البلوشي", "فتحي كميل"],
      correct_answer: "Faisal Al-Dakhil",
      image_url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop" // Football goal scoring
    },
    {
      id: 4,
      category: "football",
      question_en: "Which stadium is Kuwait's national team home ground?",
      question_ar: "ما هو الملعب الرئيسي للمنتخب الكويتي؟",
      options_en: ["Jaber Al-Ahmad", "Kuwait Sports Club", "Sabah Al-Salem", "Al-Sadaqua Walsalam"],
      options_ar: ["جابر الأحمد", "نادي الكويت", "صباح السالم", "الصداقة والسلام"],
      correct_answer: "Jaber Al-Ahmad",
      image_url: "https://images.unsplash.com/photo-1577223608772-0d6c8338eb09?w=800&h=600&fit=crop" // Stadium aerial view
    }
  ]
};
