import { Downtime } from "../types/Downtime";

export async function fetchDowntime(): Promise<Downtime[]> {
  const resp = await fetch("/api/downtimes");
  const rawDowntime = await resp.json();
  return mapRawToDowntime(rawDowntime);
}

// This is so brittle it'll probably snap just looking at it too much.
function mapRawToDowntime(raw: object): Downtime[] {
  const downtimes: Downtime[] = [];

  for (const [key, value] of Object.entries(raw)) {
    const downtime: Downtime = {
      ticketId: key,
      status: value[0],
      provider: value[1],
      startDate: value[2],
      endDate: value[3],
      createdDate: value[4],
      affectedApis: value[5].split("/"),
      description: value.slice(6).join(" "),
      link: `https://openbanking.atlassian.net/browse/${key}`,
    };
    downtimes.push(downtime);
  }
  return downtimes;
}
