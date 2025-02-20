
import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4 py-16 max-w-md">
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-white/70 hover:text-white transition-colors"
        >
          ← Back
        </button>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/10">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#000000',
                    brandAccent: '#1a1a1a',
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
