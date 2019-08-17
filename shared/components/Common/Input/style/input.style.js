import css from 'styled-jsx/css';

export default css`
@import 'constants.scss';

.input {
  display: inline-flex;
  align-items: center;
  position: relative;

  textarea {
    min-height: 10rem;
  }

  input, textarea, .input__file {
    padding: .5rem 1rem;
    border-radius: $border-radius-input;
    border: 1px solid $border-color;
    width: 100%;
    &.file {
      display: none;
    }
    &__file {
      min-height: 2.3rem;
      cursor: pointer;
    }
  }

  &.hero-right {
    input {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .hero-right, .hero-left {
    background-color: $color-red;
    color: $color-font-light;
    padding: .5rem 1rem;
    border: 1px solid $color-red;
    border-top-right-radius: $border-radius-input;
    border-bottom-right-radius: $border-radius-input;
    font-weight: 500;
    transition: background-color .3s, color .3s;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;

    button.hero-right, button.hero-left {
      cursor: pointer;
      &:hover {
        @include desktop {
          background-color: $color-bg;
          color: $color-red;
        }
      }
    }
  }
}`;