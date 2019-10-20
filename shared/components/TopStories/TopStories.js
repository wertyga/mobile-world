import _chunk from 'lodash/chunk';
import { TopStoriesItem } from './TopStoriesItem';

export const TopStories = ({ list, header }) => {
   return (
     <div className="top-stories col-sm-6 col-xs-12">
       {header && <h2 className="article-block-header">{header}</h2>}

       {_chunk(list, 3).map(block => (
         <TopStoriesItem key={block[0].id} list={block} />
       ))}
       {_chunk(list, 3).map(block => (
         <TopStoriesItem key={block[0].id} list={block} />
       ))}
       {_chunk(list, 3).map(block => (
         <TopStoriesItem key={block[0].id} list={block} />
       ))}
     </div>
   );
};