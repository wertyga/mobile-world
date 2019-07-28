import { ITEMS_IN_COLUMN_COUNT } from 'goldfish/MainManu/subMenu'

export const getColumns = (list) => {
  const result = []

  for (let i = 0; i < list.length; i += ITEMS_IN_COLUMN_COUNT) {
    const item = list.slice(i, i + ITEMS_IN_COLUMN_COUNT)
    result.push(item)
  }

  return result;
}