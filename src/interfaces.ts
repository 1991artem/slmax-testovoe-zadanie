export type ITodo = {
  key: number;
  title: string
  description: string;
  complited: boolean;
  createdAt: Date;
  comments: string[]
}

export interface ITask {
  dark: boolean;
  task: ITodo;
  delete: () => void;
}
