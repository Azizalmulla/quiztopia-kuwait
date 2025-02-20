
import { useState } from 'react';
import { Trophy, MessageCircle, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react'; // Changed to named import

interface QuizCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  whatsappLink: string;
  webLink: string;
}

const icons = {
  Trophy,
};

export function QuizCard({ title, description, icon: IconName, whatsappLink, webLink }: QuizCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = icons[IconName];

  return (
    <div
      className="card-flip w-full h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="glass h-full rounded-2xl p-6 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:shadow-lg">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-center">{description}</p>
          </div>
        </div>
        
        <div className="card-back">
          <div className="glass h-full rounded-2xl p-6 flex flex-col items-center justify-center gap-6">
            <div className="space-y-6 w-full">
              <div className="flex flex-col items-center gap-4">
                <QRCodeSVG
                  value={whatsappLink}
                  size={180}
                  level="H"
                  className="rounded-lg"
                />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start WhatsApp Quiz</span>
                </a>
              </div>
              
              <div className="flex justify-center">
                <a
                  href={webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="w-5 h-5" />
                  <span>Play on Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
