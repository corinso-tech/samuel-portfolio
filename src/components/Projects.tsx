"use client";

import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/data/profile";
import { ArrowUpRight } from "./Icons";

const badgeClass = (s: Project["status"]) => (s === "Live" ? "live" : s === "20+ apps" ? "lab" : "build");

function Card({ p }: { p: Project }) {
  // Spotlight follows the cursor across the card.
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const main = (
    <>
      <div className="card-head">
        <h3>{p.name}</h3>
        <span className={`badge ${badgeClass(p.status)}`}>{p.status}</span>
      </div>
      <div className="domain">{p.domain}</div>
      <p>{p.description}</p>
      <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      {p.link && (
        <a className="card-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
          {p.link.label} <ArrowUpRight />
        </a>
      )}
    </>
  );

  return (
    <article className={`card ${p.featured ? "featured" : ""}`} onMouseMove={onMove}>
      {p.featured ? <div className="card-main">{main}</div> : main}
      {p.details && (
        <ul className="details">
          {p.details.map((d, i) => (
            <motion.li
              key={d.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
            >
              <b>{d.label}</b><span>{d.text}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  return (
    <section className="section" id="work" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Apps in production, and the ones on the way</h2>
          <p className="section-lede">Mobile apps, web platforms and the APIs behind them, from transport and logistics to a full learning platform, shipped to real users.</p>
        </motion.div>

        <div className="projects">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className={p.featured || p.wide ? "featured-wrap" : undefined}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduce ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: p.featured ? 0 : (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
