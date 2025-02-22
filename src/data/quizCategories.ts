
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
    backgroundImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "معلومات عامة - General Knowledge",
    description: "اختبر معلوماتك العامة في مختلف المجالات!",
    icon: Brain,
    whatsappLink: "https://wa.me/your-bot?text=start_general_quiz",
    webLink: "/quiz/general",
    gradient: "from-indigo-600 to-violet-500",
    backgroundImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "كرة القدم - Football",
    description: "اختبر معرفتك في عالم كرة القدم!",
    icon: Trophy,
    whatsappLink: "https://wa.me/your-bot?text=start_football_quiz",
    webLink: "/quiz/football",
    gradient: "from-blue-600 to-cyan-500",
    backgroundImage: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=800&q=80"
  }
];
