import { BlogContentHeader } from '../molecules/BlogContentHeader';
import { TextBlock } from '../atoms/TextBlock';
import { BasicTextSection } from '../molecules/BasicTextSection';
import { QuotedTextSection } from '../molecules/QuotedTextSection';
import { InfoGraphic } from '../molecules/InfoGraphic';
import { BulletedTextSection } from '../molecules/BulletedTextSection';

interface Section {
  type: "basic" | "quoted" | "infographic" | "bulleted";
  title: string;
  content?: string;
  quote?: string;
  stats?: Array<{ value: string; description: string; bgColor?: string }>;
  bullets?: string[];
}

// Example data for development
const blogData: {
  author: {
    authorName: string;
    authorRole: string;
    authorImageUrl: string;
    rating: string;
  };
  intro: string;
  sections: Section[];
} = {
  author: {
    authorName: "Sarah Kim",
    authorRole: "Content Creator",
    authorImageUrl: "/images/authors/sarah-kim.jpg",
    rating: "A"
  },
  intro: "In the ever-evolving digital landscape, businesses are faced with an important question: should they invest in pay-per-click (PPC) advertising or focus on organic marketing strategies? While both approaches have their merits, choosing the right one depends on your goals, budget, and timeline. Let's dive into the strengths, challenges, and real-world applications of PPC and organic marketing to help you make an informed decision.",
  sections: [
    {
      type: "basic",
      title: "The Challenge of Standing Out Online",
      content: "Every day, millions of businesses compete for visibility online, making it increasingly difficult to capture the attention of potential customers. Digital marketing has evolved beyond simply having a website and spending a few days on Google Maps time and occasional effort. Meanwhile, PPC ads promise instant visibility but come with a price tag that can quickly drain marketing budgets."
    },
    {
      type: "basic",
      title: "Comparing PPC and Organic Marketing",
      content: "Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges, making them effective for different business needs. PPC is designed to deliver immediate results, offering instant visibility in search results and precise targeting capabilities. With instant tracking, it allows for precise targeting based on factors like demographics, behavior, and location. However, the costs can add up quickly, especially in competitive industries, and its results are short-lived when the spending stops."
    },
    {
      type: "quoted",
      title: "Striking the Right Balance",
      quote: "PPC and organic marketing aren't rivals—they're teammates. The best strategies combine both to create a holistic approach to growth.",
      content: "For instance, a business might use PPC to generate quick traffic for a new product launch while building long-term organic authority through SEO and content marketing. These strategies complement each other, creating a sustainable marketing ecosystem."
    },
    {
      type: "infographic",
      title: "By the Numbers: Facts About PPC and Organic Marketing",
      stats: [
        {
          value: "$2 for every $1 spent",
          description: "Average return on PPC advertising",
          bgColor: "bg-gray-50"
        },
        {
          value: "53% less than paid ads",
          description: "Cost savings with organic search",
          bgColor: "bg-white"
        },
        {
          value: "53% of all website traffic",
          description: "Organic search drives majority of traffic",
          bgColor: "bg-gray-900 text-white"
        }
      ]
    },
    {
      type: "basic",
      title: "Real-World Examples",
      content: "PPC and organic marketing have proven effective in different scenarios, and real-world examples highlight their value. A local restaurant, for instance, managed Google Ads to target the search term 'best Italian food near me,' which led to a noticeable 50% increase in reservations within just one month. Meanwhile, a B2B software company invested in comprehensive SEO and high-quality blog content. This strategy approach helped them rank for competitive keywords and brought steady organic traffic growth over six months."
    },
    {
      type: "bulleted",
      title: "Key Takeaways for Your Marketing Strategy",
      bullets: [
        "PPC is ideal for short-term goals like generating sales or new product launches",
        "Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships",
        "A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development"
      ]
    },
    {
      type: "basic",
      title: "Choosing the Best Strategy for Your Business",
      content: "Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you need immediate results and have the budget, PPC might be your best bet. However, if you're in it for the long haul and want to build a loyal audience and maintaining a steady flow of organic traffic, organic marketing could be your primary focus."
    }
  ]
};

export function BlogContent() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <BlogContentHeader {...blogData.author} />
      <TextBlock content={blogData.intro} />
      
      {blogData.sections.map((section: Section, index) => {
        switch (section.type) {
          case "basic":
            return <BasicTextSection key={index} title={section.title} content={section.content || ""} />;
          case "quoted":
            return <QuotedTextSection key={index} title={section.title} quote={section.quote || ""} content={section.content || ""} />;
          case "infographic":
            return <InfoGraphic key={index} title={section.title} stats={section.stats || []} />;
          case "bulleted":
            return <BulletedTextSection key={index} title={section.title} bullets={section.bullets || []} />;
          default:
            return null;
        }
      })}
    </article>
  );
} 