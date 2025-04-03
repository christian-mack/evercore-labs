import Link from 'next/link';
import { BadgedSectionHeader } from '../molecules/BadgedSectionHeader';

interface CardProps {
  title: string;
  description: string;
  href: string;
  linkText?: string;
}

function Card({ 
  title, 
  description, 
  href,
  linkText = "Learn more"
}: CardProps) {
  return (
    <div className="flex flex-col p-10 relative">      
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
          <span className="text-[18px]">{linkText}</span>
        </Link>
      </div>
    </div>
  );
}

interface CardGridProps {
  badge: string;
  titleStart: string;
  titleEnd?: string;
  cards: CardProps[];
  gridCols: 3;
  rows: 2 | 3;
  linkText?: string;
}

export function CardGrid({ 
  badge, 
  titleStart, 
  titleEnd, 
  cards, 
  gridCols,
  rows,
  linkText 
}: CardGridProps) {
  return (
    <section className="container mx-auto px-4 pb-24">
      <BadgedSectionHeader
        badge={badge}
        titleStart={titleStart}
        titleEnd={titleEnd}
      />

      <div className="border-t border-l border-r border-b-[5px] border-black rounded-[45px] overflow-hidden">
        <div className="grid grid-cols-3 relative">
          {/* Horizontal dividers */}
          {rows === 3 ? (
            <>
              <div className="absolute border-b border-black bottom-[33.33%] w-[calc(100%-80px)] left-10" />
              <div className="absolute border-b border-black bottom-[66.66%] w-[calc(100%-80px)] left-10" />
            </>
          ) : (
            <div className="absolute border-b border-black bottom-[50%] w-[calc(100%-80px)] left-10" />
          )}

          {/* Vertical dividers */}
          <div className="absolute border-r border-black left-[33.33%] h-[calc(100%-80px)] top-10 bottom-10" />
          <div className="absolute border-r border-black left-[66.66%] h-[calc(100%-80px)] top-10 bottom-10" />

          {cards.map((card, index) => (
            <Card key={index} {...card} linkText={linkText} />
          ))}
        </div>
      </div>
    </section>
  );
} 