"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
} from "@/components/ui/icons";
import { EASE, useAnimationsDisabled } from "@/components/ui/reveal";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIALS = [
  {
    label: "GitHub (opens in a new tab)",
    href: "https://github.com/tamagossi",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn (opens in a new tab)",
    href: "https://linkedin.com/in/tamagossi",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:mgf.prauliyatama@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "Download résumé (PDF)",
    href: "/resume.pdf",
    Icon: FileTextIcon,
  },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const disabled = useAnimationsDisabled();

  // Track active section on the home page
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Elevate the bar once the page has been scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hrefFor = (item: (typeof NAV_ITEMS)[number]) =>
    isHome ? item.href : `/${item.href}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-base/85 backdrop-blur-md border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans font-bold text-ink text-lg tracking-tight"
            aria-label="Raka Pratama — home"
          >
            Tamagossi
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const active = isHome && activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={hrefFor(item)}
                  className={`group relative font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Socials + mobile toggle */}
          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex items-center gap-4" aria-label="Social links">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden text-ink hover:text-accent transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 z-40 bg-base flex flex-col px-6 pb-10 pt-8"
            initial={disabled ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={disabled ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={disabled ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: EASE, delay: i * 0.05 }}
                  >
                    <Link
                      href={hrefFor(item)}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-sans text-2xl font-bold text-ink hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <ul
              className="flex items-center gap-6 mt-auto"
              aria-label="Social links"
            >
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
