import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-border">
      <AccordionTrigger className="text-center hover:text-primary transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-center">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

interface FAQSectionProps {
  items: { question: string; answer: string }[];
}

export const FAQSection = ({ items }: FAQSectionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, index) => (
        <FAQItem 
          key={index}
          value={`item-${index}`}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </Accordion>
  );
};
