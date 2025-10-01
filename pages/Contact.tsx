import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input, { TextArea } from '../components/ui/Input';
import Label from '../components/ui/Label';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
          Ponte en <span className="text-brand-red">Contacto</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje o visítanos.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
          {submitted ? (
            <div className="text-center flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4">¡Gracias por tu mensaje!</h3>
              <p className="text-gray-600 dark:text-gray-300">Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre Completo</Label>
                <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <TextArea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          )}
        </div>
        
        <div className="space-y-8">
            <h3 className="text-2xl font-bold dark:text-white">Nuestra Información</h3>
            <div className="space-y-6">
                <div className="flex items-start p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                    <MapPinIcon className="h-8 w-8 text-brand-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg">Dirección</h4>
                        <p className="text-gray-500 dark:text-gray-400">123 Auto Street, Car City, 12345</p>
                    </div>
                </div>
                 <div className="flex items-start p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                    <PhoneIcon className="h-8 w-8 text-brand-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg">Teléfono</h4>
                        <p className="text-gray-500 dark:text-gray-400">(123) 456-7890</p>
                    </div>
                </div>
                 <div className="flex items-start p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                    <MailIcon className="h-8 w-8 text-brand-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-lg">Correo Electrónico</h4>
                        <p className="text-gray-500 dark:text-gray-400">ventas@jjautoimport.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;