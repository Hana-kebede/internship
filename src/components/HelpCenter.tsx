import { useState } from "react";
import { MessageCircle, X, Send, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  content: string;
  sender: "user" | "admin";
  timestamp: Date;
  isRead: boolean;
}

const HelpCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can we help you today?",
      sender: "admin",
      timestamp: new Date(Date.now() - 3600000),
      isRead: true
    },
    {
      id: 2,
      content: "Hi, I have a question about your web development services.",
      sender: "user",
      timestamp: new Date(Date.now() - 3000000),
      isRead: true
    },
    {
      id: 3,
      content: "I'd be happy to help! What specific aspect of our web development services would you like to know more about?",
      sender: "admin",
      timestamp: new Date(Date.now() - 2400000),
      isRead: true
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: message,
        sender: "user",
        timestamp: new Date(),
        isRead: false
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate admin response
      setTimeout(() => {
        const adminResponse: Message = {
          id: messages.length + 2,
          content: "Thank you for your message! Our team will get back to you shortly.",
          sender: "admin",
          timestamp: new Date(),
          isRead: false
        };
        setMessages(prev => [...prev, adminResponse]);
      }, 1500);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const unreadCount = messages.filter(msg => !msg.isRead && msg.sender === "admin").length;

  return (
    <>
      {/* Floating Help Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl hero-glow z-50 animate-bounce"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground">
              {unreadCount}
            </Badge>
          )}
        </Button>
      )}

      {/* Help Center Window */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 w-80 h-96 shadow-2xl glass-card z-50 animate-scale-in ${isMinimized ? 'h-14' : 'h-96'} transition-all duration-300`}>
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Help Center
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-6 w-6"
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="flex flex-col h-full p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 resize-none h-10 min-h-0"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="h-10 px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Press Enter to send • We typically respond within 2 hours
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default HelpCenter;