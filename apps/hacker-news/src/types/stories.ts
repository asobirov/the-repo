import { StoryUrlPreview, User } from "./index";

export type Story = {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
  url: string;
  type: string;
};

export type StoriesListItem = Story & {
  user: Pick<User, "id" | "karma">;
  preview: StoryUrlPreview | null;
};

export type StoriesList = Array<StoriesListItem>;
