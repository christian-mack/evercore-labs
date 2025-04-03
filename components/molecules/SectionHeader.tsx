interface SectionHeaderProps {
  badge: string;
  titleStart: string;
  titleEnd?: string;
  className?: string;
}

export function SectionHeader({ badge, titleStart, titleEnd, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 flex items-center gap-8 ${className}`}>
      <div className="inline-block bg-[#B9FF66] text-black px-2 py-2 rounded-md text-2xl font-medium">
        {badge}
      </div>
      <h2 className="text-xl max-w-[50%]">
        {titleStart}
        {titleEnd && <><br />{titleEnd}</>}
      </h2>
    </div>
  );
} 