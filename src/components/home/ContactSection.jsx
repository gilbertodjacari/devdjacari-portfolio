import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, title, value, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
    <div className="mt-1 flex-shrink-0 w-12 h-12 bg-gray-900/80 rounded-full flex items-center justify-center border border-gray-700 group-hover:bg-[#F55139]/20 group-hover:border-[#F55139] group-hover:shadow-[0_0_15px_rgba(245,81,57,0.5)] transition-all duration-300">
      <Icon className="w-6 h-6 text-[#F55139] group-hover:scale-110 transition-transform" />
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-gray-400 relative">
        {value}
        <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 accent-bg group-hover:w-full transition-all duration-300"></span>
      </p>
    </div>
  </a>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendEmail = () => {
    const { name, subject, message } = formData;
    const mailtoLink = `mailto:devdjacari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\n\nMensagem:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1.5 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto. Estou sempre disponível para novas oportunidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfoItem
              icon={Phone}
              title="WhatsApp"
              value="+351 932 477 636"
              href="https://wa.me/351932477636"
            />
            <ContactInfoItem
              icon={Mail}
              title="Email"
              value="devdjacari@gmail.com"
              href="mailto:devdjacari@gmail.com"
            />
            <ContactInfoItem
              icon={MapPin}
              title="Localização"
              value="Lisboa, Portugal"
              href="https://www.google.com/maps/place/Lisbon"
            />
            

          </div>

          {/* Contact Form */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-gray-900/50 border border-gray-800">
            <div className="absolute -inset-px accent-gradient rounded-3xl blur-xl opacity-30 -z-10"></div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer h-14 pt-4 bg-transparent border-2 border-gray-700 text-white focus:border-[#F55139] rounded-lg placeholder-transparent w-full"
                    placeholder=""
                  />
                  <Label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#F55139] peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Nome Completo *
                  </Label>
                </div>
                <div className="relative group">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer h-14 pt-4 bg-transparent border-2 border-gray-700 text-white focus:border-[#F55139] rounded-lg placeholder-transparent w-full"
                    placeholder=""
                  />
                  <Label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#F55139] peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Email
                  </Label>
                </div>
              </div>
              
              <div className="relative group">
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer h-14 pt-4 bg-transparent border-2 border-gray-700 text-white focus:border-[#F55139] rounded-lg placeholder-transparent w-full"
                  placeholder=""
                />
                <Label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#F55139] peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Assunto *
                </Label>
              </div>
              <div className="relative group">
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer pt-6 bg-transparent border-2 border-gray-700 text-white focus:border-[#F55139] rounded-lg resize-none placeholder-transparent w-full"
                  placeholder=""
                />
                <Label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#F55139] peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Mensagem *
                </Label>
              </div>
              
              <Button 
                type="button" 
                onClick={handleSendEmail}
                size="lg" 
                className="w-full accent-gradient hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Enviar por Email</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}