import type { Config } from "tailwindcss";

import baseConfig from "@the-repo/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
  prefix: "ui-",
} satisfies Config;
