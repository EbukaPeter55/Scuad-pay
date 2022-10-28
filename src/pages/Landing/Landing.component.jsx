import React from 'react';
import Footer from '../../components/layout/Footer/Footer.component';
import HeroSection from '../../components/layout/HeroSection/HeroSection.component';
import NavBar from '../../components/layout/NavBar/NavBar.component';
import Opportunity from '../../components/layout/Opportunity/Opportunity.component';
import PaymentRequest from '../../components/layout/PaymentRequest/PaymentRequest.component';
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

            {/* Payment Request */}
            <PaymentRequest/>

            {/* Opportunity section */}
            <Opportunity/>

            {/* Footer */}
            <Footer/>

        </div>
    )
}

export default Landing;