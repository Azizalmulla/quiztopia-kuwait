
import { 
  Flag, Utensils, ShoppingBag, Clapperboard, Moon, Cpu,
  Music, Palette, Car, Building, Trophy, Book, Dumbbell, Bird,
  Brain, Heart, Baby, Globe2, Camera, PawPrint, Trees,
  Piano, Plane, Ship, Activity, Gamepad2, Crown,
  Landmark, Calculator, Microscope 
} from 'lucide-react';

export const quizCategories = [
  {
    title: "معلومات عامة - General Knowledge",
    description: "اختبر معلوماتك العامة في مختلف المجالات!",
    icon: Brain,
    imageUrl: "https://media.giphy.com/media/h8n8aJWronkmvRTB0y/giphy.gif", // Animated light bulb with question mark
    whatsappLink: "https://wa.me/your-bot?text=start_general_quiz",
    webLink: "/quiz/general",
    gradient: "from-indigo-600 to-violet-500"
  },
  {
    title: "علم الدول - Flags",
    description: "شارك في تحدي الأعلام و اختبر معرفتك بدول العالم!",
    icon: Flag,
    imageUrl: "https://media.giphy.com/media/MagSgolK3ScWvtHAB4/giphy.gif", // Animated waving flags
    whatsappLink: "https://wa.me/your-bot?text=start_flags_quiz",
    webLink: "/quiz/flags",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "المطبخ العالمي - Food",
    description: "اكتشف عالم المأكولات و المطابخ العالمية!",
    icon: Utensils,
    imageUrl: "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif", // Animated cooking
    whatsappLink: "https://wa.me/your-bot?text=start_food_quiz",
    webLink: "/quiz/food",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    title: "ماركات عالمية - Brands",
    description: "تحدي الماركات العالمية - شوف كم تعرف!",
    icon: ShoppingBag,
    imageUrl: "https://media.giphy.com/media/J2CLvzhay29UwhkAKT/giphy.gif", // Animated shopping bags
    whatsappLink: "https://wa.me/your-bot?text=start_brands_quiz",
    webLink: "/quiz/brands",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "سينما - Movies",
    description: "اختبر معرفتك بالأفلام والمسلسلات العالمية!",
    icon: Clapperboard,
    imageUrl: "https://media.giphy.com/media/xT9IgwHr6d1LOJwin6/giphy.gif", // Animated movie clapper
    whatsappLink: "https://wa.me/your-bot?text=start_movies_quiz",
    webLink: "/quiz/movies",
    gradient: "from-red-500 to-rose-400"
  },
  {
    title: "رمضان - Ramadan",
    description: "تحديات وأسئلة خاصة بشهر رمضان المبارك!",
    icon: Moon,
    imageUrl: "https://media.giphy.com/media/upExDwNnZxuKDEXnBf/giphy.gif", // Animated crescent moon and stars
    whatsappLink: "https://wa.me/your-bot?text=start_ramadan_quiz",
    webLink: "/quiz/ramadan",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    title: "تكنولوجيا - Tech",
    description: "اختبر معرفتك بعالم التكنولوجيا والابتكارات!",
    icon: Cpu,
    imageUrl: "https://media.giphy.com/media/3oKIPic2BnoVZkRla8/giphy.gif", // Animated tech gadgets
    whatsappLink: "https://wa.me/your-bot?text=start_tech_quiz",
    webLink: "/quiz/tech",
    gradient: "from-indigo-500 to-violet-400"
  },
  {
    title: "موسيقى - Music",
    description: "اختبر معرفتك بالموسيقى العالمية والعربية!",
    icon: Music,
    imageUrl: "https://media.giphy.com/media/iFPQrD1LKr7AJ9sm5v/giphy.gif", // Animated musical notes
    whatsappLink: "https://wa.me/your-bot?text=start_music_quiz",
    webLink: "/quiz/music",
    gradient: "from-pink-500 to-rose-400"
  },
  {
    title: "فن - Art",
    description: "اكتشف عالم الفن والفنانين العالميين!",
    icon: Palette,
    imageUrl: "https://media.giphy.com/media/l0HlQXkh1wx1RjtUA/giphy.gif", // Animated paint palette
    whatsappLink: "https://wa.me/your-bot?text=start_art_quiz",
    webLink: "/quiz/art",
    gradient: "from-yellow-500 to-orange-400"
  },
  {
    title: "سيارات - Cars",
    description: "تحدي معرفتك بعالم السيارات والسباقات!",
    icon: Car,
    imageUrl: "https://media.giphy.com/media/l3V0eDqMD7fflVhcY/giphy.gif", // Animated racing car
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
