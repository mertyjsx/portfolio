import React, { Component } from "react";
import Slider from "react-slick";
import Item from "./sliderItems"
import Back from "../Arrows/back"
import Next from "../Arrows/next"

import "./.css"
export default class MultipleItems extends Component {

  next=()=> {
    this.slider.slickNext();
  }
  previous=()=> {
    this.slider.slickPrev();
  }


  render() {
    const settings = {
      dots: true,
     
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows:1,
      vertical: false,
      verticalSwiping: false,
   
    variableWidth: true,
   
    responsive: [ {
      breakpoint: 1024,
      settings: {
        rows:1,
        className: "slider variable-width",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      
      }}
    ]
  
    };
    return (
[
  


      <div className=" center-xs w-100 margin-bottom-3 margin-top-3">
      <div onClick={this.next}> next</div>
        <div className="container-50">
        <Slider  {...settings} ref={c => (this.slider = c)} >
        <Item selected={true} brand={"Toyota"}></Item>
      
      <Item selected={false} brand={"Bmw"}></Item>
     
    
        <Item  selected={false} brand={"Audi"}></Item>
      
        <Item  selected={false} brand={"Wolkswagen"}></Item>
        <Item selected={false} brand={"Bmw"}></Item>
    
       
        </Slider>
        </div>
      </div>
 ] );
  }
}