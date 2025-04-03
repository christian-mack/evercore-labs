interface QuotedTextSectionProps {
  title: string;
  quote: string;
  content: string;
}

export function QuotedTextSection({ title, quote, content }: QuotedTextSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-6">{title}</h2>
      <blockquote className="border-l-4 border-[#B9FF66] pl-4 mb-6 text-lg font-medium italic">
        {quote}
      </blockquote>
      <p className="text-base leading-relaxed text-gray-800">
        {content}
      </p>
    </div>
  );
} 