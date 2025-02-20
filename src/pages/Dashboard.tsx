
import React, { useEffect, useState } from 'react';
import { QuizCard } from '@/components/QuizCard';
import { 
  ArrowLeft, Flag, Utensils, ShoppingBag, Clapperboard, Moon, Cpu,
  Music, Palette, Car, Building, Trophy, Book, Dumbbell, Bird,
  Brain, Heart, Baby, Globe2, Camera, PawPrint, Trees,
  Piano, Plane, Ship, Activity, Gamepad2, Crown,
  Landmark, Calculator, Microscope 
} from 'lucide-react';
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
      description: "اختبر معرفتك بالأفلام والمسلسلات العالمية!",
      icon: Clapperboard,
      whatsappLink: "https://wa.me/your-bot?text=start_movies_quiz",
      webLink: "/quiz/movies",
      gradient: "from-red-500 to-rose-400"
    },
    {
      title: "رمضان - Ramadan",
      description: "تحديات وأسئلة خاصة بشهر رمضان المبارك!",
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
    },
    {
      title: "موسيقى - Music",
      description: "اختبر معرفتك بالموسيقى العالمية والعربية!",
      icon: Music,
      whatsappLink: "https://wa.me/your-bot?text=start_music_quiz",
      webLink: "/quiz/music",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      title: "فن - Art",
      description: "اكتشف عالم الفن والفنانين العالميين!",
      icon: Palette,
      whatsappLink: "https://wa.me/your-bot?text=start_art_quiz",
      webLink: "/quiz/art",
      gradient: "from-yellow-500 to-orange-400"
    },
    {
      title: "سيارات - Cars",
      description: "تحدي معرفتك بعالم السيارات والسباقات!",
      icon: Car,
      whatsappLink: "https://wa.me/your-bot?text=start_cars_quiz",
      webLink: "/quiz/cars",
      gradient: "from-blue-600 to-indigo-400"
    },
    {
      title: "عمارة - Architecture",
      description: "اكتشف روائع العمارة حول العالم!",
      icon: Building,
      whatsappLink: "https://wa.me/your-bot?text=start_architecture_quiz",
      webLink: "/quiz/architecture",
      gradient: "from-stone-500 to-stone-700"
    },
    {
      title: "رياضة - Sports",
      description: "اختبر معرفتك بعالم الرياضة والأبطال!",
      icon: Trophy,
      whatsappLink: "https://wa.me/your-bot?text=start_sports_quiz",
      webLink: "/quiz/sports",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      title: "أدب - Literature",
      description: "اكتشف عالم الأدب والكتّاب العالميين!",
      icon: Book,
      whatsappLink: "https://wa.me/your-bot?text=start_literature_quiz",
      webLink: "/quiz/literature",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      title: "صحة - Health",
      description: "اختبر معرفتك بالصحة واللياقة البدنية!",
      icon: Dumbbell,
      whatsappLink: "https://wa.me/your-bot?text=start_health_quiz",
      webLink: "/quiz/health",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "طيور - Birds",
      description: "تعرف على عالم الطيور المذهل!",
      icon: Bird,
      whatsappLink: "https://wa.me/your-bot?text=start_birds_quiz",
      webLink: "/quiz/birds",
      gradient: "from-sky-500 to-blue-400"
    },
    {
      title: "ذكاء - IQ",
      description: "اختبر ذكائك مع ألغاز وأسئلة منطقية!",
      icon: Brain,
      whatsappLink: "https://wa.me/your-bot?text=start_iq_quiz",
      webLink: "/quiz/iq",
      gradient: "from-violet-500 to-purple-400"
    },
    {
      title: "طب - Medicine",
      description: "اختبر معرفتك بالطب والصحة!",
      icon: Heart,
      whatsappLink: "https://wa.me/your-bot?text=start_medicine_quiz",
      webLink: "/quiz/medicine",
      gradient: "from-red-500 to-pink-400"
    },
    {
      title: "أطفال - Kids",
      description: "أسئلة ممتعة للأطفال والعائلة!",
      icon: Baby,
      whatsappLink: "https://wa.me/your-bot?text=start_kids_quiz",
      webLink: "/quiz/kids",
      gradient: "from-fuchsia-500 to-pink-400"
    },
    {
      title: "جغرافيا - Geography",
      description: "اكتشف عجائب العالم والجغرافيا!",
      icon: Globe2,
      whatsappLink: "https://wa.me/your-bot?text=start_geography_quiz",
      webLink: "/quiz/geography",
      gradient: "from-teal-500 to-cyan-400"
    },
    {
      title: "تصوير - Photography",
      description: "اختبر معرفتك بفن التصوير!",
      icon: Camera,
      whatsappLink: "https://wa.me/your-bot?text=start_photography_quiz",
      webLink: "/quiz/photography",
      gradient: "from-neutral-500 to-stone-400"
    },
    {
      title: "حيوانات - Animals",
      description: "اكتشف عالم الحيوانات المذهل!",
      icon: PawPrint,
      whatsappLink: "https://wa.me/your-bot?text=start_animals_quiz",
      webLink: "/quiz/animals",
      gradient: "from-amber-600 to-yellow-500"
    },
    {
      title: "بيئة - Environment",
      description: "اختبر معرفتك بالبيئة والطبيعة!",
      icon: Trees,
      whatsappLink: "https://wa.me/your-bot?text=start_environment_quiz",
      webLink: "/quiz/environment",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      title: "موسيقى كلاسيكية - Classical",
      description: "اكتشف عالم الموسيقى الكلاسيكية!",
      icon: Piano,
      whatsappLink: "https://wa.me/your-bot?text=start_classical_quiz",
      webLink: "/quiz/classical",
      gradient: "from-slate-600 to-gray-500"
    },
    {
      title: "طيران - Aviation",
      description: "اختبر معرفتك بعالم الطيران!",
      icon: Plane,
      whatsappLink: "https://wa.me/your-bot?text=start_aviation_quiz",
      webLink: "/quiz/aviation",
      gradient: "from-sky-600 to-blue-500"
    },
    {
      title: "بحرية - Maritime",
      description: "اكتشف أسرار البحار والمحيطات!",
      icon: Ship,
      whatsappLink: "https://wa.me/your-bot?text=start_maritime_quiz",
      webLink: "/quiz/maritime",
      gradient: "from-blue-700 to-blue-500"
    },
    {
      title: "رياضيات - Math",
      description: "تحدي قدراتك في الرياضيات!",
      icon: Calculator,
      whatsappLink: "https://wa.me/your-bot?text=start_math_quiz",
      webLink: "/quiz/math",
      gradient: "from-purple-600 to-indigo-500"
    },
    {
      title: "ألعاب - Gaming",
      description: "اختبر معرفتك بعالم الألعاب!",
      icon: Gamepad2,
      whatsappLink: "https://wa.me/your-bot?text=start_gaming_quiz",
      webLink: "/quiz/gaming",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "تاريخ - History",
      description: "اكتشف أحداث التاريخ المهمة!",
      icon: Landmark,
      whatsappLink: "https://wa.me/your-bot?text=start_history_quiz",
      webLink: "/quiz/history",
      gradient: "from-amber-700 to-yellow-600"
    },
    {
      title: "رياضة القلب - Cardio",
      description: "اختبر نشاطك ولياقتك البدنية!",
      icon: Activity,
      whatsappLink: "https://wa.me/your-bot?text=start_cardio_quiz",
      webLink: "/quiz/cardio",
      gradient: "from-red-600 to-rose-500"
    },
    {
      title: "ملوك وأمراء - Royalty",
      description: "اكتشف تاريخ الملوك والأمراء!",
      icon: Crown,
      whatsappLink: "https://wa.me/your-bot?text=start_royalty_quiz",
      webLink: "/quiz/royalty",
      gradient: "from-yellow-600 to-amber-500"
    },
    {
      title: "علوم - Science",
      description: "اختبر معرفتك العلمية!",
      icon: Microscope,
      whatsappLink: "https://wa.me/your-bot?text=start_science_quiz",
      webLink: "/quiz/science",
      gradient: "from-cyan-600 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-300"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce delay-150"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative min-h-screen w-full overflow-auto">
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Header */}
          <div className="sticky top-0 z-20 backdrop-blur-md bg-black/50 -mx-4 px-4 py-4 mb-8">
            <div className="flex items-center justify-between">
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
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto pb-20">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in transform hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <QuizCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 z-50"
      >
        <ArrowLeft className="w-6 h-6 transform rotate-90" />
      </button>
    </div>
  );
};

export default Dashboard;
