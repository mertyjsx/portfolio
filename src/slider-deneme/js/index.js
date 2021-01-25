import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {css} from 'emotion';
import Global from './theme/Global'; // For global CSS reset + a few styles for html and body
import * as Lorem from './utils/Lorem';
        

import Art from './components/Art';
import Gallery from './components/Gallery';
import {Desk} from "./components/Desk";
import {Details} from "./components/Details";
import {RoundIcon} from "./components/RoundIcon";
import {SVGIcon} from "./components/SVGIcon";
import rea from "./icons8-react-16.png"
import {theme} from "./theme/Theme";
import BackgroundArt from "../img/full-01.png"
const CardArt = require('../img/cropped-01.png');


// Otherwise new lorem is generated on each rerender
const titles = _.range(7).map(e => Lorem.title(3,5));
const content = _.range(7).map(e => Lorem.title(10,15));
const iconColors = ['warm-flame','sunny-morning','dusty-grass','tempting-azue','ripe-malinka','malibu-beach','strong-bliss'];
const colors = _.range(7).map(e => Lorem.oneOf(iconColors));
const RoundIconArt = css`
  margin: 0 auto;
 
  box-shadow: ${theme.shadows.dropShadow.lg};
`;

const SVGIconAdjust = css`
  top: 5px;
`;

const TestArt = ({idx=0,url, ...rest}) => (<Art {...rest}>
  <Art.ACard><img src={url}/><h1></h1><p>{content[idx]}</p></Art.ACard>
  <Art.ABackground><img src={url}/></Art.ABackground>

  </Art>);

const Slider = () => {
  console.log("slider")
  return <div style={{width:"100vw",height:"100vh",position:"relative",overflowX:"hidden"}}>
    <Gallery>
      <TestArt idx={0} url="https://firebasestorage.googleapis.com/v0/b/sirket-site.appspot.com/o/images%2Fctb.png?alt=media&token=89ea3573-cde3-49ba-b007-fdab2f2af062"/>
      <TestArt idx={1} url="https://firebasestorage.googleapis.com/v0/b/sirket-site.appspot.com/o/images%2Fimagine.png?alt=media&token=c668ad77-e7ba-45dc-9613-d68e29c87e23"/>
      <TestArt idx={2} url="https://firebasestorage.googleapis.com/v0/b/sirket-site.appspot.com/o/images%2Fcompoo.png?alt=media&token=acd371c0-88c0-4a3a-b294-80cbcf534226"/>
      <TestArt idx={3} url="https://firebasestorage.googleapis.com/v0/b/sirket-site.appspot.com/o/images%2Fctb.png?alt=media&token=89ea3573-cde3-49ba-b007-fdab2f2af062"/>
     
      <TestArt idx={4} url="https://firebasestorage.googleapis.com/v0/b/sirket-site.appspot.com/o/images%2Fkum.png?alt=media&token=7be67cf5-5392-428d-9171-479cad16cbd3"/>
    
    </Gallery>
   
    <Desk/>
    <Details style={{marginLeft:20}}>
      <h1>Orkun Mert Yiğit</h1>
      <p>Full Stack merng developer</p>
   
    </Details>

  </div>;

};

export default Slider