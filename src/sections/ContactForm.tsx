import { useState } from 'react';
import { Phone, Clock, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', phone: '', comment: '' });
    }
  };

  return (
    <section id="contact" className="bg-gray-light py-20 lg:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10">
          {/* Form Column */}
          <div
            className={`transition-all duration-600 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-dark text-3xl lg:text-[36px] font-bold mb-4">
              Оставьте заявку — перезвоним за 15 минут
            </h2>
            <p className="text-dark/80 text-base mb-8">
              Или напишите в Telegram{' '}
              <a
                href="https://t.me/zakleyppf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark font-bold hover:underline"
              >
                @zakleyppf
              </a>{' '}
              — пришлём расчёт и карту зон риска
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <p className="text-green-700 font-semibold text-lg">Спасибо за заявку!</p>
                <p className="text-green-600 text-sm mt-2">Мы перезвоним вам в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Комментарий (необязательно)"
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  rows={3}
                  className="w-full bg-dark-card border border-dark-border text-white placeholder-gray-medium rounded-xl px-5 py-4 focus:border-yellow focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow text-dark font-bold text-base px-9 py-4 rounded-xl hover:scale-[1.02] hover:shadow-glow active:scale-[0.98] transition-all duration-200"
                >
                  Получить расчёт и подарок
                </button>
                <p className="text-gray-medium text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <span className="text-dark font-semibold hover:underline cursor-pointer">
                    Политикой конфиденциальности
                  </span>
                </p>
              </form>
            )}
          </div>

          {/* Map & Contacts Column */}
          <div
            className={`transition-all duration-600 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-2xl overflow-hidden mb-6 h-[320px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.641521%2C55.722821&z=16&pt=37.641521%2C55.722821%2Cpm2ywl"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Заклей Пленкой на карте"
                className="grayscale-[30%]"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="space-y-5">
                <a href="tel:+79876226070" className="flex items-center gap-4 group">
                  <Phone size={22} className="text-yellow" />
                  <span className="text-dark font-bold text-lg group-hover:text-yellow transition-colors">
                    +7 (987) 622-60-70
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <Clock size={22} className="text-yellow" />
                  <span className="text-dark text-base">пн–сб, 10:00–20:00</span>
                </div>
                <a
                  href="https://t.me/zakleyppf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <Send size={22} className="text-yellow" />
                  <span className="text-dark font-bold group-hover:text-yellow transition-colors">
                    @zakleyppf
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
