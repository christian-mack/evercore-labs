import Image from "next/image";

interface AboutQuoteProps {
  quote?: string;
  author?: string;
  role?: string;
}

export function AboutQuote({
  quote = "At Positivus, we believe that success is built on innovation, collaboration, and a relentless focus on delivering results.",
  author = "John Smith",
  role = "Founder of Positivus"
}: AboutQuoteProps) {
  return (
    <section className="container mx-auto px-4 my-20 relative">
      {/* Quote container */}
      <div className="bg-[#1D1D1D] rounded-[45px] p-16 text-white relative h-[510px] flex items-center">
        <div className="max-w-[600px] ml-auto">
          <blockquote className="text-[40px] leading-[150%] font-semibold mb-10">
            "{quote}"
          </blockquote>
          <div className="flex items-center gap-2">
            <cite className="not-italic text-xl">— {author},</cite>
            <span className="text-xl text-gray-400">{role}</span>
          </div>
        </div>
      </div>

      {/* Illustration positioned to overlap on top */}
      <div className="absolute -top-[25%] -left-[2px] w-[525px] aspect-[3/4] z-10">
        <Image
          src="/illustrations/about-us-quote.svg"
          alt="Decorative illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
} 