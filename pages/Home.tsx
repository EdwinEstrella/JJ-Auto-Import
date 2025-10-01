import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { CircularTestimonials } from '../components/ui/circular-testimonials';
import { VEHICLES_DATA, TESTIMONIALS_DATA } from '../constants';

const Home: React.FC = () => {
    const featuredVehicles = VEHICLES_DATA.slice(0, 3);

    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] -mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1920&auto=format&fit=crop')"}}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">El Auto de Tus Sueños te Espera</h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl">Calidad, confianza y los mejores precios en vehículos importados.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link to="/pre-evaluation">
                            <Button variant="primary" size="lg">Aplica para Financiamiento</Button>
                        </Link>
                        {/* Note: Inventory page not created, linking to home for now */}
                        <Link to="/">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-dark">
                               Ver Inventario
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Vehicles Section */}
            <section>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold dark:text-white">Vehículos Destacados</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Una selección de nuestro mejor inventario, listos para encontrar un nuevo hogar.
                    </p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredVehicles.map((vehicle) => (
                        <Card key={vehicle.id} className="group overflow-hidden flex flex-col">
                           <div className="overflow-hidden">
                             <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
                           </div>
                            <CardHeader>
                                <CardTitle>{vehicle.name}</CardTitle>
                                <CardDescription>{vehicle.year} &bull; {vehicle.mileage.toLocaleString()} millas</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-end">
                                <p className="text-2xl font-bold text-brand-red mb-4">${vehicle.price.toLocaleString()}</p>
                                <Link to={`/vehicle/${vehicle.id}`}>
                                    <Button className="w-full">Ver Detalles</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

             {/* Testimonials Section */}
            <section className="flex flex-col items-center justify-center">
                 <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold dark:text-white">Lo que dicen nuestros clientes</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        La satisfacción de nuestros clientes es nuestra mayor prioridad.
                    </p>
                </div>
                <CircularTestimonials 
                    testimonials={TESTIMONIALS_DATA}
                    colors={{
                        arrowBackground: '#B91C1C', // brand-red
                        arrowHoverBackground: '#991B1B' // darker red
                    }}
                />
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-8 md:p-12 text-center">
                <h2 className="text-3xl font-extrabold dark:text-white">¿Listo para Empezar?</h2>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Tu próximo vehículo está a solo un clic de distancia. Explora nuestro inventario o contáctanos hoy mismo.
                </p>
                <div className="mt-8">
                     <Link to="/contact">
                        <Button size="lg">Contáctanos</Button>
                     </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
