import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface AnalysisCardProps {
  title: string
  slug: string
  description?: string
  className?: string
}

export function AnalysisCard({ title, slug, description, className }: AnalysisCardProps) {
  return (
    <Link href={`/analysis/${slug}`} className="block h-full group">
      <Card
        className={cn(
          "h-full transition-all duration-300 ease-out",
          "hover:-translate-y-2 hover:shadow-xl",
          "border border-blue/20 shadow-lg",
          "bg-white rounded-2xl",
          "cursor-pointer overflow-hidden",
          "flex flex-col",
          className
        )}
      >
        <CardHeader className="pb-4 flex-1">
          <CardTitle
            className={cn(
              "text-xl sm:text-2xl font-bold mb-3",
              "group-hover:text-blue transition-colors",
              "leading-tight"
            )}
            style={{ color: "var(--color-dark-blue)" }}
          >
            {title}
          </CardTitle>
          {description && (
            <CardDescription
              className="text-sm sm:text-base leading-relaxed mb-4"
              style={{ color: "var(--color-black)", opacity: 0.7 }}
            >
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="pt-0 pb-6">
          <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-blue)" }}
            >
              Читать анализ
            </span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ color: "var(--color-blue)" }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
