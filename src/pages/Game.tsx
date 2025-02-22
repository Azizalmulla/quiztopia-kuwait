
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { QuizTimer } from '@/components/chat/QuizTimer';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { quizQuestions } from '@/data/quizQuestions';

export default function Game() {
  const { category = 'general' } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean; timestamp: Date}>>([]);
  const [userInput, setUserInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Sound effects
  const messageSound = new Audio('/message.mp3');
  const timerSound = new Audio('/timer.mp3');
  const correctSound = new Audio('/correct.mp3');
  const wrongSound = new Audio('/wrong.mp3');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date() }]);
    if (!isUser) {
      messageSound.play().catch(() => {});
    }
  };

  const getCurrentQuestion = () => {
    const questions = quizQuestions[category];
    return questions[currentQuestionIndex];
  };

  const handleLanguageSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    const welcomeMsg = lang === 'ar' 
      ? "هلا والله! تبي تشارك في المسابقة؟ (نعم/لا)" 
      : "Welcome to our quiz! Would you like to participate? (Yes/No)";
    addMessage(welcomeMsg, false);
  };

  const askQuestion = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    const questionText = language === 'ar' ? currentQuestion.question_ar : currentQuestion.question_en;
    const options = language === 'ar' ? currentQuestion.options_ar : currentQuestion.options_en;
    
    addMessage(questionText, false);
    options.forEach((option, index) => {
      setTimeout(() => {
        addMessage(`${index + 1}. ${option}`, false);
      }, index * 500);
    });
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    const isCorrect = answer.toLowerCase() === currentQuestion.correct_answer.toLowerCase() ||
                     answer === (currentQuestion.options_en.indexOf(currentQuestion.correct_answer) + 1).toString();

    if (isCorrect) {
      correctSound.play().catch(() => {});
      const correctMsg = language === 'ar' ? "ممتاز! إجابة صحيحة! 🎉" : "Excellent! Correct answer! 🎉";
      addMessage(correctMsg, false);
      setCurrentQuestionIndex(prev => prev + 1);
      setIsTimerActive(false);
      setTimeout(() => {
        setIsTimerActive(true);
        askQuestion();
      }, 1000);
    } else {
      wrongSound.play().catch(() => {});
      const wrongMsg = language === 'ar' 
        ? "للأسف الإجابة غلط! انتهت المسابقة. نشوفك مرة ثانية!" 
        : "Sorry, wrong answer! The quiz is over. See you next time!";
      addMessage(wrongMsg, false);
      setTimeout(() => navigate('/'), 3000);
    }
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
    timerSound.play().catch(() => {});
    setIsTimerActive(false);
    addMessage(
      language === 'ar' 
        ? "خلص الوقت! انتهت المسابقة. نشوفك مرة ثانية!" 
        : "Time's up! The quiz is over. See you next time!",
      false
    );
    setTimeout(() => navigate('/'), 3000);
  };

  useEffect(() => {
    addMessage("Welcome! Please select your language / هلا! اختار اللغة", false);
    addMessage("English or Arabic? / إنجليزي لو عربي؟", false);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#E5DDD5] bg-[url('/whatsapp-bg.png')] bg-repeat">
      {/* WhatsApp header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/quiz-bot-avatar.png" alt="Bot" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3">
            <h1 className="font-semibold">Quiz Bot</h1>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1 text-blue-400" />
              <span>Verified Business</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-sm">⋮</span>
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
        <div ref={messagesEndRef} />
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
      <form onSubmit={handleUserInput} className="bg-[#F0F0F0] p-4 sticky bottom-0 z-10">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#075E54] bg-white"
            placeholder={language === 'ar' ? "اكتب رسالتك..." : "Type a message..."}
          />
          <Button 
            type="submit"
            className="bg-[#075E54] hover:bg-[#054C44] rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
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
