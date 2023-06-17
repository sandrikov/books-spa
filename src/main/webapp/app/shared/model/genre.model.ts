import { IBook } from 'app/shared/model/book.model';

export interface IGenre {
  id?: number;
  name?: string;
  books?: IBook[] | null;
}

export const defaultValue: Readonly<IGenre> = {};
