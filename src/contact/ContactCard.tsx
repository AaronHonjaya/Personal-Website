// ContactCard.tsx
import React from "react";
import "./contact-card.css";

export type ContactItem = {
  label: string;          // e.g., "Email", "LinkedIn", "GitHub"
  value: string;          // e.g., "you@domain.com" or "linkedin.com/in/you"
  href: string;           // mailto: or https link
  iconSrc: string;        // small icon path
  iconAlt?: string;
  newTab?: boolean;       // open in new tab for web links
  ariaLabel?: string;
};

export type ContactCardProps = {
  title?: string;         // Optional title like "Contact"
  items: ContactItem[];
  className?: string;
};

export default function ContactCard({
  title = "Contact",
  items,
  className = "",
}: ContactCardProps) {
  return (
    <section
      className={["ccard", className].filter(Boolean).join(" ")}
      role="region"
      aria-label={title}
    >
      {/* {title && (
        <header className="ccard__head">
          <h3 className="ccard__title">{title}</h3>
        </header>
      )} */}

      <div className="ccard__list">
        {items.map(({ label, value, href, iconSrc, iconAlt, newTab, ariaLabel }) => {
          const isExternal = newTab ?? /^https?:\/\//i.test(href);
          return (
            <a
              key={label + href}
              className="ccard__item"
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={ariaLabel || `${label}: ${value}`}
            >
              <div className="ccard__iconWrap" aria-hidden="true">
                <img className="ccard__icon" src={iconSrc} alt={iconAlt || ""} />
              </div>

              <div>
                <p className="ccard__name">{label}</p>
                <p className="ccard__meta">{value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
