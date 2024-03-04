export const isDevEnv = process.env.NODE_ENV === "development";
export const basePath = isDevEnv ? "" : "/website"