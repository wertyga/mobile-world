import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import Comment from 'react-icons/lib/fa/comment-o'

import _JSXStyle from 'styled-jsx/style';

import styles from './style/articleSocialShare.style';

export const ArticleShareSocial = ({ commentsCount = 0 }) => {
  return (
    <div className="article-share-social">
      <div className="icon facebook">
        <Facebook />
      </div>
      <div className="icon twitter">
        <Twitter />
      </div>
      <div className="icon comment">
        <Comment />
        <span>{commentsCount}</span>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
}