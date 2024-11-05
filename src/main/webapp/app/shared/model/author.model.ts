import dayjs from 'dayjs';

export interface IAuthor {
  id?: number;
  name?: string | null;
  birthDate?: dayjs.Dayjs | null;
}

export const defaultValue: Readonly<IAuthor> = {};
