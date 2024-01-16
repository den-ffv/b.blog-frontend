export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    const truncatedText = text.slice(0, maxLength);
    return truncatedText + "...";
  }
  return text;
};
