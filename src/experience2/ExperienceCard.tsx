import React from "react";
import "./experience-card.css";

export type ExperienceCardProps = {
  title: string;          // e.g., "Computer Vision AI Research"
  org: string;            // e.g., "Vanderbilt University"
  range: string;          // e.g., "2023–Present"
  highlights?: string[];  // 1–3 bullets
  accent?: "purple" | "gray" | "green" | "blue"; // optional accent color
  href?: string;          // optional detail link
  ctaLabel?: string;      // e.g., "Details", "CV"
  className?: string;
};

export default function ExperienceCard({
  title,
  org,
  range,
  highlights = [],
  accent = "purple",
  href,
  ctaLabel = "Details",
  className = "",
}: ExperienceCardProps) {
  return (
    <article className={["xcard", `xcard--${accent}`, className].join(" ")}>
      <div className="xcard__accent" aria-hidden />
      <div className="xcard__body">
        <header className="xcard__header">
          <h3 className="xcard__title">{title}</h3>
          <div className="xcard__meta">
            <span className="xcard__org">{org}</span>
            <span className="xcard__dot">•</span>
            <span className="xcard__range">{range}</span>
          </div>
        </header>

        {highlights.length > 0 && (
          <ul className="xcard__bullets">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {href && (
          <a className="xcard__link" href={href} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
}
