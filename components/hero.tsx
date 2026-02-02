"use client"

import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate"
import { BlurFade } from "@/components/ui/blur-fade"
import { Highlighter } from "@/components/ui/highlighter"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-blue overflow-hidden pt-20 md:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <BlurFade delay={0.2} direction="up">
            <h1
              className={cn(
                "text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-6",
                "text-white leading-tight"
              )}
              style={{ fontFamily: "var(--font-sen)" }}
            >
              <TextAnimate
                as="span"
                animation="blurInUp"
                by="word"
                delay={0.3}
                duration={0.5}
                className="block"
              >
                Видеокамеры больше не спасают.
              </TextAnimate>
              <span className="block mt-2">
                <Highlighter
                  color="#4785BF"
                  action="highlight"
                  strokeWidth={2}
                  padding={4}
                  animationDuration={800}
                  iterations={1}
                >
                  <TextAnimate
                    as="span"
                    animation="blurInUp"
                    by="word"
                    delay={0.6}
                    duration={0.5}
                    className="text-white"
                  >
                    MedTracker
                  </TextAnimate>
                </Highlighter>{" "}
                <TextAnimate
                  as="span"
                  animation="blurInUp"
                  by="word"
                  delay={0.8}
                  duration={0.5}
                  style={{ color: "var(--color-blue)" }}
                >
                  действует.
                </TextAnimate>
              </span>
            </h1>
          </BlurFade>

          {/* Subheading */}
          <BlurFade delay={0.8} direction="up">
            <h2 className="text-xl sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Превращаем пассивное наблюдение в активную защиту.
            </h2>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={1.0} direction="up">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Button
                asChild
                className={cn(
                  "bg-blue hover:bg-blue/90 text-white",
                  "px-4 py-2 sm:px-6 sm:py-3",
                  "text-sm sm:text-base",
                  "shadow-lg hover:shadow-xl transition-all",
                  "w-full sm:w-auto sm:flex-1"
                )}
              >
                <Link href="#contact">Обсудить внедрение</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn(
                  "border-2 border-white/30 bg-transparent hover:bg-white/10",
                  "text-white hover:text-white px-4 py-2 sm:px-6 sm:py-3",
                  "text-sm sm:text-base",
                  "shadow-lg hover:shadow-xl transition-all",
                  "w-full sm:w-auto sm:flex-1"
                )}
              >
                <Link href="#how-it-works">Как работает технология</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
