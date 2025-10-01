import React, { useState } from 'react';
import type { FAQItem } from '../../types';
import { ChevronDownIcon } from '../Icons';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors duration-300">
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center py-5 px-2 text-left text-lg font-medium text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDownIcon
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-2 pb-5 text-gray-600 dark:text-gray-300">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;