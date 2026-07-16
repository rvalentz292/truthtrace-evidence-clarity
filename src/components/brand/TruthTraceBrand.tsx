import { cn } from "@/lib/utils";

type TruthTraceBrandProps = {
  variant?: "horizontal" | "mark";
  className?: string;
  alt?: string;
  priority?: boolean;
};

const BRAND_ASSETS = {
  horizontal: "/brand/truthtrace-logo-primary.svg",
  mark: "/brand/truthtrace-logo-mark.svg",
} as const;

export function TruthTraceBrand({
  variant = "horizontal",
  className,
  alt = "TruthTrace",
  priority = false,
}: TruthTraceBrandProps) {
  return (
    <img
      src={BRAND_ASSETS[variant]}
      alt={alt}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("block h-auto max-w-full", className)}
    />
  );
}
