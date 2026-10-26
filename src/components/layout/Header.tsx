"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ArrowLink } from "@/components/ui/ArrowLink";
import { Brand } from "@/components/ui/Brand";
import { mainNav, site } from "@/config/site";
import { stays } from "@/content/stays";

const DESKTOP_QUERY = "(min-width: 901px)";

/** The nav item for the current page; stay detail pages count as "Stay". */
function activeHref(pathname: string): string | undefined {
  if (stays.some((s) => pathname === `/stay/${s.slug}/`)) return "/stay/";
  return mainNav.find((item) => item.href === pathname)?.href;
}

export function Header() {
  const pathname = usePathname();
  // Remembering the path the menu was opened on closes it after navigation.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const open = openOnPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = activeHref(pathname.endsWith("/") ? pathname : `${pathname}/`);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenOnPath(null);
      toggleRef.current?.focus();
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onResize = () => {
      if (desktop.matches) setOpenOnPath(null);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={item.href === active ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ArrowLink href={site.bookingUrl} label="Book your stay" className="button small desktop-book" external />
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpenOnPath(open ? null : pathname)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ArrowLink href="/plan/" label="Plan your visit" />
        <ArrowLink href={site.bookingUrl} label="Book your stay" className="button" external />
      </nav>
    </header>
  );
}
