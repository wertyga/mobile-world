import React, { Component, useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import Close from 'react-icons/lib/fa/times-circle'
import { Search } from 'shared/components/Search/Search'
import { ButterMenu } from '../ButterMenu/ButterMenu'
import { MenuArticles } from 'shared/components/Article/MenuArticle/MenuArticles'
import { MenuItem } from '../MenuItem'

import './main-menu-mobile.sass'

const MenuMobileComponent = ({ list, router: { pathname } }) => {
  const [openSubMenu, setOpenSubMenu] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => setOpenMenu(!openMenu);
  const handleOpenSubMenu = (id) =>  setOpenSubMenu(id === openSubMenu ? '' : id)

  return (
    <div className="menu-mobile">
      <ButterMenu
        open={openMenu}
        onClick={handleMenuOpen}
        menu={
          <div className="main-menu-mobile">
            {list.map((item) => {
              return (
                <MenuItem
                  key={item._id}
                  onOpen={handleOpenSubMenu}
                  open={openSubMenu === item._id}
                  {...item}
                />
              );
            })}
            <Close size={20} onClick={handleMenuOpen} className="close" />
          </div>
        }
      />
      <MenuArticles isMobile />
      <Search />
    </div>
  );
}

export const MenuMobile = withRouter(MenuMobileComponent)