import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"
      />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.1] tracking-tight sm:text-[34px] md:text-[40px] lg:text-[44px] lg:leading-[1.05]">
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-pretty text-[14px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-[15px] md:text-base">
          {sub}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-14 sm:px-6 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
