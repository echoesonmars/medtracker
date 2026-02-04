import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnalysisCard } from "@/components/analysis-card"
import { cn } from "@/lib/utils"

const analyses = [
  {
    slug: "medtracker",
    title: "Анализ конкурентов MedTracker",
    description: "Детальный анализ конкурентных решений в области мониторинга медицинских учреждений",
  },
  {
    slug: "qaztracker",
    title: "Анализ конкурентов QazTracker",
    description: "Исследование рынка систем отслеживания и аналитики в Казахстане",
  },
]

export default function AnalysisPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section
          className="relative bg-dark-blue text-white pt-32 md:pt-36 pb-8 sm:pb-12"
          style={{ backgroundColor: "var(--color-dark-blue)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "var(--font-sen)" }}
              >
                Анализы и исследования
              </h1>
            </div>
          </div>
        </section>

        {/* Analysis Cards Grid */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {analyses.map((analysis) => (
                  <AnalysisCard
                    key={analysis.slug}
                    slug={analysis.slug}
                    title={analysis.title}
                    description={analysis.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
