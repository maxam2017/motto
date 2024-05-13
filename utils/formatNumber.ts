export const THREE_DIGITS_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export const formatNumber = (number: number) => {
  const str = number.toString();

  return str.replace(THREE_DIGITS_REGEX, ",");
};
