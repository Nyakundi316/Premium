// app/projects/page.jsx
import ProjectsSection from "../components/ProjectsSection";

export const metadata = {
  title: "Projects | Premium Paving Blocks",
  description:
    "See completed cabro paving projects by Premium Paving Blocks – driveways, parking, industrial yards and public spaces.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Full projects grid + modal */}
      <ProjectsSection />
    </main>
  );
}
