import { Api } from "../types/Downtime";

interface AffectedApisProps {
  apis: Api[];
}
export function AffectedApis({ apis }: AffectedApisProps) {
  return (
    <>
      {apis.map((api, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          {api.toString()}
        </span>
      ))}
    </>
  );
}
