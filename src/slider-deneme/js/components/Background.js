import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {theme} from '../theme/Theme';

const Shape = styled('div')`
  position: absolute;
  top: 30px;
  left: 0;
  opacity: 0;
  width: ${theme.habitat.cardWidth + theme.habitat.backgroundSize}px;
  height: 360px;
  background: white;
  overflow: hidden;
  border-radius:1rem;
  text-align: center;
  box-shadow:0 16px 16px -20px rgba(0,0,0,.05), 4px 32px 64px -50px rgba(0,0,0,.05), 8px 70px 128px -20px rgba(0,0,0,.2);
  
  white-space: normal;
  text-shadow: ${theme.shadows.textLight};
  img {
    z-index: 200;
    position: relative;
    top: 0;
    left: 0;
   
    mask-image: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 30%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 30%);
  }
  h1 {
    position: relative;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 2rem;
    width: ${theme.habitat.cardWidth *.75}px;
    margin: 0 auto;
  }
  p {
    position: relative;
    font-size: 1.2rem;
    width: 100px;
  }
`;

class Background extends React.PureComponent {

  static defaultProps = {};
  static propTypes = {
    open: PropTypes.bool
  };

  state = {
    isOpen: this.props.open
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {className=null, children, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    return (<Shape className={cls.join(' ')} {...rest}>{children}</Shape>);
  }
}

export default Background;