
import { useState } from 'react';
import { MessageCircle, Globe, ImageIcon } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface QuizCardProps {
  title: string;
  description: string;
  icon: string;
  whatsappLink: string;
  webLink: string;
  gradient: string;
  backgroundImage: string;
}

export function QuizCard({ 
  title, 
  description, 
  icon,
  whatsappLink, 
  webLink, 
  gradient,
  backgroundImage
}: QuizCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const renderIcon = () => {
    if (imgError || !icon) {
      return <ImageIcon className="w-12 h-12 text-white" />;
    }

    return (
      <div className={`w-32 h-32 rounded-full border-2 border-white/20 p-4 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40`}>
        <img 
          src={icon} 
          alt={title}
          className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
          onError={() => setImgError(true)}
        />
      </div>
    );
  };

  return (
    <div
      className="card-flip w-full h-[400px] cursor-pointer group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''} duration-700`}>
        <div className="card-front">
          <div 
            className={`glass h-full rounded-2xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-${gradient} border border-white/5 group-hover:border-white/10 relative overflow-hidden`}
            style={{
              background: backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              {renderIcon()}
            </div>
            <h3 className="relative z-10 text-2xl font-semibold text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">{title}</h3>
            <p className="relative z-10 text-white/70 text-center transition-colors duration-300 group-hover:text-white/90">{description}</p>
          </div>
        </div>
        
        <div className="card-back">
          <div className="glass h-full rounded-2xl p-8 flex flex-col items-center justify-center gap-6 border border-white/5 group-hover:border-white/10">
            <div className="space-y-6 w-full">
              <div className="flex flex-col items-center gap-4">
                <QRCodeSVG
                  value={whatsappLink}
                  size={180}
                  level="H"
                  className="rounded-lg bg-white p-2 transform transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors duration-300"
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
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="w-5 h-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
