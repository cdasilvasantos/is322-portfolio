"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Code, ExternalLink, Github, Laptop, Mail } from "lucide-react";

interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
}

interface CreativeHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  actions: HeroAction[];
}

export function CreativeHero({
  badge,
  title,
  subtitle,
  actions,
}: CreativeHeroProps) {
  const fadeUpVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 30,
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e7e3f1]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#e7e3f1]" />
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text content - takes up more space (3/5) */}
            <div className="order-2 lg:order-1 lg:col-span-3">
              {badge && (
                <motion.div
                  custom={0}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6 inline-block"
                >
                  <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
                    {badge}
                  </span>
                </motion.div>
              )}

              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight text-gray-800 leading-tight">
                  {title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && ' '}
                      {i === 0 ? (
                        <span className="relative">
                          {word}
                          <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/50 -z-10 transform -rotate-1"></span>
                        </span>
                      ) : (
                        word
                      )}
                    </React.Fragment>
                  ))}
                </h1>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                  {subtitle}
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    variant={action.variant || "default"}
                    className={cn(
                      "text-base px-6 py-6",
                      action.variant === "outline"
                        ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    )}
                  >
                    <Link href={action.href}>
                      {action.label}
                      {action.label.includes("Projects") && (
                        <ArrowDown className="ml-2 h-4 w-4" />
                      )}
                      {action.label.includes("Contact") && (
                        <Mail className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </Button>
                ))}
              </motion.div>
              
              <motion.div
                custom={4}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mt-10 pt-10 border-t border-gray-200/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700 text-lg">Web & Information Systems @ NJIT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                      <Code className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700 text-lg">HTML, CSS, Java, Python, Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                      <Github className="h-5 w-5" />
                    </div>
                    <a href="https://github.com/cdasilvasantos" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 flex items-center text-lg">
                      github.com/cdasilvasantos
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Image content - takes up less space (2/5) */}
            <motion.div 
              className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main image container */}
                <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl">
                  <Image 
                    src="/profile-image.jpg" 
                    alt="Chiara daSilva Santos"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                  
                  {/* Overlay with info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="font-bold text-gray-800">Chiara daSilva Santos</h3>
                    <p className="text-sm text-gray-600">Web Developer & Information Systems Professional</p>
                  </div>
                </div>
                
                {/* Decorative elements - positioned outside the image container */}
                <div className="absolute -top-8 -left-8 w-16 h-16 rounded-lg bg-blue-300 rotate-12 shadow-md z-20"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-lg bg-purple-300 -rotate-12 shadow-md z-20"></div>
                
                {/* Floating badges - positioned outside with higher z-index */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-2 border-2 border-blue-100 z-30">
                  <div className="bg-blue-200 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    NJIT
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-2 border-2 border-purple-100 z-30">
                  <div className="bg-purple-200 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    2025
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gray-400 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
