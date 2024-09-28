import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
      {
        image: PickMeals,
        title: "Pick Meals",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus expedita placeatconsequuntur quam laborum voluptate laudantium consequatur a. Vitae." ,

      },
        {
        image: ChooseMeals,
        title: "Choose Meals",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi assumenda ab ut quaerat! Esse culpa nesciunt sint reiciendis autem!",

      },
        {
        image: DeliveryMeals,
        title: "Delivery Meals",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae adipisci optio asperiores ipsa, magnam molestiae eveniet hic labore soluta." ,

      },
    ]
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <h1 className='primary-subheading'>Work </h1>
        <h3 className='primary-subheading'> How It Works</h3>
        <p className='primary-text'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi explicabo nisi aperiam a vitae eum esse molestiae laboriosam nihil?
        </p>
      </div>
      <div className='work-section-bottom'>

      { workInfoData.map((data) => (
         <div className='work-section-info'>
        <div className='info-boxes-img-cntainer'>
          <img src={data.image} alt="" />
        </div>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>

      ))}


      </div>

    </div> 
  );
};

export default Work