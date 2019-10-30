import { useEffect } from 'react';
import _chunk from 'lodash/chunk';
import { HomePageText } from 'goldfish'
import { ThreeArticlesBlock } from 'shared/components/ThreeArticlesBlock/ThreeArticlesBlock';
import { useSelector } from 'hooks';
import storeSelector from './selectors';

import './style.scss';

export const TopStories = ({ className }) => {
  const { getTopArticles, topArticles } = useSelector(storeSelector);

  useEffect(() => {
    getTopArticles();
  }, []);

  return (
    <div className={cn('top-stories', className)}>
      {_chunk(topArticles, 3).map((block, i) => (
        <ThreeArticlesBlock
          key={block[0]._id}
          list={block}
          title={i === 0 ? HomePageText.topArticles : null}
        />
      ))}
    </div>
  );
};