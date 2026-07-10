export type OrigamiItem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  category: string;
  icon: string;
};

export const origamiData: OrigamiItem[] = [
  { id: "o1", title: "Paper Crane", difficulty: "Easy", time: "10 min", category: "Animals", icon: "Bird" },
  { id: "o2", title: "Flapping Bird", difficulty: "Medium", time: "20 min", category: "Animals", icon: "Bird" },
  { id: "o3", title: "Lotus Flower", difficulty: "Medium", time: "25 min", category: "Flowers", icon: "Flower" },
  { id: "o4", title: "Tulip", difficulty: "Easy", time: "12 min", category: "Flowers", icon: "Flower" },
  { id: "o5", title: "Paper Boat", difficulty: "Easy", time: "8 min", category: "Toys", icon: "Box" },
  { id: "o6", title: "Jumping Frog", difficulty: "Medium", time: "18 min", category: "Toys", icon: "Star" },
  { id: "o7", title: "Butterfly", difficulty: "Easy", time: "15 min", category: "Animals", icon: "Heart" },
  { id: "o8", title: "Origami Fish", difficulty: "Easy", time: "10 min", category: "Animals", icon: "Star" },
  { id: "o9", title: "Kite", difficulty: "Easy", time: "10 min", category: "Toys", icon: "Gift" },
  { id: "o10", title: "Swan", difficulty: "Medium", time: "22 min", category: "Animals", icon: "Bird" },
  { id: "o11", title: "Ninja Star", difficulty: "Hard", time: "35 min", category: "Toys", icon: "Zap" },
  { id: "o12", title: "Rose", difficulty: "Hard", time: "40 min", category: "Flowers", icon: "Flower" },
  { id: "o13", title: "Fox Face", difficulty: "Easy", time: "9 min", category: "Animals", icon: "Paw" },
  { id: "o14", title: "Boxy Present", difficulty: "Medium", time: "20 min", category: "Gifts", icon: "Gift" },
  { id: "o15", title: "Modular Cube", difficulty: "Hard", time: "45 min", category: "Geometric", icon: "Box" },
];

export const featuredOrigami = origamiData.slice(0, 6);
