interface BulletedTextSectionProps {
  title: string;
  bullets: string[];
}

export function BulletedTextSection({ title, bullets }: BulletedTextSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-6">{title}</h2>
      <ul className="list-disc list-inside space-y-3 text-base text-gray-800">
        {bullets.map((bullet, index) => (
          <li key={index} className="leading-relaxed">{bullet}</li>
        ))}
      </ul>
    </div>
  );
} 