export function BrandMark() {
  return (
    <span
      data-brand-mark
      aria-hidden
      className="relative grid size-7 shrink-0 place-items-center rounded-sm border border-primary/40 bg-primary/10"
    >
      <span className="absolute h-px w-4 bg-primary/60" />
      <span className="absolute h-4 w-px bg-primary/60" />
      <span className="relative size-1.5 rounded-[1px] bg-primary" />
    </span>
  );
}
