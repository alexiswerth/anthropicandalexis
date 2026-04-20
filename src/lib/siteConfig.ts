// Site data configuration: single source of truth for all content
// Edit here to update the entire site

export interface ExperienceData {
  id: string;
  company: string;
  subtitle: string;
  title: string;
  period: string;
  highlights: string[];
}

export interface FitItem {
  iconName: string;
  jobReq: string;
  myFit: string;
  tags: string[];
}

export interface EducationData {
  degree: string;
  field?: string;
  school: string;
  location: string;
}

export interface SiteConfig {
  name: string;
  suffix: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  barAdmissions: string[];
  community: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  ctaLabel: string;
  ctaAnchor: string;
  experiences: ExperienceData[];
  earlierRoles: string[];
  fitItems: FitItem[];
  education: EducationData[];
  navLinks: { label: string; href: string }[];
}

const siteConfig: SiteConfig = {
  name: "Alexis Werth",
  suffix: "Esq.",
  tagline: "Your Next Commercial Counsel, GTM",
  bio: "Commercial counsel with 10+ years partnering with go-to-market teams to bring deals across the finish line. My career has centered on the work that moves revenue: enterprise SaaS negotiations, thoughtful AI and data privacy terms, and the legal ops infrastructure that helps sales teams move with confidence. At Drata, I lead the majority of commercial deal flow, designed the privacy program end-to-end, and architect AI-powered legal ops workflows that shape how Legal shows up for GTM. At Snappy, my work supported more than half of 2024 revenue and cut sales request time 30% through an Ironclad-Salesforce integration. Across every role, I have built the relationships, contracts, privacy programs, and processes that help businesses grow.",
  email: "awerth13@gmail.com",
  phone: "5163198772",
  phoneDisplay: "516.319.8772",
  location: "New York, NY",
  barAdmissions: ["New York", "New Jersey"],
  community: "Counselwell Region Lead (NYC)",
  githubUrl: "https://github.com/alexiswerth",
  linkedinUrl: "https://www.linkedin.com/in/alexis-werth-80496b30/",
  resumePath: "/Alexis_Werth_Resume.pdf",
  ctaLabel: "Why I'm Your Commercial Counsel",
  ctaAnchor: "#why-anthropic",

  navLinks: [
    { label: "Why Anthropic", href: "#why-anthropic" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ],

  experiences: [
    {
      id: "drata",
      company: "Drata Inc.",
      subtitle: "Agentic Trust Management Platform",
      title: "Senior Corporate Counsel",
      period: "2025 to Present",
      highlights: [
        "Handles the majority of Drata's commercial deal flow, drafting and negotiating thousands of enterprise customer agreements including MSAs, DPAs, NDAs, order forms, and other SaaS subscription agreements.",
        "Day-to-day GTM legal partner and second to SVP, Legal in a two-person team: directly supports Sales, Customer Success, and Procurement on deal velocity, escalations, and commercial risk.",
        "Driving a comprehensive revamp of the GTM-Legal process: established elevated negotiation thresholds, built AI-powered legal ops workflows, and evolved playbooks to formalize Legal SLAs.",
        "Designed and implemented Drata's privacy program end-to-end (DataGrail workflows, cookie/pixel governance, AI compliance), embedding the terms commercial customers expect directly into the product.",
        "Drata Legal's resident AI architect: identifying, stress-testing, and deploying AI tools across the legal function to reshape how commercial work gets done.",
      ],
    },
    {
      id: "snappy",
      company: "Snappy App, Inc.",
      subtitle: "Series D SaaS E-Commerce Gifting Platform",
      title: "Corporate Counsel",
      period: "2023 to 2025",
      highlights: [
        "Go-to-market legal lead: instrumental in closing customer deals that drove over 50% of the company's total annual sales revenue for 2024.",
        "Negotiated complex enterprise commercial agreements with focus on AI, data privacy, security, and IP, partnering directly with Sales leadership on strategic accounts.",
        "Provided 1:1 legal training to Enterprise AEs to help them navigate complex customer negotiations and accelerate deal close time between pre-contract and closed-won.",
        "Reduced sales request processing time by 30% after leading the design and implementation of an Ironclad-Salesforce workflow integration.",
        "Managed review and negotiation of $14M+ in annual procurement as Legal's representative on the Procurement Committee.",
      ],
    },
    {
      id: "mimecast",
      company: "Mimecast",
      subtitle: "PE-Backed SaaS Cybersecurity Platform",
      title: "Fractional Commercial Counsel",
      period: "2022",
      highlights: [
        "Redlined and negotiated SaaS Agreements, NDAs, DPAs, RFPs, MSAs, License Agreements, Vendor Services Agreements, Marketing Services Agreements, and Engagement Letters.",
        "Improved internal commercial processes through customer and vendor contract template creation.",
      ],
    },
    {
      id: "prometric",
      company: "Prometric",
      subtitle: "PE-Backed SaaS Assessment Platform",
      title: "Fractional Corporate Counsel",
      period: "2022",
      highlights: [
        "Supported VP of Legal Affairs with redline and negotiation of SaaS Agreements and RFPs.",
        "Drafted SOWs, MSAs, DPAs, and SLAs. Reviewed and updated company terms and conditions.",
      ],
    },
    {
      id: "axiom",
      company: "Axiom",
      subtitle: "Alternative Legal Services Provider",
      title: "Fractional Corporate Counsel",
      period: "2021 to 2022",
      highlights: [
        "Embedded with in-house legal teams across multiple SaaS and technology clients to drive commercial deal flow.",
        "Negotiated SaaS subscription agreements, MSAs, SOWs, NDAs, and vendor agreements on tight commercial timelines.",
      ],
    },
    {
      id: "cision",
      company: "Cision",
      subtitle: "Global SaaS Media & PR Platform",
      title: "Commercial & Product Counsel",
      period: "2020 to 2021",
      highlights: [
        "Commercial counsel for global SaaS platform: drafted and negotiated subscription agreements, DPAs, and partnership agreements with enterprise media and communications customers.",
        "Partnered with Product on go-to-market launches, embedding privacy and licensing terms into customer-facing offerings.",
      ],
    },
    {
      id: "kasirer",
      company: "Kasirer LLC",
      subtitle: "Government Relations & Lobbying Firm",
      title: "Director, Legal & Business Affairs",
      period: "2019 to 2020",
      highlights: [
        "Led legal and business affairs across all client engagements: drafted and negotiated commercial engagement letters, vendor contracts, and partnership agreements.",
        "Built out the firm's commercial contracting infrastructure and managed all transactional matters for the business.",
      ],
    },
    {
      id: "uft",
      company: "United Federation of Teachers",
      subtitle: "Major NYC Public Sector Union",
      title: "Counsel",
      period: "2017 to 2019",
      highlights: [
        "Drafted and negotiated commercial agreements supporting the union's operations, including vendor contracts, services agreements, and partnership arrangements.",
        "Advised on contract interpretation and risk across a broad portfolio of organizational matters.",
      ],
    },
  ],

  earlierRoles: [
    "Litigation Associate, Gottlieb & Janey",
    "Law Clerk, EEOC, Administrative Judge's Division",
    "Peggy Browning Fellow, Meyer, Suozzi, English & Klein, P.C.",
    "Law Clerk, NLRB, Region 2",
  ],

  fitItems: [
    {
      iconName: "Handshake",
      jobReq: "Own enterprise commercial deal flow alongside GTM",
      myFit: "Lead the majority of Drata's commercial deals today. Closed work supporting 50%+ of Snappy's 2024 revenue.",
      tags: ["MSAs", "DPAs", "Order Forms", "Enterprise SaaS"],
    },
    {
      iconName: "Brain",
      jobReq: "Pair AI fluency with a real privacy practice",
      myFit: "Designed Drata's privacy program end-to-end and serve as Legal's AI architect. AI and privacy terms sit in every deal I negotiate.",
      tags: ["Privacy Program", "AI Compliance", "DataGrail"],
    },
  ],

  education: [
    { degree: "Juris Doctor", school: "City University of New York", location: "New York, NY" },
    { degree: "Bachelor of Science", field: "Industrial & Labor Relations", school: "Cornell University", location: "Ithaca, NY" },
  ],
};

export default siteConfig;
