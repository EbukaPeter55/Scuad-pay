import React from "react";
import './SetUp.styles.css';
import customBullet from '../../../assets/images/custom-bullet.png';

const SetUp = () =>{

    return (
        <div className="container-fluid setup_container">
            <hr className="setup_line"></hr>
            <section className="setup container-fluid d-flex flex-row flex-wrap justify-content-evenly">
                <div className="setup_content d-flex flex-row flex-wrap justify-content-evenly">
                <div className="image_wrapper">
                <img className="img-fluid" src={customBullet} alt="customBullet" />
                </div>
                <h5><span>Quick setup.</span> Begin accepting <br></br> payments in 15 minutes.</h5>
                </div>
                <div className="setup_content d-flex flex-row flex-wrap justify-content-evenly">
                <div className="image_wrapper">
                <img className="img-fluid" src={customBullet} alt="customBullet" />
                </div>
                <h5><span>Honest pricing.</span> Only pay for <br></br> successful transactions.</h5>
                </div>
                <div className="setup_content d-flex flex-row flex-wrap justify-content-evenly">
                <div className="image_wrapper">
                <img className="img-fluid" src={customBullet} alt="customBullet" />
                </div>
                <h5><span>All leading payment methods.</span><br></br> The best localised experience.</h5>
                </div>

            </section>
            <p className="text-center">
            Fees range between 0.10-2.4NGN (+ additional fees based on % of transaction value).
             More pricing details per payment method here.
            </p>
        </div>
    )
}

export default SetUp;