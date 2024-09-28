import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='work-section wrapper'>
        <div className='work-section-top'>
            <h1 className='primary-subheading'></h1>
            <h3 className='primary-subheading'> What They Are Saying</h3>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
                dolores neque in magni eum nostrum vero accusantium facilis, optio qui quas! 
                Repudiandae harum modi culpa, blanditiis architecto corrupti facere nostrum.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum, itaque incidunt ducimus doloribus ut. Magni labore atque voluptatibus optio?</p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Hopkins</h2>
        </div>
    </div>
  )
}

export default Testimonials