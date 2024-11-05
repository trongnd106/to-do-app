import dayjs from 'dayjs';
import { IAuthor } from 'app/shared/model/author.model';

export interface IBook {
  id?: number;
  title?: string | null;
  description?: string | null;
  publicationDate?: dayjs.Dayjs | null;
  price?: number | null;
  author?: IAuthor | null;
}

export const defaultValue: Readonly<IBook> = {};
