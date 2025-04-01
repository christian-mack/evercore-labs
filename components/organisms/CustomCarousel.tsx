'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp"
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    author: "Sarah Johnson",
    position: "CEO at ABC Solutions"
  },
  {
    text: "The team at Positivus has transformed our digital marketing strategy. Their innovative approach and dedication to results have made a real difference in our online presence.",
    author: "Michael Brown",
    position: "Head of Digital at Tech Innovators"
  },
];

export function CustomCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="container mx-auto px-4 mb-24">
      {/* Header */}
      <div className="mb-12 flex items-center gap-8">
        <div className="inline-block bg-[#B9FF66] text-black px-2 py-2 rounded-md text-2xl font-medium">
          Testimonials
        </div>
        <h2 className="text-xl max-w-[50%]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </h2>
      </div>

      {/* Carousel */}
      <div className="bg-[#1D1D1D] rounded-3xl p-12">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full lg:basis-[60%] transition-opacity duration-300">
                <div className="h-full relative transition-all duration-300">
                  {/* Testimonial Card */}
                  <div className="bg-[#1D1D1D] p-8 rounded-3xl border border-[#B9FF66] mb-8">
                    <p className="text-white text-lg leading-relaxed">{testimonial.text}</p>
                  </div>
                  {/* Author Info */}
                  <div className="text-[#B9FF66] pl-8">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-white/80">{testimonial.position}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-12 mt-16">
            <CarouselPrevious className="static hover:bg-transparent hover:text-[#B9FF66] border-0 bg-transparent text-white h-auto w-auto">
              <ChevronLeft className="w-12 h-12" />
            </CarouselPrevious>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === current ? 'bg-[#B9FF66]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="static hover:bg-transparent hover:text-[#B9FF66] border-0 bg-transparent text-white h-auto w-auto">
              <ChevronRight className="w-12 h-12" />
            </CarouselNext>
          </div>
        </Carousel>

        <style jsx global>{`
          .embla__viewport {
            overflow: visible;
          }
          .embla__slide {
            opacity: 0.5;
            transform: scale(0.9);
            transition: all 0.4s ease;
          }
          .embla__slide.is-selected {
            opacity: 1;
            transform: scale(1);
          }
        `}</style>
      </div>
    </section>
  );
} 