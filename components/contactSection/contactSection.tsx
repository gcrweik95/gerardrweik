import { Footer } from "@/components/contactSection/footer";
import React, { useRef } from "react";
import Magentic from "@/components/ui/magentic";
import { BgImagesContainer } from "@/components/contactSection/bgImagesContainer";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Header } from "../header";
import { Bulge } from "../bulge";
import { useSiteSettings } from "@/components/siteSettingsProvider";
import type { TechLogo } from "@/sanity/lib/types";

type ContactSectionProps = {
  techLogos: TechLogo[];
};

export function ContactSection({ techLogos }: ContactSectionProps) {
  const { suscribe } = useAppSelector((state) => state.fullpageReducer.fourth);
  const bgImagesSharedRef = useRef<gsap.core.Tween | null>(null);
  const links = useSiteSettings();

  return (
    <section className="section section__5 fourth lightGradient ">
      <Bulge type="Dark" />
      <Header color="Dark"></Header>

      <Magentic
        href={links.email}
        className="footer__heading anime cursor-pointer"
        scrambleParams={{
          text: "Contact Me",
        }}
        onMouseEnter={() => {
          bgImagesSharedRef.current?.restart(true);
        }}
        onMouseLeave={() => {
          bgImagesSharedRef.current?.reverse();
        }}
      >
        <span className="shapka mask">
          <span className="scrambleText inline-block text-left">Contact Me</span>
          <span className="yellow__it">.</span>
        </span>
      </Magentic>
      <BgImagesContainer bgImagesSharedRef={bgImagesSharedRef} techLogos={techLogos} />
      <Footer />
    </section>
  );
}
