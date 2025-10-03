import React from "react";
import "./ProjectCard.css";

export type ProjectLink = {
  label: string;
  href: string;
  newTab?: boolean;
  ariaLabel?: string;
};

export type ProjectCardProps = {
  title: string;
  description: React.ReactNode; // 👈 changed here
  imageSrc: string;
  imageAlt?: string;
  links: ProjectLink[];
  tags?: string[];
  className?: string;
};


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
    <div
      className={["pcard", className].filter(Boolean).join(" ")}
      role="region"
      aria-label={title}
    >
      <div className="pcard__media">
        <img className="pcard__img" src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>

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
    </div>
  );
}
