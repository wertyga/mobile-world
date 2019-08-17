import Link from 'next/link'
import { beautifyDateServer } from 'shared/utils'
import _JSXStyle from 'styled-jsx/style'

import { ArticleShareSocial } from './ArticleShareSocial'

import { getDateTime } from './helpers'
import styles from './style/articleView.style';

export const ArticleView = ({ name, href, content, category, description, createdAt }) => {
  const { date, time } = getDateTime(createdAt)

  return (
    <div className="article-view container">
      <div className="header">
        <Link href={`/topics/${category}`}>
          <a className="category">{category}</a>
        </Link>
        <h1>{name}</h1>

        <p className="description">{description}</p>
        {date && <p className="date">{`${beautifyDateServer(date)}, ${time}`}</p>}

        <ArticleShareSocial />
      </div>

      <div className="article-view__content" dangerouslySetInnerHTML={{ __html: content }} />

      <style jsx>{styles}</style>
    </div>
  );
}