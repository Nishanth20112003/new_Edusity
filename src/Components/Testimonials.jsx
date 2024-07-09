import React, { useRef } from "react";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonials = () => {
      
     const slider = useRef();
     let tx = 0;
     const slideForward = ()=>{
          if(tx>-50){
               tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
     } 
     const slideBackward = ()=>{
          if(tx < 0){
               tx += 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
     }     


     


  return (
    <>
      <div className="testimonials text-black">
        <img src={next_icon} className="next-btn" onClick={slideForward}/>
        <img src={back_icon} className="back-btn" onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} className="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, Coimbatore</span>
                  </div>
                </div>
                <p>
                  Edusity's innovative online platform has been a game-changer
                  for my educational journey. Personalized support have
                  empowered me to learn at my own pace and achieve my academic
                  goals with ease.
                </p>
              </div>
            </li>
            {/* =================================== */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} className="" />
                  <div>
                    <h3>John Dewey</h3>
                    <span>Edusity, Coimbatore</span>
                  </div>
                </div>
                <p>
                  Edusity's cutting-edge technology has revolutionized my
                  learning experience. The interactive lessons, real-time
                  feedback, and personalized guidance have allowed me to excel
                  in my studies in ways I never thought possible.
                </p>
              </div>
            </li>
            {/* ======================================== */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} className="" />
                  <div>
                    <h3>Maria Montessori</h3>
                    <span>Edusity, Coimbatore</span>
                  </div>
                </div>
                <p>
                  As a busy professional, Edusity's flexible online courses have
                  been a lifesaver. The platform's intuitive design and
                  comprehensive resources have enabled me to upskill efficiently
                  without disrupting my work-life balance.
                </p>
              </div>
            </li>
            {/* =========================================== */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} className="" />
                  <div>
                    <h3>John Holt</h3>
                    <span>Edusity, Coimbatore</span>
                  </div>
                </div>
                <p>
                  Edusity has truly transformed the way I approach education.
                  The platform's diverse course offerings, expert instructors,
                  and supportive community have ignited my passion for learning
                  and opened up a world of opportunities.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
