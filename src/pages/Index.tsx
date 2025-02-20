
import { Trophy, Car, Flag, Film, Gamepad2, Music2, FlaskConical, Brain } from 'lucide-react';
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
  {
    title: "Cars & Racing",
    description: "Test your knowledge about iconic cars and motorsports",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Cars%20Quiz",
    webLink: "/quiz/cars"
  },
  {
    title: "World Flags",
    description: "Learn about flags and their meanings from around the world",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Flags%20Quiz",
    webLink: "/quiz/flags"
  },
  {
    title: "Cinema & Movies",
    description: "Challenge yourself with questions about global cinema and films",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Movies%20Quiz",
    webLink: "/quiz/movies"
  },
  {
    title: "Video Games",
    description: "From classic games to modern hits, test your gaming knowledge",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Gaming%20Quiz",
    webLink: "/quiz/games"
  },
  {
    title: "Music World",
    description: "Explore different music genres and artists from around the globe",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Music%20Quiz",
    webLink: "/quiz/music"
  },
  {
    title: "Science & Tech",
    description: "Discover fascinating facts about science and technology",
    icon: "Trophy" as const,
    whatsappLink: "https://wa.me/1234567890?text=Start%20Science%20Quiz",
    webLink: "/quiz/science"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 floating">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316]">
            Global Quiz Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
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
