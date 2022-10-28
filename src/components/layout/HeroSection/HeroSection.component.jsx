import React from 'react';
import Button from '../../ReusableComponent/Button/Button.component';
import './HeroSection.styles.css';

const HeroSection = () => {

    return (
        <div >
        <hr className="nav_line"></hr>
         <section className='hero_section'>
            <div className='hero_wrapper'>
            <h1>A faster & easier way to receive
                <span> payments</span> online.</h1>
            <p>Scuad builds innovative pathways to enable all types 
                of businesses and individuals from around the world
                 make and receive payments smarter and simpler
            </p>
            <div className='hero_wrapper--button'>
            <Button
            className="mobile_style"
            type="button"
            buttonText="Create an Account"
            background = "#30A658"
            color="#FFFFFF"
            padding=".9rem 1.8rem"
            fontWeight="600"
            />
            </div>
            </div>

         </section>

        </div>
    )
}

export default HeroSection;