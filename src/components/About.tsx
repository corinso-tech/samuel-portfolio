"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/profile";
import Reveal from "./Reveal";

function CountUp({ to, prefix = "", suffix = "", plain }: { to: number; prefix?: string; suffix?: string; plain?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const from = plain ? to - 12 : 0;
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(from, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, from, to]);
  return <b ref={ref}>{prefix}{reduce ? to : val}{suffix}</b>;
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Apps that people rely on every day</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="about-text">
              Writing Flutter and Dart since 2021. Today I maintain the booking and logistics apps behind <em>Libmot</em>,
              used by roughly 20,000 people, and I&apos;m building <em>Grace Scholar</em>, a full learning management
              system, end to end: Flutter app, web apps and a NestJS backend on Google Cloud.
            </p>
          </Reveal>
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="stat">
                <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} plain={s.plain} />
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
