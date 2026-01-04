import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Привет! Я ваш AI-ассистент. Чем могу помочь?', isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages([...messages, { text: inputMessage, isUser: true }]);
    setInputMessage('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Спасибо за ваше сообщение! Это демо-версия чата. В полной версии здесь будет работать настоящая нейросеть.', 
        isUser: false 
      }]);
    }, 1000);
  };

  const features = [
    {
      icon: 'Brain',
      title: 'Интеллектуальный анализ',
      description: 'Глубокое понимание контекста и семантики текста с использованием передовых алгоритмов'
    },
    {
      icon: 'Zap',
      title: 'Мгновенная обработка',
      description: 'Обработка тысяч запросов в секунду с минимальной задержкой'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Полное шифрование и соблюдение стандартов безопасности'
    },
    {
      icon: 'Sparkles',
      title: 'Креативные решения',
      description: 'Генерация уникального контента и нестандартных решений'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Отправьте запрос',
      description: 'Сформулируйте вашу задачу в свободной форме'
    },
    {
      number: '02',
      title: 'Обработка данных',
      description: 'Нейросеть анализирует контекст и ищет оптимальное решение'
    },
    {
      number: '03',
      title: 'Получите результат',
      description: 'Получите точный и структурированный ответ за секунды'
    }
  ];

  const examples = [
    {
      title: 'Генерация текста',
      description: 'Создание статей, описаний продуктов, рекламных текстов',
      image: 'https://cdn.poehali.dev/projects/b63d5fac-33a9-44ca-bef7-dc31e753304e/files/ef5c2248-dad6-4d36-b7b2-596fda756fca.jpg'
    },
    {
      title: 'Анализ данных',
      description: 'Обработка больших массивов информации и выявление паттернов',
      image: 'https://cdn.poehali.dev/projects/b63d5fac-33a9-44ca-bef7-dc31e753304e/files/ef5c2248-dad6-4d36-b7b2-596fda756fca.jpg'
    },
    {
      title: 'Автоматизация задач',
      description: 'Выполнение рутинных операций без участия человека',
      image: 'https://cdn.poehali.dev/projects/b63d5fac-33a9-44ca-bef7-dc31e753304e/files/ef5c2248-dad6-4d36-b7b2-596fda756fca.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Brain" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">NeuroAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Как работает</a>
              <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Примеры</a>
              <Button asChild>
                <a href="https://t.me/SmokiAIBot?start=6447002426" target="_blank" rel="noopener noreferrer">Начать</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Powered by AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Нейросеть нового поколения
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in-up max-w-3xl mx-auto">
            Решайте сложные задачи быстрее с помощью искусственного интеллекта. 
            Мощные алгоритмы, простой интерфейс, безграничные возможности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="text-lg px-8 group" asChild>
              <a href="https://t.me/SmokiAIBot?start=6447002426" target="_blank" rel="noopener noreferrer">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
          <div className="mt-20 relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.poehali.dev/projects/b63d5fac-33a9-44ca-bef7-dc31e753304e/files/ef5c2248-dad6-4d36-b7b2-596fda756fca.jpg"
              alt="AI Visualization"
              className="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Zap" size={14} className="mr-1" />
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что умеет наша нейросеть</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Передовые технологии машинного обучения для решения ваших задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Workflow" size={14} className="mr-1" />
              Процесс работы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Три простых шага до результата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-4xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Lightbulb" size={14} className="mr-1" />
              Примеры использования
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные кейсы применения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте, как другие используют нашу нейросеть
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <CardContent className="p-12 relative z-10 text-center">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 text-primary animate-float" />
              <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам пользователей, которые уже используют нашу нейросеть
              </p>
              <Button size="lg" className="text-lg px-10" asChild>
                <a href="https://t.me/SmokiAIBot?start=6447002426" target="_blank" rel="noopener noreferrer">
                  Начать использовать
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Brain" className="text-white" size={20} />
              </div>
              <span className="font-bold">NeuroAI</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 NeuroAI. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">Политика</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Условия</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <Icon name={isChatOpen ? 'X' : 'MessageCircle'} className="text-white" size={28} />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-background border-2 border-border rounded-2xl shadow-2xl flex flex-col z-50 animate-scale-in">
          <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Bot" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold">AI Ассистент</h3>
                <p className="text-xs text-muted-foreground">Всегда на связи</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.isUser 
                    ? 'bg-gradient-to-br from-primary to-secondary text-white' 
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Напишите сообщение..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="shrink-0">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;