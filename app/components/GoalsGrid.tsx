import GoalCard from "./GoalCard";

type Goal = {
  id: string;
  name: string;
  category_icon: string;
  category_color: string;
  target_amount: number;
  current_amount: number;
};

const mockGoals: Goal[] = [
  {
    id: "1",
    name: "Vacation Fund",
    category_icon: "🏖️",
    category_color: "blue",
    target_amount: 50000,
    current_amount: 34500,
  },
  {
    id: "2",
    name: "New Car",
    category_icon: "🚗",
    category_color: "green",
    target_amount: 800000,
    current_amount: 120000,
  },
  {
    id: "3",
    name: "Down Payment",
    category_icon: "🏠",
    category_color: "purple",
    target_amount: 500000,
    current_amount: 156000,
  },
  {
    id: "4",
    name: "Wedding",
    category_icon: "💍",
    category_color: "pink",
    target_amount: 300000,
    current_amount: 89000,
  },
];

export default function GoalsGrid() {
  return (
    <div>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Savings Goals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
}