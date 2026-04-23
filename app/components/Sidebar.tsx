import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 flex-shrink-0">
      <div className="flex flex-col h-full px-4 py-6 space-y-4">
        <Link href="/" className="flex flex-col items-start gap-2">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Wowfly</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Savings</span>
        </Link>
        <nav className="flex-1 flex flex-col space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800">
            <span className="text-[18px]">📊</span>
            <span>Dashboard</span>
          </Link>
          <Link href="/goals" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50 dark:hover:text-zinc-200 dark:hover:bg-zinc-800">
            <span className="text-[18px]">🎯</span>
            <span>Goals</span>
          </Link>
          <Link href="/transactions" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50 dark:hover:text-zinc-200 dark:hover:bg-zinc-800">
            <span className="text-[18px]">📝</span>
            <span>Transactions</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50 dark:hover:text-zinc-200 dark:hover:bg-zinc-800">
            <span className="text-[18px]">⚙️</span>
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}