export const gfAdminArticle = {
  inputs: {
    name: {
      hero: {
        text: 'Name',
      },
    },
    href: {
      hero: {
        text: 'Href',
      },
    },
    file: {
      hero: {
        text: 'Preview image',
      },
    },
    category: {
      hero: {
        text: 'Category',
      },
    },
    description: {
      hero: {
        text: 'Description',
      },
      textarea: true,
    },
    tags: {
      hero: {
        text: 'Tags',
      },
    },
  },

  editLink: id => `/admin/create-article?edit=true&id=${id}`
}