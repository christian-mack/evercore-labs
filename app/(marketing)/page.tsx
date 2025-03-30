import Image from "next/image"
import { HeroSection } from "@/components/molecules/HeroSection"
import { ServicesGrid } from "@/components/organisms/ServicesGrid"
import { CTASection } from "@/components/molecules/CTASection"
import { CaseStudies } from "@/components/organisms/CaseStudies"
import { WorkingProcess } from "@/components/organisms/WorkingProcess"
import heroImage from "@/public/hero-image.svg"

export default function MarketingHome() {
  return (
    <>
      <HeroSection heroImage={heroImage} />
      <ServicesGrid />
      <CTASection />
      <CaseStudies />
      <WorkingProcess />
    </>
  )
} 