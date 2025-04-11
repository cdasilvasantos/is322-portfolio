"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  logo?: {
    url: string;
    title: string;
  };
  navItems: NavItem[];
  ctaButton?: {
    text: string;
    url: string;
  };
  className?: string;
}

export function PortfolioNavBar({
  logo = {
    url: "/",
    title: "",
  },
  navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Projects", url: "/#projects" },
    { name: "Contact", url: "/#contact" },
  ],
  ctaButton = {
    text: "Contact Me",
    url: "/#contact",
  },
  className,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 py-3"
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with CD initials only */}
          <Link
            href={logo.url}
            className="flex items-center no-underline"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-400 text-white font-bold">
              CD
            </div>
            {logo.title && <span className="ml-2 text-xl font-bold text-gray-800">{logo.title}</span>}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white border-gray-200 text-gray-800">
                <SheetHeader>
                  <SheetTitle className="flex items-center text-gray-800">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm">
                      CD
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      className="text-gray-600 py-2 text-base font-medium hover:text-gray-800 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                      <Link href={ctaButton.url}>{ctaButton.text}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
