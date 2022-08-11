export type Todo = {
  name: string;
  tag: string;
  description: string;
  id: number;
};

export const todoData: Todo[] = [
  {
    id: 1,
    name: "Clean grocery list",
    description: "Meat + Veggies + Kombucha",
    tag: "chores",
  },
  {
    id: 2,
    name: "Pay medical bills",
    description: "$100 for hospitalization",
    tag: "chores",
  },
  {
    id: 3,
    name: "Finish NEMSW",
    description: "Kode",
    tag: "work",
  },
  {
    id: 4,
    name: "Plan for Jeju holiday",
    description: "Go to da beach",
    tag: "leisure",
  },
];
