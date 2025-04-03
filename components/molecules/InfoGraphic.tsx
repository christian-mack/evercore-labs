interface StatProps {
  value: string;
  description: string;
  bgColor?: string;
}

function Stat({ value, description, bgColor = 'bg-white' }: StatProps) {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-sm`}>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

interface InfoGraphicProps {
  title: string;
  stats: StatProps[];
}

export function InfoGraphic({ title, stats }: InfoGraphicProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-6">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>
    </div>
  );
} 