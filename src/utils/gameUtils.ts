
import { quizQuestions } from '@/data/quizQuestions';
import { Language } from '@/types/game';

export const getCurrentQuestion = (category: string, currentQuestionIndex: number) => {
  const questions = quizQuestions[category];
  return questions[currentQuestionIndex];
};

export const getLocalizedOptions = (language: Language) => {
  return language === 'ar' 
    ? ["نعم", "لا", "رجوع"]
    : ["Yes", "No", "Back"];
};

export const getLocalizedMessages = (language: Language, score: number, total: number) => ({
  welcome: language === 'ar' 
    ? "السلام عليكم! حياك الله في مسابقة الكويت للمعلومات العامة ⭐"
    : "Welcome to Kuwait General Knowledge Quiz! ⭐",
  participate: language === 'ar'
    ? "هل تريد المشاركة في المسابقة؟"
    : "Would you like to participate in the quiz?",
  correct: language === 'ar'
    ? "ممتاز! إجابة صحيحة! 🎉"
    : "Excellent! Correct answer! 🎉",
  wrong: language === 'ar'
    ? "للأسف الإجابة خطأ"
    : "Sorry, wrong answer!",
  paymentSuccess: language === 'ar'
    ? "!تم تأكيد الدفع! يلا نبدأ بالمسابقة"
    : "Payment confirmed! Let's start the quiz!",
  paymentCancelled: language === 'ar'
    ? "تم إلغاء الدفع. هل تريد المحاولة مرة أخرى؟"
    : "Payment cancelled. Would you like to try again?",
  goodbye: language === 'ar'
    ? "شكراً لك! نراك قريباً"
    : "Thank you! See you soon!",
  finalScore: language === 'ar'
    ? `انتهت المسابقة! حصلت على ${score} من ${total} نقاط`
    : `Quiz ended! You scored ${score} out of ${total} points`,
  startOver: language === 'ar'
    ? "بدي أرجع من البداية"
    : "Start from beginning",
});
