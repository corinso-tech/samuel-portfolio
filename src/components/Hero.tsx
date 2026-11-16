"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Pin } from "./Icons";

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [reduce, words.length]);
  return (
    <span className="mover" aria-live="off">
      {/* invisible sizer keeps the width of the longest word so text doesn't jump */}
      <span style={{ visibility: "hidden" }}>{words.reduce((a, b) => (b.length > a.length ? b : a))}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          style={{ color: "var(--accent)" }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const lines = [["Samuel"], ["Uzoma", "."]];
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease },
  });

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <motion.div {...fade(0.05)}>
            <span className="status-chip"><span className="pulse" />{profile.currentRole}</span>
          </motion.div>

          <h1 aria-label={profile.name}>
            {lines.map((words, li) => (
              <span className="line" key={li} aria-hidden>
                {words.map((w, wi) => (
                  <motion.span
                    key={w}
                    className={`word ${w === "." ? "accent-text" : ""}`}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.15 + li * 0.12 + wi * 0.08, ease }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.div className="hero-role" {...fade(0.45)}>{profile.role}</motion.div>

          <motion.p className="hero-sub" {...fade(0.55)}>
            I build and ship Flutter apps that move <RotatingWord words={profile.movers} />{" "}
            for real users on iOS, Android and the web.
          </motion.p>

          <motion.div className="hero-cta" {...fade(0.65)}>
            <a className="btn btn-primary" href="#work">See my work <ArrowDown /></a>
            <a className="btn" href={profile.cv} download><Download /> Download CV</a>
          </motion.div>

          <motion.div className="hero-meta" {...fade(0.75)}>
            <span><Pin /> {profile.location}</span>
            <span>Flutter since 2021</span>
            <span>Shipping to production since 2023</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo-wrap"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          style={{ perspective: 900 }}
        >
          <div className="photo-ring" aria-hidden />
          <motion.div className="photo-frame" style={{ rotateX: rx, rotateY: ry }}>
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill priority sizes="(max-width: 900px) 280px, 400px" />
          </motion.div>

          {[
            { cls: "chip-a", icon: "{ }", title: "Flutter & Dart", sub: "BLoC · Riverpod", d: 0.9, f: 0 },
            { cls: "chip-b", icon: "₦", title: "Payments", sub: "Paystack · Flutterwave · OPay", d: 1.05, f: 1.2 },
            { cls: "chip-c", icon: "☁", title: "Google Cloud Run", sub: "NestJS · PostgreSQL", d: 1.2, f: 2.4 },
          ].map((c) => (
            <motion.div
              key={c.cls}
              className={`float-chip ${c.cls}`}
              initial={reduce ? false : { opacity: 0, y: 14, scale: 0.9 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { delay: c.d, duration: 0.5 },
                scale: { delay: c.d, duration: 0.5 },
                y: { delay: c.d + c.f, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              aria-hidden
            >
              <i>{c.icon}</i>
              <span>{c.title}<small>{c.sub}</small></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
