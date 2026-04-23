type Transaction = {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  note: string;
  date: string;
};

export default function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isDeposit = transaction.type === "deposit";
  const amountColor = isDeposit ? "text-green-600" : "text-red-600";
  const amountPrefix = isDeposit ? "+" : "-";

  return (
    <div className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0">
      <div className="flex-1">
        <p className="font-medium text-zinc-900 dark:text-zinc-100">
          {transaction.note}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate max-w-[120px]">
          {transaction.date}
        </p>
      </div>
      <div className={`font-bold ${amountColor}`}>
        {amountPrefix} KSh {transaction.amount.toLocaleString()}
      </div>
    </div>
  );
}