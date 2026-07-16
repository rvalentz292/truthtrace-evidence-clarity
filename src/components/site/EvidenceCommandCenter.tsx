import { useRef, type KeyboardEvent } from "react";
import {
  CalendarClock,
  FileImage,
  FileText,
  Fingerprint,
  Link2,
  LocateFixed,
  MessageSquareText,
  Quote,
  SearchCheck,
  TriangleAlert,
} from "lucide-react";

import evidence from "@/content/homepage-evidence.json";

export type EvidenceEvent = (typeof evidence.events)[number];

type EvidenceCommandCenterProps = {
  selectedId: string;
  onSelect: (id: string) => void;
};

export function EvidenceCommandCenter({ selectedId, onSelect }: EvidenceCommandCenterProps) {
  const eventButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedEvent =
    evidence.events.find((item) => item.id === selectedId) ?? evidence.events[0];

  function moveSelection(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    const lastIndex = evidence.events.length - 1;
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    }

    if (nextIndex === undefined) return;
    event.preventDefault();
    const next = evidence.events[nextIndex];
    onSelect(next.id);
    eventButtons.current[nextIndex]?.focus();
  }

  return (
    <div
      id="command-center"
      role="region"
      tabIndex={-1}
      className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-[#080c13] shadow-[0_32px_90px_-48px_rgba(0,0,0,0.95)]"
      aria-labelledby="command-center-title"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface/55 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="size-2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]"
          />
          <h2
            id="command-center-title"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80"
          >
            Evidence command center
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>Illustrative product demonstration</span>
          <span className="text-success">No real family data</span>
        </div>
      </div>

      <div className="grid min-w-0 lg:grid-cols-[0.74fr_1fr_1.18fr]">
        <div className="min-w-0 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <PanelHeading number="01" title="Evidence sources" />
          <div className="mt-4 space-y-2.5" role="group" aria-label="Illustrative evidence sources">
            {evidence.sources.map((source) => {
              const linked = selectedEvent.linkedSourceIds.includes(source.id);
              return (
                <article
                  key={source.id}
                  data-linked={linked ? "true" : "false"}
                  className={`min-w-0 rounded-sm border p-3 transition-colors ${
                    linked ? "border-primary/55 bg-primary/[0.09]" : "border-border bg-surface/25"
                  }`}
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      aria-hidden
                      className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-sm border ${
                        linked
                          ? "border-primary/45 bg-primary/10 text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <SourceIcon kind={source.kind} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex min-w-0 items-center justify-between gap-2">
                        <h4 className="min-w-0 break-words text-[12px] font-medium text-foreground/90">
                          {source.label}
                        </h4>
                        {linked && (
                          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
                            Linked
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[10.5px] text-muted-foreground">{source.detail}</p>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[9.5px] text-muted-foreground">
                        <span>{source.identity}</span>
                        <span>{source.integrity}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="min-w-0 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <PanelHeading number="02" title="Chronology" />
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Choose an event to update its linked sources and exact proof.
          </p>
          <div
            className="mt-4 space-y-2.5"
            role="group"
            aria-label="Illustrative chronology events"
          >
            {evidence.events.map((item, index) => {
              const selected = item.id === selectedEvent.id;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    eventButtons.current[index] = node;
                  }}
                  type="button"
                  aria-pressed={selected}
                  aria-controls="selected-source-proof"
                  onClick={() => onSelect(item.id)}
                  onKeyDown={(event) => moveSelection(event, index)}
                  className={`group w-full min-w-0 rounded-sm border p-3 text-left transition-colors ${
                    selected
                      ? "border-primary/60 bg-primary/[0.1]"
                      : "border-border bg-surface/20 hover:border-foreground/25 hover:bg-surface/45"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.date} · {item.time}
                    </span>
                    <span
                      aria-hidden
                      className={`size-1.5 shrink-0 rounded-full ${
                        selected ? "bg-primary" : "bg-muted-foreground/35"
                      }`}
                    />
                  </span>
                  <span className="mt-2 block text-[12px] font-medium leading-snug text-foreground/90">
                    {item.title}
                  </span>
                  <span className="mt-1.5 line-clamp-2 block text-[10.5px] leading-relaxed text-muted-foreground">
                    {item.observation}
                  </span>
                  <span className="mt-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] text-foreground/60">{item.id}</span>
                    <ReviewBadge event={item} compact />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-[9px] leading-relaxed text-muted-foreground">
            Keyboard: arrow keys, Home, and End move between events.
          </p>
        </div>

        <div id="selected-source-proof" className="min-w-0 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <PanelHeading number="03" title="Selected source proof" />
            <ReviewBadge event={selectedEvent} />
          </div>

          <div className="mt-5 rounded-sm border border-border bg-surface/25 p-4">
            <DataLabel icon={SearchCheck}>Selected observation</DataLabel>
            <p className="mt-2 text-[13px] font-medium leading-relaxed text-foreground/90">
              {selectedEvent.observation}
            </p>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <DataField
              icon={CalendarClock}
              label="Timeline event"
              value={selectedEvent.timelineEvent}
            />
            <DataField icon={Link2} label="Citation" value={selectedEvent.citation} mono />
          </div>

          <blockquote className="mt-3 rounded-sm border border-primary/25 bg-primary/[0.055] p-4">
            <DataLabel icon={Quote}>Exact excerpt</DataLabel>
            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground/90">
              {selectedEvent.excerpt}
            </p>
          </blockquote>

          <dl className="mt-3 divide-y divide-border rounded-sm border border-border bg-surface/20">
            <DefinitionRow label="Source locator" value={selectedEvent.sourceLocator} />
            <DefinitionRow label="Evidence identity" value={selectedEvent.sourceIdentity} />
            <DefinitionRow label="Integrity identifier" value={selectedEvent.integrityId} />
          </dl>

          <div className="mt-3 flex items-start gap-2.5 rounded-sm border border-border bg-background/60 p-3">
            <TriangleAlert aria-hidden className="mt-0.5 size-3.5 shrink-0 text-warning" />
            <p className="text-[10.5px] leading-relaxed text-muted-foreground">
              {selectedEvent.reviewNote}
            </p>
          </div>
          <span className="sr-only" aria-live="polite">
            Selected {selectedEvent.id}. Review state: {selectedEvent.reviewState}.
          </span>
        </div>
      </div>
    </div>
  );
}

function PanelHeading({ number, title }: { number: string; title: string }) {
  return (
    <h3 className="flex items-center gap-2.5">
      <span className="font-mono text-[10px] text-primary">{number}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.19em] text-foreground/75">
        {title}
      </span>
    </h3>
  );
}

function SourceIcon({ kind }: { kind: string }) {
  if (kind === "Message export") return <MessageSquareText className="size-3.5" />;
  if (kind === "Image") return <FileImage className="size-3.5" />;
  return <FileText className="size-3.5" />;
}

function ReviewBadge({ event, compact = false }: { event: EvidenceEvent; compact?: boolean }) {
  const linked = event.reviewTone === "linked";
  const Icon = linked ? Link2 : TriangleAlert;
  return (
    <span
      className={`evidence-state inline-flex min-h-6 items-center gap-1.5 rounded-sm border px-2 font-mono uppercase tracking-[0.1em] ${
        compact ? "text-[8.5px]" : "text-[9px]"
      } ${
        linked
          ? "border-primary/35 bg-primary/[0.07] text-primary"
          : "border-warning/35 bg-warning/[0.08] text-warning"
      }`}
    >
      <Icon aria-hidden className="size-3 shrink-0" />
      {event.reviewState}
    </span>
  );
}

function DataLabel({ icon: Icon, children }: { icon: typeof Fingerprint; children: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.17em] text-muted-foreground">
      <Icon aria-hidden className="size-3 text-primary" />
      {children}
    </div>
  );
}

function DataField({
  icon,
  label,
  value,
  mono = false,
}: {
  icon: typeof Fingerprint;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-sm border border-border bg-surface/20 p-3">
      <DataLabel icon={icon}>{label}</DataLabel>
      <p
        className={`mt-2 break-words text-[11px] leading-relaxed text-foreground/85 ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function DefinitionRow({ label, value }: { label: string; value: string }) {
  const icon =
    label === "Source locator" ? LocateFixed : label === "Evidence identity" ? Fingerprint : Link2;
  const Icon = icon;
  return (
    <div className="grid min-w-0 gap-1.5 px-3 py-2.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-start">
      <dt className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
        <Icon aria-hidden className="size-3 text-primary" />
        {label}
      </dt>
      <dd className="break-words font-mono text-[10px] leading-relaxed text-foreground/75">
        {value}
      </dd>
    </div>
  );
}
