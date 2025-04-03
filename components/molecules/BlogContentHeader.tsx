import Image from 'next/image';

interface BlogContentHeaderProps {
  authorName: string;
  authorRole: string;
  authorImageUrl: string;
  rating: string;
}

export function BlogContentHeader({
  authorName,
  authorRole,
  authorImageUrl,
  rating
}: BlogContentHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={authorImageUrl}
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-base font-medium">{authorName}</div>
          <div className="text-sm text-gray-600">{authorRole}</div>
        </div>
      </div>
      <div className="text-base font-medium">{rating}</div>
    </div>
  );
} 