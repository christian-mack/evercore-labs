import { HeroSection } from "@/components/molecules/HeroSection"
import { ServicesGrid } from "@/components/organisms/ServicesGrid"
import heroImage from "@/public/hero-image.svg"

export default function MarketingHome() {
  return (
    <>
      <HeroSection heroImage={heroImage} />
      <ServicesGrid />
    </>
  )
} 