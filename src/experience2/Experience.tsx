import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience_title">Experience</h2>

      <div className="xgrid">
        {/* Research */}
        <ExperienceCard
          title="Computer Vision AI Research"
          org="Vanderbilt University"
          range="2023–Present"
          highlights={[
            "Built OCT/OCTA segmentation pipeline; submitted to MICCAI 2025.",
            "Exploring ophthalmic foundation models; led data curation."
          ]}
          accent="purple"
          href="#"           /* optional */
          ctaLabel="See project"
        />

        {/* MSR collaboration — clearly not claiming MSR employment */}
        <ExperienceCard
          title="Research Collaboration (with Dr. X)"
          org="Microsoft Research (collab context)"
          range="2024"
          highlights={[
            "Served as research assistant; contributed experiments & analysis.",
            "Co-authored internal report; prepared ablation tables."
          ]}
          accent="blue"
        />

        {/* Teaching */}
        <ExperienceCard
          title="Teaching Assistant — CSE 332"
          org="University of Washington"
          range="2025"
          highlights={[
            "Led weekly sections; graded assignments and exams.",
            "Helped design review materials; mentored a new TA."
          ]}
          accent="gray"
        />

        {/* Add more cards as needed */}
      </div>
    </section>
  );
}
