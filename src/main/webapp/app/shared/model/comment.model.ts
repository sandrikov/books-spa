import { IBook } from 'app/shared/model/book.model';

export interface IComment {
  id?: number;
  text?: string;
  book?: IBook | null;
}

export const defaultValue: Readonly<IComment> = {};
