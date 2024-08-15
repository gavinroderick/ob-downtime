import { Downtime } from "../types/Downtime";

export async function fetchDowntime(): Promise<Downtime[]> {
  const resp = await fetch("/api/downtimes");
  const rawDowntime = await resp.json();
  return mapRawToDowntime(rawDowntime);
}

// This is so brittle it'll probably snap just looking at it too much.
function mapRawToDowntime(raw: object): Downtime[] {
  const downtimes: Downtime[] = [];

  for (let [key, value] of Object.entries(raw)) {
    // hack for stupid ticket number bug that I can't figure out
    let index = 0;
    if (key === "OBIE-1") {
      key = "OBIE-12492";
      index = 1;
    }

    const downtime: Downtime = {
      ticketId: key,
      status: value[index],
      provider: value[index + 1],
      startDate: value[index + 2],
      endDate: value[index + 3],
      createdDate: value[index + 4],
      affectedApis: value[index + 5].split("/"),
      description: value.slice(index + 6).join(" "),
      link: `https://openbanking.atlassian.net/browse/${key}`,
    };
    downtimes.push(downtime);
  }
  return downtimes;
}
