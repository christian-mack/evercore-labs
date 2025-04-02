import { AboutHero } from "@/components/organisms/AboutHero";
import { CoreValues } from "@/components/organisms/CoreValues";
import { AboutQuote } from "@/components/organisms/AboutQuote";
import { AwardsRecognition } from "@/components/organisms/AwardsRecognition";
import { ImpactNumbers } from "@/components/organisms/ImpactNumbers";
import { Journey } from "@/components/organisms/Journey";
import { JoinTeam } from "@/components/organisms/JoinTeam";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ImpactNumbers />
      <Journey />
      <CoreValues
        subtitleStart="At the heart of everything we do"
        subtitleEnd="are our core values:"
      />
      <AboutQuote />
      <AwardsRecognition />
      <JoinTeam />
    </main>
  );
} 