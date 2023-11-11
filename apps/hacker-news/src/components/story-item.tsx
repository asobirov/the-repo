import Image from "next/image";

import { StoriesListItem } from "@/types/stories";

export const StoryItem: React.FC<{ story: StoriesListItem }> = ({ story }) => {
  return (
    <div className="flex flex-row space-x-6 rounded-2xl border p-4 shadow-md">
      <div className="w-full whitespace-pre-wrap break-words">
        {JSON.stringify(story)}
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
