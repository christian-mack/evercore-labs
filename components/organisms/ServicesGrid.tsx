import Image from 'next/image';
import Link from 'next/link';
import seo from '@/public/icons/seo.svg';
import ppc from '@/public/icons/ppc.svg';
import social from '@/public/icons/social-media-marketing.svg';
import email from '@/public/icons/email-marketing.svg';
import content from '@/public/icons/content-creation.svg';
import analytics from '@/public/icons/analytics.svg';

interface ServiceCardProps {
  title: string;
  icon: string;
  variant: 'light' | 'green' | 'dark';
  styleOverrides?: {
    titleBg?: 'green' | 'white';
    arrowColor?: 'white' | 'green';
  };
}

const ServiceCard = ({ title, icon, variant, styleOverrides = {} }: ServiceCardProps) => {
  const bgColor = {
    light: 'bg-[#F3F3F3]',
    green: 'bg-[#B9FF66]',
    dark: 'bg-[#1D1D1D] text-white'
  }[variant];

  const titleBgColor = styleOverrides.titleBg === 'white' ? 'bg-white' : 'bg-[#B9FF66]';
  const arrowColor = styleOverrides.arrowColor === 'green' ? 'text-[#B9FF66]' : (variant === 'dark' ? 'text-black' : 'text-white');

  return (
    <div className={`${bgColor} rounded-[45px] p-8 relative min-h-[250px] grid grid-cols-2 gap-4 border border-black border-b-[5px]`}>
      <div className="flex flex-col justify-between">
        <div className="inline-flex">
          <h3 className={`text-xl font-medium text-black ${titleBgColor} px-4 py-2 rounded-md whitespace-nowrap`}>{title}</h3>
        </div>
        <Link 
          href="/services" 
          className={`inline-flex items-center space-x-2 ${variant === 'dark' ? 'text-white' : 'text-black'}`}
        >
          <div className={`w-8 h-8 rounded-full ${variant === 'dark' ? 'bg-white' : 'bg-black'} flex items-center justify-center mr-2`}>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`${arrowColor} rotate-[-45deg]`}
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
      <div className="relative h-full w-full">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export function ServicesGrid() {
  const services = [
    {
      title: 'Search engine optimization',
      icon: seo,
      variant: 'light' as const,
      styleOverrides: {
        arrowColor: 'green' as const
      }
    },
    {
      title: 'Pay-per-click advertising',
      icon: ppc,
      variant: 'green' as const,
      styleOverrides: {
        titleBg: 'white' as const,
        arrowColor: 'green' as const
      }
    },
    {
      title: 'Social Media Marketing',
      icon: social,
      variant: 'dark' as const,
      styleOverrides: {
        titleBg: 'white' as const
      }
    },
    {
      title: 'Email Marketing',
      icon: email,
      variant: 'light' as const,
      styleOverrides: {
        titleBg: 'green' as const,
        arrowColor: 'green' as const
      }
    },
    {
      title: 'Content Creation',
      icon: content,
      variant: 'green' as const,
      styleOverrides: {
        titleBg: 'white' as const,
        arrowColor: 'green' as const
      }
    },
    {
      title: 'Analytics and Tracking',
      icon: analytics,
      variant: 'dark' as const,
      styleOverrides: {
        titleBg: 'green' as const
      }
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-24">
          <h2 className="text-2xl font-bold bg-[#B9FF66] px-2 py-2 rounded-sm shrink-0">Services</h2>
          <p className="text-lg text-gray-700 max-w-[40%]">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 