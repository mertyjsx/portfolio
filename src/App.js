import React, { Component } from "react";
import Slider from "react-slick";

import Entry from "./pages/home";
import Contact from "./pages/contact"

import Portfolio from "./slider-deneme/js/index"

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  swipe: true,
  verticalSwiping: true,
  swipeToSlide: true,
};

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      sayfa: "current",
      result:null
    };
   
  }


  

  

 
  render() {
   

    return (
      <div >
        buneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
     <Entry></Entry>
<Portfolio></Portfolio>



     </div>
    );
  }
}
