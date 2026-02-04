import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarkdownContent } from "@/components/markdown-content"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import { cn } from "@/lib/utils"

interface AnalysisPageProps {
  params: Promise<{ slug: string }>
}

// Список доступных анализов
const availableAnalyses = ["medtracker", "qaztracker"]

export async function generateStaticParams() {
  return availableAnalyses.map((slug) => ({
    slug,
  }))
}

async function getAnalysisContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "markdowns", `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    return fileContents
  } catch (error) {
    return null
  }
}

export default async function AnalysisDetailPage({ params }: AnalysisPageProps) {
  const { slug } = await params

  if (!availableAnalyses.includes(slug)) {
    notFound()
  }

  const content = await getAnalysisContent(slug)

  if (!content) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-20 md:pt-24">
        {/* Back Button */}
        <section className="bg-white py-4 sm:py-6 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/analysis">
              <Button
                variant="ghost"
                className={cn(
                  "gap-2 hover:bg-light-blue/20",
                  "text-sm sm:text-base"
                )}
                style={{ color: "var(--color-blue)" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Назад к списку анализов
              </Button>
            </Link>
          </div>
        </section>

        {/* Markdown Content */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <MarkdownContent content={content} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
