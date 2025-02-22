
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { QuizTimer } from '@/components/chat/QuizTimer';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { quizQuestions } from '@/data/quizQuestions';

export default function Game() {
  const { category = 'general' } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean; timestamp: Date; image?: string}>>([]);
  const [userInput, setUserInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [score, setScore] = useState(0);

  const messageSound = new Audio('/message.mp3');
  const timerSound = new Audio('/timer.mp3');
  const correctSound = new Audio('/correct.mp3');
  const wrongSound = new Audio('/wrong.mp3');

  const arabicLetters = ['أ', 'ب', 'ج', 'د'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, isUser: boolean, image?: string) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: new Date(), image }]);
    if (!isUser) {
      messageSound.play().catch(() => {});
    }
  };

  const getCurrentQuestion = () => {
    const questions = quizQuestions[category];
    return questions[currentQuestionIndex];
  };

  const askQuestion = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    // Add the question text and image
    addMessage(currentQuestion.question_ar, false, currentQuestion.image_url);

    // Add options as separate messages
    currentQuestion.options_ar.forEach((option, index) => {
      setTimeout(() => {
        addMessage(`${arabicLetters[index]}     ${option}`, false);
      }, index * 500);
    });

    // Add the "end" option
    setTimeout(() => {
      addMessage("end     بدي أرجع من البداية", false);
    }, currentQuestion.options_ar.length * 500);
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;
    
    if (answer.toLowerCase() === 'end') {
      navigate('/');
      return;
    }

    const answerIndex = arabicLetters.indexOf(answer);
    const isCorrect = currentQuestion.options_ar[answerIndex] === currentQuestion.options_ar[
      currentQuestion.options_en.indexOf(currentQuestion.correct_answer)
    ];

    if (isCorrect) {
      correctSound.play().catch(() => {});
      setScore(prev => prev + 1);
      addMessage("ممتاز! إجابة صحيحة! 🎉", false);
      
      if (currentQuestionIndex < quizQuestions[category].length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTimerActive(false);
        setTimeout(() => {
          setIsTimerActive(true);
          askQuestion();
        }, 1000);
      } else {
        setIsTimerActive(false);
        addMessage(`انتهت المسابقة! حصلت على ${score + 1} من ${quizQuestions[category].length} نقاط`, false);
        addMessage("إذا حبيت تبدأ من جديد 'end' تقدر تكتب", false);
      }
    } else {
      wrongSound.play().catch(() => {});
      addMessage("للأسف الإجابة خطأ. خليج المكسيك هو أكبر خليج في العالم بمساحة تقدر بحوالي 1.6 مليون كيلومتر مربع", false);
      addMessage(`انتهت المسابقة! حصلت على ${score} من ${quizQuestions[category].length} نقاط`, false);
      addMessage("إذا حبيت تبدأ من جديد 'end' تقدر تكتب", false);
      setIsTimerActive(false);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(userInput, true);
    
    if (!showPayment) {
      if (userInput === 'نعم' || userInput.toLowerCase() === 'yes') {
        setShowPayment(true);
      } else if (userInput === 'لا' || userInput.toLowerCase() === 'no') {
        addMessage("شكراً لك! نراك قريباً", false);
        setTimeout(() => navigate('/'), 2000);
      }
    } else {
      handleAnswer(userInput);
    }
    
    setUserInput('');
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setIsTimerActive(true);
    addMessage("!تم تأكيد الدفع! يلا نبدأ بالمسابقة", false);
    setTimeout(() => {
      askQuestion();
    }, 1000);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    addMessage("تم إلغاء الدفع. هل تريد المحاولة مرة أخرى؟", false);
  };

  const handleTimeUp = () => {
    timerSound.play().catch(() => {});
    setIsTimerActive(false);
    addMessage("!خلص الوقت! انتهت المسابقة", false);
    addMessage(`حصلت على ${score} من ${quizQuestions[category].length} نقاط`, false);
    addMessage("إذا حبيت تبدأ من جديد 'end' تقدر تكتب", false);
  };

  useEffect(() => {
    addMessage("السلام عليكم! حياك الله في مسابقة الكويت للمعلومات العامة ⭐", false);
    addMessage("نعم     أكيد أبي أشارك", false);
    addMessage("لا     مرة ثانية إن شاء الله", false);
    addMessage("end     بدي أرجع من البداية", false);
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
          <div className="mr-3 text-right"> {/* Changed ml-3 to mr-3 for RTL */}
            <h1 className="font-semibold">مسابقة الكويت</h1>
            <p className="text-sm opacity-75">Kuwait Quiz</p>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4" dir="rtl"> {/* Added dir="rtl" */}
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
            image={message.image}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Timer */}
      {isTimerActive && (
        <div className="fixed top-20 left-4"> {/* Changed right-4 to left-4 for RTL */}
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
          <Button 
            type="submit"
            className="bg-[#075E54] hover:bg-[#054C44] rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </Button>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#075E54] bg-white text-right"
            placeholder="...اكتب رسالتك هنا"
            dir="rtl"
          />
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
