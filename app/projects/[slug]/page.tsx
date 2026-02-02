import { Button } from "@/components/ui/button"
import { getProjectBySlug, Project } from "@/lib/data/projects"
import { notFound } from "next/dist/client/components/navigation"
import Link from "next/link"

type ProjectDetailProps = {
    params: {
        slug: string
    }
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
    const slug = params.slug
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return <ProjectDetails project={project} />
}
function ProjectDetails({ project }: { project: Project }) {
    return (
        <div className="min-h-screen bg-background">
            <main className="container px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold tracking-tighter mb-2">{project.title}</h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            {project.description}
                        </p>

                    </div>

                    {/* Project Image */}
                    <div className="relative h-150 overflow-hidden">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8 pt-5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Title and Description */}
                    <div>
                        <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8 mt-8">
                        {project.details?.map((detail, i) => (
                            <div key={i}>
                                <h2 className="text-2xl font-bold mb-4">{detail.title}</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    {detail.items?.map((item, i) => (
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {
                            project.liveUrl && (
                                <Button asChild>
                                    <Link href={project.liveUrl} target="_blank">
                                        Visit Live Site
                                    </Link>
                                </Button>
                            )
                        }
                        <Button variant="outline" asChild>
                            <Link href="/projects">Back to Home</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
