import { education, leadership } from "@/data/profile";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section" id="education" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Computer Science, three times over</h2>
        </Reveal>
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <article className="edu-card">
                <span className="dates">{e.dates}</span>
                <h3>{e.degree}</h3>
                <span className="school">{e.school}</span>
                <span className="result">{e.result}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="leader">
            <b>{leadership.title}</b>
            <span>{leadership.detail}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
