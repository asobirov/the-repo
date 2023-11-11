import type { getLinkPreview } from "link-preview-js";

export type StoryUrlPreview = Awaited<ReturnType<typeof getLinkPreview>> & {
  images?: string[];
  title?: string;
};
