import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import styled from 'react-emotion';
import Card from './Card';
import Background from './Background';
import {theme} from '../theme/Theme';
import {NOOP} from "../utils/componentUtils";

// Why am I putting all of this here? It should be in Card, but I'm trying to keep
// that component project neutral :P
const CardStyle = css`
 
  transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  z-index: 2;
  transform: translate(${theme.habitat.backgroundSize / 2}px, ${theme.habitat.backgroundSize / 2}px);
  cursor: pointer;
`;

//left: ${theme.habitat.backgroundSizeSelected / 2}px;
const CardStyleSelected = css`
  transform: translate(${theme.habitat.backgroundSizeSelected / 2}px, ${theme.habitat.backgroundSize / 2}px);
 
  opacity: 0;
`;

/*
Masking slows it down in Chrome? Have alpha PNGs for better perf?
mask-image: radial-gradient(ellipse at center, rgba(255,255,255,1) 50%,rgba(255,255,255,0) 70%);
-webkit-mask-image: radial-gradient(ellipse at center, rgba(255,255,255,1) 50%,rgba(255,255,255,0) 70%);
 */
const BackgroundStyle = css`
  transition: width 1s ease-in-out;
  transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  img {
    transition: all 1s ease-out;
    transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
    width:100%;
  
  }
`;

const BackgroundStyleSelected = css`
  opacity: 1;
  width: ${theme.habitat.cardWidth + theme.habitat.backgroundSizeSelected}px;
  img {
    transform: translate(0,0);
    mask-image: none;
    -webkit-mask-image: none;
    width:100%;
  }
`;

const Shape = styled('div')`
  transition: all 1s ease-out;
  transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  text-align: center;
  display: inline-block;
  position: relative;
  width: ${theme.habitat.cardWidth/1.1 + theme.habitat.backgroundSize}px;
`;

const ShapeSelected = css`
width: ${theme.habitat.cardWidth + theme.habitat.backgroundSizeSelected}px;
`;

const ArtContext = React.createContext({});

class Art extends React.PureComponent {

  static ACard = ({children, ...rest}) =>
    <ArtContext.Consumer>{({select, selected, index}) => {
      let cls = [CardStyle];
      if (selected) {
        cls.push(CardStyleSelected);
      }
      return <Card onClick={select(index)}
                   className={cls.join(' ')} {...rest}>{children}</Card>
    }}
    </ArtContext.Consumer>;

  static ABackground = ({children, ...rest}) =>
    <ArtContext.Consumer>{({selected}) => {
      let cls = [BackgroundStyle];
      if (selected) {
        cls.push(BackgroundStyleSelected);
      }
      return <Background
                   className={cls.join(' ')} {...rest}>{children}</Background>
    }}
    </ArtContext.Consumer>;

    // <Background className={BackgroundStyle} {...rest}>{children}</Background>;

  static defaultProps = {
    selected: false,
    index   : 0,
    onSelect: NOOP
  };

  static propTypes = {
    selected: PropTypes.bool,
    index   : PropTypes.number,
    onSelect: PropTypes.func
  };

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {className = null, children, onSelect, selected, index, ...rest} = this.props;

    let cls = [''];
    cls.push(className);

    if(selected) {
      cls.push(ShapeSelected);
    }

    return (
      <ArtContext.Provider
        value={{select: onSelect, selected: selected, index: index}}>
        <Shape className={cls.join(' ')} {...rest}>{children}</Shape>
      </ArtContext.Provider>
    );
  }
}

export default Art;