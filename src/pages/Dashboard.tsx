
import React, { useEffect } from 'react';
import { QuizCard } from '@/components/QuizCard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (error || !user) {
        // Redirect to auth page if not authenticated
        navigate('/game');
      }
    });

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/game');
      }
    });

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const categories = [
    {
      title: "علم الدول - Flags",
      description: "شارك في تحدي الأعلام و اختبر معرفتك بدول العالم!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_flags_quiz",
      webLink: "/quiz/flags"
    },
    {
      title: "المطبخ العالمي - Food",
      description: "اكتشف عالم المأكولات و المطابخ العالمية!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_food_quiz",
      webLink: "/quiz/food"
    },
    {
      title: "ماركات عالمية - Brands",
      description: "تحدي الماركات العالمية - شوف كم تعرف!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_brands_quiz",
      webLink: "/quiz/brands"
    },
    {
      title: "سينما - Movies",
      description: "اختبر ثقافتك السينمائية ومعرفتك بالأفلام العالمية!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_movies_quiz",
      webLink: "/quiz/movies"
    },
    {
      title: "رمضان كريم - Ramadan",
      description: "تحديات و أسئلة خاصة بشهر رمضان المبارك!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_ramadan_quiz",
      webLink: "/quiz/ramadan"
    },
    {
      title: "تكنولوجيا - Tech",
      description: "اختبر معرفتك بعالم التكنولوجيا والابتكارات!",
      icon: 'Trophy' as const,
      whatsappLink: "https://wa.me/your-bot?text=start_tech_quiz",
      webLink: "/quiz/tech"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Quiz Categories
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <QuizCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
