import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <>
      <div className="about text-black mt-[100px] mb-[100px] m-auto flex items-center justify-between w-[90%]">
        <div className="about-left relative">
          <img src={about_img} className="about-img w-[100%] rounded-[10px]" />
          <img onClick={()=>{setPlayState(true)}} src={play_icon} className="play-icon cursor-pointer absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[50%] w-[60px] " />
        </div>
        <div className="about-right">
          <h3 className="">ABOUT UNIVERSITY</h3>
          <h2>Nurturing tomorrows's Leaders Today</h2>
          <p>
            At our university, we are dedicated to empowering the next
            generation of visionary leaders. Our dynamic curriculum and hands-on
            learning experiences equip students with the knowledge and skills to
            thrive in a rapidly evolving global landscape.
          </p>
          <p>
            Fostering a vibrant and inclusive community, we inspire students to
            think critically, innovate boldly, and make a meaningful impact on
            the world around them. Join us on this transformative journey as we
            shape the leaders of tomorrow.
          </p>
          <p>
            With a rich history of academic excellence and a commitment to
            innovation, our university is at the forefront of preparing students
            for the challenges and opportunities of the future. Through a
            diverse range of programs and experiential learning opportunities,
            we empower our students to become agents of positive change.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
