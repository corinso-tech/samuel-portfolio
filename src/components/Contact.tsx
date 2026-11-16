"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Check, Copy, Download, LinkedIn, WhatsApp } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal y={40}>
          <div className="contact">
            <motion.div
              className="contact-orb"
              aria-hidden
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="eyebrow" style={{ color: "var(--accent-2)" }}>Contact</span>
            <h2>Have a Flutter app to build or rescue?</h2>
            <p>
              I&apos;m open to mobile and web roles, contracts and collaborations, especially products with payments,
              bookings or learning at their core.
            </p>
            <div className="contact-rows">
              <div className="contact-row">
                <a className="addr" href={`mailto:${profile.email}`} style={{ color: "inherit", textDecoration: "none" }}>{profile.email}</a>
                <button className="btn btn-light" onClick={copy} type="button" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "y" : "n"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
                    >
                      {copied ? <><Check /> Copied</> : <><Copy /> Copy email</>}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
              <div className="contact-row">
                <a className="addr" href={`tel:${profile.phone.replace(/\s/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>{profile.phone}</a>
                <a className="btn btn-ghost-light" href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp /> WhatsApp</a>
              </div>
              <div className="contact-row">
                <a className="btn btn-ghost-light" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a>
                <a className="btn btn-ghost-light" href={profile.cv} download><Download /> Download CV</a>
              </div>
            </div>
          </div>
        </Reveal>
        <footer className="footer">
          <span>© {profile.fullName}</span>
          <span>Built with Next.js · <a href="#top">Back to top ↑</a></span>
        </footer>
      </div>
    </section>
  );
}
