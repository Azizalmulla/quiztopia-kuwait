
import React from 'react';
import { quizCategories } from '@/data/quizCategories';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { BackgroundEffects } from '@/components/dashboard/BackgroundEffects';
import { ScrollToTopButton } from '@/components/dashboard/ScrollToTopButton';
import { QuizCard } from '@/components/QuizCard';
import { useEffect } from 'react';

const Dashboard = () => {
  // Enable scrolling when component mounts
  useEffect(() => {
    document.body.style.overflow = 'auto';
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <BackgroundEffects />
      <DashboardHeader />

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category, index) => (
            <QuizCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              whatsappLink={category.whatsappLink}
              webLink={category.webLink}
              gradient={category.gradient}
              backgroundImage={category.backgroundImage}
            />
          ))}
        </div>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
};

export default Dashboard;
