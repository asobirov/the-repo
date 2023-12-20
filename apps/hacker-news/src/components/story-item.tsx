import Image from "next/image";

import { StoriesListItem } from "@/types/stories";

export const StoryItem: React.FC<{ story: StoriesListItem }> = ({ story }) => {
  return (
    <div className="flex flex-row space-x-6 rounded-2xl border p-4 shadow-md">
      <div className="flex w-full flex-col whitespace-pre-wrap break-words">
        <h1 className="text-base font-semibold">{story.title}</h1>
        {JSON.stringify(story)}
        <div className="flex justify-end">
          <div className="w-min rounded-full bg-secondary px-3 py-1.5 text-xs">
            {story.type}
          </div>
        </div>
      </div>
      <div className="w-40">
        <StoryItemPreview story={story} />
      </div>
    </div>
  );
};

const StoryItemPreview: React.FC<{ story: StoriesListItem }> = ({ story }) => {
  const previewImageUrl = story.preview?.images?.[0];

  return (
    <>
      {previewImageUrl && (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <img
            src={previewImageUrl}
            className="h-full w-full rounded-2xl object-cover object-center"
          />
        </div>
      )}
    </>
  );
};
