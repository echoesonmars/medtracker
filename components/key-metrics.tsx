"use client"

import { NumberTicker } from "@/components/ui/number-ticker"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Custom SVG Icons
function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="var(--color-blue)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M32 12 L32 32 L48 40"
        stroke="var(--color-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="3"
        fill="var(--color-blue)"
      />
      <path
        d="M20 20 L28 28 M44 20 L36 28"
        stroke="var(--color-light-blue)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CoverageIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="var(--color-blue)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.2"
      />
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="var(--color-blue)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.4"
      />
      <circle
        cx="32"
        cy="32"
        r="12"
        stroke="var(--color-blue)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="4"
        fill="var(--color-blue)"
      />
      <path
        d="M16 16 L20 20 M48 16 L44 20 M16 48 L20 44 M48 48 L44 44"
        stroke="var(--color-light-blue)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SecurityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 8 L16 14 L16 28 C16 40 24 50 32 56 C40 50 48 40 48 28 L48 14 Z"
        stroke="var(--color-blue)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M32 8 L16 14 L16 28 C16 40 24 50 32 56"
        fill="var(--color-blue)"
        fillOpacity="0.1"
      />
      <path
        d="M28 32 L30 34 L36 28"
        stroke="var(--color-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        x="24"
        y="20"
        width="16"
        height="8"
        rx="1"
        stroke="var(--color-light-blue)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

const metrics = [
  {
    icon: SpeedIcon,
    value: 3,
    unit: "секунд",
    label: "Время детекции падения или агрессии",
    subtitle: "Мгновенная реакция системы",
    description: "Быстрее, чем человек успеет моргнуть. ИИ анализирует каждую секунду видео и звука в режиме реального времени.",
  },
  {
    icon: CoverageIcon,
    value: 100,
    unit: "%",
    label: "Контроль слепых зон",
    subtitle: "Полный охват территории",
    description: "Включая туалеты и душевые благодаря акустике. Ни один уголок не останется без внимания системы.",
  },
  {
    icon: SecurityIcon,
    value: 0,
    unit: "",
    label: "Шансов удалить запись",
    subtitle: "Абсолютная защита данных",
    description: "Защита от саботажа персоналом. Гибридное облако гарантирует сохранность всех доказательств.",
  },
]

export function KeyMetrics() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Smooth gradient transition from dark-blue to white with blur effects */}
      <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden">
        {/* Additional blur effects to match Hero section */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-light-blue/5 rounded-full blur-3xl opacity-30" />
        {/* Extended smooth gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-dark-blue) 0%, var(--color-dark-blue) 15%, rgba(15, 40, 84, 0.95) 25%, rgba(15, 40, 84, 0.85) 35%, rgba(15, 40, 84, 0.7) 45%, rgba(15, 40, 84, 0.5) 55%, rgba(15, 40, 84, 0.3) 65%, rgba(15, 40, 84, 0.15) 75%, rgba(15, 40, 84, 0.05) 85%, var(--color-white) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card
                  key={index}
                  className={cn(
                    "bg-white border-0 h-full shadow-md",
                    "rounded-3xl",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-3 hover:shadow-xl"
                  )}
                >
                  <CardContent className="p-8 sm:p-10 h-full flex flex-col text-center">
                    {/* Icon - fixed height */}
                    <div className="flex justify-center mb-6 h-20 sm:h-24 flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <Icon className="w-full h-full" />
                      </div>
                    </div>

                    {/* Number - fixed height */}
                    <div className="mb-6 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold block"
                        style={{ color: "var(--color-dark-blue)" }}
                      >
                        {metric.value === 0 ? (
                          <NumberTicker
                            value={0}
                            style={{ color: "var(--color-dark-blue)" }}
                          />
                        ) : metric.value === 100 ? (
                          <>
                            <NumberTicker
                              value={100}
                              style={{ color: "var(--color-dark-blue)" }}
                            />
                            %
                          </>
                        ) : (
                          <>
                            &lt;{" "}
                            <NumberTicker
                              value={metric.value}
                              style={{ color: "var(--color-dark-blue)" }}
                            />{" "}
                            {metric.unit}
                          </>
                        )}
                      </span>
                    </div>

                    {/* Label - fixed height */}
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-semibold mb-2",
                        "leading-tight min-h-[56px] sm:min-h-[64px]",
                        "flex items-center justify-center"
                      )}
                      style={{ color: "var(--color-dark-blue)" }}
                    >
                      {metric.label}
                    </h3>

                    {/* Subtitle - fixed height */}
                    <p
                      className={cn(
                        "text-sm sm:text-base font-medium mb-3",
                        "min-h-[40px] sm:min-h-[44px]",
                        "flex items-center justify-center"
                      )}
                      style={{ color: "var(--color-blue)", opacity: 0.9 }}
                    >
                      {metric.subtitle}
                    </p>

                    {/* Description - flexible to fill remaining space */}
                    <p
                      className={cn(
                        "text-sm sm:text-base leading-relaxed",
                        "flex-1 flex items-start justify-center pt-2"
                      )}
                      style={{ color: "var(--color-black)", opacity: 0.7 }}
                    >
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
