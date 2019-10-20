import css from 'styled-jsx/css';

export default css`
.article-view {
  font-size: 1rem;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .category {
    text-transform: uppercase;
    font-weight: 500;
  }
  
  h1 {
    margin-bottom: 1rem;
    font-size: 3.5em;
    text-align: center;
  }
  
  .description {
    margin-bottom: 1rem;
    font-size: 1.7em;
    text-align: center;
    width: 80%;
    line-height: 2rem;
  }
  
  .date {
    width: 100%;
    text-align: right;
    text-transform: uppercase;
    font-size: .9em;
  }
}`;