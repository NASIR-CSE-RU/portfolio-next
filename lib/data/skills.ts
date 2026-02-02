export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "Yii2", "Node.js", "NestJS", "TypeScript"],
  },
  {
    category: "APIs & Architecture",
    skills: ["REST", "OpenAPI/Swagger", "JWT/OAuth2", "Microservices", "Event-driven", "Rate limiting"],
  },
  {
    category: "Data & Messaging",
    skills: ["MySQL", "PostgreSQL", "Redis", "RabbitMQ", "DLQ", "Idempotency"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "AWS", "DigitalOcean", "CI/CD", "SLI/SLO/SLA"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Core Web Vitals", "A/B Testing"],
  },
]
