import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
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
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[44px] md:leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base">{sub}</p>}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
