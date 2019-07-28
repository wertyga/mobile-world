import { withRouter } from 'next/router'
import { SubMenu } from './DesktopMenu/SubMenu'

import AngleDown from 'react-icons/lib/fa/angle-down'

import './style/menu-item.sass'

@withRouter
export class MenuItem extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      if (this.props.open) window.addEventListener('mousedown', this.bodyClick)
      if (!this.props.open) window.removeEventListener('mousedown', this.bodyClick)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.bodyClick)
  }

  bodyClick = (e) => {
    if (!e.target.closest('.menu-item')) {
      const { _id, onOpen } = this.props

      onOpen(_id)
    }
  }

  onClick = () => {
    const { subMenu, href, router, onOpen, _id } = this.props

    if (href && !subMenu) return router.push(href)

    onOpen(_id)
  }

  render() {
    const { text, subMenu, open } = this.props;

    return (
      <div className={cn('menu-item', { open })} onClick={this.onClick}>
        <span>{text}</span>
        {subMenu && <AngleDown />}

        {subMenu && <SubMenu menu={subMenu} />}
      </div>
    );
  }
}