import type { Readable } from "stream";

import { parseLlyodsStatementCSV as csvParser } from "./csv-parser";

export const parseLlyodsStatement = async (
  fileReadStream: Readable,
  fileType?: "csv",
) => {
  switch (fileType) {
    case "csv":
      return csvParser(fileReadStream);
    default:
      throw new Error("File type not supported");
  }
};
