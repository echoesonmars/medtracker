"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { X, Check } from "lucide-react"

const legacyProblems = [
  {
    title: "Пассивный мониторинг",
    description:
      "Оператор физически не может следить за 20 экранами одновременно.",
  },
  {
    title: "Реакция постфактум",
    description:
      "Запись просматривают только после инцидента, когда помогать уже поздно.",
  },
  {
    title: "Уязвимость",
    description:
      'Данные хранятся локально и часто "случайно" исчезают при спорных ситуациях.',
  },
]

const medtrackerSolutions = [
  {
    title: "Активная защита 24/7",
    description:
      "ИИ не устает и анализирует каждую секунду видео и звука.",
  },
  {
    title: "Мгновенное вмешательство",
    description:
      "Сигнал тревоги отправляется медсестре в момент начала падения или крика.",
  },
  {
    title: "Неподкупный контроль",
    description:
      "Гибридное облако гарантирует, что ни одна секунда доказательств не будет удалена.",
  },
]

export function TheShift() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.2} direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <TextAnimate
                as="h2"
                animation="blurInUp"
                by="word"
                delay={0.3}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "var(--color-dark-blue)" }}
              >
                От архива трагедий — к предотвращению смертей.
              </TextAnimate>
              <p className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
                <TextAnimate
                  as="span"
                  animation="blurInUp"
                  by="word"
                  delay={0.5}
                >
                  Традиционное видеонаблюдение (CCTV) бесполезно в критический
                  момент.
                </TextAnimate>
                <br />
                <TextAnimate
                  as="span"
                  animation="blurInUp"
                  by="word"
                  delay={0.7}
                >
                  Оно записывает, как пациент умирает.
                </TextAnimate>{" "}
                <TextAnimate
                  as="span"
                  animation="blurInUp"
                  by="word"
                  delay={0.9}
                  className="underline"
                  style={{ textDecorationColor: "var(--color-blue)" }}
                >
                  MedTracker дает шанс его спасти.
                </TextAnimate>
              </p>
            </div>
          </BlurFade>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Legacy CCTV - Problems */}
            <BlurFade delay={0.4} direction="left">
              <Card className="bg-white border-2 border-light-blue/30 hover:border-light-blue/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: "var(--color-light-blue)" }}
                    >
                      <X
                        className="h-5 w-5"
                        style={{ color: "var(--color-black)" }}
                      />
                    </div>
                    <span style={{ color: "var(--color-black)" }}>
                      Было (Legacy CCTV)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {legacyProblems.map((problem, index) => (
                    <BlurFade
                      key={index}
                      delay={0.5 + index * 0.1}
                      direction="up"
                    >
                      <div className="p-4 rounded-lg border border-black/10 bg-white">
                        <h4
                          className="font-semibold mb-2"
                          style={{ color: "var(--color-black)" }}
                        >
                          {problem.title}
                        </h4>
                        <p
                          className="text-sm"
                          style={{ color: "var(--color-black)", opacity: 0.8 }}
                        >
                          {problem.description}
                        </p>
                      </div>
                    </BlurFade>
                  ))}
                </CardContent>
              </Card>
            </BlurFade>

            {/* MedTracker AI - Solutions */}
            <BlurFade delay={0.6} direction="right">
              <Card
                className={cn(
                  "border-0 h-full shadow-md",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-3 hover:shadow-xl"
                )}
                style={{ backgroundColor: "var(--color-blue)" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: "var(--color-dark-blue)" }}
                    >
                      <Check
                        className="h-5 w-5"
                        style={{ color: "var(--color-white)" }}
                      />
                    </div>
                    <span style={{ color: "var(--color-white)" }}>
                      Стало (MedTracker AI)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {medtrackerSolutions.map((solution, index) => (
                    <BlurFade
                      key={index}
                      delay={0.7 + index * 0.1}
                      direction="up"
                    >
                      <div
                        className="p-4 rounded-lg border"
                        style={{
                          backgroundColor: "rgba(15, 40, 84, 0.4)",
                          borderColor: "var(--color-white)",
                        }}
                      >
                        <h4
                          className="font-semibold mb-2"
                          style={{ color: "var(--color-white)" }}
                        >
                          {solution.title}
                        </h4>
                        <p
                          className="text-sm"
                          style={{ color: "var(--color-white)", opacity: 0.95 }}
                        >
                          {solution.description}
                        </p>
                      </div>
                    </BlurFade>
                  ))}
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
