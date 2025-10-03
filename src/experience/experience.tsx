import "./experience.css";

// type Item = {
//   milestone: string;      // e.g., "Spring 2024"
//   summary: string;        // short headline
//   bullets?: string[];     // optional details
//   link?: { label: string; href: string };
// };

// type LaneProps = {
//   laneTitle: string;      // "Research" or "Teaching"
//   org: string;            // "Vanderbilt University"
//   orgUrl?: string;        // optional: link the org
//   range: string;          // "2023–Present"
//   items: Item[];          // milestones within this role
// };

// function Lane({ laneTitle, org, range, items }: LaneProps) {
//   return (
//     <div className="exp_lane">
//       <h3 className="exp_lane_title">{laneTitle}</h3>
//       <p className="exp_lane_subtitle">
//         {org} <span className="exp_lane_range">({range})</span>
//       </p>

//       <ol className="exp_timeline" role="list">
//         {items.map((it) => (
//           <li className="exp_item" key={it.milestone + it.summary}>
//             <div className="exp_dot" aria-hidden />
//             <div className="exp_card">
//               <div className="exp_meta">
//                 <span className="exp_summary">{it.summary}</span>
//                 <span className="exp_milestone">{it.milestone}</span>
//               </div>
//               {it.bullets && (
//                 <ul className="exp_bullets">
//                   {it.bullets.map((b, i) => (
//                     <li key={i}>{b}</li>
//                   ))}
//                 </ul>
//               )}
//               {it.link && (
//                 <a
//                   className="exp_link"
//                   href={it.link.href}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   {it.link.label}
//                 </a>
//               )}
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// import "./experience.css";
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

function Lane({ laneTitle, org, range, items }: LaneProps) {
  // map your items -> carousel milestones

// inside each Lane component
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

      {/* 🔄 REPLACED the <ol className="exp_timeline">… */}
      <TimelineCarousel 
        slides={slides} 
        accent="var(--uw-purple)"   // or "#9ca3af" for Teaching, etc.
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
    bullets: ["Developing core training pipelines for data", 
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
        <Lane
          laneTitle="Computer Vision AI Research"
          org="University of Washington, Seattle"
          range="August 2025 - Present"
          items={researchItems}
        />
        <Lane
          laneTitle="Teaching Assistant - CSE 332: Data Structures & Parallelism"
          org="University of Washington, Seattle"
          range="January 2025 - Present"
          items={teachingItems}
        />
      </div>
    </div>
  );
}
