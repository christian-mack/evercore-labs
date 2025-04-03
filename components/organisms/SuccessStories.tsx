import Link from 'next/link';
import { BadgedSectionHeader } from '../molecules/BadgedSectionHeader';

interface SuccessStoryCardProps {
  title: string;
  description: string;
  href: string;
  showRightBorder?: boolean;
  showBottomBorder?: boolean;
  showLeftBorder?: boolean;
}

function SuccessStoryCard({ 
  title, 
  description, 
  href, 
  showRightBorder = false,
  showBottomBorder = false,
  showLeftBorder = false
}: SuccessStoryCardProps) {
  return (
    <div className="flex flex-col p-10 relative">
      {/* Right border */}
      {showRightBorder && (
        <div className="absolute border-r border-black right-0 h-[calc(100%-20px)] top-10" />
      )}
      
      {/* Left border */}
      {showLeftBorder && (
        <div className="absolute border-l border-black left-0 h-[calc(100%-20px)] top-10" />
      )}
      
      <h3 className="text-[30px] font-medium mb-6">{title}</h3>
      <p className="text-[18px] leading-[1.4] mb-8 max-w-[450px]">{description}</p>
      <div className="mt-auto">
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-[#B9FF66] flex items-center justify-center -rotate-45">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[18px]">Learn more</span>
        </Link>
      </div>
    </div>
  );
}

export function SuccessStories() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <BadgedSectionHeader
        badge="All Success Stories"
        titleStart="Explore Real-Life Examples of Our Proven Digital Marketing"
        titleEnd="Success through Our Case Studies"
      />

      <div className="border-t border-l border-r border-b-[5px] border-black rounded-[45px] overflow-hidden">
        <div className="grid grid-cols-3 relative">
          {/* Horizontal dividers */}
          <div className="absolute border-b border-black bottom-[33.33%] w-[calc(100%-80px)] left-10" />
          <div className="absolute border-b border-black bottom-[66.66%] w-[calc(100%-80px)] left-10" />

          {/* Vertical dividers */}
          <div className="absolute border-r border-black left-[33.33%] h-[calc(100%-80px)] top-10 bottom-10" />
          <div className="absolute border-r border-black left-[66.66%] h-[calc(100%-80px)] top-10 bottom-10" />

          {/* Top Row */}
          <SuccessStoryCard
            title="E-commerce Fashion Brand"
            description="We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
            href="/case-studies/fashion-brand"
          />
          <SuccessStoryCard
            title="Local Restaurant Chain"
            description="By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
            href="/case-studies/restaurant-chain"
          />
          <SuccessStoryCard
            title="Healthcare Provider"
            description="Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
            href="/case-studies/healthcare-provider"
          />
          {/* Middle Row */}
          <SuccessStoryCard
            title="E-commerce Fashion Brand"
            description="We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
            href="/case-studies/fashion-brand-2"
          />
          <SuccessStoryCard
            title="Local Restaurant Chain"
            description="By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
            href="/case-studies/restaurant-chain-2"
          />
          <SuccessStoryCard
            title="Healthcare Provider"
            description="Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
            href="/case-studies/healthcare-provider-2"
          />
          {/* Bottom Row */}
          <SuccessStoryCard
            title="E-commerce Fashion Brand"
            description="We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
            href="/case-studies/fashion-brand-3"
          />
          <SuccessStoryCard
            title="Local Restaurant Chain"
            description="By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
            href="/case-studies/restaurant-chain-3"
          />
          <SuccessStoryCard
            title="Healthcare Provider"
            description="Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
            href="/case-studies/healthcare-provider-3"
          />
        </div>
      </div>
    </section>
  );
} 