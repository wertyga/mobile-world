import css from 'styled-jsx/css';

export default css`
@import 'constants.scss';

.article-share-social {
  display: flex;
  font-size: 1rem;

  .icon {
    cursor: pointer;
    padding: 0 .5rem;
    position: relative;
    :global(svg) {
      transition: color .3s;
      width: 1.2em;
      height: 1.2em;
    }
  }

  .twitter {
    &:hover {
      color: $color-facebook;
    }
  }

  .facebook {
    &:hover {
      color: $color-twitter;
    }
  }

  .comment {
    :global(svg) {
      width: 1.5em;
      height: 1.5em;
    }
    &:hover {
      color: $border-color;
    }
    span {
        position: absolute;
        left: 50%;
        top: 4px;
        transform: translateX(-50%);
        font-size: .8em;
        &:hover {
          color: $border-color;
        }
    }
  }
}`;