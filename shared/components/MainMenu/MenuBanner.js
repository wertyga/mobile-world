import Link from 'next/link'
import { Slider } from 'shared/components/Common/Slider'

import './style/menu-banner.sass'
const mock = [
  {
    title: 'The 2020 Chevy Corvette Stingray is here',
    description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
    author: 'Tim Stevens',
    img: 'https://cnet2.cbsistatic.com/img/olkwe3KeGbzAzLfGyyB7uOex4KI=/1000x620/2019/07/19/b6fbcf2a-a2cb-46f2-aa94-3638800826bb/corvette-ogi.jpg',
    href: '/best/phones',
  },
  {
    title: 'Our Apollo-inspired dreams of living on the moon could still come true',
    description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
    author: 'Tim Stevens',
    img: 'https://cnet1.cbsistatic.com/img/8ajB8EWW2OLnSUa9Ygj03S0dP1A=/500x620/2019/07/19/39639893-46c2-4559-bb15-a737b45d4928/screen-shot-2019-07-19-at-8-14-43-am.png',
    href: '/',
  },
  {
    title: 'Battery life tests score the new MacBook Pro and Air as winners',
    description: "Chevrolet's new Corvette is mid-engined and ready to go supercar hunting.",
    author: 'Tim Stevens',
    img: 'https://cnet1.cbsistatic.com/img/KgvCE0Eh3lMaqLBu0rhQyw284DI=/500x620/2019/07/10/68b93d04-3290-4922-9da5-139e177e6e18/05-macbook-air-2019-and-macbook-pro-2019.jpg',
    href: '/',
  },
]

const MenuBannerItem = ({ title, description, author, img, href, wideBanner }) => {
  return (
    <Link href={href}>
      <a className={cn(
        'menu-banner__item',
        { wide: wideBanner },
      )}>
        <img src={img} alt={title} />
        <div className="menu-banner__content">
          <h3 className="title">{title}</h3>
          {wideBanner && <p className="description">{description}</p>}
          {author && <p className="author">{author}</p>}
        </div>
      </a>
    </Link>
  );
}

export const MenuBanner = ({ list = mock, isMobile }) => {
  const bannerList = list.map((item, i) => {
    const wideBanner = item.wide || i === 0
    return <MenuBannerItem key={item.title} {...item } wideBanner={wideBanner} />
  })

  return (
    <div className="menu-banner">
      {!isMobile && bannerList}
      {isMobile && <Slider
        isMobile
        isDotsVisible
        list={list}
        ListComponent={MenuBannerItem}
        listItemKey="_id"
        isArrowVisible={false}
      />}
    </div>
  );
}