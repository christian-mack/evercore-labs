import { CardGrid } from './CardGrid';

const blogArticlesData = [
  {
    title: "10 SEO Myths You Need to Stop Believing",
    description: "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
    href: "/blog/seo-myths"
  },
  {
    title: "Maximizing ROI with Social Media Advertising",
    description: "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
    href: "/blog/social-media-roi"
  },
  {
    title: "How Content Marketing Fuels Long-Term Growth",
    description: "Content isn't just king—it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
    href: "/blog/content-marketing-growth"
  },
  {
    title: "The Art of A/B Testing: Perfecting Your Campaigns",
    description: "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
    href: "/blog/ab-testing"
  },
  {
    title: "Understanding Google's Latest Algorithm Update",
    description: "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
    href: "/blog/google-algorithm"
  },
  {
    title: "5 Ways AI is Changing Digital Marketing",
    description: "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
    href: "/blog/ai-digital-marketing"
  }
];

export function BlogArticles() {
  return (
    <CardGrid
      badge="Explore More Insights"
      titleStart="Discover expert tips, strategies, and stories to keep you ahead in"
      titleEnd="the digital landscape."
      cards={blogArticlesData}
      gridCols={3}
      rows={2}
      linkText="Read article"
    />
  );
} 