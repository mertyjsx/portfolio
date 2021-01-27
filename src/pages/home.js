import { useEffect, useState } from "react";

import video from "../son_t2.mp4";

import Lottie from "react-lottie";
import animationData from "../lottie/scroll.json";


import Fade from "react-reveal/Fade";
import Gits from "../gg.svg"



// Render a YouTube video player

function App({ key }) {
  const defaultOptions = {
    loop: true,
  
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

 

  const [text, settext] = useState(0);
  const [index, setIndex] = useState(0);
  const [bg, setbg] = useState(false);
  const [bg2, setbg2] = useState(false);
  const [vid, setvid] = useState(false);
  const [son, setson] = useState(false);
  const [li, setli] = useState(false);

  useEffect(() => {
    console.log("buraya giremez");
    const intervalId = setInterval(
      () => {
        setIndex((index) => {
          

          return index + 1;
        });
      },
      1500 // every 3 seconds
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const start = (data) => {
    console.log(data);
    setbg2(true)
    setTimeout(() => {
      setli(true);
    }, 7500);
    setTimeout(() => {
      setbg(true);
    }, 11000);

  

    setTimeout(() => {
      setson(true);
    }, 200);
 
    
  };

  const charPoses = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  let beyaz=""
  let css = "yazı";
  if(son){
    beyaz="color-white"
  }
  if(li){
    css = "yazı bg-light";
  beyaz=""
  }
  if (bg) {
    css = "yazı bg-white";
    beyaz=""
  }

  
  if (bg2)
    return (
      <div className="container2" key={key}>
        <h4 className={`name color-white`}>
          MERT YIGIT
        </h4>
        <Lottie
            style={{ color: "white",position:"absolute",bottom:0,right:0,zIndex:200 }}
            options={defaultOptions}
            height={300}
            width={300}
        
          />
        <div className="leftheader">
          <a class="rotate color-white needHover" href="#entry">about </a>
          <a class="rotate color-white needHover" href="https://www.linkedin.com/in/mert-yiğit-1901a6198/">contact</a>
          <a class="rotate color-white needHover" href="#port" >portfolio</a>
         
          <img src={Gits} style={{ position:"absolute",top:60,right:10,zIndex:200,width:30 }}></img> 
        </div>

        <div className="header">
          <div className="rightHeader">
      
          </div>
        </div>
        <video className={`vid`} loop autoPlay muted>
          <source src={video} type="video/mp4" />
          your browser
        </video>

        <h2 className={`${css}`} id="entry" style={{position:"relative"}}>
          <span style={{ fontSize: "13rem", marginLeft: bg?0:20, position: "relative" }}>
            <div className="textContainer" style={{position:"relative",top:-70}}>
              <span
                style={{ marginRight: 10 }}
                className={`${beyaz}`} 
              >
                I'm a{" "}
              </span>
              <span className={`${beyaz}`} >
                {index % 3 == 0 && <Fade bottom>React</Fade>}
                {index % 3 == 1 && <Fade bottom>Web</Fade>}
                {index % 3 == 2 && <Fade bottom>Mobile</Fade>}
              </span>
            </div>
            <span style={{ letterSpacing: -15.9,position:"relative",top:120 }} className={`${beyaz} responsiveTitle`} >Developer.</span>
          </span>

          <span
          className="left"
            style={{
              fontSize: 22,
              marginTop: 75,
              position: "relative",
             
              
            }}
          >
            FREELANCER{" "}
          </span>

         
        </h2>
      </div>
    );
  else
    return (
      <div style={{ width: 0 }}>
        <video className="vid" onLoadedData={start} loop autoPlay muted>
          <source src={video} type="video/mp4" />
          your browser
        </video>
      </div>
    );
}

export default App;

/**
 *  <div className="leftHeader">
<h3 className="rotate">Home</h3>
<h3 className="rotate">About</h3>
<h3 className="rotate">Contact</h3>
<h3 className="rotate">About me</h3>
     </div>
 *   


   
<div>
<div class={`box to-left ${state&&"box-bg"} row`} style={{justifyContent:"center"}}>
<div>

<h1>Web Developer</h1>
</div>
<Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
        style={{margin:0}}
      />
      </div>
      <div className="row">
        <div className="left"></div>
        <div className={`right box2 to-right ${state&&"box-bg"}`}></div>
      </div>


</div>

 *  
 */
