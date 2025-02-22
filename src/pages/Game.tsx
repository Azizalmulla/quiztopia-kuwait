
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { KNETPayment } from '@/components/chat/KNETPayment';
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
  const [score, setScore] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);

  const messageSound = new Audio('/message.mp3');
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
        setTimeout(() => {
          askQuestion();
        }, 1000);
      } else {
        addMessage(`انتهت المسابقة! حصلت على ${score + 1} من ${quizQuestions[category].length} نقاط`, false);
        addMessage("إذا حبيت تبدأ من جديد اضغط على end", false);
      }
    } else {
      wrongSound.play().catch(() => {});
      addMessage("للأسف الإجابة خطأ. خليج المكسيك هو أكبر خليج في العالم بمساحة تقدر بحوالي 1.6 مليون كيلومتر مربع", false);
      addMessage(`انتهت المسابقة! حصلت على ${score} من ${quizQuestions[category].length} نقاط`, false);
      addMessage("إذا حبيت تبدأ من جديد اضغط على end", false);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    const input = userInput.trim();
    if (!input) return;

    addMessage(input, true);
    setUserInput('');

    if (!hasGreeted) {
      setHasGreeted(true);
      setTimeout(() => {
        addMessage("السلام عليكم! حياك الله في مسابقة الكويت للمعلومات العامة ⭐", false);
        setTimeout(() => {
          addMessage("هل تريد المشاركة في المسابقة؟", false);
          setTimeout(() => {
            addMessage("نعم     أكيد أبي أشارك", false);
            addMessage("لا     مرة ثانية إن شاء الله", false);
            addMessage("end     بدي أرجع من البداية", false);
          }, 500);
        }, 500);
      }, 500);
      return;
    }

    if (input.toLowerCase() === 'نعم' || input.toLowerCase() === 'yes') {
      setShowPayment(true);
    } else if (input.toLowerCase() === 'لا' || input.toLowerCase() === 'no') {
      addMessage("شكراً لك! نراك قريباً", false);
      setTimeout(() => navigate('/'), 2000);
    } else if (arabicLetters.includes(input) || input.toLowerCase() === 'end') {
      handleAnswer(input);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    addMessage("!تم تأكيد الدفع! يلا نبدأ بالمسابقة", false);
    setTimeout(() => {
      askQuestion();
    }, 1000);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    addMessage("تم إلغاء الدفع. هل تريد المحاولة مرة أخرى؟", false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#EFE7DE]">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-3 py-2" dir="rtl">
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

      {/* Message Input */}
      <form onSubmit={handleUserInput} className="bg-[#F0F2F5] p-2 sticky bottom-0 z-10">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="...اكتب رسالتك هنا"
          className="w-full rounded-lg px-4 py-2 text-right bg-white border-0 focus:ring-0 focus:outline-none text-[15px]"
          dir="rtl"
        />
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
