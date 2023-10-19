import { StoryUrlPreview } from "@/types/url-preview";

type FetchUrlPreviewResponse = {
  preview: StoryUrlPreview | null;
};

export const fetchUrlMetadata = async (url: string) => {
  const data = await fetch("/api/url-preview?url=" + encodeURIComponent(url));
  const json = (await data.json()) as FetchUrlPreviewResponse;
  return json.preview;
};
