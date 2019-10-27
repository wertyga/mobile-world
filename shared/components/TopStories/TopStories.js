import _chunk from 'lodash/chunk';
import { HomePageText } from 'goldfish'
import { ThreeArticlesBlock } from 'shared/components/ThreeArticlesBlock/ThreeArticlesBlock';

import './style.scss';

export const TopStories = ({ list }) => {
   return (
     <div className="top-stories col-sm-6 col-xs-12">
       {_chunk(list, 3).map(block => (
        <ThreeArticlesBlock key={block[0].id} list={block} title={HomePageText.topArticles} />
       ))}
       {_chunk(list, 3).map(block => (
         <ThreeArticlesBlock key={block[0].id} list={block} />
       ))}
       {_chunk(list, 3).map(block => (
         <ThreeArticlesBlock key={block[0].id} list={block} />
       ))}
     </div>
   );
};