import Link from 'next/link'
import { Search } from 'shared/components/Search/Search'
import { MenuItem } from '../MenuItem'
import { MenuBanner } from '../MenuBanner'

import '../style/main-menu.sass'

@inject('menuStore')
export class MainMenu extends React.Component {
  state = {
    open: '',
  }

  onOpen = id => this.setState({ open: this.state.open === id ? '' : id })

  render() {
    const { open } = this.state;
    const { menuStore: { menuList } } = this.props;
    return (
      <div className="main-menu">
        <MenuBanner />

        <div className="main-menu__menu">
          <Link href="/">
            <a className="logo">
              <img src="/static/logo.png" alt="logo"/>
            </a>
          </Link>
          {menuList.map((item) => (
            <MenuItem key={item._id} open={item._id === open} onOpen={this.onOpen} {...item} />
          ))}
        </div>

        <Search />
      </div>
    );
  }
}