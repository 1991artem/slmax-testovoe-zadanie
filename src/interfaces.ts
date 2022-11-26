export type ITodo = {
  key: number;
  title: string
  description: string;
  complited: boolean;
  createdAt: Date;
}

export interface ITask {
  task: ITodo;
  delete: () => void;
}
