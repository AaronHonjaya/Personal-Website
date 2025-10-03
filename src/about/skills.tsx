import React from "react";
import "./skills.css";

type Skill = { name: string; img: string; alt?: string };

const skills: Skill[] = [
  { name: "Python", img: "/imgs/skills/python.png" },
  { name: "JavaScript", img: "/imgs/skills/js.png" },
  { name: "TypeScript", img: "/imgs/skills/ts.png" },
  { name: "C++", img: "/imgs/skills/cpp.png" },
  { name: "Java", img: "/imgs/skills/java.png" },
  { name: "React", img: "/imgs/skills/react.png" },
  { name: "Node.js", img: "/imgs/skills/nodejs.png" },
  { name: "CSS3", img: "/imgs/skills/css.svg" },
  { name: "Docker", img: "/imgs/skills/docker.svg" },
  { name: "Git", img: "/imgs/skills/git.jpg" },
  { name: "SQL", img: "/imgs/skills/sql.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills_title">Skills</h1>

      <ul className="skills_grid" role="list">
        {skills.map((s) => (
          <li className="skill_card" key={s.name}>
            <div className="skill_media">
              <img src={s.img} alt={s.alt ?? s.name} loading="lazy" />
            </div>
            <span className="skill_name">{s.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
