import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  icon: string;
  variant: 'light' | 'green' | 'dark';
}

const ServiceCard = ({ title, icon, variant }: ServiceCardProps) => {
  const bgColor = {
    light: 'bg-[#F3F3F3]',
    green: 'bg-[#B9FF66]',
    dark: 'bg-[#1D1D1D] text-white'
  }[variant];

  return (
    <div className={`${bgColor} rounded-[45px] p-8 relative min-h-[250px] flex flex-col justify-between border border-black border-b-[5px]`}>
      <div className="space-y-4">
        <div className="bg-[#B9FF66] inline-block px-1 py-2 rounded-md">
          <h3 className="text-xl font-medium text-black">{title}</h3>
        </div>
        <div className="relative w-24 h-24">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Link 
        href="#" 
        className={`inline-flex items-center space-x-2 ${variant === 'dark' ? 'text-white' : 'text-black'}`}
      >
        <div className={`w-8 h-8 rounded-full ${variant === 'dark' ? 'bg-white' : 'bg-black'} flex items-center justify-center mr-2`}>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`${variant === 'dark' ? 'text-black' : 'text-white'} rotate-[-45deg]`}
          >
            <path 
              d="M1.16666 7H12.8333" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M7 1.16667L12.8333 7L7 12.8333" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>Learn more</span>
      </Link>
    </div>
  );
};

export function ServicesGrid() {
  const services = [
    {
      title: 'Search engine optimization',
      icon: '/icons/seo.svg',
      variant: 'light' as const
    },
    {
      title: 'Pay-per-click advertising',
      icon: '/icons/ppc.svg',
      variant: 'green' as const
    },
    {
      title: 'Social Media Marketing',
      icon: '/icons/social.svg',
      variant: 'dark' as const
    },
    {
      title: 'Email Marketing',
      icon: '/icons/email.svg',
      variant: 'light' as const
    },
    {
      title: 'Content Creation',
      icon: '/icons/content.svg',
      variant: 'green' as const
    },
    {
      title: 'Analytics and Tracking',
      icon: '/icons/analytics.svg',
      variant: 'dark' as const
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-20">
          <h2 className="text-2xl font-bold bg-[#B9FF66] px-1 py-2 rounded-md shrink-0">Services</h2>
          <p className="text-xl text-gray-700 max-w-[50%]">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 