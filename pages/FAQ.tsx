import React from 'react';
import Accordion from '../components/ui/Accordion';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
                Preguntas <span className="text-brand-red">Frecuentes</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Aquí encontrarás respuestas a las dudas más comunes de nuestros clientes.
            </p>
        </div>
        <div className="bg-gray-100/50 dark:bg-gray-800/50 rounded-lg p-4 sm:p-8 transition-colors duration-300">
            <Accordion items={FAQ_DATA} />
        </div>
    </div>
  );
};

export default FAQ;