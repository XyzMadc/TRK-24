export const formatUrls = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};
