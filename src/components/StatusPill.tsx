import { STATUS, Status } from "../types/Downtime";

interface StatusProps {
  status: Status;
}
export default function StatusPill({ status }: StatusProps) {
  return status === STATUS.Active ? (
    <span className="bg-rose-500 text-gray-100 font-medium me-2 px-2.5 py-0.5 rounded">
      {status}
    </span>
  ) : (
    <span className="bg-orange-500 text-gray-100 font-medium me-2 px-2.5 py-0.5 rounded dark:text-gray-300">
      {status}
    </span>
  );
}
