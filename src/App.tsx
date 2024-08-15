import { useEffect, useState } from "react";
import { DowntimeSection } from "./components/DowntimeSection";
import { fetchDowntime, fetchUpcomingDowntime } from "./server/fetch-downtime";
import { Downtime } from "./types/Downtime";

function App() {
  const [downtime, setDowntime] = useState<Downtime[]>([]);
  const [upcomingDowntime, setUpcomingDowntime] = useState<Downtime[]>([]);

  useEffect(() => {
    async function getDowntime() {
      const data = await fetchDowntime();
      console.log(data);
      setDowntime(data);
    }

    async function getUpcomingDowntime() {
      const data = await fetchUpcomingDowntime();
      setUpcomingDowntime(data);
    }

    getDowntime();
    getUpcomingDowntime();
  }, []);

  return (
    <>
      <div className="min-h-screen min-w-full bg-slate-100 dark:bg-gray-900 flex flex-col align-middle">
        <header className="mx-auto">
          <h1 className="mt-10 text-6xl text-slate-900 dark:text-slate-100 font-bold">
            UK Open Banking Downtime
          </h1>
        </header>
        <main className="mt-10 mx-32 flex-grow">
          <DowntimeSection title={"Current Downtime"} downtimes={downtime} />
          <DowntimeSection
            title={"Upcoming Downtime"}
            downtimes={upcomingDowntime}
          />
        </main>
        <footer className="mb-10 text-slate-900 dark:text-slate-50 text-center">
          <a
            className="text-s hover:drop-shadow-lg hover:text-slate-500  dark:hover:text-slate-500"
            href="https://github.com/gavinroderick"
          >
            Made with ☕️ by thingsgavdoes
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
