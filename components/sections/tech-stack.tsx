const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  return (
    <div className="space-y-8">
      {technologies.map((tech) => (
        <div key={tech.category} className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">{tech.category}</h3>
          <div className="flex flex-wrap gap-3">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
