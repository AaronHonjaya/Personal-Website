import ProjectCard from "./ProjectCard";
import './Projects.css';

export default function Projects() {
  return <div className="projects">
        <h1 className="projects_title">Projects</h1>


      <ProjectCard
          title="GrInAdapt Research Paper"
          description=
          {
            <>
              <strong>Co-First Author</strong> – Accepted at <strong>MICCAI 2025</strong>.
              <br />
              GrInAdapt presents a novel domain adaptation framework. Domain adaptation is a widely studied problem in computer vision AI, where the goal is to adapt a model trained on one domain to perform well on another with different characteristics. In our work, we apply this to retinal vessel segmentation (see image above), adapting a model trained on images from one OCTA device to generalize across many devices. This is important because while OCTA machines all produce images of the eye, their protocols and image characteristics vary significantly. It's similar to how a tennis player trained on clay courts must adapt their play style when switching to grass courts. This work, where I was a co-first author, was accepted at MICCAI 2025, a top conference in medical imaging. To learn more, feel free to take a look at the paper and or github below. A page with a detailed explanation of the paper (without all the complicated math) will be coming soon!
            </>

          }


          imageSrc="/imgs/ResearchCardImg.png"
          imageAlt="Retinal vessel segmentation results from our GrInAdapt paper"
          tags={["Computer Vision", "Deep Learning", "Domain Adaptation", "PyTorch", "Research"]}
          links={[
            { label: "GitHub", href: "https://github.com/YuekaiXuEric/GrInAdapt", newTab: true },
            { label: "Published Paper", href: "https://papers.miccai.org/miccai-2025/0389-Paper0903.html", newTab: true },
          ]}
        />

      <ProjectCard
          title="Transactional Sharded Key-Store Server (class project)"
          description="In this project I designed and implemented a transactional sharded key-store server using Java. Each shard is a Paxos group to ensure consistency and deal with system failures. The system is built to handle high throughput and low latency requirements. It supports multi-key transactions across shards, ensuring atomicity and isolation. The server uses a two-phase commit protocol to coordinate transactions across multiple shards, ensuring that either all operations in a transaction are committed or none are. This project demonstrates my skills in distributed systems, consensus algorithms, and Java programming."
          imageSrc="/imgs/Database.png"
          imageAlt="Screenshot of Transactional Sharded Key-Store Server"
          tags={["Java", "Distributed Systems", "Database", "RPC"]}
          links={[]}
      />

      <ProjectCard
          title="Personal Website"
          description="Of course, you're looking at it! This website is built using React and TypeScript, showcasing my projects and skills. It features a clean, responsive design and interactive elements to enhance user experience."
          imageSrc="/imgs/PersonalWebsite.png"
          imageAlt="Screenshot of Personal Website"
          tags={["React", "TypeScript", "CSS"]}
          links={[
            { label: "GitHub", href: "https://github.com/AaronHonjaya/Personal-Website", newTab: true },
          ]}
      />

      <ProjectCard
          title="Bank Statements Scanner"
          description="This tool uses Amazon Textract to automatically extract information from bank statements. It processes PDF files, extracts key data points, and organizes them into a structured format for easy analysis. This project demonstrates my skills in Python programming, AWS services, and data extraction techniques. Additionally, it includes an MAE style reconstruction model architecture to try and predict future expenditures based on past data."
          imageSrc="/imgs/Scanner.png"
          imageAlt="Screenshot of Bank Statements Scanner"
          tags={["Python", "AWS", "Data Extraction", "Machine Learning", "JavaScript"]}
          links={[
            { label: "GitHub", href: "https://github.com/AaronHonjaya/Bank-Statements-Scanner", newTab: true },
          ]}
      />

    </div>
}