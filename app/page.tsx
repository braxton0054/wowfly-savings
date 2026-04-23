import FinancialHealthCard from "./components/FinancialHealthCard";
import GoalsGrid from "./components/GoalsGrid";
import RecentActivity from "./components/RecentActivity";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 p-6 bg-zinc-50 dark:bg-black">
      <div className="mb-6">
        <FinancialHealthCard />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <GoalsGrid />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}