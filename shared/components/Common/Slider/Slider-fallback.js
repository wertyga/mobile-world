/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import cn from 'classnames';

import AngleLeft from 'react-icons/lib/fa/angle-left'
import AngleRight from 'react-icons/lib/fa/angle-right'
import ArrowRight from 'react-icons/lib/fa/arrow-right'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'

import _get from 'lodash/get'
import { Dots } from './Dots'

import './Slider.scss'

const mapState = ({ execContextStore: { requestContext: { isMobile } } }) => ({ isMobile });

@inject(mapState)
export class Slider extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    initialImagesLength: PropTypes.number,
    isMobile: PropTypes.bool,
    hideArrows: PropTypes.bool,
    isDotsVisible: PropTypes.bool,
    ListComponent: PropTypes.any,
    listItemKey: PropTypes.any,

  }
  static defaultProps = {
    images: [],
    initialImagesLength: 3,
    width: 0,
    transition: false,
  }

  constructor(props) {
    super(props)

    this.initTimeout = 500;
    this.timer = null;
    this.timeout = 1000;
    this.percentMove = 20;
    this.state = {
      images: this.getImagesArray(props),
      index: 1,
      distanceMove: 0,
    }
    this.mainRef = React.createRef();
  }
  
  getImagesArray = (props) => (
    props.infinite ?
      [props.children[props.children.length - 1], ...props.children, props.children[0]] :
      props.children
  )

  componentDidMount() {
    this.setState({
      width: this.mainRef.current.offsetWidth,
    });
    this.launchAutoplay();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  launchAutoplay = () => {
    const { autoplay } = this.props;
    this.clearInterval();
    if (!autoplay) return;

    this.timeout = autoplay;
    this.timer = setInterval(() => {
      const { index } = this.state;
      this.handleMove(index + 1);
    }, this.timeout + 500)
  }

  handleMove = (index) => {
    const { images } = this.state;
    const { infinite } = this.props;
    if ((index < 0 || index > images.length - 1) && !infinite) return;

    const sliceNowMore = (index >= images.length - 1);
    const sliceNowLess = index <= 0;

    // if (this.transitionTimer && (sliceNowMore || sliceNowLess)) return;

    this.setState({
      index,
      transition: true,
      distanceMove: 0,
    }, () => {
      this.transitionTimer = setTimeout(() => {
        this.setState({
          transition: false,
          index: sliceNowMore ? 1 : (sliceNowLess ? images.length - 2 : index),
        });
        this.clearTransitionTimer();
      }, this.timeout)
    });

    // if (!this.props.isMobile) this.mainRef.current.removeEventListener('mousemove', this.onMouseMove)
  }

  handleDirection = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // this.clearInterval();

    const { images } = this.state;
    if (images.length < 2) return;

    const isLeft = e.currentTarget.getAttribute('data-direction') === 'left';
    const index = isLeft ? this.state.index - 1 : this.state.index + 1;
    this.timeout = this.initTimeout;

    this.handleMove(index);
  }

  onMouseOver = () => {
    this.clearInterval();
    this.clearTransitionTimer();
  }

  clearInterval = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      distanceMove: 0,
      transition: false,
    })
  }

  clearTransitionTimer = () => {
    if (!this.transitionTimer) return;

    clearTimeout(this.transitionTimer);
    this.transitionTimer = null;
  }

  onMouseDown = (e) => {
    this.clearInterval();

    this.timeout = this.initTimeout;
    const { clientX, touches } = e;
    const ref = this.mainRef.current;
    if (!ref) return;
    const { isMobile } = this.props;

    this.startPosition = clientX || _get(touches, '[0].clientX', 0);
    if (!isMobile) ref.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseUp = () => {
    console.log('mouse up')
    const ref = this.mainRef.current;
    if (!ref || !this.startPosition) return;
    const { distanceMove, index, images } = this.state;
    const { infinite } = this.props;
    const percentMove = Math.abs(distanceMove) / (window.innerWidth / 100);
    const newIndex = distanceMove > 0 ? index - 1 : index + 1;
    const endSlide = newIndex < 0 || newIndex > images.length - 1;
    if (!infinite && endSlide) return;

    if (percentMove > this.percentMove) {
      this.handleMove(newIndex);
    } else {
      this.setState({
        distanceMove: 0,
        transition: true,
      }, () => {
        this.transitionTimer = setTimeout(() => {
          this.setState({
            transition: false,
          });
        }, this.timeout)
      })
    }
    if (!this.props.isMobile) ref.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = (e) => {
    const { clientX, touches } = e
    const { index, images, distanceMove: stateMove } = this.state;
    const xPosition = clientX || _get(touches, '[0].clientX', 0)
    const distanceMove = -(this.startPosition - xPosition)
    console.log(clientX)
    const newIndex = distanceMove > 0 ? index - 1 : index + 1;
    const endSlide = newIndex < 0 || newIndex > images.length - 1;

    this.setState({ distanceMove: endSlide ? stateMove : distanceMove, transition: false })
  }

  mouseEvents = () => {
    const { isMobile } = this.props;

    if (isMobile) {
      return {
        onTouchStart: this.onMouseDown,
        onTouchEnd: this.onMouseUp,
        onTouchMove: this.onMouseMove,
      };
    } else {
      return {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
      }
    }
  }

  render() {
    const { index, distanceMove, images, transition, width } = this.state;
    const { withHero, hideArrows, isDotsVisible, children, heightRatio, isMobile, autoplay } = this.props;
    const isHideArrows = hideArrows !== false && isMobile;

    const translate = `${distanceMove !== 0 ? Math.round(-index * width + distanceMove) : Math.round(-index * width)}px`;
    return (
      <div
        className="slider"
        ref={this.mainRef}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.launchAutoplay}
      >
        {!isHideArrows &&
          <div className="slider__direction slider__direction_left" data-direction="left" onClick={this.handleDirection}>
            {withHero ? <ArrowLeft /> : <AngleLeft />}
          </div>
        }
          <div
            className={cn(
              'slider__wrapper',
              { isMoving: distanceMove !== 0 },
            )}
            style={{
              transform: `translateX(${translate})`,
              height: width * (heightRatio / 100),
              transition: transition && `transform ${this.timeout}ms`,
            }}
            {...this.mouseEvents()}
          >
            {images.map((item, i) => (
              <div
                className="slider__wrapper__item"
                style={{ width }}
                draggable={false}
                key={i}
              >
                {item}
              </div>
            ))}
          </div>
          {!isHideArrows &&
            <div className="slider__direction slider__direction_right" data-direction="right"
                 onClick={this.handleDirection}>
              {withHero ? <ArrowRight/> : <AngleRight />}
            </div>
          }

        {isDotsVisible && <Dots count={children.length} index={index} />}
      </div>
    );
  }
}