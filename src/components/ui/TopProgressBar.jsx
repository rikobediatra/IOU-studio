"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const INITIAL_PROGRESS = 8;
const MAX_PROGRESS_BEFORE_COMPLETE = 92;
const PROGRESS_STEP = 8;
const PROGRESS_INTERVAL_MS = 180;
const HIDE_DELAY_MS = 220;

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const intervalRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const clearProgressInterval = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const clearHideTimeout = () => {
    if (!hideTimeoutRef.current) return;
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = null;
  };

  const beginProgress = () => {
    clearHideTimeout();
    setIsVisible(true);
    setProgress((prev) => (prev > 0 ? prev : INITIAL_PROGRESS));

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= MAX_PROGRESS_BEFORE_COMPLETE) return prev;
        return Math.min(prev + PROGRESS_STEP, MAX_PROGRESS_BEFORE_COMPLETE);
      });
    }, PROGRESS_INTERVAL_MS);
  };

  const finishProgress = () => {
    clearProgressInterval();
    setProgress(100);

    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, HIDE_DELAY_MS);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let targetUrl;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;
      const nextRoute = `${targetUrl.pathname}${targetUrl.search}`;
      const currentRoute = `${window.location.pathname}${window.location.search}`;
      if (nextRoute === currentRoute) return;

      beginProgress();
    };

    const handlePopState = () => {
      beginProgress();
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    finishProgress();
  }, [pathname, searchParams]);

  useEffect(() => {
    return () => {
      clearProgressInterval();
      clearHideTimeout();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 right-0 z-[9999] h-1"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-black transition-[width,opacity] duration-200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
