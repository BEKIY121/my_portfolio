export default function ProjectsPage() {
  const projects = [
    {
      title: "MERN Stack SaaS",
      description: "Full-featured SaaS app with authentication, subscription billing (Stripe), REST API, and dashboard analytics.",
      stack: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe API"],
    },
    {
      title: "Android Inventory Manager",
      description: "Offline-capable Android Java app for managing inventory and barcode scanning in warehouses.",
      stack: ["Java", "SQLite", "Material Design"],
    },
    {
      title: "Laravel Job Board",
      description: "Built a job board platform with advanced filtering, admin panel, and secure user authentication.",
      stack: ["Laravel", "Blade", "MySQL", "Jetstream"],
    },
    {
      title: "AI Resume Analyzer",
      description: "AI-enhanced web app for scanning resumes and giving feedback using NLP techniques.",
      stack: ["Python", "Django", "Transformers", "TailwindCSS"],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 font-inter text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-center text-lime-400">🚀 My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="border border-gray-600 p-6 rounded-xl bg-black/40 space-y-4">
              <h2 className="text-xl font-semibold text-lime-300">{proj.title}</h2>
              <p className="text-gray-300">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                {proj.stack.map(tech => (
                  <span className="px-2 py-1 border border-gray-500 rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
