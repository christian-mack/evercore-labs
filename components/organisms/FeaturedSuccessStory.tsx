import Link from 'next/link';

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 h-full flex flex-col items-center justify-center text-center">
      <div className="text-[40px] font-medium text-black">{value}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
}

export function FeaturedSuccessStory() {
  return (
    <section className="container mx-auto px-4 my-24">
      <div className="bg-[#1D1D1D] rounded-[45px] py-24 px-[74px] text-white">
        <div className="grid grid-cols-2 gap-[72px]">
          {/* Left Column */}
          <div>
            <div className="inline-block bg-[#B9FF66] text-black px-2 py-2 rounded-md mb-9">
              <div className="text-[36px] font-medium leading-none">Featured Success Story</div>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-[30px] font-medium mb-9 leading-[1.2] max-w-[500px]">
                Scaling Success for a<br />Leading E-Commerce Brand
              </h2>
              <p className="text-[18px] mb-11 leading-[1.4] max-w-[500px]">
                Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.
              </p>
              <div className="mt-auto">
                <Link 
                  href="/use-cases/e-commerce-success"
                  className="inline-flex items-center gap-2 text-[#B9FF66] hover:text-[#a8e85c] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#B9FF66] flex items-center justify-center -rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[20px]">Read</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8 h-full">
            <Stat value="200%" label="increase in organic traffic" />
            <Stat value="150%" label="rise in online sales" />
            <Stat value="75%" label="reduction in cost-per-click (CPC)" />
            <Stat value="300%" label="improvement in conversion rate" />
          </div>
        </div>
      </div>
    </section>
  );
} 