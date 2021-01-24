import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
      
    };

    
    

    return (
    
        
        <Slider {...settings} focusOnSelect={false} centerMode>
          <div className="shadow-card"></div>
          <div className="shadow-card"></div>
       
        
        </Slider>
    
    );
  }
}