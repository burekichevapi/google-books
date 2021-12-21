export const linkToHttps = (link) => {
  if (link) return "https" + link.substring(4);
};
