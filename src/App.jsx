import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "./App.css"

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#two",
        start: "0% 0%",
        end: "5% 0%",
        scrub: 1,
        duration: 1,
      },
    });

    tl.to(".main", {
      backgroundColor: "#242e24",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#three",
        start: "0% 0%",
        end: "5% 0%",
        scrub: 1,
        duration: 1,
      },
    });

    tl2.to(".main", {
      backgroundColor: "#70163c",
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#four",
        start: "0% 0%",
        end: "5% 0%",
        scrub: 1,
        duration: 1,
      },
    });

    tl3.to(".main", {
      backgroundColor: "#472c1b",
    });
  },[])
  return (
    <>
      <div className="main">
  <div className="container" id="one">
    <div className="content">
      <h1>
        Lunch steam,
        <br />
        mades easy.
      </h1>
      <video
        src="../public/Homepage_animation_F0EFEC--no-audio.mp4"  muted="muted"
        autoPlay="autoplay"
      />
    </div>
  </div>
  <div className="container" id="two">
    <div className="content2">
      <div className="left">
        <h2>Why should you steamed your lunch? It just tastes better.</h2>
        <p>
          Finally a kind of warming up that corresponds to the quality of your
          Mealprep dishes. Our LPS™-Technology ensures gentle warming up in
          order to maintain taste and nutrients in the best possible way.
        </p>
        <button>Our Mission</button>
      </div>
      <div className="right">
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
      </div>
    </div>
  </div>
  <div className="container" id="three">
    <div className="content3">
      <div className="left">
        <h2>Why should you steamed your lunch? It just tastes better.</h2>
        <p>
          Finally a kind of warming up that corresponds to the quality of your
          Mealprep dishes. Our LPS™-Technology ensures gentle warming up in
          order to maintain taste and nutrients in the best possible way.
        </p>
        <button>Our Mission</button>
      </div>
      <div className="right">
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
      </div>
    </div>
  </div>
  <div className="container" id="four">
    <div className="content2">
      <div className="left">
        <h2>Why should you steamed your lunch? It just tastes better.</h2>
        <p>
          Finally a kind of warming up that corresponds to the quality of your
          Mealprep dishes. Our LPS™-Technology ensures gentle warming up in
          order to maintain taste and nutrients in the best possible way.
        </p>
        <button>Our Mission</button>
      </div>
      <div className="right">
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
      </div>
    </div>
  </div>
  <div className="container" id="five">
    <div className="content2">
      <div className="left">
        <h2>Why should you steamed your lunch? It just tastes better.</h2>
        <p>
          Finally a kind of warming up that corresponds to the quality of your
          Mealprep dishes. Our LPS™-Technology ensures gentle warming up in
          order to maintain taste and nutrients in the best possible way.
        </p>
        <button>Our Mission</button>
      </div>
      <div className="right">
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App;