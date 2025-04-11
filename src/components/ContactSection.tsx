"use client"

import * as React from "react"
import { useState } from "react"
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Check,
  AlertCircle,
  User,
  AtSign,
  MessageSquare,
  FileText
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import CalendlyEmbed from "./CalendlyEmbed"

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {}

function ContactForm({ className, ...props }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      // In a real implementation, you would send the form data to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Form submitted:", formState)
      setSubmitStatus("success")
      
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)} {...props}>
      <div className="space-y-4">
        <div className="relative">
          <Label htmlFor="name" className="text-gray-700 font-medium mb-1 block">Your Name</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <Input 
              id="name"
              name="name"
              placeholder="John Doe" 
              value={formState.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
              className="bg-white/90 border-gray-300 pl-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="relative">
          <Label htmlFor="email" className="text-gray-700 font-medium mb-1 block">Your Email</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <AtSign className="h-5 w-5" />
            </div>
            <Input 
              id="email"
              name="email"
              type="email" 
              placeholder="john.doe@example.com" 
              value={formState.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
              className="bg-white/90 border-gray-300 pl-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="relative">
          <Label htmlFor="subject" className="text-gray-700 font-medium mb-1 block">Subject</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <FileText className="h-5 w-5" />
            </div>
            <Input 
              id="subject"
              name="subject"
              placeholder="What's this about?" 
              value={formState.subject}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
              className="bg-white/90 border-gray-300 pl-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="relative">
          <Label htmlFor="message" className="text-gray-700 font-medium mb-1 block">Your Message</Label>
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-500">
              <MessageSquare className="h-5 w-5" />
            </div>
            <Textarea 
              id="message"
              name="message"
              placeholder="Tell me about your project or inquiry..." 
              className="min-h-[150px] bg-white/90 border-gray-300 pl-10 pt-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              value={formState.message}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
      
      {submitStatus === "success" && (
        <div className="rounded-md bg-green-100 p-4 text-sm text-green-800 flex items-center">
          <Check className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>Your message has been sent successfully! I'll get back to you soon.</span>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="rounded-md bg-red-100 p-4 text-sm text-red-800 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>There was an error sending your message. Please try again.</span>
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 transform hover:translate-y-[-2px]" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </span>
        )}
      </Button>
    </form>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  label: string
  href?: string
}

function ContactInfo({ icon, label, href }: ContactInfoProps) {
  const content = (
    <div className="flex items-center gap-3 group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
        {icon}
      </div>
      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-white/50">
      <div className="absolute inset-0 bg-[#e7e3f1]/30"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">Get In Touch</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Let's Connect
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <Card className="overflow-hidden border border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-[#e7e3f1]/50 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<Mail className="h-5 w-5" />} 
                    label="chiara.dasilvasantos@gmail.com"
                    href="mailto:chiara.dasilvasantos@gmail.com"
                  />
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5" />} 
                    label="(201) 719-0215"
                    href="tel:2017190215"
                  />
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5" />} 
                    label="Kearny, NJ" 
                  />
                  <ContactInfo 
                    icon={<Github className="h-5 w-5" />} 
                    label="github.com/cdasilvasantos"
                    href="https://github.com/cdasilvasantos"
                  />
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="mb-6 text-lg font-semibold text-gray-800">Available For</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Web Development
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Frontend Design
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Information Systems
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      Freelance Projects
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="overflow-hidden border border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-[#e7e3f1]/50 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-blue-600" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          {/* Calendly Scheduling Section */}
          <div className="mt-16">
            <Card className="overflow-hidden border border-gray-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-[#e7e3f1]/50 pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-blue-600">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Schedule a Meeting
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <p className="text-gray-600 mb-6">
                    Prefer to schedule a call? Use my Calendly to find a time that works for both of us.
                  </p>
                  <div className="flex justify-center">
                    <CalendlyEmbed 
                      url="https://calendly.com/chiara-dasilvasantos/30min" 
                      styles={{ 
                        height: '650px',
                        width: '100%', 
                        maxWidth: '800px',
                        margin: '0 auto',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
