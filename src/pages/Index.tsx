
import { Trophy } from 'lucide-react';
import { QuizCard } from '@/components/QuizCard';

const quizCategories = [
  {
    title: "World History",
    description: "Test your knowledge about world history with questions in Kuwaiti dialect",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20World%20History%20Quiz",
    webLink: "/quiz/history"
  },
  {
    title: "International Cuisine",
    description: "Explore global cuisines and dishes with a Kuwaiti twist",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Cuisine%20Quiz",
    webLink: "/quiz/cuisine"
  },
  {
    title: "World Geography",
    description: "Discover countries and landmarks around the globe, explained in Kuwaiti dialect",
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
            Global Quiz Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore the world through our interactive quizzes in Kuwaiti dialect. Choose your preferred way to play - WhatsApp or Web!
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
