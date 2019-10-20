import _chunk from 'lodash/chunk'

import { HomePageText as TEXT } from 'goldfish'

import { TopStoriesItem } from './TopStoriesItem'

export const TopStories = ({ list }) => {
  return (
    <div className="top-stories col-sm-6 col-xs-12">
      <h2 className="article-block-header">{TEXT.topArticles}</h2>

      {_chunk(list, 3).map(block => (
        <TopStoriesItem key={block[0].id} list={block} />
      ))}
    </div>
  );
}