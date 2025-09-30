import ProjectCard from "./ProjectCard";
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects">
        <h1 className="projects_title">Projects</h1>


      <ProjectCard
          title="GrInAdapt Research Paper"
          description="Research paper on adapting AI models for real-world applications."
          imageSrc="/imgs/ResearchCardImg.png"
          imageAlt="Screenshot of GrInAdapt paper"
          tags={["Computer Vision", "Deep Learning", "Domain Adaptation", "PyTorch", "Research"]}
          links={[
            { label: "GitHub", href: "https://github.com/you/repo", newTab: true },
          ]}
        />

      <ProjectCard
          title="Transactional Sharded Key-Store Server"
          description="A scalable key-value store with transactional support."
          imageSrc="/imgs/Database.png"
          imageAlt="Screenshot of Transactional Sharded Key-Store Server"
          tags={["Java", "Distributed Systems", "Database", "RPC"]}
          links={[
            { label: "GitHub", href: "https://github.com/you/repo", newTab: true },
          ]}
      />

      <ProjectCard
          title="Personal Website"
          description="A personal website showcasing my projects and skills."
          imageSrc="/imgs/PersonalWebsite.png"
          imageAlt="Screenshot of Personal Website"
          tags={["React", "TypeScript", "CSS"]}
          links={[
            { label: "GitHub", href: "https://github.com/you/repo", newTab: true },
          ]}
      />

    </section>
  );
}