import type { Readable } from "stream";
import csv from "csvtojson";

export const parseLlyodsStatementCSV = async (readStream: Readable) => {
  const json = csv()
    .fromStream(readStream)
    .subscribe((json) => {
      console.log(json);
    });

  return json;
};
