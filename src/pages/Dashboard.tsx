
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { QuizCard } from '@/components/QuizCard';
import { BackgroundEffects } from '@/components/dashboard/BackgroundEffects';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ScrollToTopButton } from '@/components/dashboard/ScrollToTopButton';
import { quizCategories } from '@/data/quizCategories';

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

  return (
    <div className="h-screen w-full bg-gradient-to-b from-zinc-900 to-black overflow-y-auto">
      <BackgroundEffects />

      {/* Content Container */}
      <div className="relative w-full">
        <DashboardHeader />

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {quizCategories.map((category, index) => (
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

      <ScrollToTopButton />
    </div>
  );
};

export default Dashboard;
