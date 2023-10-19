"use client";

import { StoryItem } from "@/components/story-item";
import { StoriesList, Story, User } from "@/types";
import { fetchUrlMetadata } from "@/utils/fetchUrlMetadata";
import { QueryFunction, useQuery } from "@tanstack/react-query";

const baseUrl = "https://hacker-news.firebaseio.com/v0";
const topStoriesUrl = `${baseUrl}/topstories.json`;

export const getTopStoriesIds = async () => {
  const response = await fetch(topStoriesUrl);
  const data = await response.json();

  return data as number[];
}

export const getStories = async (storyIds: number[]) => {
  const stories = await Promise.all(
    storyIds.map((id) =>
      fetch(`${baseUrl}/item/${id}.json`).then((story) => story.json())
    )
  ) as Story[];

  const preview = await Promise.all(
    stories.map((story) =>
      fetchUrlMetadata(story.url).then((meta) => meta)
    )
  )

  console.log('preview:', preview);

  const users = await Promise.all(
    stories.map((story) =>
      fetch(`${baseUrl}/user/${story.by}.json`).then((user) => user.json())
    )
  ) as User[]

  return stories
    .map((story) => ({
      ...story,
      user: users
        .map((user) => ({ id: user.id, karma: user.karma }))
        .find((user) => user.id === story.by),
      preview: preview
        .find((meta) => meta && meta.url === story.url) ?? null,
    }))
    .sort((a, b) => a.score - b.score) as StoriesList
}

export const getTopStories: QueryFunction<StoriesList> = async () => {
  const storyIds = (await getTopStoriesIds()).slice(0, 10);
  const stories = await getStories(storyIds)

  console.log('stories', stories);
  return stories;
}


export function StoriesList() {
  const { data: stories } = useQuery<StoriesList>({
    queryKey: ["stories"],
    queryFn: getTopStories,
    // suspense: true,
    staleTime: 5 * 1000,
  });

  return (
    <div className="flex flex-col space-y-4">
      {stories?.map(story => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  )
}