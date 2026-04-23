import TransactionRow from "./TransactionRow";

type Transaction = {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  note: string;
  date: string;
};

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "deposit",
    amount: 500,
    note: "Contribution to Vacation Fund",
    date: "Today, 10:30 AM",
  },
  {
    id: "2",
    type: "withdrawal",
    amount: 1200,
    note: "Groceries at Tuskys",
    date: "Apr 22, 3:15 PM",
  },
  {
    id: "3",
    type: "deposit",
    amount: 1000,
    note: "Contribution to New Car",
    date: "Apr 22, 10:00 AM",
  },
  {
    id: "4",
    type: "deposit",
    amount: 2000,
    note: "Monthly Allowance",
    date: "Apr 21, 6:30 PM",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 h-full">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Recent Activity
      </h2>
      <div className="flex flex-col">
        {mockTransactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}