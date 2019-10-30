import Link from 'next/link';
import { getTimePassFromNow } from 'shared/utils';

export const LittleArticlePreview = ({ previewName, previewDescription, createdAt, previewImage, href }) => {
   return (
     <Link href={href}>
       <a className="little-article-preview">
         <p className="little-article-preview__date">{getTimePassFromNow(createdAt)}</p>

         <div className="little-article-preview__content">
           <h3>{previewName}</h3>
           <p className="little-article-preview__description">{previewDescription}</p>
         </div>

         <img src={previewImage} alt={previewName} />
       </a>
     </Link>
   );
};