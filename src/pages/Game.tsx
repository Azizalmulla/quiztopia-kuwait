
import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-[20%] animate-bounce delay-100">
          <Sparkles className="w-6 h-6 text-emerald-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-[25%] animate-bounce delay-300">
          <Sparkles className="w-5 h-5 text-purple-400 opacity-60" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-md relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group mb-8 text-white/70 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back
        </button>
        
        {/* Auth Container */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl"></div>
          
          {/* Auth Component */}
          <div className="glass-morphism rounded-xl p-8 shadow-2xl border border-white/10 relative">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Welcome to AiWalla
            </h2>
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#10b981',
                      brandAccent: '#059669',
                      inputBackground: 'rgba(255, 255, 255, 0.05)',
                      inputBorder: 'rgba(255, 255, 255, 0.1)',
                      inputText: 'white',
                      inputLabelText: 'rgba(255, 255, 255, 0.8)',
                      defaultButtonBackground: 'rgba(255, 255, 255, 0.05)',
                      defaultButtonBackgroundHover: 'rgba(255, 255, 255, 0.08)',
                    },
                    borderWidths: {
                      buttonBorderWidth: '1px',
                      inputBorderWidth: '1px',
                    },
                    radii: {
                      borderRadiusButton: '9999px',
                      inputBorderRadius: '0.75rem',
                    },
                  },
                },
                className: {
                  container: 'space-y-4',
                  button: 'transition-all duration-200 hover:scale-102 active:scale-98',
                  input: 'backdrop-blur-xl bg-white/5',
                  label: 'text-sm font-medium',
                },
              }}
              providers={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
