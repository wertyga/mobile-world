import Link from 'next/link';
import { beautifyDate } from 'shared/utils/dateHelpers';

import './style.scss';

export const LittleArticle = ({ previewImage, previewName , href, createdAt, className }) => {
  return (
    <Link href={href}>
      <a className={cn('little-article', className)}>
        <img src={previewImage} alt={previewName} />

        <div className="little-article__content">
          <h3 className="title">{previewName}</h3>
          <span className="little-article__date">{beautifyDate(createdAt)}</span>
        </div>

      </a>
    </Link>
  );
};
