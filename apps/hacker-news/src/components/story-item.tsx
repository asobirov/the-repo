import { StoriesListItem } from "@/types/stories";

export const StoryItem: React.FC<{ story: StoriesListItem }> = ({ story }) => {
  return (
    <div className="rounded-xl border shadow-md">{JSON.stringify(story)}</div>
  );
};
