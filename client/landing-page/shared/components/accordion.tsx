import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQDetails = [
  {
    id: 1,
    title:
      'What prior knowledge do I need to enrol in the cybersecurity program?',
    desc: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
    isOpen: false,
  },
  {
    id: 2,
    title: 'How long does the program take to complete?',
    desc: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Are there any hands-on projects included in the course?',
    desc: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
    isOpen: false,
  },
  {
    id: 4,
    title:
      'Will I have access to any career services or job placement assistance after completing the course?',
    desc: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
    isOpen: false,
  },
  {
    id: 5,
    title:
      'Can I access the course materials after completion for future reference?',
    desc: 'The cybersecurity program is an 8-week intensive course, designed to fit into a busy schedule while providing comprehensive learning.',
    isOpen: false,
  },
];

export function FAQAccordion() {
  return (
    <Accordion
      className='mx-auto w-full max-w-4xl space-y-3'
      type='multiple'
    >
      {FAQDetails.map(({ desc, id, title }) => (
        <AccordionItem
          className='border-collapse rounded-[10px] border-[#c6d3f0] bg-white'
          value={`item-${id}`}
        >
          <AccordionTrigger
            hasIcon
            className='px-5 text-start text-xl'
          >
            {title}
          </AccordionTrigger>
          <AccordionContent className='max-w-2xl pl-16'>
            {desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
