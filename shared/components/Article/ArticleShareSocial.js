import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import Comment from 'react-icons/lib/fa/comment-o'

import './style/article-share-social.sass'

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
    </div>
  );
}