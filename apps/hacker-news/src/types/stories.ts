import {User} from './index';

export type Story = {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
  url: string;
}

export type StoriesList = Array<Story & {
  user: Pick<User, 'id' | 'karma'>;
}>