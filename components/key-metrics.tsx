"use client"

import { NumberTicker } from "@/components/ui/number-ticker"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { Highlighter } from "@/components/ui/highlighter"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Zap, Eye, Shield } from "lucide-react"

const metrics = [
  {
    icon: Zap,
    value: 3,
    unit: "секунд",
    label: "Время детекции падения или агрессии",
    description: "Быстрее, чем человек успеет моргнуть",
  },
  {
    icon: Eye,
    value: 100,
    unit: "%",
    label: "Контроль слепых зон",
    description: "Включая туалеты и душевые благодаря акустике",
  },
  {
    icon: Shield,
    value: 0,
    unit: "",
    label: "Шансов удалить запись",
    description: "Защита от саботажа персоналом",
  },
]

export function KeyMetrics() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Gradient transition from dark-blue to white */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-blue to-white pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <BlurFade
                  key={index}
                  delay={index * 0.2}
                  direction="up"
                  className="h-full"
                >
                  <Card className="bg-white border-2 border-light-blue/20 hover:border-blue/40 transition-colors h-full shadow-lg hover:shadow-xl">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div
                          className="p-3 rounded-full"
                          style={{ backgroundColor: "var(--color-light-blue)" }}
                        >
                          <Icon
                            className="h-6 w-6 sm:h-8 sm:w-8"
                            style={{ color: "var(--color-blue)" }}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <span
                          className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                          style={{ color: "var(--color-dark-blue)" }}
                        >
                          {metric.value === 0 ? (
                            <NumberTicker
                              value={0}
                              className=""
                              style={{ color: "var(--color-dark-blue)" }}
                            />
                          ) : metric.value === 100 ? (
                            <>
                              <NumberTicker
                                value={100}
                                className=""
                                style={{ color: "var(--color-dark-blue)" }}
                              />
                              <span>%</span>
                            </>
                          ) : (
                            <>
                              <span>&lt; </span>
                              <NumberTicker
                                value={metric.value}
                                className=""
                                style={{ color: "var(--color-dark-blue)" }}
                              />
                              <span> {metric.unit}</span>
                            </>
                          )}
                        </span>
                      </div>

                      <TextAnimate
                        as="h3"
                        animation="blurInUp"
                        by="word"
                        delay={0.3 + index * 0.1}
                        className="text-lg sm:text-xl font-semibold mb-2"
                        style={{ color: "var(--color-dark-blue)" }}
                      >
                        {metric.label}
                      </TextAnimate>

                      <p className="text-sm sm:text-base text-black/70 mt-2">
                        <Highlighter
                          color="#BDE8F5"
                          action="highlight"
                          strokeWidth={1.5}
                          padding={2}
                        >
                          {metric.description}
                        </Highlighter>
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
