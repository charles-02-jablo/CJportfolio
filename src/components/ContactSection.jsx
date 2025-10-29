import {
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate?  
          I’m always open to discussing new opportunities and creative ideas.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="font-medium">Email</p>
            <a
              href="mailto:charlesjablo02@gmail.com"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              charlesjablo02@gmail.com
            </a>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="font-medium">Phone</p>
            <a
              href="tel:+63992404223"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              +63 992 404 223
            </a>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground text-sm">Tagbac, Jaro, Iloilo City</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
          <a
            href="https://www.facebook.com/charles.jab.1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Facebook className="h-6 w-6 text-primary" />
          </a>
          <a
            href="https://www.instagram.com/charlessssjb/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Instagram className="h-6 w-6 text-primary" />
          </a>
          <a
            href="https://github.com/charles-02-jablo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Github className="h-6 w-6 text-primary" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden resize-none"
                placeholder="Hello, I’d like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
