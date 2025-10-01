import { FAQItem, Vehicle, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/pre-evaluation', label: 'Pre-evaluación' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contacto' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Qué tipo de vehículos importan?',
    answer: 'Nos especializamos en la importación de una amplia gama de vehículos, incluyendo sedanes, SUVs, y camionetas de marcas reconocidas a nivel mundial. Todos nuestros vehículos pasan por una rigurosa inspección de calidad.',
  },
  {
    question: '¿Ofrecen opciones de financiamiento?',
    answer: 'Sí, ofrecemos planes de financiamiento flexibles adaptados a las necesidades de nuestros clientes. Puedes completar nuestro formulario de pre-evaluación en línea para comenzar el proceso.',
  },
  {
    question: '¿Puedo entregar mi vehículo actual como parte del pago?',
    answer: '¡Por supuesto! Aceptamos trade-ins. Evaluaremos tu vehículo actual y te ofreceremos un valor justo que podrás usar como crédito para la compra de tu nuevo auto con nosotros.',
  },
  {
    question: '¿Qué garantía tienen los vehículos?',
    answer: 'Todos nuestros vehículos vienen con una garantía limitada que cubre el motor y la transmisión por un período determinado. Ofrecemos también opciones de garantía extendida para una mayor tranquilidad.',
  },
  {
    question: '¿Dónde están ubicados y cuál es su horario?',
    answer: 'Nuestra oficina principal se encuentra en 123 Auto Street, Car City. Estamos abiertos de Lunes a Sábado de 9:00 AM a 6:00 PM. ¡Te esperamos!',
  },
];

export const VEHICLES_DATA: Vehicle[] = [
    {
        id: 'toyota-camry-2023',
        name: 'Toyota Camry XSE',
        brand: 'Toyota',
        year: 2023,
        price: 35000,
        mileage: 15000,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        imageUrl: 'https://images.unsplash.com/photo-1617469723030-f8634280c433?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1617469723030-f8634280c433?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617469722839-9357410252ae?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617469722949-0a82ce13cbbe?q=80&w=800&auto=format&fit=crop',
        ],
        description: 'El Toyota Camry 2023 combina un diseño elegante con un rendimiento excepcional. Este sedán es perfecto para la familia y los viajes largos, ofreciendo comodidad, seguridad y tecnología de punta.',
        features: ['Sistema de audio premium JBL', 'Techo solar panorámico', 'Toyota Safety Sense 2.5+', 'Asientos de cuero con calefacción', 'Pantalla táctil de 9 pulgadas'],
    },
    {
        id: 'honda-crv-2022',
        name: 'Honda CR-V EX-L',
        brand: 'Honda',
        year: 2022,
        price: 32000,
        mileage: 22000,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        imageUrl: 'https://images.unsplash.com/photo-1632883689404-03a1d64396b2?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1632883689404-03a1d64396b2?q=80&w=800&auto=format&fit=crop',
        ],
        description: 'La Honda CR-V 2022 es una SUV versátil y confiable, ideal para la aventura y el día a día. Con un interior espacioso y un manejo suave, es la compañera perfecta para cualquier camino.',
        features: ['Tracción en las cuatro ruedas (AWD)', 'Apple CarPlay y Android Auto', 'Asientos de cuero', 'Puerta trasera eléctrica', 'Sistema de monitoreo de punto ciego'],
    },
    {
        id: 'ford-mustang-2024',
        name: 'Ford Mustang GT',
        brand: 'Ford',
        year: 2024,
        price: 45000,
        mileage: 5000,
        fuelType: 'Gasoline',
        transmission: 'Manual',
        imageUrl: 'https://images.unsplash.com/photo-1593699893575-1a3b15f3a099?q=80&w=800&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1593699893575-1a3b15f3a099?q=80&w=800&auto=format&fit=crop',
        ],
        description: 'Experimenta la potencia y el estilo icónico del Ford Mustang GT 2024. Con su motor V8 y un diseño agresivo, este muscle car no pasa desapercibido y ofrece una experiencia de conducción emocionante.',
        features: ['Motor V8 de 5.0L', 'Panel de instrumentos digital de 12 pulgadas', 'Sistema de escape de válvula activa', 'Frenos Brembo de alto rendimiento', 'Modos de conducción seleccionables'],
    },
];


export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "El proceso de compra en JJ Auto Import fue increíblemente fácil y transparente. Encontré el auto de mis sueños a un precio justo. ¡Totalmente recomendados!",
    name: "Ana García",
    designation: "Cliente Satisfecha",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
  },
  {
    quote:
      "La atención al cliente es de primera. El equipo me guió en cada paso, desde la pre-evaluación hasta la entrega. Muy profesionales y amables.",
    name: "Carlos Rodríguez",
    designation: "Comprador de un SUV",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    quote:
      "Estaba buscando un modelo específico que no encontraba en otros lugares. JJ Auto Import no solo lo consiguió, sino que superó mis expectativas en calidad y servicio.",
    name: "Laura Martínez",
    designation: "Propietaria de un auto de lujo",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
  },
];
