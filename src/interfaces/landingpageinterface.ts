export type Promo = {
  id: string;
  prefix: string;
  message: string;
  ctaLabel: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Hero = {
  title: string;
  leadBefore: string;
  leadEmphasis: string;
  leadAfter: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
  ctas: HeroCta[];
};

export type MarqueeIcon =
  | "globe"
  | "building2"
  | "cpu"
  | "cloud"
  | "network"
  | "server"
  | "smartphone"
  | "wallet"
  | "radio"
  | "circuitBoard"
  | "hexagon"
  | "layers"
  | "monitor"
  | "database"
  | "bot"
  | "printer";

export type MarqueeCompany = {
  name: string;
  icon: MarqueeIcon;
};

export type MarqueeSection = {
  title: string;
  rowOne: MarqueeCompany[];
  rowTwo: MarqueeCompany[];
};

export type DualFeature = {
  title: string;
  description: string;
};

export type DualPillarCta = {
  label: string;
  href: string;
  variant: "ghost" | "primary";
};

export type DualPillar = {
  indexLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  caption: string;
  title: string;
  suffix: string;
  subtitle: string;
  blurb: string;
  features: DualFeature[];
  cta: DualPillarCta;
};

export type DualCore = {
  eyebrow: string;
  heading: string;
  subcopy: string;
  pillars: DualPillar[];
};

export type MonthlyReward = {
  title: string;
  description: string;
};

export type LeaderboardRow = {
  rank: string;
  participant: string;
  points: string;
};

export type MonthlyContest = {
  eyebrow: string;
  heading: string;
  subcopy: string;
  statusLabel: string;
  challengeTitleLines: [string, string, string];
  seriesWindowLabel: string;
  seriesWindowValue: string;
  seriesNote: string;
  bountiesLabel: string;
  bounties: string[];
  leaderboardLabel: string;
  leaderboardColumns: {
    rank: string;
    participant: string;
    points: string;
  };
  leaderboard: LeaderboardRow[];
};

export type MonthlySprint = {
  eyebrow: string;
  heading: string;
  lead: string;
  secondaryHeading: string;
  secondaryLead: string;
  rewardsLabel: string;
  rewards: MonthlyReward[];
  contest: MonthlyContest;
};

export type ScoreBadge = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type CtcScore = {
  eyebrow: string;
  heading: string;
  lead: string;
  infographicLabel: string;
  inputs: [ScoreBadge, ScoreBadge, ScoreBadge];
  result: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    range: string;
  };
  footerBefore: string;
  footerMid: string;
  footerJoin: string;
  footerEmphasis: string;
  footerAfter: string;
};

export type InfraStat = {
  value: string;
  label: string;
};

export type InfraStrip = {
  heading: string;
  lead: string;
  stats: [InfraStat, InfraStat, InfraStat];
  footnote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionData = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: FaqItem[];
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterSocial = {
  label: string;
  href: string;
  network: "instagram" | "linkedin";
};

export type FooterContent = {
  homeHref: string;
  logoSrc: string;
  logoAlt: string;
  homeAriaLabel: string;
  tagline: string;
  productHeading: string;
  productLinks: FooterLink[];
  contactHeading: string;
  email: string;
  contactBlurb: string;
  addressLines: [string, string, string, string];
  mapLinkLabel: string;
  mapLinkHref: string;
  mapEmbedSrc: string;
  mapTitle: string;
  copyright: string;
  social: FooterSocial[];
  legalLinks: FooterLink[];
};

export type RubyVisitorRole = "institution" | "student";

export type RubyChatMessage = {
  id: string;
  from: "ruby" | "you";
  text: string;
};

export type RubyMockReply = {
  keywords: string[];
  reply: string;
};

export type RubyChatContent = {
  storageKey: string;
  title: string;
  subtitle: string;
  avatarLetter: string;
  welcome: string;
  welcomeBack: string;
  chooseHint: string;
  chatHint: string;
  openAriaLabel: string;
  closeAriaLabel: string;
  sendAriaLabel: string;
  institutionOption: string;
  studentOption: string;
  institutionUserLabel: string;
  studentUserLabel: string;
  institutionFollowUp: string;
  studentFollowUp: string;
  submittedUserLabel: string;
  thankYou: string;
  submitLabel: string;
  savingLabel: string;
  nameEmailRequired: string;
  institutionNameRequired: string;
  collegeNameRequired: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    institutionName: string;
    designation: string;
    college: string;
    branch: string;
    message: string;
  };
  mockReplies: RubyMockReply[];
  defaultReply: string;
};
