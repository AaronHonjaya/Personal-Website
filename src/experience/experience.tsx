import "./experience.css";
import TimelineCarousel from "./ExperienceCarousel";
import type { Milestone as Slide} from "./ExperienceCarousel";

type Item = {
  milestone: string;
  summary: string;
  bullets?: string[];
};

type LaneProps = {
  laneTitle: string;
  org: string;
  range: string;
  items: Item[];
};

function Timeline({ laneTitle, org, range, items }: LaneProps) {

  const slides: Slide[] = items.map((it, i) => ({
    id: `${i}-${it.summary}`,
    date: it.milestone,
    title: it.summary,
    bullets: it.bullets,
  }));


  return (
    <div className="exp_lane">
      <h3 className="exp_lane_title">{laneTitle}</h3>
      <p className="exp_lane_subtitle">
        {org} <span className="exp_lane_range">({range})</span>
      </p>

      <TimelineCarousel
        slides={slides}
        accent="var(--uw-purple)"
      />
    </div>
  );
}


const researchItems: Item[] = [
  {
    milestone: "August 2024 - December 2024",
    summary: "Joined the Wang Lab",
    bullets: ["Completed Stanford Computer Vision course (cs231n)",
              "Began working on novel CNN for 3D to 2D Retinal Image Segmentation",
              "Getting familiar with Vision Language Models, Generative Diffusion Models, and Contrastive Learning",
              "Began working on OCTA to FA project - generating FA images using OCTA images"],
  },
  {
    milestone: "January 2025 - July 2025",
    summary: "Begin GrInAdapt project",
    bullets: ["Team of 2 undergrads and 1 grad student",
              "Implementing domain adaptation for retinal image segmentation",
              "Training models, running experiments, and merging labels",
              "Submitted and accepted to MiCCAI 2025",
              "See projects section for more details"],
  },
  {
    milestone: "July 2025 - August 2025",
    summary: "New Project - Ophthalmic Foundation Model",
    bullets: ["Considering two approaches - Agentic AI that or a traditional foundation model",
              "Developing and evaluating tools (classifiers, segmentation models) for the Agentic model to use.",
              "Organizing and preparing datasets for training.",
              "Settled on traditional foundation model approach."
              ],
  },
  {
    milestone: "September 2025 - Present",
    summary: "Ongoing Research - Ophthalmic Foundation Model",
    bullets: ["Developing a novel foundation model that aims to take various types of ophthalmologic imaging",
              "Creating core training pipelines for data",
              "Designing new and novel model architectures for the model.",
              "Experimenting with different training strategies and datasets.",
    ]
  }
];

const teachingItems: Item[] = [
  {
    milestone: "January 2025 - March 2025",
    summary: "First Quarter TA - CSE 332 ",
    bullets: ["Co-Leading weekly classes called Sections",
              "Learning to teach and explain concepts clearly",
              "Held weekly office hours",
              "Grading assignments and exams"],
  },
  {
    milestone: "April 2025 - June 2025",
    summary: "Second Quarter TA - CSE 332",
    bullets: ["Retained all responsibilities from first quarter",
              "Started to get involved with managing course infrastructure",
              "Assisted in developing new course assignments and exams"
    ],
  },
  {
    milestone: "July 2025 - August 2025",
    summary: "Third Quarter TA - CSE 332",
    bullets: ["Retained all responsibilities from first quarter",
              "Further developed course materials and assignments",
              "Solo-led weekly Sections",
              "Started developing and planning section activities for the course",
    ],
  },
  {
    milestone: "September 2025 - Present",
    summary: "Fourth Quarter TA - CSE 332",
    bullets: ["Retained all responsibilities from first quarter",
              "Now planning to lead exam creation team",
              "Co-leading section with a new TA to mentor them",
    ],
  }
];

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="experience_title">Experience</h2>
      <p className="experience_blurb">Milestones within each role.</p>

      <div className="exp_grid">
        <Timeline
          laneTitle="Computer Vision AI Research"
          org="University of Washington, Seattle"
          range="August 2025 - Present"
          items={researchItems}
        />
        <Timeline
          laneTitle="Teaching Assistant - CSE 332: Data Structures & Parallelism"
          org="University of Washington, Seattle"
          range="January 2025 - Present"
          items={teachingItems}
        />
      </div>
    </div>
  );
}
