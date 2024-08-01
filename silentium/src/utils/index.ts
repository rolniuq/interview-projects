export const getPaginatedElements = <T>(
  array: T[],
  p: number,
  l: number,
): T[] => {
  const start = (p - 1) * l;
  const end = start + l;

  return array.slice(start, end);
};

export const getDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-GB');
};
