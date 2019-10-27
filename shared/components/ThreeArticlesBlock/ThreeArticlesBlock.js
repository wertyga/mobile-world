import Link from 'next/link';
import { LittleArticle } from 'shared/components/LittleArticle/LittleArticle';

import './style.scss';

export const ThreeArticlesBlock = ({ list, title }) => {
   return (
     <div className="three-articles-block">
       {title && <h3 className="three-articles-block__title">{title}</h3>}

       <LittleArticle
         className="wide"
         {...list[0]}
       />

       <div className="three-articles-block__footer">
         {list.slice(1).map(item => (
           <LittleArticle
             key={item._id}
             {...item}
           />
         ))}
       </div>
     </div>
   );
};