import css from 'styled-jsx/css';

export default css`
.admin-articles {
   display: flex;
   flex-direction: column;
   position: relative;
   
   .list {
      display: flex;
      flex-direction: column;
    }

    .article-link {
      margin-top: .5rem;
      span:first-child, strong {
        margin-right: 1rem;
      }
    }

    h1 {
      margin-bottom: 1rem;
    }
    
    .item-wrapper {
      margin-bottom: 1rem;
    }
               
    .article-date {
      cursor: pointer;
      span {
        margin-left: 1rem;
      }
    }
    
    .item-wrapper__list {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }
}`;