import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const About: React.FC = () => {
  return (
    <div className="space-y-12">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
                Sobre <span className="text-brand-red">JJ Auto Import</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Más que un concesionario, somos tus socios en el camino.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                alt="Interior de oficina de JJ Auto Import"
                className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <Card>
                <CardHeader>
                    <CardTitle>Nuestra Historia</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 space-y-4">
                    <p>
                        Fundado en 2010, JJ Auto Import nació de la pasión por los automóviles y el deseo de ofrecer una experiencia de compra transparente y honesta. Lo que comenzó como un pequeño lote con un puñado de autos se ha convertido en uno de los concesionarios de importación más respetados de la región.
                    </p>
                    <p>
                        Nuestro fundador, Juan "JJ" Pérez, creía que todos merecen conducir un vehículo seguro y confiable sin tener que pasar por el estrés y la incertidumbre de los procesos de compra tradicionales. Esa filosofía sigue siendo el núcleo de todo lo que hacemos hoy.
                    </p>
                </CardContent>
            </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
             <Card className="order-2 md:order-1">
                <CardHeader>
                    <CardTitle>Misión y Visión</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 space-y-4">
                    <p><strong>Misión:</strong> Facilitar la adquisición de vehículos de alta calidad a través de un servicio al cliente excepcional, opciones de financiamiento flexibles y un compromiso inquebrantable con la integridad.</p>
                    <p><strong>Visión:</strong> Ser el concesionario líder en la región, reconocidos por nuestra innovación, la calidad de nuestro inventario y la lealtad de nuestros clientes, construyendo relaciones que duren por generaciones.</p>
                </CardContent>
            </Card>
            <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Equipo de JJ Auto Import"
                className="rounded-lg shadow-lg w-full h-full object-cover order-1 md:order-2"
            />
        </div>

    </div>
  );
};

export default About;