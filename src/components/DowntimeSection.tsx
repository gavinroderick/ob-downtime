import { Downtime } from "./Downtime";
import Table from "./Table";

interface DowntimeSectionProps {
  title: string;
  downtimes: Downtime[];
}

export function DowntimeSection({ title, downtimes }: DowntimeSectionProps) {
  return (
    <section className="mt-10">
      <h3 className="text-3xl text-slate-900 dark:text-slate-100">{title}</h3>
      <Table downtimes={downtimes} />
    </section>
  );
}
