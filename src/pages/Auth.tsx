import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 glass-effect p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to TechVerse</h2>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#a855f7',
                  brandAccent: '#9333ea',
                }
              }
            }
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default AuthPage;