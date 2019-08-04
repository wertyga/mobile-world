export const getDateTime = (dateString) => {
  if (!dateString) return {};

  const date = dateString.split('T')[0]
  const time = dateString.split('T')[1].split(':').slice(0, -1).join(':')

  return { date, time }
}