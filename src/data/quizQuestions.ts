
interface QuizQuestion {
  id: number;
  category: string;
  question_en: string;
  question_ar: string;
  options_en: string[];
  options_ar: string[];
  correct_answer: string;
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
      correct_answer: "9th month"
    },
    {
      id: 2,
      category: "islamic",
      question_en: "How many rak'ahs are in Fajr prayer?",
      question_ar: "جم ركعة في صلاة الفجر؟",
      options_en: ["2", "3", "4", "5"],
      options_ar: ["ركعتين", "ثلاث ركعات", "أربع ركعات", "خمس ركعات"],
      correct_answer: "2"
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
      correct_answer: "1961"
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
      correct_answer: "1974"
    }
  ]
};
