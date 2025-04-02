import Image from "next/image";

interface AwardCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

function AwardCard({ imageSrc, title, description }: AwardCardProps) {
  return (
    <div className="bg-[#F5F5F5] rounded-[45px] p-12">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={`/awards/${imageSrc}`}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-base font-semibold mb-[30px]">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function AwardsRecognition() {
  const awards = [
    {
      imageSrc: "gdea.svg",
      title: "Best Small Business Digital Marketing Agency of the Year",
      description: "Celebrating our success in delivering innovative strategies and measurable results for small business clients."
    },
    {
      imageSrc: "innovative.svg",
      title: "Innovative Website Design",
      description: "Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand's essence and boost conversions."
    },
    {
      imageSrc: "ppc.svg",
      title: "Top Performing PPC Campaign of the Year",
      description: "Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results."
    },
    {
      imageSrc: "expertise.svg",
      title: "Expertise in Social Media Marketing",
      description: "Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engaging content."
    }
  ];

  return (
    <section className="container mx-auto px-4 mt-[140px] mb-[100px]">
      <div className="flex items-center gap-4 mb-16">
        <div className="bg-[#B9FF66] px-4 py-2 rounded-md">
          <h2 className="text-3xl font-medium">Awards & Recognition</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">At Positivus, our commitment to excellence has been recognized</p>
          <p className="text-xl">by industry leaders. Here are some of our proudest achievements:</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </section>
  );
} 