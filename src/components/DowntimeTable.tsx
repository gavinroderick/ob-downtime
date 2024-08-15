import { Downtime } from "../types/Downtime";

export interface TableProps {
  downtimes: Downtime[];
}

export default function DowntimeTable({ downtimes }: TableProps) {
  return (
    <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-slate-300">
        <thead className="text-s text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Provider
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Affected API's
            </th>
            <th scope="col" className="px-6 py-3">
              Start
            </th>
            <th scope="col" className="px-6 py-3">
              End
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {downtimes.map((downtime, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-700 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {downtime.provider}
              </th>
              <td className="px-6 py-4">{downtime.affectedApis.join(", ")}</td>
              <td className="px-6 py-4">{downtime.status}</td>
              <td className="px-6 py-4">{downtime.startDate}</td>
              <td className="px-6 py-4">{downtime.endDate}</td>
              <td className="px-6 py-4">
                <a
                  href={downtime.link}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  More info
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
