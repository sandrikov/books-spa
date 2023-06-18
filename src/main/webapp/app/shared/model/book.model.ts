import { IComment } from 'app/shared/model/comment.model';
import { IAuthor } from 'app/shared/model/author.model';
import { IGenre } from 'app/shared/model/genre.model';

export interface IBook {
  id?: number;
  title?: string;
  comments?: IComment[] | null;
  author?: IAuthor;
  genre?: IGenre;
}

export const defaultValue: Readonly<IBook> = {};
