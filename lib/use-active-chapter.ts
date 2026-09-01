"use client";

import { useEffect, useState } from "react";

export function useActiveChapter(ids: string[], fallback: string) {
  const [active, setActive] = useState(fallback);
  const key = ids.join(",");

  useEffect(() => {
    const list = key ? key.split(",") : [];
    const nodes = list
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-18% 0px -40% 0px" },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [key]);

  return active;
}
