"use client";
import { useForm, ValidationError } from "@formspree/react";
import { MapPin, Phone, Mail, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkvgqkz"); // Replace with your Formspree form ID

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-400" />,
      title: "Location",
      details: "Jabalpur, Madhya Pradesh",
    },
    {
      icon: <Phone className="h-6 w-6 text-pink-400" />,
      title: "Phone",
      details: "+91 9174729184",
      link: "tel:+919174729184",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      title: "Email",
      details: "gyaneshvishwakarma917@gmail.com",
      link: "mailto:gyaneshvishwakarma917@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/Gyaneshvishwakarma", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/gyanesh-vishwakarma-01a159245/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://x.com/Gyaneshz", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-500/20 rounded-lg text-green-700 dark:text-green-300">
                Message sent successfully! I will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-3 rounded-lg transition-all flex items-center justify-center"
                >
                  {state.submitting ? "Sending..." : <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-8 animate-fade-in [animation-delay:200ms]">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 glass rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-all">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 animate-fade-in [animation-delay:400ms]">
              <h3 className="text-2xl font-semibold mb-6">Connect with Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-lg hover:bg-primary/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
