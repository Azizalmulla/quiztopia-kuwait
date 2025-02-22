
export type Language = 'ar' | 'en' | null;

export interface ChatMessageType {
  text: string;
  isUser: boolean;
  timestamp: Date;
  image?: string;
  isOption?: boolean;
}
