import { ArrowUpRight, Plus } from 'lucide-react'
import { useHomeContent } from '../context/HomeContext'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function FaqSection() {
  const { faq } = useHomeContent()

  return (
    <section className="px-5 py-10 md:px-0 md:py-14">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="m-0 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.1] font-normal tracking-[-0.02em] text-[#011D21]">
            {faq.title}
          </h2>

          <a
            href={faq.explore.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#102c30] no-underline md:text-base"
          >
            <span>{faq.explore.label}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <span className="ml-auto mt-2 block h-px w-[150px] bg-[#405a60]" />

        <div className="mt-8 max-w-[860px]">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-t border-[#4f666b] last:border-b"
              >
                <AccordionTrigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-[clamp(1rem,1.7vw,1.55rem)] leading-[1.28] font-medium tracking-[-0.01em] text-[#011D21] md:py-5">
                  <span>{item.question}</span>
                  <Plus
                    size={28}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#102c30] transition-transform duration-200 group-data-[state=open]:rotate-45"
                  />
                </AccordionTrigger>

                <AccordionContent className="pb-5 pr-0 text-[0.95rem] leading-[1.65] text-[#18373e] md:pr-14 md:text-[1rem]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
