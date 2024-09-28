import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text'>
          <h1 className="primary-subheading">About</h1>
          <h2 className='primary-heading'>
            Food Is An Important Part Of A Balanced Diet
          </h2>
          <p className="primary-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus delectus dicta at sint totam? 
            Ut dicta consequatur odio velit numquam nisi. Sint veniam corrupti sit exercitationem, 
            distinctio suscipit quae, libero delectus quasi doloribus molestias rerum fugiat voluptatibus,
             sapiente natus ipsam vero repellat commodi unde dignissimos inventore animi quod! Tenetur tempora
              eligendi rerum, numquam neque sit nisi distinctio earum eaque aspernatur consectetur corrupti nesciunt fuga.
           
          </p>

          <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quis architecto omnis esse ex quae.
             A placeat laborum blanditiis beatae nemo numquam quod exercitationem. Pariatur, eveniet? Et, optio in. Deserunt saepe harum explicabo,
            
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              {" "}
              <BsFillPlayCircleFill /> Watch Video

            </button>
          </div>
        </div>

    </div>
  );
}

export default About