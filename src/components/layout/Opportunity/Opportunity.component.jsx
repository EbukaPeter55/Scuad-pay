import React from "react";
import './Opportunity.styles.css';
import blackMan from '../../../assets/images/black-man-tab.jpeg';


const Opportunity = () => {

    return (
        <section className="container-fluid opportunity d-flex flex-row flex-wrap justify-content-evenly">
            {/* Left */}
            <div className="opportunity_image">
            <img className="img-fluid" src={blackMan} alt="blackMan" />
            </div>
            {/* Right */}
            <div className="right_wrapper">
                <h6>Solutions</h6>
                <h3>Better payments,  unlimited opportunities</h3>
                <p>Get faster, more reliable transactions.Higher conversions.Unbeatable
                     insight and flexibility. So you can delight your customers and 
                     unlock new revenue streams.</p>
            </div>
        </section>
    )
}

export default Opportunity;