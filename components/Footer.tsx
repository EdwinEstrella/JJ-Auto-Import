import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">JJ Auto Import</h3>
                        <p className="text-gray-400">Tu socio de confianza en la importación de vehículos de calidad. Descubre la diferencia de comprar con expertos apasionados por los autos.</p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-brand-red transition-colors"><FacebookIcon /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-brand-red transition-colors"><InstagramIcon /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-brand-red transition-colors"><TwitterIcon /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Navegación</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link to={link.href} className="hover:text-brand-red transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                         <h3 className="text-xl font-bold text-white">Contacto</h3>
                         <ul className="space-y-3">
                             <li className="flex items-start">
                                 <MapPinIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                                 <span>123 Auto Street, Car City, 12345</span>
                             </li>
                             <li className="flex items-start">
                                 <PhoneIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                                 <span>(123) 456-7890</span>
                             </li>
                             <li className="flex items-start">
                                 <MailIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                                 <span>ventas@jjautoimport.com</span>
                             </li>
                         </ul>
                    </div>

                    {/* Newsletter (placeholder) */}
                     <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Boletín Informativo</h3>
                        <p className="text-gray-400">Suscríbete para recibir ofertas especiales y las últimas noticias sobre nuestro inventario.</p>
                        <form>
                            <div className="flex">
                                <input type="email" placeholder="Tu correo electrónico" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                                <button type="submit" className="bg-brand-red text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">OK</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} JJ Auto Import. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
