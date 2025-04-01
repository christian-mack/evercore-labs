import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
}

function CaseStudyCard({ title, description }: CaseStudyCardProps) {
  return (
    <div className="flex flex-col justify-between h-full">
      <p className="text-white text-xl mb-8">{description}</p>
      <Link 
        href="/case-studies" 
        className="text-[#B9FF66] inline-flex items-center gap-2 hover:text-[#a8e85c] transition-colors"
      >
        Learn more
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-[-45deg]"
        >
          <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-start gap-8 mb-20">
        <div className="bg-[#B9FF66] px-2 py-2 rounded-md">
          <h2 className="text-3xl font-medium">Case Studies</h2>
        </div>
        <p className="text-xl max-w-[50%]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="bg-[#1D1D1D] rounded-[45px] p-12">
        <div className="grid md:grid-cols-3 gap-12 divide-x divide-gray-700">
          <CaseStudyCard
            title="Restaurant PPC Campaign"
            description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          />
          <div className="pl-12">
            <CaseStudyCard
              title="B2B Software SEO"
              description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
            />
          </div>
          <div className="pl-12">
            <CaseStudyCard
              title="Retail Social Media"
              description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
            />
          </div>
        </div>
      </div>
    </section>
  );
} 