"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:font-semibold",
        "prose-h1:text-3xl sm:prose-h1:text-4xl lg:prose-h1:text-5xl",
        "prose-h2:text-2xl sm:prose-h2:text-3xl lg:prose-h2:text-4xl",
        "prose-h3:text-xl sm:prose-h3:text-2xl",
        "prose-p:text-base sm:prose-p:text-lg",
        "prose-a:font-medium prose-a:no-underline",
        "prose-strong:font-semibold",
        "prose-ul:list-disc prose-ol:list-decimal",
        "prose-li:my-2",
        "prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic",
        "prose-code:bg-light-blue prose-code:px-1 prose-code:py-0.5 prose-code:rounded",
        "prose-pre:bg-dark-blue prose-pre:text-white",
        "prose-table:w-full prose-table:border-collapse",
        "prose-th:border prose-th:border-blue prose-th:p-2 prose-th:bg-blue prose-th:text-white",
        "prose-td:border prose-td:border-blue prose-td:p-2",
        className
      )}
      style={{
        color: "var(--color-black)",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              {...props}
              style={{ color: "var(--color-dark-blue)" }}
              className="mb-4 mt-8 first:mt-0"
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              className={cn(
                "text-2xl sm:text-3xl lg:text-4xl font-bold",
                "mb-6 mt-12 first:mt-0",
                "pb-3 border-b-2",
                "relative"
              )}
              style={{
                color: "var(--color-dark-blue)",
                borderBottomColor: "var(--color-blue)",
              }}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              className={cn(
                "text-lg sm:text-xl lg:text-2xl font-semibold",
                "mb-4 mt-8",
                "pl-4 border-l-4",
                "relative"
              )}
              style={{
                color: "var(--color-blue)",
                borderLeftColor: "var(--color-blue)",
              }}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              {...props}
              style={{ color: "var(--color-black)", opacity: 0.9 }}
              className="mb-4 leading-relaxed"
            />
          ),
          a: ({ node, ...props }) => (
            <a
              {...props}
              style={{ color: "var(--color-blue)" }}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          strong: ({ node, ...props }) => (
            <strong
              {...props}
              style={{ color: "var(--color-dark-blue)" }}
            />
          ),
          code: ({ node, className, children, ...props }: any) => {
            // Используем node для определения типа кода
            const isInline = !className || !className.includes("language-")
            const codeContent = children || (node?.children?.[0]?.value || "")
            
            if (isInline) {
              return (
                <code
                  {...props}
                  style={{
                    backgroundColor: "var(--color-light-blue)",
                    color: "var(--color-dark-blue)",
                  }}
                  className="px-1 py-0.5 rounded text-sm"
                >
                  {codeContent}
                </code>
              )
            }
            return (
              <code
                {...props}
                style={{
                  backgroundColor: "var(--color-dark-blue)",
                  color: "var(--color-white)",
                }}
                className="block p-4 rounded-lg overflow-x-auto text-sm"
              >
                {codeContent}
              </code>
            )
          },
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              style={{
                borderLeftColor: "var(--color-blue)",
                color: "var(--color-black)",
                opacity: 0.8,
              }}
              className="border-l-4 pl-4 italic my-4"
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              {...props}
              style={{ color: "var(--color-black)", opacity: 0.9 }}
              className="list-disc pl-6 mb-4 space-y-2"
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              {...props}
              style={{ color: "var(--color-black)", opacity: 0.9 }}
              className="list-decimal pl-6 mb-4 space-y-2"
            />
          ),
          li: ({ node, ...props }) => (
            <li
              {...props}
              className="leading-relaxed"
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table
                {...props}
                className="w-full border-collapse"
                style={{ borderColor: "var(--color-blue)" }}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              {...props}
              style={{
                backgroundColor: "var(--color-blue)",
                color: "var(--color-white)",
                borderColor: "var(--color-blue)",
              }}
              className="border p-2 text-left font-semibold"
            />
          ),
          td: ({ node, ...props }) => (
            <td
              {...props}
              style={{
                borderColor: "var(--color-blue)",
                color: "var(--color-black)",
              }}
              className="border p-2"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
