import Image from "next/image";
import Link from "next/link";

import { Button } from "@tr/ui/components/button";

import { StoriesListItem } from "@/types/stories";
import { getRelativeTime } from "@/utils/data/get-date-ago";

export const StoryItem: React.FC<{ story: StoriesListItem }> = ({
  story: { preview, ...story },
}) => {
  return (
    <div className="relative flex flex-row overflow-hidden rounded-2xl border p-4 shadow-md">
      <div className="absolute inset-0 -z-[1] flex justify-end">
        <div className="relative">
          <img
            className="h-full object-cover"
            src={preview?.images?.[0]}
            onError={(e) => {
              e.currentTarget.remove();
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
      </div>
      <div className="flex w-full flex-col whitespace-pre-wrap break-words">
        <div className="flex flex-col justify-start gap-1">
          <div className="w-min rounded-full bg-secondary px-3 py-1.5 text-[0.625rem] font-bold capitalize">
            {story.type}
          </div>
          <Button
            variant={"link"}
            className="h-auto justify-start p-0 text-base font-semibold text-foreground"
            asChild
          >
            <Link href={story.url}>{story.title}</Link>
          </Button>
        </div>
        <div className="pt-1 text-xs">
          <span>
            {story.user.id} ({story.user.karma} karma) • {story.score} points •{" "}
            {getRelativeTime(new Date(story.time * 1000))}
          </span>
        </div>
      </div>
    </div>
  );
};
