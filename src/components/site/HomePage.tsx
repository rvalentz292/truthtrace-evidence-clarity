import { useState } from "react";

import {
  AudiencePathways,
  ClosingSection,
  HeroSection,
  ProofChainSection,
  SiteBackdrop,
  SiteFooter,
  TransformationSection,
  TrustArchitecture,
} from "@/components/site/HomepageSections";
import { Nav } from "@/components/site/Nav";
import evidence from "@/content/homepage-evidence.json";

export function HomePage() {
  const [selectedId, setSelectedId] = useState(evidence.events[0].id);
  const selectedEvent =
    evidence.events.find((item) => item.id === selectedId) ?? evidence.events[0];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteBackdrop />
      <Nav />
      <main id="main-content" className="relative pt-14" tabIndex={-1}>
        <HeroSection
          selectedId={selectedId}
          selectedEvent={selectedEvent}
          onSelect={setSelectedId}
        />
        <TransformationSection />
        <ProofChainSection
          selectedId={selectedId}
          selectedEvent={selectedEvent}
          onSelect={setSelectedId}
        />
        <AudiencePathways />
        <TrustArchitecture />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
