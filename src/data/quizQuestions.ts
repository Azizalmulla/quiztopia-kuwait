
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
  ramadan: [
    {
      id: 1,
      category: "ramadan",
      question_en: "What is the night of power called in Arabic?",
      question_ar: "ما هو الاسم العربي لليلة القدر؟",
      options_en: ["Laylat Al-Qadr", "Laylat Al-Eid", "Laylat Al-Isra", "Laylat Al-Miraj"],
      options_ar: ["ليلة القدر", "ليلة العيد", "ليلة الإسراء", "ليلة المعراج"],
      correct_answer: "Laylat Al-Qadr",
      image_url: "https://images.unsplash.com/photo-1564633351631-e33933312041?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      category: "ramadan",
      question_en: "Which meal is eaten before dawn during Ramadan?",
      question_ar: "ما هي الوجبة التي تؤكل قبل الفجر في رمضان؟",
      options_en: ["Suhoor", "Iftar", "Lunch", "Dinner"],
      options_ar: ["السحور", "الإفطار", "الغداء", "العشاء"],
      correct_answer: "Suhoor",
      image_url: "https://images.unsplash.com/photo-1542427262-898871872eed?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      category: "ramadan",
      question_en: "What date marks the beginning of Ramadan this year?",
      question_ar: "في أي تاريخ يبدأ رمضان هذا العام؟",
      options_en: ["March 11", "March 12", "March 10", "March 13"],
      options_ar: ["١١ مارس", "١٢ مارس", "١٠ مارس", "١٣ مارس"],
      correct_answer: "March 11",
      image_url: "https://images.unsplash.com/photo-1532443603613-61fa154742cd?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      category: "ramadan",
      question_en: "What food did Prophet Muhammad (PBUH) break his fast with?",
      question_ar: "بماذا كان النبي محمد ﷺ يفطر؟",
      options_en: ["Dates", "Water", "Bread", "Milk"],
      options_ar: ["التمر", "الماء", "الخبز", "الحليب"],
      correct_answer: "Dates",
      image_url: "https://images.unsplash.com/photo-1566754436893-98224ee05be4?w=800&h=600&fit=crop"
    }
  ]
};
