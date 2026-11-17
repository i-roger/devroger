import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  accentTitle?: string;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  accentTitle,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line" />
          <span>{label}</span>
        </div>
      </Reveal>

      <h2 className="mt-6 text-[2rem] leading-[1.02] font-medium tracking-[-0.045em] text-balance sm:text-[2.75rem] lg:text-[3.4rem]">
        <SplitText text={title} />
        {accentTitle ? (
          <>
            <br />
            <SplitText
              text={accentTitle}
              className="text-accent"
              delay={0.12}
            />
          </>
        ) : null}
      </h2>

      {description ? (
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
