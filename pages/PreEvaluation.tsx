import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';

const PreEvaluation: React.FC = () => {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        employer: '',
        monthlyIncome: '',
        vehicleOfInterest: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormState(prevState => ({...prevState, [id]: value}));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Pre-evaluation data:', formState);
        setSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
                    Pre-evaluación para <span className="text-brand-red">Financiamiento</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Completa este formulario para dar el primer paso hacia tu nuevo vehículo. Es rápido, seguro y sin compromiso.
                </p>
            </div>
            
            <Card>
                {submitted ? (
                    <CardContent className="p-8 text-center">
                         <h3 className="text-2xl font-bold dark:text-white mb-4">¡Solicitud Enviada!</h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                            Hemos recibido tu información. Uno de nuestros especialistas en finanzas te contactará pronto para discutir los siguientes pasos.
                        </p>
                        <Button onClick={() => setSubmitted(false)} className="mt-8">Enviar otra solicitud</Button>
                    </CardContent>
                ) : (
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Información del Solicitante</CardTitle>
                        <CardDescription>Por favor, llena todos los campos con información precisa.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* Personal Information */}
                        <fieldset className="grid md:grid-cols-2 gap-6">
                            <legend className="text-xl font-semibold text-brand-red mb-4 col-span-full">Información Personal</legend>
                            <div>
                                <Label htmlFor="fullName">Nombre Completo</Label>
                                <Input id="fullName" value={formState.fullName} onChange={handleChange} required />
                            </div>
                            <div>
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input type="email" id="email" value={formState.email} onChange={handleChange} required />
                            </div>
                             <div>
                                <Label htmlFor="phone">Teléfono</Label>
                                <Input type="tel" id="phone" value={formState.phone} onChange={handleChange} required />
                            </div>
                        </fieldset>

                        {/* Employment Information */}
                        <fieldset className="grid md:grid-cols-2 gap-6">
                            <legend className="text-xl font-semibold text-brand-red mb-4 col-span-full">Información Laboral y Financiera</legend>
                             <div>
                                <Label htmlFor="employer">Empleador Actual</Label>
                                <Input id="employer" value={formState.employer} onChange={handleChange} required />
                            </div>
                             <div>
                                <Label htmlFor="monthlyIncome">Ingreso Mensual Bruto (USD)</Label>
                                <Input type="number" id="monthlyIncome" value={formState.monthlyIncome} onChange={handleChange} required placeholder="$" />
                            </div>
                        </fieldset>
                        
                        {/* Vehicle of Interest */}
                        <fieldset>
                             <legend className="text-xl font-semibold text-brand-red mb-4">Vehículo de Interés</legend>
                             <div>
                                <Label htmlFor="vehicleOfInterest">Marca y Modelo (Opcional)</Label>
                                <Input id="vehicleOfInterest" value={formState.vehicleOfInterest} onChange={handleChange} placeholder="Ej: Toyota Camry 2023"/>
                            </div>
                        </fieldset>

                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                             <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Al hacer clic en "Enviar Solicitud", usted acepta nuestros términos y condiciones y nos autoriza a verificar su información. Esto es una pre-evaluación y no una aprobación de crédito garantizada.</p>
                             <Button type="submit" className="w-full text-lg">Enviar Solicitud</Button>
                        </div>
                    </CardContent>
                </form>
                )}
            </Card>
        </div>
    );
};

export default PreEvaluation;