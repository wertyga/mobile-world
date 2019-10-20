import { Slider } from 'shared/components/Common/Slider/index'

import { MenuArticleItem } from './MenuArticleItem'

import './styles/menu-article.sass'

const mapState = ({ articleStore: { getArticleList, articleState, articles } }) => ({
  articleState,
  getArticleList,
  articles,
})

@inject(mapState)
export class MenuArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  getDesktopArticleList = () => {
    const { articles } = this.props;
    return articles.slice(0, 3).map((item, i) => {
      const wideBanner = item.wide || i === 0;
      return <MenuArticleItem key={item.title} {...item } wideBanner={wideBanner} />;
    })
  }

  render() {
    const { articles, isMobile } = this.props;

    return (
      <div className="menu-banner">
        {!isMobile && this.getDesktopArticleList()}
        {isMobile && <Slider
          isMobile
          isDotsVisible
          list={articles}
          ListComponent={MenuArticleItem}
          listItemKey="_id"
          isArrowVisible={false}
        />}
      </div>
    );
  }
};
