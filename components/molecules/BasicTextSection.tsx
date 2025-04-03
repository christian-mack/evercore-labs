interface BasicTextSectionProps {
  title: string;
  content: string;
}

export function BasicTextSection({ title, content }: BasicTextSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      <p className="text-base leading-relaxed text-gray-800">
        {content}
      </p>
    </div>
  );
} 