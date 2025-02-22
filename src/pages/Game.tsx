
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { QuizTimer } from '@/components/chat/QuizTimer';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Game() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean; timestamp: Date}>>([]);
  const [userInput, setUserInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar' | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date() }]);
  };

  const handleLanguageSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    const welcomeMsg = lang === 'ar' 
      ? "مرحباً بك في اختبارنا! هل تريد المشاركة في المسابقة؟ (نعم/لا)" 
      : "Welcome to our quiz! Would you like to participate? (Yes/No)";
    addMessage(welcomeMsg, false);
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(userInput, true);
    processUserInput(userInput);
    setUserInput('');
  };

  const processUserInput = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (!language) {
      if (lowerInput.includes('english') || lowerInput.includes('en')) {
        handleLanguageSelect('en');
      } else if (lowerInput.includes('arabic') || lowerInput.includes('ar') || lowerInput.includes('عربي')) {
        handleLanguageSelect('ar');
      } else {
        addMessage("Please select English or Arabic / الرجاء اختيار اللغة الإنجليزية أو العربية", false);
      }
      return;
    }

    if (!gameStarted) {
      if (lowerInput.includes('yes') || lowerInput.includes('نعم')) {
        setShowPayment(true);
      } else if (lowerInput.includes('no') || lowerInput.includes('لا')) {
        addMessage(language === 'ar' ? "شكراً لك! نراك قريباً" : "Thank you! See you soon!", false);
        setTimeout(() => navigate('/'), 2000);
      }
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setGameStarted(true);
    setIsTimerActive(true);
    const startMsg = language === 'ar' 
      ? "ممتاز! لنبدأ المسابقة. لديك 15 ثانية للإجابة على كل سؤال." 
      : "Great! Let's start the quiz. You have 15 seconds to answer each question.";
    addMessage(startMsg, false);
    // Start first question
    setTimeout(() => {
      const question = language === 'ar' 
        ? "السؤال الأول: ما هو..." 
        : "First question: What is...";
      addMessage(question, false);
    }, 1000);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    addMessage(
      language === 'ar' 
        ? "تم إلغاء الدفع. هل تريد المحاولة مرة أخرى؟" 
        : "Payment cancelled. Would you like to try again?",
      false
    );
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    addMessage(
      language === 'ar' 
        ? "انتهى الوقت! انتهت المسابقة." 
        : "Time's up! The quiz is over.",
      false
    );
    setTimeout(() => navigate('/'), 3000);
  };

  useEffect(() => {
    // Initial message
    addMessage("Welcome! Please select your language / أهلا! الرجاء اختيار اللغة", false);
    addMessage("English or Arabic? / إنجليزي أو عربي؟", false);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#E5DDD5]">
      {/* WhatsApp header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <img src="/path-to-bot-avatar.png" alt="Bot" className="w-8 h-8 rounded-full" />
          </div>
          <div className="ml-3">
            <h1 className="font-semibold">Quiz Bot</h1>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1 text-blue-400" />
              <span>Verified Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
      </div>

      {/* Timer */}
      {isTimerActive && (
        <div className="fixed top-20 right-4">
          <QuizTimer
            duration={15}
            onTimeUp={handleTimeUp}
            isActive={isTimerActive}
          />
        </div>
      )}

      {/* Input area */}
      <form onSubmit={handleLanguageSelect} className="bg-[#F0F0F0] p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#075E54]"
            placeholder={language === 'ar' ? "اكتب رسالتك هنا..." : "Type your message here..."}
          />
          <Button 
            type="submit"
            className="bg-[#075E54] hover:bg-[#054C44] rounded-full p-2"
          >
            Send
          </Button>
        </div>
      </form>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent>
          <KNETPayment
            amount={1}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
