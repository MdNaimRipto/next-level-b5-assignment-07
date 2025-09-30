export const smoothScrollTo = (target: number, duration = 1200) => {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const progress = Math.min(time / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, start + distance * eased);
    if (time < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export const smoothScrollToHash = (
  hash: string,
  offset = 80,
  duration = 1200,
  wrapperRef?: React.RefObject<HTMLDivElement>
) => {
  if (!hash.startsWith("#")) return;

  const targetId = hash.slice(1);
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  // Calculate scroll position relative to wrapper
  let targetY = targetEl.getBoundingClientRect().top + window.scrollY - offset;

  if (wrapperRef?.current) {
    const wrapperTop =
      wrapperRef.current.getBoundingClientRect().top + window.scrollY;
    targetY -= wrapperTop;
  }

  const start = window.scrollY;
  const distance = targetY - start;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const progress = Math.min(time / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, start + distance * eased);
    if (time < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
