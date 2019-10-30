import { StandartArticlePreview } from 'shared/components/StandartArticlePreview/StandartArticlePreview';

import './style.scss';

export const ThreeArticlesBlock = ({ list, title }) => {
   return (
     <div className="three-articles-block">
       {title && <h2 className="three-articles-block__title">{title}</h2>}

       <StandartArticlePreview
         className="wide"
         {...list[0]}
       />

       <div className="three-articles-block__footer">
         {list.slice(1).map(item => (
           <StandartArticlePreview
             key={item._id}
             {...item}
           />
         ))}
       </div>
     </div>
   );
};