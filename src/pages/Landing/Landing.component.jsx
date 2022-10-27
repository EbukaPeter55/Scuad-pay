import React from 'react';
import HeroSection from '../../components/layout/HeroSection/HeroSection.component';
import NavBar from '../../components/layout/NavBar/NavBar.component';
import SetUp from '../../components/layout/SetUp/SetUp.component';
import './Landing.styles.css';

const Landing = () => {

    return (
        <div>
            <NavBar/>

            {/* Hero section */}
            <HeroSection/>
            {/* End of Hero section */}

            {/* Setup */}
            <SetUp/>
        </div>
    )
}

export default Landing;