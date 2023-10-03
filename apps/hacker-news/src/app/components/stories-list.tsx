"use client";

import { useQuery } from "@tanstack/react-query";

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
  );

  const users = await Promise.all(
    stories.map((story) =>
      fetch(`${baseUrl}/user/${story.by}.json`).then((user) => user.json())
    )
  );

  return stories
    .map((story) => ({
      ...story,
      user: users
        .map((user) => ({ id: user.id, karma: user.karma }))
        .find((user) => user.id === story.by),
    }))
    .sort((a, b) => a.score - b.score);
}

export const getTopStories = async () => {
  const storyIds = (await getTopStoriesIds()).slice(0, 10);

  return await getStories(storyIds);
}

export function StoriesList() {
  const { data } = useQuery({
    queryKey: ["stories"],
    queryFn: () => getTopStories(),
    // suspense: true,
    staleTime: 5 * 1000,
  });

  return (
    <pre className="text-xs">
        {JSON.stringify(data, null, 2)}
    </pre>
  )
}