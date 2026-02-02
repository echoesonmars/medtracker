"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navigationItems = [
  { name: "Технология", href: "#technology" },
  { name: "Решения", href: "#solutions" },
  { name: "Безопасность данных", href: "#security" },
  { name: "О нас", href: "#about" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7244/ingest/f4743636-4c03-447a-aab4-0a6e91d9cb63',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'header.tsx:25',message:'Header mounted',data:{mobileMenuOpen,scrolled},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  }, [mobileMenuOpen, scrolled]);
  // #endregion

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark-blue/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-2xl md:text-3xl font-sen font-bold text-white"
              style={{ fontFamily: "var(--font-sen)" }}
            >
              MedTracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="bg-blue hover:bg-blue/90 text-white border-0"
            >
              <Link href="#demo">Демо</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={(open) => {
            // #region agent log
            fetch('http://127.0.0.1:7244/ingest/f4743636-4c03-447a-aab4-0a6e91d9cb63',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'header.tsx:78',message:'Sheet open state changed',data:{open,previousState:mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
            // #endregion
            setMobileMenuOpen(open)
          }}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-dark-blue/95 backdrop-blur-xl border-light-blue/20 p-0 [&>button]:hidden"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Мобильное меню</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-light-blue/20">
                  <Link
                    href="/"
                    onClick={() => {
                      // #region agent log
                      fetch('http://127.0.0.1:7244/ingest/f4743636-4c03-447a-aab4-0a6e91d9cb63',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'header.tsx:98',message:'Logo clicked, closing menu',data:{mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
                      // #endregion
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center"
                  >
                    <span
                      className="text-2xl font-sen font-bold text-white"
                      style={{ fontFamily: "var(--font-sen)" }}
                    >
                      MedTracker
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      // #region agent log
                      fetch('http://127.0.0.1:7244/ingest/f4743636-4c03-447a-aab4-0a6e91d9cb63',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'header.tsx:111',message:'Close button clicked',data:{mobileMenuOpen},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
                      // #endregion
                      setMobileMenuOpen(false)
                    }}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Закрыть меню</span>
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col gap-2 p-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg text-white/90 hover:text-white hover:bg-white/5 transition-colors px-4 py-3 rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Demo Button at Bottom */}
                <div className="p-6 border-t border-light-blue/20">
                  <Button
                    asChild
                    className="bg-blue hover:bg-blue/90 text-white border-0 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="#demo">Демо</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
