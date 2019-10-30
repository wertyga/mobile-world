import Link from 'next/link'

export const MenuArticleItem = ({ previewName, previewDescription, author, previewImage, href, wideBanner, className }) => {
  return (
    <Link href={href}>
      <a className={cn(
        'menu-banner__item',
        { wide: wideBanner },
        className,
      )}>
        <img src={previewImage} alt={previewImage} />
        <div className="menu-banner__content">
          <h3 className="title">{previewName}</h3>
          {wideBanner && <p className="description">{previewDescription}</p>}
          {author && <p className="author">{author}</p>}
        </div>
      </a>
    </Link>
  );
}