import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { KeyMetrics } from "@/components/key-metrics"
import { TheShift } from "@/components/the-shift"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <KeyMetrics />
      <TheShift />
      <Footer />
    </main>
  )
}
