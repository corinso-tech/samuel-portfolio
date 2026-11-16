"use client";

import { motion, useReducedMotion } from "motion/react";
import { services } from "@/data/profile";
import { Browser, Cloud, Server, Smartphone } from "./Icons";
import Reveal from "./Reveal";

const icons = { mobile: Smartphone, web: Browser, server: Server, cloud: Cloud };

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section className="section" id="services" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What I build</span>
          <h2 className="section-title">The whole product, not just one layer</h2>
          <p className="section-lede">
            I can take an idea from the first screen to a live product: the mobile app, the website, the API and
            database behind them, and the deployment that keeps it all running.
          </p>
        </Reveal>
        <div className="services">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.article
                key={s.title}
                className="service"
                initial={reduce ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduce ? undefined : { y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="service-icon"
                  initial={reduce ? false : { scale: 0.4, rotate: -20, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 + i * 0.09 }}
                >
                  <Icon />
                </motion.span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tags">{s.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
