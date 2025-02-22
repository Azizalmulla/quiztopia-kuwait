
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    // Check authentication status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="sticky top-0 z-20 backdrop-blur-md bg-black/50 px-4 py-4 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back
        </button>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Quiz Categories
        </h1>
        {isAuthenticated && (
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200"
          >
            Sign Out
          </button>
        )}
        {!isAuthenticated && <div className="w-[100px]" />} {/* Spacer for layout balance */}
      </div>
    </div>
  );
};
