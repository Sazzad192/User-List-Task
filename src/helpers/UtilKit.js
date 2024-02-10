import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}

// senitizeParams function used for handle empty params
export function sanitizeParams(params) {
  // Initial params object
  const sanitizedObj = {};

  for (const key in params) {
    if (params[key]) {
      sanitizedObj[key] = params[key];
    }
  }
  return sanitizedObj;
}

export function getLabelFromValue(Options, value) {
  const option = Options.find(option => option.value === value);
  return option ? option.label : "Label Not Found";
}
