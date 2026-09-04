export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  rank: number;
  order: number;
  coreNotes: string;
  reviewPrompts: string;
};

export type SeedEdge = {
  id: string;
  source: string;
  target: string;
};
