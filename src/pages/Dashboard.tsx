
import React from 'react';
import { Link } from 'react-router-dom';
import { quizCategories } from '@/data/quizCategories';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { BackgroundEffects } from '@/components/dashboard/BackgroundEffects';
import { ScrollToTopButton } from '@/components/dashboard/ScrollToTopButton';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-x-hidden">
      <BackgroundEffects />
      <DashboardHeader />

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category, index) => (
            <Link
              key={index}
              to={category.webLink}
              className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2"
              style={{
                background: category.backgroundImage,
              }}
            >
              <div className="p-6 flex flex-col h-full min-h-[280px]">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 flex-grow">
                  {category.description}
                </p>

                {/* Play Button */}
                <div className="mt-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/20`}>
                    ابدأ اللعب
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
};

export default Dashboard;
