import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';

interface HeroSectionProps {
  heroImage: StaticImageData;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-2xl text-lg p-8 font-light">
              Book a discovery call
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={heroImage}
              alt="Digital marketing illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 