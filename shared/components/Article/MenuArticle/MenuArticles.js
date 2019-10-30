import { Slider } from 'shared/components/Common/Slider/index'

import { MenuArticleItem } from './MenuArticleItem'

import './styles/menu-article.sass'

const mapState = ({ menuStore: { menuArticles } }) => ({
  menuArticles,
})

@inject(mapState)
export class MenuArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  getDesktopArticleList = () => {
    const { menuArticles } = this.props;

    return menuArticles.map((item, i) => {
      const isOneArticle = menuArticles.length < 2;
      const wideBanner = item.wide || i === 0 && !isOneArticle;

      return (
        <MenuArticleItem
          key={item._id}
          {...item }
          wideBanner={wideBanner}
          className={cn({ 'is-one': isOneArticle })}
        />
      );
    })
  }

  render() {
    const { isMobile, menuArticles } = this.props;


    return (
      <div className="menu-banner">
        {!isMobile && this.getDesktopArticleList()}
        {isMobile && <Slider
          isMobile
          isDotsVisible
          list={menuArticles}
          ListComponent={MenuArticleItem}
          listItemKey="_id"
          isArrowVisible={false}
        />}
      </div>
    );
  }
};
