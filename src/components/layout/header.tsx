"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";
import { EASE, useAnimationsDisabled } from "@/components/ui/reveal";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIALS = [
  {
    href: "https://github.com/tamagossi",
    Icon: GitHubIcon,
    label: "GitHub (opens in a new tab)",
  },
  {
    href: "https://linkedin.com/in/tamagossi",
    Icon: LinkedInIcon,
    label: "LinkedIn (opens in a new tab)",
  },
  {
    href: "mailto:mgf.prauliyatama@gmail.com",
    Icon: MailIcon,
    label: "Email",
  },
  {
    href: "/resume.pdf",
    Icon: FileTextIcon,
    label: "Download résumé (PDF)",
  },
];

export const Header = () => {
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
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-base/85 border-line/70 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            aria-label="Raka Pratama — home"
            className="text-ink font-sans text-lg font-bold tracking-tight"
            href="/"
          >
            Tamagossi
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const active = isHome && activeSection === sectionId;
              return (
                <Link
                  href={hrefFor(item)}
                  key={item.href}
                  className={`group relative font-mono text-xs tracking-[0.18em] uppercase transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`bg-accent absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Socials + mobile toggle */}
          <div className="flex items-center gap-4">
            <ul
              aria-label="Social links"
              className="hidden items-center gap-4 lg:flex"
            >
              {SOCIALS.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>

            <button
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="text-ink hover:text-accent transition-colors md:hidden"
              onClick={() => setOpen(!open)}
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
            animate={{ opacity: 1 }}
            className="bg-base fixed inset-0 top-16 z-40 flex flex-col px-6 pt-8 pb-10 md:hidden"
            data-lenis-prevent
            exit={disabled ? undefined : { opacity: 0 }}
            initial={disabled ? false : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    animate={{ opacity: 1, x: 0 }}
                    initial={disabled ? false : { opacity: 0, x: 16 }}
                    key={item.href}
                    transition={{ delay: i * 0.05, duration: 0.35, ease: EASE }}
                  >
                    <Link
                      className="text-ink hover:text-accent block py-3 font-sans text-2xl font-bold transition-colors"
                      href={hrefFor(item)}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <ul
              aria-label="Social links"
              className="mt-auto flex items-center gap-6"
            >
              {SOCIALS.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
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
};
