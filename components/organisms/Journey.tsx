import Image from "next/image";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function Milestone({ year, title, description, isLast, isEven }: MilestoneProps & { isEven: boolean }) {
  return (
    <div className={`flex items-start gap-8 ${isEven ? 'justify-end' : ''}`}>
      <div className="text-5xl font-medium w-32">{year}</div>
      <div className="relative w-[600px]">
        <div className="bg-[#1D1D1D] text-white rounded-[45px] py-[50px] px-8">
          <div className="flex gap-[10px]">
            <div className="text-[#B9FF66] text-[30px] mx-[10px]">★</div>
            <div>
              <h3 className="text-[30px] font-medium mb-4">
                {title}
              </h3>
              <p className="text-lg text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Positivus was founded to help businesses navigate the digital world and achieve online success."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Positivus was named among the top 50 global digital agencies, affirming our leadership."
    },
    {
      year: "2023",
      title: "Innovation and Growth",
      description: "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive."
    },
    {
      year: "2024",
      title: "Leading the Future",
      description: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing."
    }
  ];

  return (
    <section className="container mx-auto px-4 mt-[140px] mb-[140px] relative overflow-visible">
      {/* Wire rings on left */}
      <div className="absolute -left-32 w-[300px] h-[300px]" style={{ top: 'calc(10% + 240px)' }}>
        <Image
          src="/illustrations/wire-rings.svg"
          alt="Decorative wire rings"
          fill
          className="object-contain"
        />
      </div>

      {/* Wire rings on right */}
      <div className="absolute -right-32 w-[300px] h-[300px]" style={{ top: 'calc(60% - 5px)' }}>
        <Image
          src="/illustrations/wire-rings.svg"
          alt="Decorative wire rings"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-4 mb-[100px]">
        <div className="bg-[#B9FF66] px-4 py-2 rounded-md">
          <h2 className="text-3xl font-medium">Our Journey</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">From humble beginnings to industry leaders, discover how Positivus has</p>
          <p className="text-xl">evolved to drive success for businesses worldwide.</p>
        </div>
      </div>

      <div className="space-y-24">
        {milestones.map((milestone, index) => (
          <Milestone 
            key={index} 
            {...milestone} 
            isLast={index === milestones.length - 1}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
} 