import express from 'express'
import { firstLevelMenu, subMenus } from './categories'

export const categoriesRoute = express.Router()

categoriesRoute.get('/', async ({ query: { pathname } }, res) => {
  if (!pathname) return res.json({ categories: [] })

  const firstLevelCompareCategories = firstLevelMenu.filter(item => item.pathname.includes(pathname))
  const categories = firstLevelCompareCategories.map(item => {
    const { _id } = item
    const subMenu = []
    Object.values(subMenus).forEach(subArr => {
      subArr.forEach(sub => {
        const { parentId } = sub
        if (Array.isArray(parentId) && parentId.includes(_id)) {
          subMenu.push(sub)
        }
      })
    })

    return { ...item, subMenu  }
  })
  res.json({ categories })
})
