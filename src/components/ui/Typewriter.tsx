import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypewriterProps = {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export function Typewriter({
  phrases,
  className,
  typingSpeed = 58,
  deletingSpeed = 26,
  pause = 1600,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(reduce ? phrases[0] : "");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    if (reduce) {
      setText(phrases[0]);
      return;
    }

    const current = phrases[index % phrases.length];
    let timer: number | undefined;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = window.setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed + Math.random() * 45,
        );
      } else {
        timer = window.setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timer = window.setTimeout(() => setPhase("deleting"), 240);
    } else if (text.length > 0) {
      timer = window.setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed,
      );
    } else {
      setIndex((i) => i + 1);
      setPhase("typing");
    }

    return () => window.clearTimeout(timer);
  }, [text, phase, index, phrases, typingSpeed, deletingSpeed, pause, reduce]);

  return (
    <span className={className} aria-live="off">
      {text}
      <span className="animate-caret ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.1em] bg-accent align-baseline" />
    </span>
  );
}
