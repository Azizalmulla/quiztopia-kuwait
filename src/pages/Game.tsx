import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { ChatInput } from '@/components/chat/ChatInput';
import { getCurrentQuestion, getLocalizedOptions, getLocalizedMessages } from '@/utils/gameUtils';
import { Language, ChatMessageType } from '@/types/game';
import { quizQuestions } from '@/data/quizQuestions';

const Game = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  // Validate category
  useEffect(() => {
    if (!category || !quizQuestions[category]) {
      console.error('Invalid category:', category);
      navigate('/dashboard');
      return;
    }
  }, [category, navigate]);

  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [userInput, setUserInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(null);

  const messageSound = new Audio('/message.mp3');
  const correctSound = new Audio('/correct.mp3');
  const wrongSound = new Audio('/wrong.mp3');

  const addMessage = (text: string, isUser: boolean, image?: string, isOption?: boolean) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date(), image, isOption }]);
    if (!isUser) {
      messageSound.play().catch(() => {});
    }
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
    const options = getLocalizedOptions(selectedLanguage);
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
    
    setTimeout(() => {
      addMessage("Welcome! مرحباً بك! Please select your preferred language:", false);
      setTimeout(showLanguageOptions, 500);
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    if (option === "بدي أرجع من البداية" || option === "Start from beginning") {
      resetGame();
      return;
    }

    if (!selectedLanguage) {
      if (option === "العربية") {
        setSelectedLanguage('ar');
        const messages = getLocalizedMessages('ar', score, 0);
        addMessage(messages.welcome, false);
        setTimeout(() => {
          addMessage(messages.participate, false);
          setTimeout(showInitialOptions, 500);
        }, 500);
      } else if (option === "English") {
        setSelectedLanguage('en');
        const messages = getLocalizedMessages('en', score, 0);
        addMessage(messages.welcome, false);
        setTimeout(() => {
          addMessage(messages.participate, false);
          setTimeout(showInitialOptions, 500);
        }, 500);
      }
      return;
    }

    const messages = getLocalizedMessages(selectedLanguage, score, 0);

    if (!gameStarted) {
      if (option === "نعم" || option === "Yes") {
        setShowPayment(true);
        setIsProcessing(false);
      } else if (option === "لا" || option === "No") {
        addMessage(messages.goodbye, false);
        setTimeout(() => navigate('/'), 2000);
      } else if (option === "رجوع" || option === "Back") {
        navigate('/');
      }
      return;
    }

    const currentQuestion = getCurrentQuestion(category, currentQuestionIndex);
    if (!currentQuestion) {
      setIsProcessing(false);
      return;
    }

    const optionsToCheck = selectedLanguage === 'ar' ? currentQuestion.options_ar : currentQuestion.options_en;
    const selectedIndex = optionsToCheck.indexOf(option);
    const isCorrect = selectedIndex === currentQuestion.options_en.indexOf(currentQuestion.correct_answer);

    if (isCorrect) {
      correctSound.play().catch(() => {});
      setScore(prev => prev + 1);
      addMessage(messages.correct, false);
      
      if (currentQuestionIndex < quizQuestions[category].length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTimeout(() => {
          const nextQuestion = quizQuestions[category][currentQuestionIndex + 1];
          addMessage(
            selectedLanguage === 'ar' ? nextQuestion.question_ar : nextQuestion.question_en,
            false,
            nextQuestion.image_url
          );
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
        addMessage(messages.finalScore, false);
        addMessage(messages.startOver, false, undefined, true);
        setIsProcessing(false);
      }
    } else {
      wrongSound.play().catch(() => {});
      addMessage(messages.wrong, false);
      addMessage(messages.finalScore, false);
      addMessage(messages.startOver, false, undefined, true);
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setGameStarted(true);
    const messages = getLocalizedMessages(selectedLanguage, score, 0);
    addMessage(messages.paymentSuccess, false);
    
    setTimeout(() => {
      const firstQuestion = getCurrentQuestion(category, currentQuestionIndex);
      if (firstQuestion) {
        addMessage(
          selectedLanguage === 'ar' ? firstQuestion.question_ar : firstQuestion.question_en,
          false,
          firstQuestion.image_url
        );
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
    const messages = getLocalizedMessages(selectedLanguage, score, 0);
    addMessage(messages.paymentCancelled, false);
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
        addMessage("Welcome! مرحباً بك! Please select your preferred language:", false);
        setTimeout(showLanguageOptions, 500);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#EFE7DE]">
      <ChatContainer messages={messages} onOptionClick={handleOptionClick} />
      <ChatInput
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onSubmit={handleUserInput}
        isProcessing={isProcessing}
      />
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
};

export default Game;
