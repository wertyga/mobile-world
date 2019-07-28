import { MainMenu } from './DesktopMenu/MainMenu'
import { MenuMobile } from './MobileMenu/MobileMenu'

const mapState = ({ execContextStore: { requestContext: { isMobile } }, menuStore: { menuList } }) => ({
  isMobile,
  menuList,
})

@inject(mapState)
export class MenuWrapper extends React.Component {
  render() {
    const { isMobile, menuList } = this.props

    if (!isMobile) return <MainMenu list={menuList} />
    if (isMobile) return <MenuMobile list={menuList} />
  }
}