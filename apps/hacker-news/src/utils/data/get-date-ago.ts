export const getRelativeTime = (date: Date) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);

  // Calculate the difference in seconds
  let timeDifference = currentTimestamp - Math.floor(date.getTime() / 1000);

  // Function to format the relative time
  function formatRelativeTime(
    value: number,
    unit: Intl.RelativeTimeFormatUnit,
  ) {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    return rtf.format(value, unit);
  }

  // Convert the difference into a suitable unit and format it
  let relativeTime;
  if (timeDifference < 60) {
    // less than a minute
    relativeTime = formatRelativeTime(-timeDifference, "second");
  } else if (timeDifference < 3600) {
    // less than an hour
    relativeTime = formatRelativeTime(
      -Math.floor(timeDifference / 60),
      "minute",
    );
  } else if (timeDifference < 86400) {
    // less than a day
    relativeTime = formatRelativeTime(
      -Math.floor(timeDifference / 3600),
      "hour",
    );
  } else if (timeDifference < 2592000) {
    // less than a month
    relativeTime = formatRelativeTime(
      -Math.floor(timeDifference / 86400),
      "day",
    );
  } else if (timeDifference < 31536000) {
    // less than a year
    relativeTime = formatRelativeTime(
      -Math.floor(timeDifference / 2592000),
      "month",
    );
  } else {
    // more than a year
    relativeTime = formatRelativeTime(
      -Math.floor(timeDifference / 31536000),
      "year",
    );
  }

  return relativeTime;
};
