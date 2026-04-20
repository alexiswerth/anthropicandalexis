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
  label: string;
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
  bio: "Commercial counsel with 10+ years of contracts experience partnering with go-to-market teams to bring deals across the finish line. A contracts expert first and foremost: thousands of enterprise SaaS agreements negotiated, with deep adjacent fluency in AI and data privacy, legal ops, IP, procurement, and policy. Across every role, I have built the relationships, contracts, privacy programs, and processes that help businesses grow.",
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
        "Handles the majority of Drata's commercial deal flow, drafting and negotiating hundreds of enterprise customer agreements including MSAs, DPAs, NDAs, order forms, and other SaaS subscription agreements.",
        "Day-to-day GTM legal partner and second to SVP, Legal in a two-person team: directly supports Sales, Customer Success, and Procurement on deal velocity, escalations, and commercial risk.",
        "Driving a comprehensive revamp of the GTM-Legal process: established elevated negotiation thresholds, built AI-powered legal ops workflows, and evolved playbooks to formalize Legal SLAs.",
        "Designed and implemented Drata's privacy program end-to-end (DataGrail workflows, cookie/pixel governance, AI compliance).",
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
        "Managed review and negotiation of $14M+ in annual procurement contracts on behalf of Legal as Legal's representative on the Procurement Committee.",
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
      id: "cision",
      company: "Brandwatch (now Cision)",
      subtitle: "Global SaaS Media & PR Platform",
      title: "Commercial & Product Counsel",
      period: "2021",
      highlights: [
        "Commercial counsel for global SaaS platform: drafted and negotiated subscription agreements, DPAs, and partnership agreements with enterprise media and communications customers.",
        "Partnered with Product on go-to-market launches, embedding privacy and licensing terms into customer-facing offerings.",
      ],
    },
  ],

  earlierRoles: [
    "Director, Legal & Business Affairs, Kasirer LLC",
    "Counsel, United Federation of Teachers",
    "Litigation Associate, Gottlieb & Janey",
    "Law Clerk, EEOC, Administrative Judge's Division",
    "Peggy Browning Fellow, Meyer, Suozzi, English & Klein, P.C.",
    "Law Clerk, NLRB, Region 2",
  ],

  fitItems: [
    {
      iconName: "Handshake",
      label: "Commercial Deal Flow",
      jobReq: "Draft, review, and negotiate commercial agreements with a primary focus on GTM/Sales transactions including enterprise customer contracts.",
      myFit: "Contracts expert first and foremost. Lead the majority of Drata's commercial deal flow today: hundreds of enterprise customer agreements per year (MSAs, DPAs, NDAs, order forms, SaaS subscriptions). At Snappy, my work directly supported 50%+ of 2024 revenue. Thousands of deals negotiated across my career.",
      tags: ["MSAs", "DPAs", "Order Forms", "Enterprise SaaS"],
    },
    {
      iconName: "Zap",
      label: "GTM Partnership & Velocity",
      jobReq: "Partner closely with Sales and Go-to-Market teams to support deal velocity and provide practical legal guidance.",
      myFit: "Day-to-day GTM legal partner at Drata, second to SVP Legal in a two-person team. Built the GTM-Legal process from playbooks and SLAs to AI-powered legal ops workflows. Cut sales request time 30% at Snappy via Ironclad-Salesforce integration. 1:1 AE training to accelerate close.",
      tags: ["Sales Enablement", "Legal Ops", "Ironclad", "Salesforce"],
    },
    {
      iconName: "Brain",
      label: "AI, Privacy & Policy Adjacent",
      jobReq: "Stay current on legal developments affecting AI; partner with Policy, Safeguards, and Research teams on novel AI governance initiatives.",
      myFit: "Designed Drata's privacy program end-to-end (DataGrail workflows, cookie/pixel governance, AI compliance). Drata Legal's resident AI architect: identify, stress-test, and deploy AI tools across the legal function.",
      tags: ["AI Compliance", "Privacy Program", "DataGrail"],
    },
    {
      iconName: "Shield",
      label: "Generalist with Range",
      jobReq: "Roll up your sleeves and pitch in where needed across multi-stakeholder agreements involving technical and policy considerations.",
      myFit: "This is where I do my best work. I'm a Jane of all Trades and I thrive on it. Being part of a team is what matters most to me: showing up, pitching in wherever I'm needed, and building something together.",
      tags: ["Generalist", "Team Player", "Low Ego", "Versatile"],
    },
  ],

  education: [
    { degree: "Juris Doctor", school: "City University of New York", location: "New York, NY" },
    { degree: "Bachelor of Science", field: "Industrial & Labor Relations", school: "Cornell University", location: "Ithaca, NY" },
  ],
};

export default siteConfig;
