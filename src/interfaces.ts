export type ITodo = {
  key: number;
  title: string;
  description: string;
  createdAt: Date;
  comments: IComment[];
}

export interface ITask {
  task: ITodo;
}

export interface IComment {
  id: number;
  text: string;
  owner: string;
  createdAt: Date;
  isAnswer: boolean;
  answers: IComment[];
  answerCommentId?: number;
}

export interface IContext {
  deleteTask: (id: number) => void;
  addComment: (id: number, comment: IComment) => void;
  answer: (id: number, commentId: number, comment: IComment) => void;
  removeComment: (id: number, commentId: number) => void;
  removeAnswer: (id: number, commentId: number, answerCommentId: number | undefined) => void;
  dark: boolean;
}

export interface IDescriptionProps {
  props: ITodo;
}

export interface IDelete {
  setTimer: (value: boolean) => void;
  delete: () => void;
}

export interface ICommentProps {
  comment: IComment;
  id: number;
}

export interface IInput {
  function: (value: string) =>void;
}

export interface ITodosFilter {
  startDate: Date;
  endDate: Date;
}

export interface IHeader {
  setTheme: (value: boolean)=>void;
  setFilter: (value: ITodosFilter)=>void;
}

export interface IFilter {
  dark: boolean;
  setFilter: (value: ITodosFilter)=>void;
}

export interface ITodosApp {
  dark: boolean;
  filter: ITodosFilter;
}
