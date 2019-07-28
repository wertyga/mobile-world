import css from 'styled-jsx/css'

export default css`
@import 'constants.scss';

.common-section {
  padding: 3.8rem 0;
  background-color: $color-bg;
  margin: 0 auto;
  @include mobile {
    padding: 2rem 0;
  }

  &.is-one {
    min-height: 100vh;
  }

  &.grey {
    background-color: $color-bg-grey;
  }

  &.fluid {
    max-width: 100vw;
  }

  &.no-padding {
    padding: 0;
  }

  .headers {
    margin-bottom: 3.8rem;
    @include mobile {
      margin-bottom: 1.8rem;
    }
    h2 {
      margin-bottom: .5rem;
    }
    h5 {
      color: $disable-color;
      font-size: 1rem;
    }
  }
};`