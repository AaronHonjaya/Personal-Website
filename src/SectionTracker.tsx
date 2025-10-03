import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    let ticking = false;

    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nav = document.querySelector('.navbar') as HTMLElement | null;
        const navH = nav?.offsetHeight ?? 0;
        const probeY = Math.max(window.innerHeight * 0.3, navH + 1);

        let current: string | null = null;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          const top = r.top + navH;
          const bottom = r.bottom;
          if (top <= probeY && bottom >= probeY) {
            current = id;
            break;
          }
        }

        // 2) else “closest top to probe line”
        if (!current) {
          let bestId = ids[0];
          let best = Infinity;
          for (const id of ids) {
            const el = document.getElementById(id);
            if (!el) continue;
            const r = el.getBoundingClientRect();
            const dist = Math.abs((r.top + navH) - probeY);
            if (dist < best) { best = dist; bestId = id; }
          }
          current = bestId;
        }

        if (current && current !== active) setActive(current);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    handler();
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids, active]);

  return active;
}
