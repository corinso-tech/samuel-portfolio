"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/profile";
import { Check } from "./Icons";
import Reveal from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  return (
    <section className="section" id="experience" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I ship every day</h2>
        </Reveal>

        <div className="timeline" ref={ref}>
          <Reveal className="timeline-when">
            <b>{experience.period}</b>
            {experience.place}
          </Reveal>
          <div className="timeline-body">
            <div className="timeline-rail" aria-hidden>
              <motion.div className="timeline-fill" style={{ scaleY: reduce ? 1 : fill }} />
            </div>
            <span className="timeline-dot" aria-hidden />
            <Reveal>
              <h3>{experience.title}</h3>
              <p className="org">{experience.company} · {experience.products}</p>
            </Reveal>
            <ul className="points">
              {experience.points.map((pt, i) => (
                <Reveal as="li" key={pt} delay={i * 0.06} y={16}>
                  <Check />
                  <span>{pt}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
