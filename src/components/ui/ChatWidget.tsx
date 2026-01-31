import { useState, type FC, type FormEvent } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '@/contexts';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const WHATSAPP_NUMBER = '6283878624702';

export const ChatWidget: FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);

  const quickReplies = language === 'id' 
    ? [
        { id: 1, text: 'Harga Website', response: 'Berikut harga layanan kami:\n\n• Landing Page: Rp 1.000.000\n• Portfolio: Rp 500.000\n• Company Profile: Rp 2.500.000\n• E-Commerce: Rp 10.000.000\n• POS System: Rp 12.000.000\n\nHarga dapat disesuaikan dengan fitur yang dibutuhkan.' },
        { id: 2, text: 'Cara Pemesanan', response: 'Cara pemesanan:\n\n1. Konsultasi kebutuhan project\n2. Kami buatkan proposal & quotation\n3. Deal & pembayaran DP 50%\n4. Proses pengerjaan\n5. Pelunasan 50% setelah selesai\n\nHubungi kami untuk konsultasi gratis!' },
        { id: 3, text: 'Waktu Pengerjaan', response: 'Estimasi waktu pengerjaan:\n\n• Landing Page: 3-5 hari\n• Portfolio: 5-7 hari\n• Company Profile: 1-2 minggu\n• E-Commerce: 3-4 minggu\n• POS System: 4-6 minggu\n\nWaktu dapat bervariasi tergantung kompleksitas.' },
        { id: 4, text: 'Chat WhatsApp', response: 'redirect_whatsapp' },
      ]
    : [
        { id: 1, text: 'Website Pricing', response: 'Here are our prices:\n\n• Landing Page: $60\n• Portfolio: $30\n• Company Profile: $150\n• E-Commerce: $600\n• POS System: $720\n\nPrices can be adjusted based on required features.' },
        { id: 2, text: 'How to Order', response: 'How to order:\n\n1. Consultation about project needs\n2. We create proposal & quotation\n3. Deal & 50% down payment\n4. Development process\n5. 50% payment upon completion\n\nContact us for free consultation!' },
        { id: 3, text: 'Development Time', response: 'Estimated development time:\n\n• Landing Page: 3-5 days\n• Portfolio: 5-7 days\n• Company Profile: 1-2 weeks\n• E-Commerce: 3-4 weeks\n• POS System: 4-6 weeks\n\nTime may vary depending on complexity.' },
        { id: 4, text: 'Chat WhatsApp', response: 'redirect_whatsapp' },
      ];

  const greetingMessage = language === 'id'
    ? 'Halo! 👋 Selamat datang di Ganipedia. Saya asisten virtual yang siap membantu Anda. Silakan pilih topik di bawah atau ketik pertanyaan Anda.'
    : "Hello! 👋 Welcome to Ganipedia. I'm a virtual assistant ready to help you. Please select a topic below or type your question.";

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasGreeted) {
      setMessages([{
        id: Date.now(),
        text: greetingMessage,
        isBot: true,
        timestamp: new Date(),
      }]);
      setHasGreeted(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: true,
      timestamp: new Date(),
    }]);
  };

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: reply.text,
      isBot: false,
      timestamp: new Date(),
    }]);

    if (reply.response === 'redirect_whatsapp') {
      const whatsappMessage = language === 'id' 
        ? 'Halo Ganipedia, saya tertarik dengan layanan pembuatan website.'
        : 'Hello Ganipedia, I am interested in your website development services.';
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      addBotMessage(language === 'id' 
        ? 'Membuka WhatsApp... Tim kami akan segera merespon pesan Anda! 😊'
        : 'Opening WhatsApp... Our team will respond to your message soon! 😊');
    } else {
      setTimeout(() => addBotMessage(reply.response), 500);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }]);

    const userInput = inputValue.toLowerCase();
    setInputValue('');

    // Simple keyword matching for auto-response
    setTimeout(() => {
      let response = '';
      
      if (userInput.includes('harga') || userInput.includes('price') || userInput.includes('biaya') || userInput.includes('cost')) {
        response = quickReplies[0].response;
      } else if (userInput.includes('pesan') || userInput.includes('order') || userInput.includes('cara') || userInput.includes('how')) {
        response = quickReplies[1].response;
      } else if (userInput.includes('waktu') || userInput.includes('time') || userInput.includes('lama') || userInput.includes('duration')) {
        response = quickReplies[2].response;
      } else if (userInput.includes('whatsapp') || userInput.includes('wa') || userInput.includes('chat')) {
        const whatsappMessage = language === 'id' 
          ? `Halo Ganipedia, ${inputValue}`
          : `Hello Ganipedia, ${inputValue}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        response = language === 'id' 
          ? 'Membuka WhatsApp... Tim kami akan segera merespon! 😊'
          : 'Opening WhatsApp... Our team will respond soon! 😊';
      } else {
        response = language === 'id'
          ? 'Terima kasih atas pertanyaannya! Untuk informasi lebih detail, silakan hubungi kami via WhatsApp atau isi form kontak. Tim kami akan segera merespon.'
          : 'Thank you for your question! For more detailed information, please contact us via WhatsApp or fill out the contact form. Our team will respond soon.';
      }
      
      addBotMessage(response);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-24 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 ${isOpen ? 'hidden' : ''}`}
        aria-label={language === 'id' ? 'Buka Chat' : 'Open Chat'}
      >
        <MessageCircle className="w-6 h-6" />
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-90 max-w-[calc(100vw-2rem)] h-125 max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-linear-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Ganipedia Support</h3>
                <p className="text-xs text-primary-100">{language === 'id' ? 'Online - Siap membantu' : 'Online - Ready to help'}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label={language === 'id' ? 'Tutup Chat' : 'Close Chat'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.isBot ? 'bg-primary-100 text-primary-600' : 'bg-slate-200 text-slate-600'
                }`}>
                  {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                    message.isBot
                      ? 'bg-white text-slate-700 rounded-tl-none shadow-sm'
                      : 'bg-primary-600 text-white rounded-tr-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length > 0 && messages[messages.length - 1].isBot && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 bg-white border border-primary-200 text-primary-600 rounded-full text-xs font-medium hover:bg-primary-50 hover:border-primary-300 transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'id' ? 'Ketik pesan...' : 'Type a message...'}
                className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label={language === 'id' ? 'Kirim' : 'Send'}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
