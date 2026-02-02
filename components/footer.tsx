"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const navigationItems = [
  { name: "Технология", href: "#technology" },
  { name: "Решения", href: "#solutions" },
  { name: "Безопасность данных", href: "#security" },
  { name: "О нас", href: "#about" },
]

const contactInfo = {
  email: "info@medtracker.ru",
  phone: "+7 (495) 123-45-67",
}

export function Footer() {
  return (
    <footer
      className="relative bg-dark-blue text-white"
      style={{ backgroundColor: "var(--color-dark-blue)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "var(--font-sen)" }}
              >
                MedTracker
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-white)", opacity: 0.8 }}
            >
              Превращаем пассивное наблюдение в активную защиту. ИИ-система
              мониторинга для медицинских учреждений.
            </p>
          </div>

          {/* Навигация */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              Навигация
            </h3>
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors",
                    "hover:text-white",
                    "text-white/80"
                  )}
                  style={{ color: "var(--color-white)", opacity: 0.8 }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              Контакты
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className={cn(
                  "text-sm transition-colors",
                  "hover:text-white",
                  "text-white/80"
                )}
                style={{ color: "var(--color-white)", opacity: 0.8 }}
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className={cn(
                  "text-sm transition-colors",
                  "hover:text-white",
                  "text-white/80"
                )}
                style={{ color: "var(--color-white)", opacity: 0.8 }}
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              Информация
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="#demo"
                className={cn(
                  "text-sm transition-colors",
                  "hover:text-white",
                  "text-white/80"
                )}
                style={{ color: "var(--color-white)", opacity: 0.8 }}
              >
                Демо
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  "text-sm transition-colors",
                  "hover:text-white",
                  "text-white/80"
                )}
                style={{ color: "var(--color-white)", opacity: 0.8 }}
              >
                Как работает технология
              </Link>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <Separator
          className="my-8"
          style={{ backgroundColor: "var(--color-light-blue)", opacity: 0.2 }}
        />

        {/* Копирайт */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: "var(--color-white)", opacity: 0.7 }}
          >
            © 2026 MedTracker. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link
              href="#privacy"
              className={cn(
                "text-sm transition-colors",
                "hover:text-white",
                "text-white/70"
              )}
              style={{ color: "var(--color-white)", opacity: 0.7 }}
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="#terms"
              className={cn(
                "text-sm transition-colors",
                "hover:text-white",
                "text-white/70"
              )}
              style={{ color: "var(--color-white)", opacity: 0.7 }}
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
