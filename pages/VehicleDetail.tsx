import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { VEHICLES_DATA } from '../constants';
import Button from '../components/ui/Button';

const VehicleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const vehicle = VEHICLES_DATA.find(v => v.id === id);

    if (!vehicle) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold dark:text-white">Vehículo no encontrado</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Lo sentimos, no pudimos encontrar el vehículo que buscas.</p>
                <Link to="/" className="mt-8 inline-block">
                    <Button>Volver al Inicio</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Gallery */}
                <div>
                    <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full rounded-lg shadow-lg object-cover aspect-video" />
                    {/* Simple thumbnail display */}
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {vehicle.images.slice(0, 4).map((img, index) => (
                             <img key={index} src={img} alt={`${vehicle.name} view ${index + 1}`} className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                        ))}
                    </div>
                </div>

                {/* Vehicle Info */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-white">{vehicle.name}</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">{vehicle.brand} {vehicle.year}</p>
                    
                    <p className="text-4xl font-bold text-brand-red my-6">${vehicle.price.toLocaleString()}</p>
                    
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                         <div className="grid grid-cols-2 gap-4">
                            <p><strong>Kilometraje:</strong> {vehicle.mileage.toLocaleString()} millas</p>
                            <p><strong>Transmisión:</strong> {vehicle.transmission}</p>
                            <p><strong>Combustible:</strong> {vehicle.fuelType}</p>
                         </div>
                         <p>{vehicle.description}</p>
                    </div>

                     <div className="mt-8">
                        <Link to="/pre-evaluation">
                             <Button size="lg" className="w-full">Aplicar para Financiamiento</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features */}
             <div className="bg-gray-100/50 dark:bg-gray-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Características Destacadas</h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {vehicle.features.map(feature => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VehicleDetail;
