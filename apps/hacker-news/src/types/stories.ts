import {User} from './index';

export type Story = {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
  url: string;
}

export type StoriesListItem = Story & {
  user: Pick<User, 'id' | 'karma'>;
}

export type StoriesList = Array<StoriesListItem>