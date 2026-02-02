# Style Rules - MedTracker Project

Этот документ содержит правила и стандарты стилей для разработки проекта MedTracker. Все разработчики должны следовать этим правилам для обеспечения консистентности и качества кода.

## 1. Цветовая палитра

### Использование цветов

**ВАЖНО:** Использовать ТОЛЬКО цвета из CSS переменных. Запрещено использовать хардкод цветов в виде hex-кодов или других значений напрямую.

### Доступные цвета

В проекте определены следующие цвета через CSS переменные:

```css
--color-dark-blue: #0F2854
--color-blue: #4785BF
--color-light-blue: #BDE8F5
--color-black: #000000
--color-white: #FFFFFF
```

### Способы использования

#### Через CSS переменные

```css
.my-element {
  background-color: var(--color-blue);
  color: var(--color-white);
}
```

#### Через Tailwind классы

```tsx
<div className="bg-blue text-white">
<div className="bg-dark-blue text-light-blue">
<div className="bg-light-blue text-black">
```

#### В компонентах React

```tsx
// ✅ Правильно
<div style={{ backgroundColor: 'var(--color-blue)' }}>

// ❌ Неправильно
<div style={{ backgroundColor: '#4785BF' }}>
<div className="bg-[#4785BF]">
```

### Shadcn UI цвета

Для компонентов shadcn/ui используются семантические переменные (primary, secondary, accent и т.д.), которые определены в `globals.css`. Используйте их через Tailwind классы:

```tsx
<Button className="bg-primary text-primary-foreground">
<Card className="bg-card text-card-foreground">
```

## 2. Типографика

### Letter Spacing

**Глобальное правило:** `letter-spacing: -0.07em` применяется автоматически ко всем элементам через глобальный стиль в `globals.css`.

Не нужно добавлять `letter-spacing` вручную, если только не требуется переопределение для конкретного элемента.

```tsx
// ✅ Правильно - letter-spacing применяется автоматически
<h1>Заголовок</h1>

// ❌ Неправильно - дублирование
<h1 className="tracking-[-0.07em]">Заголовок</h1>
```

### Шрифты

#### Дефолтный шрифт: Geist

Используется для всего текста по умолчанию. Применяется автоматически через `body` в `globals.css`.

```tsx
// ✅ Правильно - шрифт применяется автоматически
<p>Текст</p>

// Если нужно явно указать
<p style={{ fontFamily: 'var(--font-geist)' }}>
```

#### Шрифт для логотипа: Sen

Используется ТОЛЬКО для логотипа и брендинга.

```tsx
// ✅ Правильно
<h1 className="font-sen">MedTracker</h1>

// Или через CSS переменную
<h1 style={{ fontFamily: 'var(--font-sen)' }}>MedTracker</h1>
```

## 3. Компонентный подход

### Общие правила

1. **Все UI элементы должны быть компонентами** - не создавайте разметку напрямую в страницах
2. **Используйте shadcn/ui компоненты** - они уже установлены и готовы к использованию
3. **Создавайте кастомные компоненты на основе shadcn** - расширяйте функциональность, не дублируйте код

### Использование shadcn/ui компонентов

#### Импорт компонентов

```tsx
// ✅ Правильно - используйте алиасы
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
```

#### Если компонента нет

Если нужного компонента shadcn/ui нет в проекте:

1. Установите его через CLI:

```bash
npx shadcn@latest add [component-name]
```

1. Используйте установленный компонент в коде

#### Создание кастомных компонентов

Кастомные компоненты должны:

1. Базироваться на shadcn компонентах
2. Находиться в `components/` (не в `components/ui/`)
3. Использовать утилиту `cn()` для объединения классов

```tsx
// components/medication-card.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MedicationCardProps {
  title: string
  className?: string
}

export function MedicationCard({ title, className }: MedicationCardProps) {
  return (
    <Card className={cn("bg-light-blue", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Контент */}
      </CardContent>
    </Card>
  )
}
```

### Структура компонентов

```text
components/
├── ui/              # shadcn/ui компоненты (не редактировать напрямую)
├── medication-card.tsx
├── header.tsx
└── ...
```

## 4. Адаптивный дизайн

### Mobile-First подход

Все стили должны разрабатываться с подходом mobile-first: сначала стили для мобильных устройств, затем расширение для больших экранов.

### Tailwind Breakpoints

Используйте следующие breakpoints:

- `sm`: 640px и выше
- `md`: 768px и выше
- `lg`: 1024px и выше
- `xl`: 1280px и выше
- `2xl`: 1536px и выше

### Примеры адаптивных классов

```tsx
// ✅ Правильно - mobile-first
<div className="
  p-4           // мобильные: padding 1rem
  md:p-6         // планшеты: padding 1.5rem
  lg:p-8         // десктоп: padding 2rem
">
  <h1 className="
    text-xl      // мобильные: размер текста
    md:text-2xl  // планшеты: больший размер
    lg:text-3xl  // десктоп: еще больший
  ">
    Заголовок
  </h1>
</div>

// ✅ Правильно - скрытие/показ элементов
<div className="hidden md:block">Видно только на планшетах и больше</div>
<div className="block md:hidden">Видно только на мобильных</div>

// ✅ Правильно - адаптивная сетка
<div className="
  grid grid-cols-1    // мобильные: 1 колонка
  md:grid-cols-2      // планшеты: 2 колонки
  lg:grid-cols-3      // десктоп: 3 колонки
">
  {/* Элементы */}
</div>
```

### Тестирование адаптивности

Все компоненты должны быть протестированы на следующих разрешениях:

- Мобильные: 375px, 414px
- Планшеты: 768px, 1024px
- Десктоп: 1280px, 1920px

## 5. Дополнительные правила

### Утилита cn()

Всегда используйте утилиту `cn()` из `@/lib/utils` для объединения классов. Она правильно обрабатывает условные классы и конфликты Tailwind.

```tsx
import { cn } from "@/lib/utils"

// ✅ Правильно
<div className={cn(
  "base-class",
  isActive && "active-class",
  className // для переопределения из пропсов
)}>

// ❌ Неправильно
<div className={`base-class ${isActive ? 'active-class' : ''} ${className}`}>
```

### Импорты через алиасы

Всегда используйте алиасы `@/` для импортов:

```tsx
// ✅ Правильно
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

// ❌ Неправильно
import { Button } from "../../components/ui/button"
import { cn } from "../lib/utils"
```

### Организация кода

1. **Один компонент = один файл**
2. **Именование файлов:** kebab-case для файлов, PascalCase для компонентов
3. **Экспорт:** именованный экспорт для компонентов

```tsx
// ✅ Правильно
// components/medication-list.tsx
export function MedicationList() {
  // ...
}

// ❌ Неправильно
// components/MedicationList.tsx
export default function MedicationList() {
  // ...
}
```

### Комментарии в коде

Добавляйте комментарии для сложной логики, но избегайте очевидных комментариев:

```tsx
// ✅ Правильно
// Фильтруем лекарства по дате истечения срока годности
const expiredMedications = medications.filter(med => 
  new Date(med.expiryDate) < new Date()
)

// ❌ Неправильно
// Создаем переменную для хранения лекарств
const medications = []
```

## 6. Чеклист перед коммитом

Перед коммитом убедитесь, что:

- [ ] Используются только цвета из CSS переменных
- [ ] Не добавлен лишний `letter-spacing` (он глобальный)
- [ ] Все UI элементы обернуты в компоненты
- [ ] Используются shadcn/ui компоненты где возможно
- [ ] Адаптивность протестирована на разных разрешениях
- [ ] Используется `cn()` для объединения классов
- [ ] Импорты через алиасы `@/`
- [ ] Код следует структуре проекта

## 7. Полезные ссылки

- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Последнее обновление:** 2026-02-02
