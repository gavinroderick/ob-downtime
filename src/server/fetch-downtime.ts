import { Downtime } from "../types/Downtime";

export async function fetchDowntime(): Promise<any[]> {
  var resp = await fetch("/api/downtimes");
  var downtime = await resp.json();
  return downtime;
}

export async function fetchUpcomingDowntime(): Promise<Downtime[]> {
  return [];
}
