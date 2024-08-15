import { Downtime } from "../types/Downtime";
import { downtimes } from "./dummy-data";

export async function fetchDowntime(): Promise<Downtime[]> {
  return downtimes;
}

export async function fetchUpcomingDowntime(): Promise<Downtime[]> {
  return [];
}
