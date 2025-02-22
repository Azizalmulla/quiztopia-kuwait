import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { quizQuestions } from '@/data/quizQuestions';
import { Send } from 'lucide-react';

export default function Game() {
  const { category = 'general' } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean; timestamp: Date; image?: string; isOption?: boolean}>>([]);
  const [userInput, setUserInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'ar' | 'en' | null>(null);

  const messageSound = new Audio('/message.mp3');
  const correctSound = new Audio('/correct.mp3');
  const wrongSound = new Audio('/wrong.mp3');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, isUser: boolean, image?: string, isOption?: boolean) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date(), image, isOption }]);
    if (!isUser) {
      messageSound.play().catch(() => {});
    }
  };

  const getCurrentQuestion = () => {
    const questions = quizQuestions[category];
    return questions[currentQuestionIndex];
  };

  const showLanguageOptions = () => {
    const options = ["العربية", "English"];
    options.forEach((option, index) => {
      setTimeout(() => {
        addMessage(option, false, undefined, true);
        if (index === options.length - 1) {
          setIsProcessing(false);
        }
      }, index * 300);
    });
  };

  const showInitialOptions = () => {
    const options = selectedLanguage === 'ar' 
      ? ["نعم", "لا", "رجوع"]
      : ["Yes", "No", "Back"];
    options.forEach((option, index) => {
      setTimeout(() => {
        addMessage(option, false, undefined, true);
        if (index === options.length - 1) {
          setIsProcessing(false);
        }
      }, index * 300);
    });
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameStarted(false);
    setMessages([]);
    setHasGreeted(false);
    setSelectedLanguage(null);
    setIsProcessing(true);
    
    // Start the flow again with language selection
    setTimeout(() => {
      const greeting = "Welcome! مرحباً بك! Please select your preferred language:";
      addMessage(greeting, false);
      setTimeout(showLanguageOptions, 500);
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    // Handle "Start from beginning" option
    if (option === "بدي أرجع من البداية" || option === "Start from beginning") {
      resetGame();
      return;
    }

    // Handle language selection
    if (!selectedLanguage) {
      if (option === "العربية") {
        setSelectedLanguage('ar');
        addMessage("السلام عليكم! حياك الله في مسابقة الكويت للمعلومات العامة ⭐", false);
        setTimeout(() => {
          addMessage("هل تريد المشاركة في المسابقة؟", false);
          setTimeout(showInitialOptions, 500);
        }, 500);
      } else if (option === "English") {
        setSelectedLanguage('en');
        addMessage("Welcome to Kuwait General Knowledge Quiz! ⭐", false);
        setTimeout(() => {
          addMessage("Would you like to participate in the quiz?", false);
          setTimeout(showInitialOptions, 500);
        }, 500);
      }
      return;
    }

    if (!gameStarted) {
      // Handle initial options
      if (option === "نعم" || option === "Yes") {
        setShowPayment(true);
        setIsProcessing(false);
      } else if (option === "لا" || option === "No") {
        addMessage(selectedLanguage === 'ar' ? "شكراً لك! نراك قريباً" : "Thank you! See you soon!", false);
        setTimeout(() => navigate('/'), 2000);
      } else if (option === "رجوع" || option === "Back") {
        navigate('/');
      }
      return;
    }

    // Handle quiz answers
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
      setIsProcessing(false);
      return;
    }

    // Check if the selected option is correct
    const optionsToCheck = selectedLanguage === 'ar' ? currentQuestion.options_ar : currentQuestion.options_en;
    const selectedIndex = optionsToCheck.indexOf(option);
    const isCorrect = selectedIndex === currentQuestion.options_en.indexOf(currentQuestion.correct_answer);

    if (isCorrect) {
      correctSound.play().catch(() => {});
      setScore(prev => prev + 1);
      addMessage(selectedLanguage === 'ar' ? "ممتاز! إجابة صحيحة! 🎉" : "Excellent! Correct answer! 🎉", false);
      
      if (currentQuestionIndex < quizQuestions[category].length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTimeout(() => {
          const nextQuestion = quizQuestions[category][currentQuestionIndex + 1];
          addMessage(selectedLanguage === 'ar' ? nextQuestion.question_ar : nextQuestion.question_en, false, nextQuestion.image_url);
          setTimeout(() => {
            const options = selectedLanguage === 'ar' ? nextQuestion.options_ar : nextQuestion.options_en;
            options.forEach((option, index) => {
              setTimeout(() => {
                addMessage(option, false, undefined, true);
              }, index * 500);
            });
            setIsProcessing(false);
          }, 500);
        }, 1000);
      } else {
        const finalMessage = selectedLanguage === 'ar' 
          ? `انتهت المسابقة! حصلت على ${score + 1} من ${quizQuestions[category].length} نقاط`
          : `Quiz completed! You scored ${score + 1} out of ${quizQuestions[category].length} points`;
        addMessage(finalMessage, false);
        addMessage(selectedLanguage === 'ar' ? "بدي أرجع من البداية" : "Start from beginning", false, undefined, true);
        setIsProcessing(false);
      }
    } else {
      wrongSound.play().catch(() => {});
      addMessage(selectedLanguage === 'ar' ? "للأسف الإجابة خطأ" : "Sorry, wrong answer!", false);
      const finalMessage = selectedLanguage === 'ar'
        ? `انتهت المسابقة! حصلت على ${score} من ${quizQuestions[category].length} نقاط`
        : `Quiz ended! You scored ${score} out of ${quizQuestions[category].length} points`;
      addMessage(finalMessage, false);
      addMessage(selectedLanguage === 'ar' ? "بدي أرجع من البداية" : "Start from beginning", false, undefined, true);
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setGameStarted(true);
    addMessage(selectedLanguage === 'ar' ? "!تم تأكيد الدفع! يلا نبدأ بالمسابقة" : "Payment confirmed! Let's start the quiz!", false);
    setTimeout(() => {
      const firstQuestion = getCurrentQuestion();
      if (firstQuestion) {
        addMessage(selectedLanguage === 'ar' ? firstQuestion.question_ar : firstQuestion.question_en, false, firstQuestion.image_url);
        setTimeout(() => {
          const options = selectedLanguage === 'ar' ? firstQuestion.options_ar : firstQuestion.options_en;
          options.forEach((option, index) => {
            setTimeout(() => {
              addMessage(option, false, undefined, true);
              if (index === options.length - 1) {
                setIsProcessing(false);
              }
            }, index * 500);
          });
        }, 500);
      }
    }, 1000);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    addMessage(selectedLanguage === 'ar' ? "تم إلغاء الدفع. هل تريد المحاولة مرة أخرى؟" : "Payment cancelled. Would you like to try again?", false);
    setTimeout(showInitialOptions, 500);
  };

  const handleUserInput = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;

    const input = userInput.trim();
    if (!input) return;

    setUserInput('');
    addMessage(input, true);
    setIsProcessing(true);

    if (!hasGreeted) {
      setHasGreeted(true);
      setTimeout(() => {
        const greeting = "Welcome! مرحباً بك! Please select your preferred language:";
        addMessage(greeting, false);
        setTimeout(showLanguageOptions, 500);
      }, 500);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#EFE7DE]">
      <div className="flex-1 overflow-y-auto px-3 py-2">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
            image={message.image}
            isOption={message.isOption}
            onOptionClick={message.isOption ? handleOptionClick : undefined}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleUserInput} className="sticky bottom-0 z-10">
        <div className="flex items-center gap-2 p-2 bg-[#F0F2F5]">
          <button 
            type="submit"
            className="p-2 rounded-full bg-[#00A884] hover:bg-[#017561] transition-colors"
            disabled={isProcessing}
          >
            <Send className="w-6 h-6 text-white" />
          </button>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 rounded-full px-4 py-2 text-right bg-white border-0 focus:ring-0 focus:outline-none text-[15px]"
            dir="rtl"
            disabled={isProcessing}
          />
        </div>
      </form>

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
