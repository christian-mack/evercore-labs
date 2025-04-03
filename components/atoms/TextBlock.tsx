interface TextBlockProps {
  content: string;
}

export function TextBlock({ content }: TextBlockProps) {
  return (
    <p className="text-base leading-relaxed text-gray-800 mb-8">
      {content}
    </p>
  );
} 