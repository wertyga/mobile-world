export const sortedByDate = (list = [], isCreateObject) => {
  const sortedArray = list.sort((a, b) => (a.date || a.createdAt) > (b.date || b.createdAt) ? 1 : -1);
  if (!isCreateObject) return sortedArray;

  return sortedArray.reduce((init, next) => {
    const date = new Date(next.date || next.createdAt).toISOString().split('T')[0]; // Get Day
    return {
      ...init,
      [date]: [
        ...(init[date] || []),
        next,
      ],
    };
  }, {});
}