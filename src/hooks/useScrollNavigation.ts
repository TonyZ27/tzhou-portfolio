import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/** Ordered list of the 3 main navigation pages. */
const PAGE_ORDER = ['/', '/works', '/about'];

/** Milliseconds to block navigation after a transition fires. */
const COOLDOWN_MS = 1000;

/** Minimum accumulated wheel delta (px) required to trigger navigation. */
const DELTA_THRESHOLD = 300;

/** Minimum touch swipe distance (px) required to trigger navigation. */
const SWIPE_THRESHOLD = 100;

/**
 * Walk up the DOM from `el` and return the first ancestor (or itself)
 * that has scrollable overflow and actually overflows its content.
 */
function getScrollableAncestor(el: Element | null): Element | null {
  while (el && el !== document.documentElement) {
    const { overflow, overflowY } = window.getComputedStyle(el);
    if (/auto|scroll/.test(overflow + overflowY) && el.scrollHeight > el.clientHeight) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

/** Returns true when `el` is at the scroll boundary for the given direction. */
function isAtBoundary(el: Element, direction: 'up' | 'down'): boolean {
  if (direction === 'up') return el.scrollTop <= 0;
  return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
}

/**
 * Adds wheel and touch-swipe listeners to the window and navigates between
 * the 3 main pages (Home / Works / About) with a cooldown between transitions.
 *
 * Only active when the current path is one of the 3 main pages.
 * Respects inner scrollable containers: navigation only triggers when the
 * nearest scrollable ancestor is already at its scroll boundary.
 */
export function useScrollNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isNavigatingRef = useRef(false);
  const accDeltaRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    // Only active on the 3 main pages.
    if (!PAGE_ORDER.includes(location.pathname)) return;

    const doNavigate = (direction: 'up' | 'down') => {
      if (isNavigatingRef.current) return;

      const currentIndex = PAGE_ORDER.indexOf(location.pathname);
      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;

      isNavigatingRef.current = true;
      accDeltaRef.current = 0;
      navigate(PAGE_ORDER[nextIndex]);

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, COOLDOWN_MS);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isNavigatingRef.current) return;

      const direction = e.deltaY > 0 ? 'down' : 'up';
      const scrollable = getScrollableAncestor(e.target as Element);

      if (scrollable && !isAtBoundary(scrollable, direction)) {
        // Inside a scrollable container that still has content to scroll.
        // Reset accumulator so partial scrolls don't carry over.
        accDeltaRef.current = 0;
        return;
      }

      accDeltaRef.current += Math.abs(e.deltaY);
      if (accDeltaRef.current >= DELTA_THRESHOLD) {
        doNavigate(direction);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isNavigatingRef.current) return;
      const delta = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      doNavigate(delta > 0 ? 'down' : 'up');
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate]);
}
