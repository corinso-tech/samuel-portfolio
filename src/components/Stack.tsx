"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { pubspec } from "@/data/profile";
import Reveal from "./Reveal";

const groups = [
  { title: "Mobile & web", items: ["Flutter", "Dart", "Flutter Web", "Android", "iOS", "Next.js"] },
  { title: "Architecture & state", items: ["Clean Architecture", "BLoC / Cubit", "Riverpod", "Provider", "get_it"] },
  { title: "Backend & cloud", items: ["Google Cloud Run", "Cloud Scheduler", "NestJS", "PostgreSQL", "Firebase", "Render"] },
  { title: "Payments", items: ["Paystack", "Flutterwave", "OPay", "Wallets", "Subscriptions"] },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  const [typed, setShown] = useState(0);
  const shown = reduce ? pubspec.length : typed;

  // "Type" the pubspec out line by line once it scrolls into view.
  useEffect(() => {
    if (reduce || !inView) return;
    let n = 0;
    const t = setInterval(() => {
      n += 1;
      setShown(n);
      if (n >= pubspec.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, [inView, reduce]);

  return (
    <section className="section" id="stack">
      <div className="container stack-grid">
        <div>
          <Reveal className="section-head">
            <span className="eyebrow">Stack</span>
            <h2 className="section-title">What goes in my pubspec</h2>
            <p className="section-lede">The tools I reach for to take an app from the first screen to the store, and the backend behind it.</p>
          </Reveal>
          <div className="skill-groups">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08} className="skill-group">
                <h3>{g.title}</h3>
                <ul className="tags">{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="code" ref={ref} role="region" aria-label="Skills written as a pubspec.yaml file">
            <div className="code-bar"><i /><i /><i /><span>pubspec.yaml</span></div>
            <div className="code-body" tabIndex={0}>
              {pubspec.map((l, i) => (
                <div className="code-line" key={i} style={{ visibility: i < shown ? "visible" : "hidden" }}>
                  <span className="ln">{i + 1}</span>
                  <span>
                    {"  ".repeat(l.indent ?? 0)}
                    {l.c && <span className="c">{l.c}</span>}
                    {l.k && <span className="k">{l.k}:</span>}
                    {l.v && <> {l.v}</>}
                    {i === Math.min(shown, pubspec.length) - 1 && <span className="cursor" aria-hidden />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
