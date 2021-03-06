import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {theme} from '../theme/Theme';

const Shape = styled('div')`
  position: relative;
  width: ${theme.habitat.cardWidth/1.1}px;
  height: ${theme.habitat.cardHeight/1.1}px;
  
  background-color: #fff;
  box-shadow: 0 16px 16px -20px rgba(0,0,0,0.05), 4px 39px 88px -51px rgba(0,0,0,1.05), 8px 70px 128px -20px rgba(0,0,0,0.3);
  border-radius: ${theme.radii[1]};
  overflow: hidden;
  white-space: normal;
  text-shadow: ${theme.shadows.textLight};
  img {
    transition: all 1s ease-out;
    transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
    z-index: -1;
    position: relative;
    top: 0;
    left: 0;
    height:50%;
    object-fit:cover;
    width:100%
  }
  h1 {
    
    font-size: 1.2rem;
    font-weight: 400;
  
  }
  p {
    padding:20px;
    font-size: 0.8rem;
  }
  &:hover {
    img {
    z-index: -1;
    position: relative;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  }
`;


class Card extends React.PureComponent {
  static defaultProps = {};
  static propTypes = {
    background: PropTypes.string
  };

  state = {};

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

export default Card;