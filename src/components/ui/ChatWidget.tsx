import { useState, useRef, useEffect, type FC, type FormEvent } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Clock, Loader2 } from 'lucide-react';
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
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = language === 'id' 
    ? [
        { id: 1, text: '💰 Harga Website', response: '💵 **Daftar Harga Layanan Kami:**\n\n✨ Landing Page: Rp 1.000.000\n📁 Portfolio: Rp 500.000\n🏢 Company Profile: Rp 2.500.000\n🛒 E-Commerce: Rp 10.000.000\n📊 POS System: Rp 12.000.000\n🔧 Custom Web App: Hubungi Kami\n\n💡 Harga dapat disesuaikan dengan fitur yang dibutuhkan. Konsultasi GRATIS!' },
        { id: 2, text: '📋 Cara Pemesanan', response: '📝 **Cara Pemesanan:**\n\n1️⃣ Konsultasi kebutuhan project (GRATIS)\n2️⃣ Kami buatkan proposal & quotation\n3️⃣ Deal & pembayaran DP 50%\n4️⃣ Proses pengerjaan dengan update berkala\n5️⃣ Revisi & penyempurnaan\n6️⃣ Pelunasan 50% setelah selesai\n7️⃣ Handover & training penggunaan\n\n✅ Garansi maintenance 1 bulan!' },
        { id: 3, text: '⏱️ Waktu Pengerjaan', response: '⏰ **Estimasi Waktu Pengerjaan:**\n\n🚀 Landing Page: 3-5 hari\n📁 Portfolio: 5-7 hari\n🏢 Company Profile: 1-2 minggu\n🛒 E-Commerce: 3-4 minggu\n📊 POS System: 4-6 minggu\n🔧 Custom Web App: 4-8 minggu\n\n📌 Waktu dapat bervariasi tergantung kompleksitas & fitur yang diminta.' },
        { id: 4, text: '🔧 Teknologi', response: '💻 **Teknologi yang Kami Gunakan:**\n\n**Frontend:**\n• React.js / Next.js\n• TypeScript\n• Tailwind CSS\n\n**Backend:**\n• Node.js / Laravel\n• PostgreSQL / MongoDB\n\n**Deployment:**\n• Vercel / AWS\n• Docker\n\n🔒 Semua project menggunakan teknologi modern & best practices!' },
        { id: 5, text: '📞 Chat WhatsApp', response: 'redirect_whatsapp' },
      ]
    : [
        { id: 1, text: '💰 Pricing', response: '💵 **Our Service Pricing:**\n\n✨ Landing Page: $60\n📁 Portfolio: $30\n🏢 Company Profile: $150\n🛒 E-Commerce: $600\n📊 POS System: $720\n🔧 Custom Web App: Contact Us\n\n💡 Prices can be adjusted based on required features. FREE consultation!' },
        { id: 2, text: '📋 How to Order', response: '📝 **How to Order:**\n\n1️⃣ Consultation about project needs (FREE)\n2️⃣ We create proposal & quotation\n3️⃣ Deal & 50% down payment\n4️⃣ Development process with regular updates\n5️⃣ Revisions & refinements\n6️⃣ 50% payment upon completion\n7️⃣ Handover & usage training\n\n✅ 1 month maintenance warranty!' },
        { id: 3, text: '⏱️ Timeline', response: '⏰ **Estimated Development Time:**\n\n🚀 Landing Page: 3-5 days\n📁 Portfolio: 5-7 days\n🏢 Company Profile: 1-2 weeks\n🛒 E-Commerce: 3-4 weeks\n📊 POS System: 4-6 weeks\n🔧 Custom Web App: 4-8 weeks\n\n📌 Time may vary depending on complexity & requested features.' },
        { id: 4, text: '🔧 Technology', response: '💻 **Technologies We Use:**\n\n**Frontend:**\n• React.js / Next.js\n• TypeScript\n• Tailwind CSS\n\n**Backend:**\n• Node.js / Laravel\n• PostgreSQL / MongoDB\n\n**Deployment:**\n• Vercel / AWS\n• Docker\n\n🔒 All projects use modern technology & best practices!' },
        { id: 5, text: '📞 Chat WhatsApp', response: 'redirect_whatsapp' },
      ];

  const greetingMessage = language === 'id'
    ? 'Halo! 👋 Selamat datang di **Ganipedia**.\n\nSaya asisten virtual yang siap membantu Anda mendapatkan informasi tentang layanan kami.\n\nSilakan pilih topik di bawah atau ketik pertanyaan Anda!'
    : "Hello! 👋 Welcome to **Ganipedia**.\n\nI'm a virtual assistant ready to help you get information about our services.\n\nPlease select a topic below or type your question!";

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
    setIsTyping(false);
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: true,
      timestamp: new Date(),
    }]);
  };

  const simulateTyping = (response: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => addBotMessage(response), delay);
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
      simulateTyping(language === 'id' 
        ? '✅ Membuka WhatsApp...\n\nTim kami akan segera merespon pesan Anda! Terima kasih! 🙏'
        : '✅ Opening WhatsApp...\n\nOur team will respond to your message soon! Thank you! 🙏', 500);
    } else {
      simulateTyping(reply.response, 800);
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
    let response = '';
    
    if (userInput.includes('harga') || userInput.includes('price') || userInput.includes('biaya') || userInput.includes('cost') || userInput.includes('berapa')) {
      response = quickReplies[0].response;
    } else if (userInput.includes('pesan') || userInput.includes('order') || userInput.includes('cara') || userInput.includes('how') || userInput.includes('beli')) {
      response = quickReplies[1].response;
    } else if (userInput.includes('waktu') || userInput.includes('time') || userInput.includes('lama') || userInput.includes('duration') || userInput.includes('berapa hari')) {
      response = quickReplies[2].response;
    } else if (userInput.includes('teknologi') || userInput.includes('technology') || userInput.includes('tech') || userInput.includes('stack')) {
      response = quickReplies[3].response;
    } else if (userInput.includes('whatsapp') || userInput.includes('wa') || userInput.includes('chat') || userInput.includes('hubungi') || userInput.includes('contact')) {
      const whatsappMessage = language === 'id' 
        ? `Halo Ganipedia, ${inputValue}`
        : `Hello Ganipedia, ${inputValue}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      response = language === 'id' 
        ? '✅ Membuka WhatsApp...\n\nTim kami akan segera merespon! 🙏'
        : '✅ Opening WhatsApp...\n\nOur team will respond soon! 🙏';
    } else if (userInput.includes('portfolio') || userInput.includes('project') || userInput.includes('contoh') || userInput.includes('example')) {
      response = language === 'id'
        ? '🎨 **Portfolio Kami:**\n\nKami telah mengerjakan berbagai project seperti:\n\n• BPDA Bujapi Jabar (Company Profile)\n• BPDA Admin CMS (Web App)\n• BPDA HRMIS (HR System)\n• Batik Merawit (Company Profile)\n• Drizy (E-Commerce)\n\n👆 Scroll ke bagian Portfolio untuk melihat detail lebih lanjut!'
        : '🎨 **Our Portfolio:**\n\nWe have worked on various projects such as:\n\n• BPDA Bujapi Jabar (Company Profile)\n• BPDA Admin CMS (Web App)\n• BPDA HRMIS (HR System)\n• Batik Merawit (Company Profile)\n• Drizy (E-Commerce)\n\n👆 Scroll to Portfolio section to see more details!';
    } else if (userInput.includes('garansi') || userInput.includes('warranty') || userInput.includes('jaminan')) {
      response = language === 'id'
        ? '🛡️ **Garansi Kami:**\n\n✅ Garansi maintenance GRATIS 1 bulan\n✅ Support via WhatsApp/Email\n✅ Bug fixing gratis selama masa garansi\n✅ 3x revisi major gratis\n✅ Revisi minor unlimited (dalam scope)\n\n💪 Kepuasan Anda adalah prioritas kami!'
        : '🛡️ **Our Warranty:**\n\n✅ FREE 1 month maintenance warranty\n✅ Support via WhatsApp/Email\n✅ Free bug fixing during warranty\n✅ 3 free major revisions\n✅ Unlimited minor revisions (in scope)\n\n💪 Your satisfaction is our priority!';
    } else {
      response = language === 'id'
        ? '🤔 Terima kasih atas pertanyaannya!\n\nUntuk informasi lebih detail, silakan:\n\n1️⃣ Pilih topik dari tombol di bawah\n2️⃣ Chat langsung via WhatsApp\n3️⃣ Isi form di bagian Kontak\n\nTim kami akan dengan senang hati membantu Anda! 😊'
        : '🤔 Thank you for your question!\n\nFor more detailed information, please:\n\n1️⃣ Select a topic from buttons below\n2️⃣ Chat directly via WhatsApp\n3️⃣ Fill the Contact form\n\nOur team will be happy to help you! 😊';
    }
    
    simulateTyping(response, 1000);
  };

  // Format message text with markdown-like styling
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold text
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <span key={i} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    }).reduce((acc: React.ReactNode[], line, i) => {
      if (i > 0) acc.push(<br key={`br-${i}`} />);
      acc.push(line);
      return acc;
    }, []);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-linear-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 ${isOpen ? 'hidden' : ''}`}
        aria-label={language === 'id' ? 'Buka Chat' : 'Open Chat'}
      >
        <MessageCircle className="w-7 h-7" />
        {/* Notification dot with pulse */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-[10px] font-bold">1</span>
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-128 max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-linear-to-r from-primary-600 via-primary-700 to-primary-800 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Ganipedia Assistant</h3>
                <div className="flex items-center gap-1.5 text-xs text-primary-100">
                  <Sparkles className="w-3 h-3" />
                  <span>{language === 'id' ? 'AI-Powered • Online' : 'AI-Powered • Online'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label={language === 'id' ? 'Tutup Chat' : 'Close Chat'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-slate-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.isBot ? 'bg-linear-to-br from-primary-500 to-primary-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[80%] p-4 text-sm ${
                    message.isBot
                      ? 'bg-white text-slate-700 rounded-2xl rounded-bl-none shadow-md border border-slate-100'
                      : 'bg-linear-to-br from-primary-600 to-primary-700 text-white rounded-2xl rounded-br-none'
                  }`}
                >
                  <div className="leading-relaxed">{formatMessage(message.text)}</div>
                  <p className={`text-[10px] mt-2 ${message.isBot ? 'text-slate-400' : 'text-primary-200'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-linear-to-br from-primary-500 to-primary-600 text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-md border border-slate-100">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce animation-delay-150"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce animation-delay-300"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {messages.length > 0 && messages[messages.length - 1].isBot && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    className="px-4 py-2 bg-white border border-primary-200 text-primary-600 rounded-full text-xs font-medium hover:bg-primary-50 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Bar */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-green-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Respon < 1 jam' : 'Response < 1 hour'}</span>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'id' ? 'Ketik pesan Anda...' : 'Type your message...'}
                className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-11 h-11 bg-linear-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-slate-300 disabled:to-slate-400 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg shadow-primary-500/20 disabled:shadow-none"
                aria-label={language === 'id' ? 'Kirim' : 'Send'}
              >
                {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
