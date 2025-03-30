import Image from 'next/image';
import { Button } from '@/components/ui/button';
import stars from '@/public/stars.svg';

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-[#F3F3F3] rounded-[45px] p-12 relative overflow-visible">
        <div className="max-w-[60%]">
          <h2 className="text-4xl font-medium mb-4">Let's make things happen</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <Button className="bg-[#1D1D1D] text-white hover:bg-black rounded-full px-6">
            Get your free proposal
          </Button>
        </div>
        <div className="absolute -right-4 -top-4 w-[400px]">
          <Image
            src={stars}
            alt="Decorative stars illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
} 