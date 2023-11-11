import { type NextRequest } from "next/server";
import { getLinkPreview } from "link-preview-js";

export const revalidate = 60 * 60 * 24 * 7;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({
      preview: null,
    });
  }

  try {
    const preview = await getLinkPreview(url);

    return Response.json({
      preview,
    });
  } catch (e) {
    console.error(e);
    return Response.json({
      preview: null,
    });
  }
}
