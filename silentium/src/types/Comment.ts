export type Comment = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: 'comment';
};
