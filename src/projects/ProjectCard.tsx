import React from "react";
import "./ProjectCard.css";

export type ProjectLink = {
  label: string;
  href: string;
  newTab?: boolean;
  ariaLabel?: string;
};

export type ProjectCardProps = {
  /** Project title shown prominently */
  title: string;
  /** One or two sentences about the project */
  description: string;
  /** URL to the preview image */
  imageSrc: string;
  /** Accessible alt text for the image */
  imageAlt?: string;
  /** Links to code/demo/docs etc. */
  links: ProjectLink[];
  /** Optional small tags/pills (e.g., React, Python) */
  tags?: string[];
  /** Optional extra class to tweak layout where used */
  className?: string;
};

/**
 * Reusable, accessible project card component (no Tailwind — plain CSS).
 *
 * Example usage:
 * <ProjectCard
 *   title="AI Legislation Tracker"
 *   description="Streamlit app that tracks state AI bills and summarizes changes."
 *   imageSrc="/images/ai-tracker.png"
 *   imageAlt="Screenshot of AI tracker UI"
 *   tags={["Python", "Streamlit", "NLP"]}
 *   links=[
 *     { label: "GitHub", href: "https://github.com/you/repo", newTab: true },
 *     { label: "Live Demo", href: "https://demo.example.com", newTab: true }
 *   ]}
 * />
 */
export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt = "Project preview",
  links,
  tags,
  className = "",
}: ProjectCardProps) {
  return (
    <section
      className={["pcard", className].filter(Boolean).join(" ")}
      role="region"
      aria-label={title}
    >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="pcard__img" src={imageSrc} alt={imageAlt} loading="lazy" />

      <div className="pcard__body">
        <h3 className="pcard__title">{title}</h3>
        <p className="pcard__desc">{description}</p>

        {tags && tags.length > 0 && (
          <ul className="pcard__tags" aria-label="tags">
            {tags.map((tag) => (
              <li key={tag} className="pcard__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {links?.length > 0 && (
          <div className="pcard__links">
            {links.map(({ label, href, newTab, ariaLabel }) => (
              <a
                key={label + href}
                className="pcard__link"
                href={href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                aria-label={ariaLabel || label}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
