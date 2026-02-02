export type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: "ShareTrip Ltd.",
    role: "Software Engineer",
    period: "Aug 2022 - Present",
    highlights: [
      "Delivered double-entry accounting platform (PHP, Yii2, MySQL, Redis, RabbitMQ) reducing finance workload ~70%",
      "Achieved 95% to 100% ledger success with DLQs, idempotent consumers, and audit/replay pipelines",
      "Migrated reporting to async Redis queues, cutting load ~40% and adding SLI dashboards",
      "Raised airline ticketing SLA 84% to 96% by enforcing TOTP 2FA and audited state machines",
      "Improved conversion +9% and reduced drop-offs -22% in Next.js ancillary flows",
    ],
  },
  {
    company: "Desktop IT",
    role: "Software Engineer",
    period: "Aug 2020 - Jul 2022",
    highlights: [
      "Cut POS-storefront sync lag ~85% and raised on-hand accuracy 92% to 98%",
      "Reduced P95 latency ~30% at peak via MySQL indexing, pooling, and Redis caching",
      "Reduced exam-result TAT ~90% and manual grading effort ~95% (theExamly platform)",
      "Increased live-session engagement ~25% and ARPPU ~18% for HuhuLive streaming backend",
      "Implemented Google Play Billing with webhook verification and idempotent retries",
    ],
  },
]
