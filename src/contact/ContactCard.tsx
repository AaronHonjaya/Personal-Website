import "./contact-card.css";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  iconSrc: string;
  iconAlt?: string;
  newTab?: boolean;
  ariaLabel?: string;
};

export type ContactCardProps = {
  title?: string;
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
