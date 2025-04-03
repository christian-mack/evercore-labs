import { UseCasesHero } from "@/components/organisms/UseCasesHero";
import { CustomCarousel } from "@/components/organisms/CustomCarousel";
import { UseCasesCTA } from "@/components/organisms/UseCasesCTA";
import { FeaturedSuccessStory } from "@/components/organisms/FeaturedSuccessStory";
import { SuccessStories } from "@/components/organisms/SuccessStories";

export default function UseCasesPage() {
  return (
    <>
      <UseCasesHero />
      <FeaturedSuccessStory />
      <SuccessStories />
      <CustomCarousel />
      <UseCasesCTA />
    </>
  );
} 