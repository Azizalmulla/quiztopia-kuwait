
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { KNETPayment } from '@/components/chat/KNETPayment';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { quizQuestions } from '@/data/quizQuestions';

export default function Game() {
  const { category = 'general' } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean; timestamp: Date; image?: string}>>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);

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
      setShowOptions(true); // Show option buttons after all messages are displayed
    }, currentQuestion.options_ar.length * 500);
  };

  const handleAnswer = (answer: string) => {
    setShowOptions(false); // Hide options while processing answer
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;
    
    if (answer.toLowerCase() === 'end') {
      navigate('/');
      return;
    }

    addMessage(answer, true);

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
        addMessage("إذا حبيت تبدأ من جديد اضغط على زر الرجوع", false);
      }
    } else {
      wrongSound.play().catch(() => {});
      addMessage("للأسف الإجابة خطأ. خليج المكسيك هو أكبر خليج في العالم بمساحة تقدر بحوالي 1.6 مليون كيلومتر مربع", false);
      addMessage(`انتهت المسابقة! حصلت على ${score} من ${quizQuestions[category].length} نقاط`, false);
      addMessage("إذا حبيت تبدأ من جديد اضغط على زر الرجوع", false);
    }
  };

  const handleInitialChoice = (choice: 'yes' | 'no') => {
    if (choice === 'yes') {
      addMessage('نعم', true);
      setShowPayment(true);
    } else {
      addMessage('لا', true);
      addMessage("شكراً لك! نراك قريباً", false);
      setTimeout(() => navigate('/'), 2000);
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
    setShowOptions(true);
  };

  useEffect(() => {
    // Initial messages
    setTimeout(() => {
      addMessage("السلام عليكم! حياك الله في مسابقة الكويت للمعلومات العامة ⭐", false);
      setTimeout(() => {
        addMessage("هل تريد المشاركة في المسابقة؟", false);
        setShowOptions(true);
      }, 500);
    }, 500);
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
          <div className="mr-3 text-right">
            <h1 className="font-semibold">مسابقة الكويت</h1>
            <p className="text-sm opacity-75">Kuwait Quiz</p>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4" dir="rtl">
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

      {/* Options Buttons */}
      {showOptions && (
        <div className="bg-[#F0F0F0] p-4 sticky bottom-0 z-10" dir="rtl">
          <div className="flex flex-col gap-2">
            {!showPayment && currentQuestionIndex === 0 && (
              <>
                <Button 
                  onClick={() => handleInitialChoice('yes')}
                  className="w-full bg-[#075E54] hover:bg-[#054C44] text-right justify-start"
                >
                  نعم     أكيد أبي أشارك
                </Button>
                <Button 
                  onClick={() => handleInitialChoice('no')}
                  className="w-full bg-[#075E54] hover:bg-[#054C44] text-right justify-start"
                >
                  لا     مرة ثانية إن شاء الله
                </Button>
              </>
            )}
            {currentQuestionIndex > 0 && getCurrentQuestion()?.options_ar.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(arabicLetters[index])}
                className="w-full bg-[#075E54] hover:bg-[#054C44] text-right justify-start"
              >
                {`${arabicLetters[index]}     ${option}`}
              </Button>
            ))}
            <Button
              onClick={() => handleAnswer('end')}
              className="w-full bg-[#075E54] hover:bg-[#054C44] text-right justify-start"
            >
              end     بدي أرجع من البداية
            </Button>
          </div>
        </div>
      )}

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
