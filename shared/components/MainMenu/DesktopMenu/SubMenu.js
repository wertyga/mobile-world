import Link from 'next/link'
import { getColumns } from '../helpers'

import '../style/sub-menu.sass'

export const SubMenu = ({ menu }) => {
  if (!menu.length) return null;
  const { text: titleText, href: titleHref } = menu.slice(0, 1)[0]
  const others = getColumns(menu.slice(1))

  return (
    <div className="sub-menu">
      <Link href={titleHref}>
        <a className="sub-menu__title">{titleText}</a>
      </Link>
      <div className="sub-menu__content">
        {others.map((array, i) => (
          <div className="sub-menu__content__block" key={i}>
            {array.map(({ text, href }) => (
              <Link href={href} key={href}>
                <a className="sub-menu__content__item">{text}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}