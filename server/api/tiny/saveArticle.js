import { Article } from 'server/models'

const TEXT = {
  error: 'Статья с таким именем уже существует',
}

export const saveArticle = async ({
  filePaths = [],
  fields: { name = [], content = [], href = [], description = [], tags = [], category = [] }
}) => {
  const existArticle = await Article.findOne({ name })

  if (existArticle) throw new Error(TEXT.error);

  const previewImage = filePaths[0];

  return await new Article({
    name: name[0],
    content: content[0],
    href: href[0],
    description: description[0],
    tags: tags[0].split(',').map(item => item.trim()),
    category: category[0],
    previewImage,
  }).save()
}
