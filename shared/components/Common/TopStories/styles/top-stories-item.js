import css from 'styled-jsx/css';

export default css`
@import "constants.scss";

.top-stories__item {
  
}

.top-stories__item__article {
  display: inline-flex;
  flex-direction: column;
  padding: 0 $space-2 0 0;
  width: 50%;
  
  img {
    height: 16rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: $space-1-5;
  }
  
  &:last-child {
    padding: 0;   
  }
  
  &.wide {
    width: 100%;
    padding: 0 0 $space-2 0;
    img {
      width: 100%;
      margin-bottom: $space-2;
    }
    .content {
      position: absolute;
    }
  }
  
  .content {
    
  }
}`;