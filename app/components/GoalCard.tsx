import { useState } from "react";

type Goal = {
  id: string;
  name: string;
  category_icon: string;
  category_color: string; // expecting 'blue', 'green', 'purple', 'pink'
  target_amount: number;
  current_amount: number;
};

const colorMap: Record<string, { 
  ring: string; 
  btn: string; 
  iconBg: string; 
  iconDarkBg: string; 
  inputRing: string; 
}> = {
  blue: {
    ring: "#3b82f6",
    btn: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    iconBg: "bg-blue-100",
    iconDarkBg: "dark:bg-blue-900",
    inputRing: "focus:ring-blue-500",
  },
  green: {
    ring: "#22c55e",
    btn: "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
    iconBg: "bg-green-100",
    iconDarkBg: "dark:bg-green-900",
    inputRing: "focus:ring-green-500",
  },
  purple: {
    ring: "#a855f7",
    btn: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
    iconBg: "bg-purple-100",
    iconDarkBg: "dark:bg-purple-900",
    inputRing: "focus:ring-purple-500",
  },
  pink: {
    ring: "#ec4899",
    btn: "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600",
    iconBg: "bg-pink-100",
    iconDarkBg: "dark:bg-pink-900",
    inputRing: "focus:ring-pink-500",
  },
};

export default function GoalCard({ goal }: { goal: Goal }) {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const percentComplete = Math.min(
    Math.round((goal.current_amount / goal.target_amount) * 100),
    100
  );

  const colors = colorMap[goal.category_color] || colorMap.blue;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.iconBg} ${colors.iconDarkBg}`}
          >
            <span className="text-base">{goal.category_icon}</span>
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
            {goal.name}
          </h3>
        </div>
        <button
          className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
          onClick={() => setIsDepositModalOpen(true)}
        >
          <span className="text-[18px]">+</span>
        </button>
      </div>

      {/* Progress Ring */}
      <div className="relative h-16 w-16 mb-4 flex-shrink-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#eee"
            strokeWidth="2"
            className="dark:stroke-zinc-700"
          />
          {/* Progress circle */}
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke={colors.ring}
            strokeWidth="2"
            strokeDasharray={`${percentComplete} 100`}
            strokeDashoffset="0"
            strokeLinecap="round"
            transform="rotate(-90 18 18)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-zinc-900 dark:text-zinc-100 font-bold text-sm">
          {percentComplete}%
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>
            KSh {goal.current_amount.toLocaleString()} of KSh {goal.target_amount.toLocaleString()}
          </span>
          <span className="font-medium">Goal</span>
        </div>
      </div>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 w-96 max-w-[90vw]">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Deposit to {goal.name}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Amount (KSh)
                </label>
                <input
                  type="number"
                  min="1"
                  className={`w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 ${colors.inputRing} dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100`}
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100"
                  defaultValue="+254700000000"
                  readOnly
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsDepositModalOpen(false)}
                className="px-4 py-2 border border-zinc-300 rounded-md text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 text-white rounded-md ${colors.btn}`}
              >
                Pay via M-Pesa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}