
import { 
  Moon, Brain, Trophy
} from 'lucide-react';

export const quizCategories = [
  {
    title: "إسلاميات - Islamic",
    description: "اختبر معرفتك في الدين الإسلامي والسيرة النبوية!",
    icon: Moon,
    whatsappLink: "https://wa.me/your-bot?text=start_islamic_quiz",
    webLink: "/quiz/islamic",
    gradient: "from-emerald-600 to-teal-500",
    backgroundImage: "/placeholder.svg"
  },
  {
    title: "معلومات عامة - General Knowledge",
    description: "اختبر معلوماتك العامة في مختلف المجالات!",
    icon: Brain,
    whatsappLink: "https://wa.me/your-bot?text=start_general_quiz",
    webLink: "/quiz/general",
    gradient: "from-indigo-600 to-violet-500",
    backgroundImage: "/placeholder.svg"
  },
  {
    title: "كرة القدم - Football",
    description: "اختبر معرفتك في عالم كرة القدم!",
    icon: Trophy,
    whatsappLink: "https://wa.me/your-bot?text=start_football_quiz",
    webLink: "/quiz/football",
    gradient: "from-blue-600 to-cyan-500",
    backgroundImage: "/placeholder.svg"
  }
];
