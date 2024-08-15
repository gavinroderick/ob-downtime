export type Downtime = {
  ticketId: string;
  provider: string;
  status: Status;
  affectedApis: Api[];
  startDate: string;
  endDate: string;
  createdDate: string;
  description: string;
  link: string;
};

type ObjectValues<T> = T[keyof T];
export const API = {
  AIS: "AIS",
  PIS: "PIS",
  Other: "Other",
} as const;
export type Api = ObjectValues<typeof API>;

export const STATUS = {
  Planned: "Planned",
  Completed: "Completed",
  Active: "Active",
} as const;
export type Status = ObjectValues<typeof STATUS>;
