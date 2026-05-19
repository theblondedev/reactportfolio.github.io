import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs
      .sendForm(
        "service_8dxb1py",
        "template_8r9eprg",
        e.target,
        "wFOo4E9hYTabeS1Wx"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
  
          e.target.reset();
        },
        (error) => {
          console.error(error);
  
          toast({
            title: "Error",
            description: "Failed to send message.",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Got products that need uploading to your website, need help managing your Shopify store, or want a simple Shopify site set up? I can make the process easy, fast, and stress-free so your online store looks great and runs smoothly.
<br></br>
<br></br>
Have a project in mind and want to work with a junior developer who brings real-world business experience? I’m always excited to discuss new opportunities and collaborate on projects that make an impact.
<br></br>
<br></br>
Feel free to reach out—I’d love to hear from you!   </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>

                <div>
                   <div className="text-center md:text-left">

                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:sarshabryant@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                   sarshabryant@gmail.com
                  </a>
                </div>
              </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+64 38527958"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    043-852-7958
                  </a>
                </div>
              </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                <div className="text-center md:text-left">
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Brisbane, Australia
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/sarsha-p-ba2a15222/" target="_blank">
                  <Linkedin />
                </a>
                
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
           // onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form
  name="contact"
 
  onSubmit={handleSubmit}
  className="space-y-6"
>

<div>
<label htmlFor="name" className="block text-sm font-medium mb-2" >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'm interested in getting you in to do some junior work..."
                />
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
      </div>
    </section>
  );
};
