/**
 * Scene data for the scroll-scrub journey.
 *
 * Neo-industrial build: ONE continuous 15s film of a matte ceramic brain
 * being swept by scanner light in a bone-white void, encoded as five
 * sequential seam-locked slices (consecutive frames of the same take), one
 * per chapter. Every poster is the exact first frame of the encoded clip
 * beside it. The mini scan readouts are HTML (bi-scan chips + the stage
 * scanline in styles.css), never baked into the footage.
 */
import { createElement } from "react";
import type { ReactNode } from "react";

import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Single place to change where every "Book a call" points. */
export const BOOK_CALL_HREF =
  "mailto:hello@boydintelligence.com?subject=Intro%20call";

/** Brand tokens for the journey layer (design-brief.md, neo-industrial). */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#ff4d00",
  background: "#ece8de",
  ink: "#0f0e0c",
  muted: "#57534a",
};

const scanChip = (label: string) =>
  createElement("span", { className: "bi-scan", key: label }, label);

const hud = (...labels: string[]): ReactNode =>
  createElement("div", { className: "bi-hud-row" }, ...labels.map(scanChip));

const beginActions = createElement(
  "div",
  { className: "bi-hud-col" },
  createElement(
    "a",
    { className: "bi-film-cta", href: BOOK_CALL_HREF, key: "cta" },
    "Book a call",
    createElement(
      "span",
      { "aria-hidden": true, className: "bi-film-cta__arrow", key: "arrow" },
      "\u2192"
    )
  ),
  hud("SCAN 05 / CONTACT")
);

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    actions: hud("SCAN 01 / ACTIVE", "SIG / ACQUIRED"),
    align: "left",
    body: "Boyd Intelligence is a one person studio in Upland, California. Brands, websites, and custom AI, designed and built by the same hands.",
    clip: "/assets/world/scan-01.mp4",
    id: "open",
    label: "System",
    linger: 0.15,
    mobileClip: "/assets/world/scan-01-mobile.mp4",
    mobilePoster: "/assets/world/scan-01-mobile-poster.jpg",
    poster: "/assets/world/scan-01-poster.jpg",
    scroll: 1.7,
    title: "Boyd Intelligence",
  },
  {
    actions: hud("SCAN 02 / OFFERINGS"),
    align: "right",
    body: "A brand kit, a website, or a custom AI tool. Clear scope, clear price, no retainers.",
    clip: "/assets/world/scan-02.mp4",
    id: "ways",
    label: "Offerings",
    mobileClip: "/assets/world/scan-02-mobile.mp4",
    mobilePoster: "/assets/world/scan-02-mobile-poster.jpg",
    poster: "/assets/world/scan-02-poster.jpg",
    scroll: 1.5,
    tags: ["BRAND / FROM $999", "WEB / FROM $2,999", "AI / FROM $4,999"],
    title: "Three ways in",
  },
  {
    actions: hud("SCAN 03 / OPERATOR"),
    align: "left",
    body: "Every commission is designed, built, and delivered by the same person. Tested on the bleeding edge before it reaches yours.",
    clip: "/assets/world/scan-03.mp4",
    id: "hands",
    label: "Operator",
    mobileClip: "/assets/world/scan-03-mobile.mp4",
    mobilePoster: "/assets/world/scan-03-mobile-poster.jpg",
    poster: "/assets/world/scan-03-poster.jpg",
    scroll: 1.5,
    title: "One set of hands",
  },
  {
    actions: hud("SCAN 04 / PROCESS"),
    align: "right",
    body: "One short call sets exactly what you need and exactly what it costs. Then short rounds you can see and steer.",
    clip: "/assets/world/scan-04.mp4",
    id: "rounds",
    label: "Process",
    mobileClip: "/assets/world/scan-04-mobile.mp4",
    mobilePoster: "/assets/world/scan-04-mobile-poster.jpg",
    poster: "/assets/world/scan-04-poster.jpg",
    scroll: 1.5,
    title: "Scoped in fifteen minutes",
  },
  {
    actions: beginActions,
    align: "left",
    body: "Fifteen minutes, no obligation. Walk away with a clear scope and an exact price.",
    clip: "/assets/world/scan-05.mp4",
    id: "begin",
    label: "Contact",
    mobileClip: "/assets/world/scan-05-mobile.mp4",
    mobilePoster: "/assets/world/scan-05-mobile-poster.jpg",
    poster: "/assets/world/scan-05-poster.jpg",
    scroll: 1.8,
    title: "It starts with a call",
  },
];
