import _JSXStyle from 'styled-jsx/style';

// import './style/input.scss'
import styles from './style/input.style';
// import styles from './style/input.scss';

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.heroRightRef = React.createRef();

    this.state = {
      heroRightWidth: null,
    };
  }

  componentDidMount() {
    this.setState({ heroRightWidth: this.heroRightRef.current && this.heroRightRef.current.offsetWidth + 10 })
  }

  handleChange = ({ target: { value, files, name } }) => {
    const { onChange, type } = this.props;

    onChange(type !== 'file' ? value : files, name)
  }

  render() {
    const {
      type = 'text',
      value = '',
      onChange,
      textarea,
      className,
      placeholder = '',
      heroRight,
      heroLeft,
      name = '',
      visibleValue = '',
    } = this.props;
    const { heroRightWidth } = this.state;
    const isFile = type === 'file'

    const props = {
      type,
      value,
      onChange: this.handleChange,
      placeholder,
      name,
      style: {
        paddingRight: heroRightWidth,
      },
      className: cn({ file: isFile }),
      id: isFile ? 'file-input' : name,
    }

    return (
      <div className={cn('input', { 'hero-right': heroRight }, { 'hero-left': heroLeft }, className)}>
        {heroLeft}
        {textarea ? <textarea {...props} /> : <input {...props} />}

        {isFile && <label htmlFor="file-input" className="input__file">{`File: ${visibleValue}`}</label>}
        {heroRight && (
          heroRight.button ?
            <button className="hero-right" ref={this.heroRightRef}>{heroRight.text}</button> :
            <div className="hero-right" ref={this.heroRightRef}>{heroRight.text}</div>
        )}

        <style jsx>{styles}</style>
      </div>
    );
  }
}