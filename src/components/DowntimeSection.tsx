import { Downtime } from "../types/Downtime";
import DowntimeTable from "./DowntimeTable";

interface DowntimeSectionProps {
  title: string;
  downtimes: Downtime[];
}

export function DowntimeSection({ title, downtimes }: DowntimeSectionProps) {
  return (
    <section className="mt-10">
      <h3 className="text-3xl text-slate-900 dark:text-slate-100">{title}</h3>
      {downtimes.length === 0 ? (
        <p className="text-slate-900 dark:text-slate-100">
          No downtimes found for this period
        </p>
      ) : (
        <DowntimeTable downtimes={downtimes} />
      )}
    </section>
  );
}
