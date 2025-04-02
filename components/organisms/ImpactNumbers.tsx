interface StatProps {
  number: string;
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
}

function Stat({ number, label, isFirst, isLast }: StatProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Half pill container */}
      <div className="relative h-[50px] overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-[100px] border-t border-b ${
          isFirst 
            ? 'border-r rounded-r-[20px]' 
            : isLast 
              ? 'border-l rounded-l-[20px]'
              : 'border-x rounded-[20px]'
        } border-black`} />
      </div>
      {/* Statistics below pill */}
      <div className="pl-8">
        <div className="text-5xl font-medium mb-4">{number}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  );
}

export function ImpactNumbers() {
  const stats = [
    { number: "8+", label: "Years of Experience" },
    { number: "50+", label: "Experts" },
    { number: "100+", label: "Successful Campaigns" },
    { number: "20+", label: "Industry Awards" },
    { number: "500%", label: "ROI for our clients" },
  ];

  return (
    <section className="container mx-auto px-4 mt-[140px] mb-[140px]">
      <div className="flex items-center gap-4 mb-16">
        <div className="bg-[#B9FF66] px-4 py-2 rounded-md">
          <h2 className="text-3xl font-medium">Our Impact in Numbers</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">A snapshot of the milestones and achievements</p>
          <p className="text-xl">that drive our success</p>
        </div>
      </div>

      <div className="flex -mx-[1px]">
        {stats.map((stat, index) => (
          <Stat 
            key={index} 
            {...stat} 
            isFirst={index === 0}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
} 