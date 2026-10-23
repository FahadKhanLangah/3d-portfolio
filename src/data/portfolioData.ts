import { Project, SkillCategory, ExperienceItem, LocalBusinessOffer } from '../types';

export const PERSONAL_INFO = {
  name: "Fahad Khan",
  title: "Full-Stack Developer & Founder @ Noxvira",
  roles: [
    "Senior Full-Stack Engineer",
    "NestJS & Node.js Backend Architect",
    "Next.js & React Frontend Specialist",
    "Flutter Cross-Platform Developer",
    "Founder @ Noxvira Agency"
  ],
  bioRecruiter: "Full-stack developer with a deep backend focus. I design and scale resilient NestJS and Node.js microservices with JWT/OAuth auth, RBAC, high-throughput WebSockets, and real-time payments, paired with reactive Next.js and Flutter frontends. Built production backends live on Google Play.",
  bioClient: "Founder at Noxvira. We take your digital product from napkin sketch to a production-ready web and mobile platform in an average of 21 days. Trusted by startup founders across the US, UK, Gulf, Germany, and Pakistan.",
  phone: "+92-318-7357005",
  email: "fahadkhanavoid@gmail.com",
  location: "Pakistan (Available for Remote Worldwide)",
  agencyUrl: "https://www.noxvira.com",
  portfolioUrl: "https://fahad-khan-portfolio.vercel.app",
  github: "https://github.com/fahadkhanavoid",
  linkedin: "https://www.linkedin.com/in/fahad-khan-fullstack",
  whatsappUrl: "https://wa.me/923187357005?text=Hi%20Fahad,%20I%20saw%20your%203D%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity!",
  experienceYears: "3+",
  shippedProjects: "40+",
  avgDeliveryDays: "21",
  clientCountries: "5+",
  education: {
    degree: "BS Computer Science",
    institution: "The Islamia University of Bahawalpur (IUB)",
    year: "Graduated"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "orbit-chat-ride",
    title: "Orbit: Real-time Ride-Hailing & Chat",
    subtitle: "End-to-end transport & messaging platform live on Google Play",
    category: "Mobile & Realtime",
    description: "Built scalable NestJS backend APIs for real-time driver tracking, geolocation routing, instant chat, role-based admin panels, and dual M-Pesa & Stripe checkout.",
    longDescription: "Orbit is a full-fledged ride-hailing and instant communication platform built for high-concurrency mobile users. The system leverages WebSocket clustering to broadcast real-time driver coordinates with sub-100ms latency, handles dynamic fare calculation with surge pricing, and provides bank-grade payment processing with webhook reliability.",
    tags: ["Flutter", "NestJS", "MongoDB", "WebSockets", "Stripe", "M-Pesa", "Google Maps API", "Docker"],
    metrics: [
      { label: "Platform Status", value: "Live on Play Store" },
      { label: "Location Ping Latency", value: "<85ms" },
      { label: "Payment Gateways", value: "M-Pesa & Stripe" },
      { label: "Architecture", value: "Event-Driven Microservices" }
    ],
    architecturePoints: [
      "NestJS microservices architecture with isolated authentication and dispatch engines",
      "WebSocket gateway using Redis pub/sub for cross-server message distribution",
      "Geospatial indexing in MongoDB for high-speed nearby driver discovery within 5km radius",
      "Automated webhook verification for Stripe & M-Pesa callbacks with idempotency guarantees"
    ],
    liveUrl: "https://play.google.com",
    playStoreUrl: "https://play.google.com",
    featured: true,
    accentColor: "#00F0FF"
  },
  {
    id: "aincore-crypto",
    title: "Aincore: Crypto & Gold Trading Exchange",
    subtitle: "High-frequency asset trading platform with live WebSocket market charts",
    category: "Fintech",
    description: "Next.js and MySQL trading platform featuring live price feeds, candlestick charts, real-time portfolio balance reconciliation, and instant order placement.",
    longDescription: "Aincore provides traders with real-time pricing intelligence for gold and digital assets. It features interactive TradingView-style charts powered by high-frequency socket feeds, custom transaction logging with strict decimal precision, and a responsive glassmorphic UI.",
    tags: ["Next.js", "MySQL", "Tailwind CSS", "WebSockets", "Trading Engine", "Chart.js", "Prisma"],
    metrics: [
      { label: "Real-time Ticker", value: "Sub-second" },
      { label: "Trading Engine", value: "Zero Slip Logic" },
      { label: "UI Response", value: "60 FPS Smooth" },
      { label: "Database", value: "ACID Compliant MySQL" }
    ],
    architecturePoints: [
      "Real-time WebSocket streaming for order book and asset tick updates",
      "Optimistic UI updates with pessimistic balance locks to prevent double-spending",
      "Server-side rendered financial dashboards with dynamic SEO metadata",
      "Tailwind CSS custom dark mode theme with zero runtime overhead"
    ],
    featured: true,
    accentColor: "#F59E0B"
  },
  {
    id: "hospital-management",
    title: "Enterprise Hospital & EHR Suite",
    subtitle: "Centralized healthcare ERP with HIPAA-conscious RBAC & automated billing",
    category: "Enterprise / SaaS",
    description: "Multi-tenant hospital platform managing electronic health records, doctor scheduling, automated patient billing, and role-based doctor/admin dashboards.",
    longDescription: "Developed for private clinics and multi-department hospitals to digitize patient operations end to end. Features encrypted patient records, real-time doctor availability calendars, automated invoice generation, and granular RBAC preventing unauthorized staff data access.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "RBAC", "Docker"],
    metrics: [
      { label: "Data Privacy", value: "Strict Multi-Tier RBAC" },
      { label: "Query Speed", value: "3x Faster with Redis" },
      { label: "Record Security", value: "AES-256 at Rest" },
      { label: "System Uptime", value: "99.9% Reliable" }
    ],
    architecturePoints: [
      "Role-Based Access Control (RBAC) guards protecting patient medical records",
      "Redis caching layer for doctor schedules and high-traffic appointment slots",
      "Relational PostgreSQL schema managed via Prisma migrations with referential integrity",
      "Automated PDF medical invoice & prescription generator service"
    ],
    featured: true,
    accentColor: "#00C6A7"
  },
  {
    id: "guldasta-ecommerce",
    title: "GulDasta: 3D Floral Customization Store",
    subtitle: "Bespoke e-commerce with real-time interactive bouquet visualizer",
    category: "Full-Stack",
    description: "Full-stack boutique store featuring a real-time visual bouquet builder (color, flower variety, wrapping), session management, and admin inventory control.",
    longDescription: "GulDasta revolutionizes floral gifting by allowing customers to build custom arrangements in real-time. Changes in flower quantity, ribbon textures, and wrapping dynamically update the live 3D visualizer and calculate dynamic cost breakdowns on the fly.",
    tags: ["Next.js", "Three.js / Canvas", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    metrics: [
      { label: "Customizer", value: "Real-time 3D/Canvas" },
      { label: "Cart Conversion", value: "+38% with Builder" },
      { label: "Checkout", value: "Instant 1-Click" },
      { label: "Inventory", value: "Live Sync" }
    ],
    architecturePoints: [
      "Custom interactive canvas rendering engine displaying dynamic bouquet layers",
      "Stateless JWT and secure cookie session management for cart persistence",
      "Dynamic pricing engine calculating flower stem costs and packaging tiers",
      "Admin dashboard with visual inventory alerts and live order dispatch tracking"
    ],
    featured: true,
    accentColor: "#EC4899"
  },
  {
    id: "boulevard-509",
    title: "Boulevard 509 Mobile & Web Ecosystem",
    subtitle: "Lifestyle app and web brand platform for high-end commerce",
    category: "Mobile & Realtime",
    description: "Delivered a cross-platform Flutter mobile app synchronized with a high-performance web storefront, giving customers seamless booking and orders.",
    longDescription: "Boulevard 509 is an omnichannel mobile application and online portal delivering seamless lifestyle services, branded catalogues, push notifications, and localized payment options.",
    tags: ["Flutter", "Dart", "WordPress REST API", "Firebase", "Cross-Platform"],
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Sync Latency", value: "Instant" },
      { label: "Push Alerts", value: "FCM Integrated" },
      { label: "Client Rating", value: "5.0 ★" }
    ],
    architecturePoints: [
      "Flutter BLOC architecture for state management and clean separation of concerns",
      "Cached network images with offline fallback capabilities",
      "Firebase Cloud Messaging (FCM) for targeted user retention push campaigns"
    ],
    featured: false,
    accentColor: "#8B5CF6"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Architecture & APIs",
    description: "Resilient server-side systems built for high throughput and security.",
    skills: [
      { name: "NestJS", level: "Expert", icon: "Server", highlight: true, description: "Dependency injection, modular microservices, decorators, guards, and interceptors." },
      { name: "Node.js & Express", level: "Expert", icon: "Cpu", highlight: true, description: "Non-blocking event loop, stream processing, and REST API design." },
      { name: "PostgreSQL & Prisma", level: "Advanced", icon: "Database", highlight: true, description: "Complex joins, indexing strategies, migrations, and ACID integrity." },
      { name: "MongoDB & Mongoose", level: "Advanced", icon: "Layers", description: "Document modeling, aggregation pipelines, and geospatial indexing." },
      { name: "Redis", level: "Advanced", icon: "Zap", highlight: true, description: "In-memory caching, pub/sub message brokers, and rate limiting." },
      { name: "WebSockets & Socket.io", level: "Expert", icon: "Radio", highlight: true, description: "Bi-directional real-time data streaming and room management." },
      { name: "Auth & RBAC", level: "Expert", icon: "ShieldCheck", description: "JWT, OAuth2, session guards, and role-based permission tiers." }
    ]
  },
  {
    title: "Frontend & Mobile Engineering",
    description: "Fluid, high-performance interfaces engineered for conversion and usability.",
    skills: [
      { name: "Next.js (App Router)", level: "Expert", icon: "Globe", highlight: true, description: "Server components, streaming SSR, edge functions, and SEO tuning." },
      { name: "React.js", level: "Expert", icon: "Atom", highlight: true, description: "Custom hooks, state management, concurrent rendering, and performance audits." },
      { name: "Flutter & Dart", level: "Advanced", icon: "Smartphone", highlight: true, description: "Single codebase iOS/Android, native bridges, animations, Google Play release." },
      { name: "Three.js / 3D WebGL", level: "Proficient", icon: "Box", highlight: true, description: "3D scene graphs, shaders, lighting, and interactive WebGL canvas." },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette", description: "Responsive glassmorphic UI, design systems, and token architectures." }
    ]
  },
  {
    title: "DevOps, Cloud & AI Acceleration",
    description: "Infrastructure automation and modern AI-augmented delivery.",
    skills: [
      { name: "Docker & Containers", level: "Advanced", icon: "Container", highlight: true, description: "Multi-stage builds, container orchestration, and dev/prod parity." },
      { name: "AWS (S3, EC2, CloudFront)", level: "Intermediate", icon: "Cloud", description: "Cloud hosting, object storage, and global CDN delivery." },
      { name: "Git & CI/CD", level: "Expert", icon: "GitBranch", description: "Automated pipelines, GitHub Actions, and semantic release versioning." },
      { name: "AI-Augmented Dev", level: "Expert", icon: "Sparkles", highlight: true, description: "Leveraging Copilot, Cursor & Claude for 3x development velocity." }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 – Present",
    role: "Full-Stack Developer & Founder",
    company: "Noxvira",
    companyUrl: "https://www.noxvira.com",
    location: "Remote",
    description: "Founded and lead Noxvira, an engineering studio delivering production web and mobile software for startups and international founders across US, UK, Gulf, Germany, and Pakistan.",
    achievements: [
      "Delivered 40+ production applications from initial architecture to live production deployment.",
      "Engineered full-stack backends in NestJS and frontends in Next.js/Flutter with sub-second response times.",
      "Maintained an average MVP turnaround of 21 days with 100% on-time milestone delivery.",
      "Designed secure payment flows integrating Stripe, PayPal, M-Pesa, and custom crypto gateways."
    ],
    techStack: ["NestJS", "Next.js", "Flutter", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"]
  },
  {
    period: "July 2025 – May 2026",
    role: "Software Developer",
    company: "Nexsoll Digital Agency",
    location: "Hybrid / Remote",
    description: "Worked on core backend and frontend architectures for flagship agency applications and enterprise clients.",
    achievements: [
      "Architected backend microservices for Orbit Chat and Ride-Hailing App (live on Google Play).",
      "Engineered real-time financial trading interface and database schema for Aincore Crypto.",
      "Contributed to full-stack delivery for Orbit Chat Web, Sachsa Form, and Super App.",
      "Optimized query performance and reduced server API response latency by over 35%."
    ],
    techStack: ["Flutter", "NestJS", "Node.js", "MySQL", "MongoDB", "REST APIs", "Tailwind CSS"]
  }
];

export const LOCAL_BUSINESS_OFFERS: LocalBusinessOffer[] = [
  {
    id: "local-ecommerce",
    title: "Complete E-Commerce Store",
    tagline: "Turn local browsers into paying customers with automated ordering",
    idealFor: "Retailers, clothing brands, floral shops, electronics, artisanal brands",
    deliveryTime: "7 - 14 Days",
    startingPricePKR: "Rs. 75,000",
    startingPriceUSD: "$350",
    badge: "Most Popular",
    features: [
      "Custom responsive storefront (Mobile + Desktop)",
      "WhatsApp 1-Click order checkout integration",
      "Card payments + Cash on Delivery (COD) tracking",
      "Admin inventory and order dispatch panel",
      "Fast Google-optimized SEO so locals find you first",
      "Free 30 days post-launch technical support"
    ]
  },
  {
    id: "clinic-management",
    title: "Clinic & Hospital Suite",
    tagline: "Digitize appointments, patient records, and doctor scheduling",
    idealFor: "Private clinics, dental practices, diagnostic labs, hospitals",
    deliveryTime: "14 - 21 Days",
    startingPricePKR: "Rs. 120,000",
    startingPriceUSD: "$600",
    badge: "High ROI",
    features: [
      "Automated online patient appointment booking",
      "Electronic Health Records (EHR) with patient history",
      "SMS & WhatsApp appointment reminders",
      "Staff management with role-based privacy (RBAC)",
      "Automated billing & printable prescription slips",
      "Zero paperwork, cloud-accessible from phone or PC"
    ]
  },
  {
    id: "custom-mobile-app",
    title: "Cross-Platform Mobile App",
    tagline: "Your own iOS & Android app live on App Store & Google Play",
    idealFor: "Startups, booking services, delivery fleets, community apps",
    deliveryTime: "21 - 30 Days",
    startingPricePKR: "Rs. 180,000",
    startingPriceUSD: "$850",
    badge: "Enterprise Grade",
    features: [
      "Single Flutter codebase for both Android & iPhone",
      "Push notifications to re-engage customers daily",
      "Real-time GPS tracking or live chat capabilities",
      "Secure backend with customer authentication",
      "Complete Google Play Store release submission",
      "Source code ownership & documentation included"
    ]
  }
];
