import type { ProjectDetailData } from '../types/project'

// Project detail data - will be populated with actual content in Prompts 12-13
export const projectDetails: Record<string, ProjectDetailData> = {
  panion: {
    id: 'panion',
    title: 'PANION at ABB E-mobility',
    company: 'ABB E-mobility',
    role: 'Principal Product Manager',
    period: 'June 2022 - Feb 2024',
    type: '0-to-1 AI B2B SaaS',
    isHeroProject: true,
    tagline: 'Building AI-Powered E-Mobility Products from 0-to-1 — Taking two undefined AI-based B2B SaaS products from concept to market in a fast-paced startup environment.',
    overview: 'PANION represents my most comprehensive 0-to-1 product journey. In a fast-paced startup environment within ABB E-mobility, I led the development of two AI-based B2B SaaS products designed to help EV charging operators optimize their operations and improve customer satisfaction.',
    challenge: 'The mission was daunting: build two undefined AI-based B2B SaaS products from scratch with no existing customers and uncertain product-market fit. We needed to help EV charging operators optimize their operations in a market that was still finding its footing.',
    responsibilities: [
      'Led end-to-end product strategy for two 0-to-1 AI products',
      'Collaborated with Engineering & Data Science teams on AI/ML implementation',
      'Partnered with Sales & GTM to define positioning and secure first customers',
      'Worked with Design & Research to validate user needs through extensive fieldwork',
      'Reported to Executive team on progress, pivots, and strategic decisions',
      'Built cross-functional alignment across distributed teams',
    ],
    approach: [
      {
        title: 'Deep Customer Immersion',
        description: 'Spent countless hours with operators in care facilities and charging stations, observing real workflows and pain points firsthand.',
      },
      {
        title: 'Extensive User Research',
        description: 'Conducted 30+ structured operator interviews, building a comprehensive understanding of the market needs and operator challenges.',
      },
      {
        title: 'Journey Mapping & Pain Point Analysis',
        description: 'Created detailed journey maps to identify critical pain points and opportunities for AI-powered optimization.',
      },
      {
        title: 'Data-Driven Decision Making',
        description: 'Established metrics frameworks and used data to validate hypotheses, inform prioritization, and measure impact.',
      },
      {
        title: 'Agile Sprint Execution',
        description: 'Implemented rigorous sprint planning and execution cycles, enabling rapid iteration and continuous delivery of value.',
      },
    ],
    keyDecisions: [
      {
        decision: 'Focus on Operator Pain Points First',
        rationale: 'Instead of building technology-first, we chose to deeply understand operator workflows before defining product features.',
        outcome: 'Secured first paying customer by solving real, validated problems.',
      },
      {
        decision: 'AI-Assisted Rather Than AI-Replaced',
        rationale: 'Operators needed tools that augmented their expertise, not replaced their judgment.',
        outcome: '35% increase in team efficiency with high user adoption.',
      },
      {
        decision: 'Iterative MVP Approach',
        rationale: 'In an uncertain market, we chose rapid iteration over big-bang launches.',
        outcome: 'Achieved product-market fit faster through continuous learning.',
      },
    ],
    results: [
      { metric: 'First Customer', value: '✓', description: 'Secured first paying customer' },
      { metric: 'Charging Time', value: '+50%', description: 'Improvement in efficiency' },
      { metric: 'Complaints', value: '-30%', description: 'Reduction in delivery issues' },
      { metric: 'Team Efficiency', value: '+35%', description: 'Increase in productivity' },
    ],
    learnings: [
      'In 0-to-1 products, spending time in the field with customers is the highest-leverage activity. The insights from 30+ interviews shaped every major product decision.',
      'Cross-functional leadership means different things to different teams. Engineering needs clarity, Sales needs flexibility, and Executives need confidence. Adapt your communication style accordingly.',
      'AI products require extra effort in building user trust. Transparency about what the AI can and cannot do accelerated adoption more than impressive demos.',
      'Fast-paced startup environments reward decisive action over perfect analysis. Learn to make good decisions with incomplete information.',
    ],
    nextProject: { id: 'sap-migration', title: 'SAP Cloud Migration' },
  },

  'sap-migration': {
    id: 'sap-migration',
    title: 'SAP Cloud Migration',
    company: 'SAP Labs',
    role: 'Senior Product Manager',
    period: '2015-2020',
    type: 'Enterprise Scale',
    tagline: 'Led the migration of legacy on-premise solutions to SAP Cloud Platform, managing a €200M program affecting 12,000+ enterprise customers.',
    overview: 'A strategic initiative to transition SAP\'s largest enterprise customers from on-premise deployments to the cloud-native SAP Cloud Platform.',
    challenge: 'Enterprise customers with decades of customizations faced significant barriers to cloud adoption: data migration complexity, business continuity risks, and change management challenges.',
    responsibilities: [
      'Owned product strategy for migration tooling and processes',
      'Managed roadmap for €200M program with 50+ team members',
      'Coordinated with 12,000+ enterprise customer accounts',
      'Designed migration assessment and planning frameworks',
      'Led cross-functional alignment across engineering, sales, and support',
      'Established success metrics and tracking dashboards',
    ],
    approach: [
      {
        title: 'Customer Segmentation',
        description: 'Categorized customers by complexity, customization level, and business criticality to create tailored migration paths.',
      },
      {
        title: 'Migration Toolkit Development',
        description: 'Built automated assessment and migration tools to reduce manual effort and minimize business disruption.',
      },
      {
        title: 'Phased Rollout',
        description: 'Implemented staged migration approach starting with less complex deployments to build confidence and refine processes.',
      },
      {
        title: 'Change Management',
        description: 'Developed comprehensive training and communication programs to support customer teams through the transition.',
      },
    ],
    keyDecisions: [
      {
        decision: 'Hybrid Migration Path',
        rationale: 'Full cloud migration was too risky for mission-critical systems. Hybrid approach allowed gradual transition.',
        outcome: '95% migration completion rate with zero critical incidents.',
      },
      {
        decision: 'Self-Service Assessment Tool',
        rationale: 'Manual assessments couldn\'t scale to 12,000+ customers. Automation would accelerate pipeline.',
        outcome: 'Reduced assessment time from 2 weeks to 2 days.',
      },
    ],
    results: [
      { metric: 'Program Value', value: '€200M', description: 'Total program budget' },
      { metric: 'Customers', value: '12,000+', description: 'Accounts migrated' },
      { metric: 'Success Rate', value: '95%', description: 'Migration completion' },
      { metric: 'Time Saved', value: '10x', description: 'Assessment acceleration' },
    ],
    learnings: [
      'Enterprise migration is as much about change management as technology - investing in customer communication paid dividends.',
      'Building internal tools that help support teams directly improves customer satisfaction more than feature additions.',
      'Data shows that customers who completed structured assessments had 3x higher migration success rates.',
    ],
    prevProject: { id: 'panion', title: 'PANION' },
    nextProject: { id: 'voize', title: 'Voize Nursing App' },
  },

  voize: {
    id: 'voize',
    title: 'Voize Nursing App',
    company: 'Side Project',
    role: 'Product Lead',
    period: '2023-Present',
    type: 'Voice AI + Healthcare',
    isSideProject: true,
    status: 'prototype',
    tagline: 'Developing a voice-first documentation app for nurses, reducing administrative burden through AI-powered transcription and smart form filling.',
    overview: 'A voice-first mobile application that allows nurses to document patient care through natural speech, automatically filling structured forms and reducing time spent on administrative tasks.',
    challenge: 'Nurses spend up to 40% of their shift on documentation, taking time away from patient care. Existing solutions require manual data entry and don\'t fit clinical workflows.',
    responsibilities: [
      'Defined product vision and feature prioritization',
      'Conducted user research with 20+ nursing professionals',
      'Designed voice interaction patterns and UI/UX',
      'Managed development with a small team of 3',
      'Ran beta testing program with 50+ users',
      'Iterated on AI accuracy and clinical terminology support',
    ],
    approach: [
      {
        title: 'User Shadowing',
        description: 'Spent 40+ hours observing nurses in clinical settings to understand documentation pain points and workflow constraints.',
      },
      {
        title: 'Voice-First Design',
        description: 'Designed interaction patterns optimized for hands-free operation in busy clinical environments.',
      },
      {
        title: 'AI Model Training',
        description: 'Fine-tuned speech recognition models on clinical terminology and nursing documentation patterns.',
      },
      {
        title: 'Beta Program',
        description: 'Launched closed beta with 50 nurses across 3 healthcare facilities to validate accuracy and workflow fit.',
      },
    ],
    keyDecisions: [
      {
        decision: 'Focus on Structured Output',
        rationale: 'Free-form transcription wasn\'t useful - nurses needed data in specific forms and formats.',
        outcome: '97% form field accuracy, reducing manual corrections.',
      },
      {
        decision: 'Offline-First Architecture',
        rationale: 'Hospital WiFi is unreliable. App needed to work without connectivity.',
        outcome: 'Zero workflow disruptions due to connectivity issues.',
      },
    ],
    results: [
      { metric: 'Time Saved', value: '40%', description: 'Documentation time reduced' },
      { metric: 'Beta Users', value: '50+', description: 'Active beta testers' },
      { metric: 'Accuracy', value: '97%', description: 'Form field accuracy' },
      { metric: 'NPS', value: '72', description: 'User satisfaction score' },
    ],
    learnings: [
      'Healthcare AI requires extreme attention to accuracy - even 95% isn\'t good enough when patient safety is involved.',
      'Voice interfaces need robust error handling and confirmation flows to build user trust.',
      'Side projects benefit from tight scope - focusing on one use case (nursing documentation) over general healthcare.',
    ],
    prevProject: { id: 'sap-migration', title: 'SAP Cloud Migration' },
    nextProject: { id: 'dogq', title: 'DogQ AI Testing' },
  },

  dogq: {
    id: 'dogq',
    title: 'DogQ AI Testing',
    company: 'DogQ',
    role: 'Head of Product',
    period: '2024-Present',
    type: 'AI-Powered QA',
    externalUrl: 'https://www.dogq.io',
    tagline: 'Leading product strategy for an AI-driven testing platform that automates QA workflows, achieving #1 Product Hunt launch.',
    overview: 'DogQ is an AI-powered testing platform that automatically generates, maintains, and executes test cases, dramatically reducing the time and expertise needed for quality assurance.',
    challenge: 'Software teams struggle with test coverage - manual testing is slow, test automation requires specialized skills, and tests break frequently with code changes.',
    responsibilities: [
      'Defining product strategy and competitive positioning',
      'Leading product launches including #1 Product Hunt debut',
      'Managing roadmap and feature prioritization',
      'Driving user activation and retention improvements',
      'Coordinating with engineering on AI model improvements',
      'Building partnerships with development tool vendors',
    ],
    approach: [
      {
        title: 'Market Analysis',
        description: 'Analyzed competitive landscape and identified key differentiators in AI-first approach to test generation.',
      },
      {
        title: 'Activation Focus',
        description: 'Redesigned onboarding flow to get users to "aha moment" faster, reducing time-to-first-test from days to minutes.',
      },
      {
        title: 'AI Model Iteration',
        description: 'Worked with ML team to improve test generation accuracy through user feedback loops and model fine-tuning.',
      },
      {
        title: 'Launch Strategy',
        description: 'Orchestrated Product Hunt launch with community building, achieving #1 Product of the Day.',
      },
    ],
    keyDecisions: [
      {
        decision: 'Focus on No-Code Users First',
        rationale: 'Traditional automation tools target developers. Biggest opportunity was non-technical QA teams.',
        outcome: '60% of users are non-developers, expanding total addressable market.',
      },
      {
        decision: 'Self-Healing Tests',
        rationale: 'Test maintenance is the #1 pain point. AI-powered self-healing would be key differentiator.',
        outcome: '80% reduction in test maintenance time.',
      },
    ],
    results: [
      { metric: 'Product Hunt', value: '#1', description: 'Product of the Day' },
      { metric: 'Activation', value: '+25%', description: 'Improvement in user activation' },
      { metric: 'Test Coverage', value: '3x', description: 'Average increase for customers' },
      { metric: 'Time Saved', value: '80%', description: 'Test maintenance reduction' },
    ],
    learnings: [
      'Product Hunt success requires months of preparation - community building, timing, and compelling narrative.',
      'AI product development requires balancing user expectations with model capabilities - underselling often works better than overpromising.',
      'Developer tools need exceptional documentation and self-serve capabilities - users expect to evaluate without sales calls.',
    ],
    prevProject: { id: 'voize', title: 'Voize Nursing App' },
    nextProject: { id: 'reviewflow', title: 'ReviewFlow' },
  },

  reviewflow: {
    id: 'reviewflow',
    title: 'ReviewFlow',
    company: 'Side Project',
    role: 'Founder & AI PM',
    period: 'Jan 2026 - Present',
    type: 'AI-Powered SaaS',
    isSideProject: true,
    status: 'live',
    externalUrl: 'https://review-flow-kappa.vercel.app',

    tagline: 'Designing and building an AI-powered review response platform from scratch — applying product thinking to solve a real SMB pain point with dual-AI architecture, credit-based monetization, and a phased roadmap built for learning.',

    overview: 'ReviewFlow is an AI-powered platform that helps small and mid-size businesses manage and respond to customer reviews at scale. Rather than spending 5-20 hours per week crafting individual responses, business owners generate brand-aligned, context-aware replies in seconds using Claude AI, with sentiment analysis powered by DeepSeek. The platform supports 40+ languages with native-quality generation and uses a credit-based pricing model designed for predictable unit economics. I built this end-to-end — from problem identification and market research through architecture decisions, implementation, and iterative refinement — treating it as a full product management exercise with real users and real constraints.',

    challenge: 'Small business owners are caught in a painful bind: customer reviews directly impact revenue and reputation, but responding thoughtfully to each one is a manual, time-intensive process. Existing solutions are either too expensive for SMBs, generate generic responses that damage brand voice, or require technical integration work that small teams cannot support. The challenge was to build an AI product that delivers enterprise-quality response generation at SMB-friendly pricing, while navigating real cost constraints around AI model usage — all as a solo PM shipping end-to-end.',

    responsibilities: [
      'Identified and validated the market opportunity through competitive analysis and user research',
      'Defined product strategy including a 6-phase roadmap from MVP to platform maturity',
      'Designed the dual-AI architecture: Claude for generation, DeepSeek for sentiment analysis',
      'Built the credit-based pricing model with cost modeling across three tiers',
      'Made scope and prioritization decisions to ship a focused MVP within 3 months',
      'Implemented the full-stack application: Next.js, Prisma, PostgreSQL, Supabase, Vercel',
      'Documented trade-offs and decisions in DECISIONS.md for transparency and future reference',
      'Designed UX flows optimized for speed-to-value: review input to generated response in under 10 seconds',
    ],

    approach: [
      {
        title: 'Problem Validation & Market Sizing',
        description: 'Researched the review management space, identified that SMBs spend 5-20 hours/week on review responses, and confirmed willingness to pay through competitive pricing analysis. Mapped the competitive landscape to find the gap: no tool offered affordable AI generation with native multilingual quality.',
      },
      {
        title: 'Phased Roadmap Design',
        description: 'Designed a 6-phase roadmap (Foundation → AI Core → Business Model → User Experience → Integrations → Scale) that sequences risk: validate the AI quality first, then layer on monetization and integrations. Each phase has clear entry/exit criteria and learning goals.',
      },
      {
        title: 'Architecture for Cost Control',
        description: 'Chose a dual-AI strategy early: Claude Sonnet 4 for high-quality response generation (the value driver) and DeepSeek for sentiment analysis (10x cheaper for a classification task). This keeps the per-request cost viable at SMB price points while maintaining output quality where it matters most.',
      },
      {
        title: 'MVP Scope Discipline',
        description: 'Deliberately chose manual review input for MVP over API integrations with Google/Yelp. This reduced scope by months, got the product to users faster, and validated the core value proposition (AI response quality) without coupling it to third-party API complexity. The roadmap sequences CSV import next, then direct integrations.',
      },
      {
        title: 'Iterative Build with Documentation',
        description: 'Adopted a risk-driven documentation strategy: documented trade-off decisions in DECISIONS.md as they happened, maintained a living roadmap, and tracked progress against phase milestones. This created a transparent artifact of product thinking — useful both as a PM portfolio piece and as actual project governance.',
      },
    ],

    keyDecisions: [
      {
        decision: 'Credit-Based Pricing Over Per-Review or Subscription-Only',
        rationale: 'Per-review pricing creates anxiety about usage and discourages exploration. Flat subscription with unlimited usage makes cost unpredictable with AI API expenses. Credits provide a transparent value exchange: users understand what they get, costs are predictable for both sides, and upsell is natural as usage grows.',
        outcome: 'Pricing structure supports positive unit economics from the Starter tier onward, with clear upgrade triggers as businesses grow their review volume.',
      },
      {
        decision: 'Dual-AI Strategy: Claude for Generation, DeepSeek for Sentiment',
        rationale: 'Response generation is the core value — it needs to be excellent. Sentiment analysis is a classification task where a cheaper model performs adequately. Running both tasks on Claude would make per-request costs 10x higher for sentiment, destroying unit economics at SMB price points.',
        outcome: 'Achieved high-quality response generation while keeping per-request cost viable. Sentiment analysis runs at roughly $0.001/request vs $0.01+ if using Claude — a 10x cost reduction on a high-frequency operation.',
      },
      {
        decision: 'Manual Input First, CSV Second, Integrations Third',
        rationale: 'The riskiest assumption is whether the AI-generated responses are good enough. Direct platform integrations add months of complexity and ongoing maintenance. Manual input isolates the core hypothesis: does the AI generate responses that business owners actually want to send?',
        outcome: 'Shipped MVP in under 3 months. Early user feedback confirmed response quality is the value driver, validating the sequencing decision.',
      },
      {
        decision: 'Native Language Generation Over Post-Translation',
        rationale: 'Translating an English response into another language loses nuance, cultural context, and natural phrasing — which matters enormously for customer-facing communication. Claude generates natively in 40+ languages, producing responses that read as written by a native speaker.',
        outcome: 'Multilingual support became a genuine differentiator rather than a checkbox feature. Responses in non-English languages maintain brand voice and cultural appropriateness.',
      },
      {
        decision: 'Risk-Driven Documentation Over Comprehensive Docs',
        rationale: 'As a solo builder, writing full specifications for every feature is waste. Instead, documented only the decisions with meaningful trade-offs in DECISIONS.md, maintained a living roadmap, and kept progress tracking lightweight.',
        outcome: 'DECISIONS.md became both a governance tool and a portfolio artifact — demonstrating structured product thinking to anyone reviewing the project.',
      },
    ],

    results: [
      { metric: 'Response Speed', value: '10x', description: 'Faster than manual response writing' },
      { metric: 'Languages', value: '40+', description: 'Native-quality generation' },
      { metric: 'MVP Timeline', value: '<3mo', description: 'From concept to deployed product' },
      { metric: 'Time Saved', value: '10+ hrs', description: 'Per week for active users' },
    ],

    learnings: [
      'AI product management requires a fundamentally different cost model than traditional SaaS. Every API call has a marginal cost, which means pricing, usage patterns, and model selection are product decisions — not just engineering choices. The dual-AI strategy was a product decision disguised as a technical one.',
      'MVP scope discipline is harder when you are both the PM and the engineer. The temptation to build "just one more feature" is stronger when the cost is your own time rather than a team\'s velocity. Committing to the manual-input-first approach required deliberately choosing to ship something I knew was incomplete.',
      'Credit-based pricing solves the AI SaaS monetization problem better than subscriptions alone. It aligns costs with value, gives users control, and creates a natural expansion path. The key insight was modeling unit economics per credit, not per user.',
      'Documenting decisions as they happen — not retroactively — produces better artifacts and better decisions. The act of writing the rationale in DECISIONS.md often exposed weak reasoning before it became committed code.',
    ],

    prevProject: { id: 'dogq', title: 'DogQ AI Testing' },
  },
}
