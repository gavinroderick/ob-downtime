export type Downtime = {
  provider: string;
  status: "Ongoing" | "Upcoming" | "Finished";
  affectedApis: "AIS" | "Confirmation of Funds" | "Event Notification";
  startDate: Date;
  endDate: Date;
  link: string;
};
