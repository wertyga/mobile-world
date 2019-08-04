import Link from 'next/link'
import { beautifyDateServer } from 'shared/utils'

import { ArticleShareSocial } from './ArticleShareSocial'

import { getDateTime } from './helpers'

import './style/article-view.sass'

export const ArticleView = ({ name, href, content, category, description, createdAt }) => {
  const { date, time } = getDateTime(createdAt)

  return (
    <div className="article-view container">
      <div className="article-view__header">
        <Link href={`/topics/${category}`}>
          <a className="article-view__category">{category}</a>
        </Link>
        <h1>{name}</h1>

        <p className="article-view__description">{description}</p>
        {date && <p className="article-view__date">{`${beautifyDateServer(date)}, ${time}`}</p>}

        <ArticleShareSocial />
      </div>

      <div className="article-view__content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}