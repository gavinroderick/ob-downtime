import { Downtime } from "./components/Downtime";
import { DowntimeSection } from "./components/DowntimeSection";

function App() {
  const downtimes: Downtime[] = [
    {
      provider: "Lloyds Bank",
      status: "Ongoing",
      startDate: new Date(),
      endDate: new Date(),
      link: "",
      affectedApis: "AIS",
    },
    {
      provider: "HSBC",
      status: "Ongoing",
      startDate: new Date(),
      endDate: new Date(),
      link: "",
      affectedApis: "AIS",
    },
  ];

  const upcomingDowntime: Downtime[] = [
    {
      provider: "Lloyds Bank",
      status: "Ongoing",
      startDate: new Date(),
      endDate: new Date(),
      link: "",
      affectedApis: "AIS",
    },
    {
      provider: "HSBC",
      status: "Ongoing",
      startDate: new Date(),
      endDate: new Date(),
      link: "",
      affectedApis: "AIS",
    },
  ];

  return (
    <>
      <div className="min-h-screen min-w-full bg-slate-100 dark:bg-gray-900 flex flex-col align-middle">
        <header className="mx-auto">
          <h1 className="mt-10 text-6xl text-slate-900 dark:text-slate-100 font-bold">
            UK Open Banking Downtime
          </h1>
        </header>
        <main className="mt-10 mx-32 flex-grow">
          <DowntimeSection title={"Current Downtime"} downtimes={downtimes} />
          <DowntimeSection
            title={"Upcoming Downtime"}
            downtimes={upcomingDowntime}
          />
        </main>
        <footer className="mb-10 text-slate-900 dark:text-slate-50 text-center">
          <p className="text-s hover:text-slate-700 dark:hover:text-slate-500">
            Made with ☕️ by thingsgavdoes
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
