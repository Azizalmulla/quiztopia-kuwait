
import { Trophy } from 'lucide-react';
import { QuizCard } from '@/components/QuizCard';

const quizCategories = [
  {
    title: "Kuwait History",
    description: "Test your knowledge about Kuwait's rich history and cultural heritage",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Kuwait%20History%20Quiz",
    webLink: "/quiz/history"
  },
  {
    title: "Local Cuisine",
    description: "Explore the flavors and traditions of Kuwaiti cuisine",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Cuisine%20Quiz",
    webLink: "/quiz/cuisine"
  },
  {
    title: "Geography",
    description: "Discover Kuwait's landscapes and geographical features",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Geography%20Quiz",
    webLink: "/quiz/geography"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 floating">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Kuwait Quiz Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore Kuwait's rich culture and heritage through our interactive quizzes. Choose your preferred way to play - WhatsApp or Web!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {quizCategories.map((category, index) => (
            <QuizCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
