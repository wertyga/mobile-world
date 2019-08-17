import { Article } from 'server/models'

const TEXT = {
  error: 'Статья с таким именем уже существует',
}

export const saveArticle = async ({
  filePaths = [],
  fields,
  isUpdate,
}) => {
  const { name = [], content = [], href = [], description = [], tags = [], category = [], id = [], file = [] } = fields;
  const updateID = id[0];

  let article = {};
  const previewImage = filePaths[0] || file[0]
  const saveObject = {
      name: name[0],
      content: content[0],
      href: href[0],
      description: description[0],
      tags: tags[0].split(','),
      category: category[0],
      previewImage,
    }
    console.log(updateID)
  if (updateID) {
    article = await Article.findByIdAndUpdate(updateID, { $set: saveObject }, { upsert: true, new: true })
  } else {
    const existArticle = await Article.findOne({ name })

    if (existArticle) throw new Error(TEXT.error)
    article = await new Article({
        name: name[0],
        content: content[0],
        href: href[0],
        description: description[0],
        tags: tags[0].split(',').map(item => item.trim()),
        category: category[0],
        previewImage,
      }).save()
  }

  return article;
}
