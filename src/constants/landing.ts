import {
  CtcScore,
  DualCore,
  FaqSectionData,
  FooterContent,
  Hero,
  InfraStrip,
  MarqueeSection,
  MonthlySprint,
  NavItem,
  Promo,
  RubyChatContent,
} from "@/interfaces/landingpageinterface";

export const promo: Promo = {
  id: "summer-coupon-2026",
  prefix: "Summer coupon",
  message: "Get your discount now.",
  ctaLabel: "Claim on pricing",
  href: "#pricing",
};

export const navPrimary: NavItem[] = [
  { label: "Institution", href: "#institution" },
  { label: "Explore", href: "#explore" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

export const navSecondary: NavItem[] = [
  { label: "Signup", href: "#signup" },
  { label: "Contact", href: "#contact" },
];

export const navLogin: NavItem = {
  label: "Login",
  href: "#login",
};

export const hero: Hero = {
  title: "Your Fast Track to Top Placements.",
  leadBefore: "Upskill with industry-expert courses and master ",
  leadEmphasis: "Corporate Pathways",
  leadAfter: " built for your dream companies.",
  subline: "Build a CTC Score that gets you noticed.",
  imageSrc: "/assets/images/images2.webp",
  imageAlt: "Student smiling outdoors after securing a top campus placement",
  ctas: [
    { label: "Start Upskilling", href: "#explore", variant: "primary" },
    { label: "Get Started", href: "#signup", variant: "secondary" },
  ],
};

export const marquee: MarqueeSection = {
  title: "Empowering students to crack recruitment at…",
  rowOne: [
    { name: "Google", icon: "globe" },
    { name: "Accenture", icon: "hexagon" },
    { name: "TCS", icon: "building2" },
    { name: "Infosys", icon: "layers" },
    { name: "Wipro", icon: "cloud" },
    { name: "Tata", icon: "database" },
    { name: "SAP", icon: "server" },
  ],
  rowTwo: [
    { name: "Intel", icon: "cpu" },
    { name: "Meta", icon: "bot" },
    { name: "NVIDIA", icon: "circuitBoard" },
    { name: "Cisco", icon: "network" },
    { name: "VMware", icon: "monitor" },
    { name: "Dell", icon: "layers" },
    { name: "HP", icon: "printer" },
    { name: "Samsung", icon: "smartphone" },
    { name: "PayPal", icon: "wallet" },
    { name: "Ericsson", icon: "radio" },
  ],
};

export const dualCore: DualCore = {
  eyebrow: "Dual-Core Structure",
  heading: "One Ecosystem. Two Ways to Win.",
  subcopy:
    "Start with open-access learning on the web, then prove your skills in a professional hiring environment.",
  pillars: [
    {
      indexLabel: "01 · Web",
      imageSrc: "/assets/images/image7.png",
      imageAlt: "Crack The Campus web hub dashboard with Arena live battles",
      imageWidth: 637,
      imageHeight: 360,
      caption: "Web app: courses, practice, and pathways in the browser.",
      title: "The Web Hub",
      suffix: "Learning & Discovery",
      subtitle: "Your Daily Training Ground",
      blurb: "Open access to prepare anytime, anywhere.",
      features: [
        {
          title: "AI-Assisted Courses",
          description: "Upskill with interactive, industry-mapped modules.",
        },
        {
          title: "Corporate Pathways",
          description: "Master the specific requirements for your dream jobs.",
        },
        {
          title: "AI Resume Builder",
          description: "Create a professional, ATS-ready resume in minutes.",
        },
        {
          title: "Practice Assessments",
          description:
            "Unlimited mock tests to sharpen your skills without the pressure.",
        },
      ],
      cta: {
        label: "Explore Courses & Pathways",
        href: "#explore",
        variant: "ghost",
      },
    },
    {
      indexLabel: "02 · Software",
      imageSrc: "/assets/images/image8.png",
      imageAlt:
        "Crack The Campus Pro-Suite desktop app with coding and aptitude gauges",
      imageWidth: 641,
      imageHeight: 357,
      caption:
        "Desktop suite: assessments, CTC Score, and recruiter-ready workflows.",
      title: "The Pro-Suite",
      suffix: "Performance & Hiring",
      subtitle: "The Official Hiring Environment",
      blurb: "The software that secures your placement.",
      features: [
        {
          title: "Official Hiring Drives",
          description:
            "Attend actual recruitment assessments for top companies.",
        },
        {
          title: "Simulated Environments",
          description:
            "Practice in a real, proctored coding and interview setting.",
        },
        {
          title: "High-Stakes Evaluation",
          description:
            "Complete verified assessments that generate your CTC Score.",
        },
        {
          title: "Direct Placement Access",
          description:
            "Connect directly with recruiters through official test scores.",
        },
      ],
      cta: {
        label: "Download Software Suite",
        href: "#download",
        variant: "primary",
      },
    },
  ],
};

export const monthlySprint: MonthlySprint = {
  eyebrow: "The Monthly Sprint",
  heading: "The Monthly Performance Series.",
  lead: "Test your growth, compete with your peers, and win rewards while you upskill.",
  secondaryHeading: "Monthly Challenges. Real Rewards.",
  secondaryLead:
    "Every month, we launch a new Corporate Pathway contest. Master the specific tech stack, top the leaderboard, and claim your prize.",
  rewardsLabel: "Career Rewards",
  rewards: [
    {
      title: "Elite Tier",
      description: "Premium tech hardware or course scholarships.",
    },
    {
      title: "Growth Tier",
      description: "Exclusive access to premium hiring events.",
    },
    {
      title: "Participation Tier",
      description:
        "Recognition for all participants in your CTC Score profile.",
    },
  ],
  contest: {
    eyebrow: "Monthly contest",
    heading: "Upskill. Compete. Win.",
    subcopy:
      "Join our monthly contests to pressure-test your skills in a real-world environment.",
    statusLabel: "Completed",
    challengeTitleLines: [
      "COMPLETED CHALLENGE:",
      "CORPORATE PATHWAY",
      "CTC CONTEST",
    ],
    seriesWindowLabel: "Series window",
    seriesWindowValue: "Closed",
    seriesNote: "All deadlines UTC",
    bountiesLabel: "Bounties",
    bounties: [
      "Hardware & scholarship pool (Elite)",
      "Premium hiring event passes (Growth)",
      "Profile badge + score visibility (Credential)",
    ],
    leaderboardLabel: "Leaderboard preview",
    leaderboardColumns: {
      rank: "#",
      participant: "Participant",
      points: "Pts",
    },
    leaderboard: [
      { rank: "01", participant: "PRI****YA", points: "8" },
      { rank: "02", participant: "ARJ****AN", points: "7.8" },
      { rank: "03", participant: "NEH****RI", points: "7.2" },
    ],
  },
};

export const ctcScore: CtcScore = {
  eyebrow: "The Why",
  heading: "Beyond the Resume: The CTC Score.",
  lead: "Give recruiters a defensible, institution-grade signal. Web Hub builds the foundation; Pro-Suite verifies performance, rolled into one credential.",
  infographicLabel:
    "Infographic: Skills plus Practice plus Software performance equals CTC Score from 0.0 to 10.0",
  inputs: [
    {
      title: "Skills",
      description:
        "Capability signal mapped from your Web Hub profile, courses, and pathways.",
      imageSrc: "/assets/images/images3.webp",
      imageAlt: "Skills",
    },
    {
      title: "Practice",
      description:
        "Consistency and reps recorded in the Web Hub: mocks, drills, and readiness.",
      imageSrc: "/assets/images/images4.webp",
      imageAlt: "Practice",
    },
    {
      title: "Software performance",
      description:
        "Proctored outcomes and high-stakes results from the Pro-Suite environment.",
      imageSrc: "/assets/images/images5.webp",
      imageAlt: "Software performance",
    },
  ],
  result: {
    title: "CTC Score",
    imageSrc: "/assets/images/images6.webp",
    imageAlt: "CTC Score, verified credential",
    range: "0.0 to 10.0",
  },
  footerBefore: "Web Hub contributes skills and practice telemetry.",
  footerMid: "Pro-Suite supplies proctored software performance.",
  footerJoin: "Together they produce one",
  footerEmphasis: "verified credential",
  footerAfter: "recruiters can rely on.",
};

export const infraStrip: InfraStrip = {
  heading: "Enterprise-Grade Infrastructure for High-Stakes Placements.",
  lead: "Powering 1,300+ large-scale candidate drives with 99.9% uptime and zero-latency proctoring.",
  stats: [
    { value: "1,300+", label: "Institutional Drives" },
    { value: "Zero-Latency", label: "Proctoring Engine" },
    { value: "99.9% Uptime", label: "Assessment Reliability" },
  ],
  footnote: "Engineered for Concurrent Peak Loads & Global Integrity.",
};

export const faq: FaqSectionData = {
  eyebrow: "FAQ",
  heading: "Common questions about Crack The Campus",
  intro:
    "Crack The Campus (CTC) is India's campus-to-career platform for engineering students and colleges — combining AI-proctored assessments, structured practice, CTC Score credentialing, and placement opportunities.",
  items: [
    {
      question: "What is Crack The Campus?",
      answer:
        "Crack The Campus (CTC) is India's campus-to-career platform that helps engineering students prepare for placements through AI-proctored assessments, structured coding and aptitude practice, skill courses, contests, a recruiter-trusted CTC Score, and job opportunities.",
    },
    {
      question: "Who is Crack The Campus for?",
      answer:
        "Crack The Campus is built for engineering students preparing for campus placements and internships, and for colleges that need secure assessments, student performance analytics, and placement-readiness tracking.",
    },
    {
      question: "What is the CTC Score?",
      answer:
        "The CTC Score is a composite placement-readiness credential on Crack The Campus. It reflects a student's skills, practice consistency, assessment performance, and verified proctored test results — designed to help recruiters quickly identify job-ready candidates.",
    },
    {
      question: "How does Crack The Campus help with campus placements?",
      answer:
        "Students practice aptitude, coding, and technical rounds through timed assessments that mirror real hiring patterns. Colleges can run secure proctored exams, track readiness dashboards, and students can build a CTC Score and apply to opportunities via Job Desk.",
    },
    {
      question: "Does Crack The Campus support aptitude and coding preparation?",
      answer:
        "Yes. The platform covers aptitude, coding, technical preparation, structured learning modules in Skill Center, live contests, archived practice, and AI-guided learning — not coding alone.",
    },
    {
      question: "How are assessments proctored on Crack The Campus?",
      answer:
        "High-stakes assessments run in the Crack The Campus desktop suite (Windows, macOS, Linux) with AI proctoring and integrity monitoring. This provides a secure, controlled environment similar to real company hiring tests.",
    },
    {
      question: "Is there a free plan on Crack The Campus?",
      answer:
        "Yes. Crack The Campus offers a free student plan with no time limit. Students can explore courses, practice, and use core features without a credit card. Paid plans unlock additional premium capabilities.",
    },
    {
      question: "Can colleges and institutions use Crack The Campus?",
      answer:
        "Yes. Institutions get an admin suite for assessment creation, batch management, AI-proctored exams, curriculum enrichment, placement analytics, and student engagement reporting. Visit crackthecampus.com/institution for details.",
    },
    {
      question:
        "How is Crack The Campus different from generic practice websites?",
      answer:
        "Unlike standalone practice sites, CTC combines structured learning, timed proctored assessments, contests, recruiter-trusted scoring, institutional dashboards, and job-related outcomes in one campus-to-career ecosystem.",
    },
    {
      question: "Where can I download the Crack The Campus software?",
      answer:
        "Download the desktop suite for Windows, macOS, or Linux at crackthecampus.com/download. The software is required for secure proctored assessments.",
    },
  ],
};

export const siteFooter: FooterContent = {
  homeHref: "/",
  logoSrc: "/assets/images/logo.webp",
  logoAlt: "Crack The Campus",
  homeAriaLabel: "Crack The Campus home",
  tagline:
    "Campus-to-career infrastructure: Web Hub training, Pro-Suite verification, recruiter-trusted scores.",
  productHeading: "Product",
  productLinks: [
    { label: "Explore courses", href: "#explore" },
    { label: "Download suite", href: "#download" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#documentation" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "FAQ", href: "#faq" },
  ],
  contactHeading: "Contact",
  email: "info@crackthecampus.com",
  contactBlurb: "Partnerships, institutions, and press.",
  addressLines: [
    "Ground Floor, ThiDiff Tech Park",
    "Metro Station - Patalamma Temple, near Singasandra",
    "Aishwarya Crystal Layout, Singasandra",
    "Bengaluru, Karnataka 560068",
  ],
  mapLinkLabel: "Larger map →",
  mapLinkHref: "https://maps.app.goo.gl/y6P9HgeWedwsfCiz9",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=ThiDiff%20Tech%20Park%2C%20Singasandra%2C%20Bengaluru%2C%20Karnataka%20560068%2C%20India&hl=en&z=15&ie=UTF8&output=embed",
  mapTitle: "Crack The Campus office — ThiDiff Tech Park, Bengaluru",
  copyright: "© 2026 Crack The Campus. All rights reserved.",
  social: [
    {
      label: "Crack The Campus on Instagram",
      href: "https://www.instagram.com/crackthecampus_",
      network: "instagram",
    },
    {
      label: "Crack The Campus on LinkedIn",
      href: "https://www.linkedin.com/company/crackthecampus",
      network: "linkedin",
    },
  ],
  legalLinks: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ],
};

export const rubyChat: RubyChatContent = {
  storageKey: "ctc_ruby_lead_done",
  title: "Ruby",
  subtitle: "Crack The Campus · Assistant",
  avatarLetter: "R",
  welcome:
    "Hi — I'm Ruby. Are you exploring Crack The Campus as an institution or as a student?",
  welcomeBack:
    "Welcome back! Ask me about programs, pricing, contests, or getting started.",
  chooseHint: "Pick an option above to continue.",
  chatHint: "Ask about programs, pricing, or getting started.",
  openAriaLabel: "Open Ruby chat assistant",
  closeAriaLabel: "Close Ruby chat",
  sendAriaLabel: "Send message",
  institutionOption: "I represent an institution",
  studentOption: "I am a student",
  institutionUserLabel: "Institution",
  studentUserLabel: "Student",
  institutionFollowUp:
    "Great — share your details and our team will reach out about campus plans and demos.",
  studentFollowUp:
    "Awesome — tell us a bit about yourself so we can guide you to the right programs.",
  submittedUserLabel: "Submitted my details",
  thankYou:
    "Thank you! We've saved your information and our team will reach out soon. You can also ask me about pricing, programs, or getting started.",
  submitLabel: "Submit details",
  savingLabel: "Saving.",
  nameEmailRequired: "Name and email are required.",
  institutionNameRequired: "Institution name is required.",
  collegeNameRequired: "College name is required.",
  placeholders: {
    name: "Full name *",
    email: "Email *",
    phone: "Phone / WhatsApp",
    institutionName: "Institution name *",
    designation: "Your designation (e.g. TPO, Dean)",
    college: "College name *",
    branch: "Branch (e.g. CSE)",
    message: "Anything else we should know? (optional)",
  },
  mockReplies: [
    {
      keywords: ["pricing", "price", "cost", "plan", "plans", "fee"],
      reply:
        "CTC offers a free student plan with no time limit. Paid plans unlock premium pathways, contests, and advanced analytics — check the Pricing section for current offers.",
    },
    {
      keywords: ["program", "course", "pathway", "upskill", "learn"],
      reply:
        "Start on the Web Hub with AI-assisted courses and Corporate Pathways, then verify skills in the Pro-Suite. Explore the Dual-Core and Monthly Sprint sections for details.",
    },
    {
      keywords: ["contest", "sprint", "leaderboard", "reward", "challenge"],
      reply:
        "Every month we run a Corporate Pathway contest with Elite, Growth, and Participation rewards. Jump into The Monthly Performance Series to see the current challenge.",
    },
    {
      keywords: ["start", "download", "signup", "sign up", "get started", "suite"],
      reply:
        "Students can explore courses for free, then download the desktop suite for proctored assessments. Use Signup in the header or Download suite in the footer to continue.",
    },
  ],
  defaultReply:
    "I can help with pricing, programs, contests, or getting started. Ask about any of those, or leave your details via the lead form if you have not already.",
};
