export type IEvent = React.ChangeEvent<HTMLInputElement>;
export type TEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type BEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type Post = {
  id: number;
  title: string;
  content: string;
};
