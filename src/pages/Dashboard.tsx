
import React, { useEffect, useState } from 'react';
import { QuizCard } from '@/components/QuizCard';
import { ArrowLeft, Flag, Utensils, ShoppingBag, Clapperboard, Moon, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        navigate('/game');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/game');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const categories = [
    {
      title: "علم الدول - Flags",
      description: "شارك في تحدي الأعلام و اختبر معرفتك بدول العالم!",
      icon: Flag,
      whatsappLink: "https://wa.me/your-bot?text=start_flags_quiz",
      webLink: "/quiz/flags",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "المطبخ العالمي - Food",
      description: "اكتشف عالم المأكولات و المطابخ العالمية!",
      icon: Utensils,
      whatsappLink: "https://wa.me/your-bot?text=start_food_quiz",
      webLink: "/quiz/food",
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      title: "ماركات عالمية - Brands",
      description: "تحدي الماركات العالمية - شوف كم تعرف!",
      icon: ShoppingBag,
      whatsappLink: "https://wa.me/your-bot?text=start_brands_quiz",
      webLink: "/quiz/brands",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "سينما - Movies",
      description: "اختبر ثقافتك السينمائية ومعرفتك بالأفلام العالمية!",
      icon: Clapperboard,
      whatsappLink: "https://wa.me/your-bot?text=start_movies_quiz",
      webLink: "/quiz/movies",
      gradient: "from-red-500 to-rose-400"
    },
    {
      title: "رمضان كريم - Ramadan",
      description: "تحديات و أسئلة خاصة بشهر رمضان المبارك!",
      icon: Moon,
      whatsappLink: "https://wa.me/your-bot?text=start_ramadan_quiz",
      webLink: "/quiz/ramadan",
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      title: "تكنولوجيا - Tech",
      description: "اختبر معرفتك بعالم التكنولوجيا والابتكارات!",
      icon: Cpu,
      whatsappLink: "https://wa.me/your-bot?text=start_tech_quiz",
      webLink: "/quiz/tech",
      gradient: "from-indigo-500 to-violet-400"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black overflow-x-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-300"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce delay-150"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-fade-in">
            Quiz Categories
          </h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200"
          >
            Sign Out
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <QuizCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
