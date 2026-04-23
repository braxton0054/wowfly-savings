import { useState } from "react";

export default function FinancialHealthCard() {
  const [view, setView] = useState<'personal' | 'joint'>('joint');

  // Mock data - replace with actual data fetching
  const totalBalance = 12450.00;
  const personalBalance = 6200.00;
  const jointBalance = 6250.00;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Couples Financial Health
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView('personal')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              view === 'personal'
                ? 'bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setView('joint')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              view === 'joint'
                ? 'bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }`}
          >
            Joint
          </button>
        </div>
      </div>

      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        KSh {view === 'personal' ? personalBalance : jointBalance
          .toLocaleString()}
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 mt-1">
        {view === 'personal' ? 'Your personal balance' : 'Combined balance'}
      </p>
    </div>
  );
}