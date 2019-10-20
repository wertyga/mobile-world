import Link from 'next/link';

import './styles/top-stoeres-items.scss';

export const TopStoriesItem = ({ list }) => {
  return (
    <div className="top-stories__item">
      <Link href={list[0].href}>
        <a className="top-stories__item__article wide">
          <img src={list[0].previewImage} alt={list[0].previewName} />
          <h3 className="content">{list[0].previewName}</h3>
        </a>
      </Link>

      <div className="top-stories__item__footer">
        {list.slice(1).map(({ _id, previewImage, previewName , href }, i) => (
          <Link
            key={`${_id}-${i}`}
            href={href}
          >
            <a className="top-stories__item__article">
              <img src={previewImage} alt={previewName} />
              <h3 className="content">{previewName}</h3>
            </a>
          </Link>
        ))}
      </div>

    </div>
  );
}