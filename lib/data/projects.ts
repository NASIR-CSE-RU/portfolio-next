export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  fullDescription?: string
  metrics?: { label: string; value: string }[]
  details?: Array<{ title: string; items: string[] }>
}

export const projects: Project[] = [
  {
    title: "ShareTrip — Accounting Platform with Real-Time Consolidation",
    description:
      "I developed the accounting platform for ShareTrip, an audit-ready double-entry system built for high-volume transactions. It supports real-time consolidation across products, automated journal entries, and accurate ledger posting with 95–100% success. The platform improved reporting performance by ~40% through optimized queries, indexing, and scalable data pipelines.",
    image: "/ecommerce-platform-concept.png",
    tags: ["PHP", "Yii2", "MySQL", "RabbitMQ"],
    fullDescription:
      "The accounting platform was designed to automate and simplify complex financial operations. It processes thousands of daily transactions with real-time consolidation, ensuring perfect ledger accuracy through DLQs, idempotent consumers, and comprehensive audit trails. The system also manages rate limiting, retry logic, and state reconciliation.",
    metrics: [
      { label: "Ledger Accuracy", value: "100%" },
      { label: "Workload Reduction", value: "70%" },
      { label: "Processing Load Cut", value: "40%" },
    ],
    details: [
      {
        title: "Features",
        items: [
          "Double-entry bookkeeping with full audit trail",
          "Real-time ledger consolidation",
          "DLQ and idempotent consumer architecture",
          "Advanced reporting with Redis async queues",
          "SLI/SLO monitoring dashboards",
          "Webhook verification and retry mechanisms",
        ],
      },
      {
        title: "Admin Panel",
        items: [
          "Live streamer and user management (status, bans, verification)",
          "Gift configuration (types, prices, coin conversion rates)",
          "Monitoring of active live rooms and audio rooms",
          "Transaction and earnings reports for streamers",
          "Basic moderation tools (report handling, blocking, content review)",
        ]
      },
      {
        title: "My Responsibilities",
        items: [
          "Designed and implemented the backend architecture and REST APIs",
          "Integrated Tencent Cloud CSS for video live streaming and PK mode",
          "Implemented socket-based real-time chat and events (join/leave, gifts, messages)",
          "Set up Firebase notifications for go-live alerts, gifts, and system messages",
          "Built the admin panel backend for user, gift, and earnings management",
          "Implemented the coin/earning logic and withdrawal flow",
          "Added validation, authentication, and role-based access for admins and users",
          "Wrote API documentation and supported the mobile/frontend team during integration",
        ]
      }
    ],
  },
  {
    title: "Business POS with Integrated Double-Entry Accounting System",
    description:
      "I designed and developed a Point of Sale (POS) and finance system that automatically handles accounting in the background while users focus on sales and purchases. Whenever a sale, purchase, or return is made in the POS, the system generates the correct double-entry journal records automatically, keeping the accounts always up to date and audit-ready.",
    image: "/projects/pos.jpg",
    tags: ["Laravel", "Next.js", "PostgreSQL"],
    fullDescription:
      "Built a scalable e-commerce backend with Laravel, supporting POS integration with real-time inventory sync. The platform maintains 98% on-hand accuracy through optimized database queries and Redis caching. Implemented JWT-based authentication, OpenAPI documentation, and rate limiting for secure API endpoints.",
    metrics: [
      { label: "Sync Lag Reduced", value: "85%" },
      { label: "Accuracy", value: "98%" },
      { label: "P95 Latency Cut", value: "30%" },
    ],
    details: [
      {
        title: "Features",
        items: [
          "Real-time inventory synchronization",
          "Multi-vendor storefront management",
          "JWT-secured REST APIs with OpenAPI specs",
          "MySQL indexing and connection pooling optimization",
          "Redis caching for high-traffic endpoints",
          "Transaction logging and audit trails",
        ]
      },
    ]
  },
  {
    title: "HuhuLive — Streaming Backend for a TikTok-Like Real-Time Live Platform",
    description:
      "I developed the backend and admin panel for HuhuLive, a real-time live streaming platform similar to TikTok Live. The app lets hosts go live with video or audio rooms, receive gifts from viewers, and earn coins that can be converted to real money. The backend handles live video streaming, real-time chat, gift transactions, and user management.",
    image: "/projects/huhulive.jpg",
    tags: ["Node.js", "Express.js", "WebSocket", "Firebase", "Google Play Billing"],
    fullDescription:
      "Engineered the backend for a live streaming platform supporting real-time video delivery, interactive chat, and in-app purchases. Implemented WebSocket communication for low-latency interactions, Google Play Billing integration with webhook verification, and comprehensive analytics. The platform handles millions of real-time events with measurable improvements in user engagement and revenue.",
    metrics: [
      { label: "Engagement Increase", value: "25%" },
      { label: "ARPPU Growth", value: "18%" },
      { label: "Result TAT Reduction", value: "90%" },
    ],
    details: [
      {
        title: "Features",
        items: [
          "Low-latency WebSocket streaming",
          "Real-time chat and notifications",
          "Google Play Billing integration",
          "Webhook verification and idempotent retries",
          "User analytics and engagement tracking",
          "Scalable event-driven architecture",
        ],
      },
    ]
  },
]
