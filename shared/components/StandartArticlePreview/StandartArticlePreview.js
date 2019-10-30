import Link from 'next/link';
import { beautifyDate } from 'shared/utils/dateHelpers';

import './style.scss';

export const StandartArticlePreview = ({ previewImage, previewName , href, createdAt, className }) => {
  return (
    <Link href={href}>
      <a className={cn('standart-article-preview', className)}>
        <img src={previewImage} alt={previewName} />

        <div className="standart-article-preview__content">
          <h3 className="title">{previewName}</h3>
          <span className="standart-article-preview__date">{beautifyDate(createdAt)}</span>
        </div>

      </a>
    </Link>
  );
};
