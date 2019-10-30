import { useEffect } from 'react';
import { observer } from 'mobx-react'
import { LittleArticlePreview } from '../LittleArticlePreview/LittleArticlePreview';
import { useSelector } from 'hooks';
import storeSelector from './selectors';

import './style.scss';

export const LatestStores = ({ title, className }) => {
  const { getLatestArticles, latestArticles } = useSelector(storeSelector);

  useEffect(() => {
    getLatestArticles();
  }, []);


  return (
    <div className={cn('latest-stories', className)}>
      {title && <h2 className="latest-stories__title">{title}</h2>}

      {latestArticles.map(item => (
        <LittleArticlePreview
          key={item._id}
          {...item}
        />
      ))}
    </div>
  );
};
