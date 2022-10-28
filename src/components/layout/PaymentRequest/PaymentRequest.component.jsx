import React from "react";
import "./PaymentRequest.styles.css";
import arrow from '../../../assets/images/arrow.png';
import Button from "../../ReusableComponent/Button/Button.component";
import { Link } from "react-router-dom";


const PaymentRequest = () =>{

    return (
        <section className="features container-fluid d-flex flex-row justify-content-evenly align-items-center">
            {/* Left */}
            <div className="features_left">
                <header>
                <h6>Features</h6>
                <h5>Create Payment Requests</h5>
                </header>
                <p className="make_payment">
                Make a simple payment link in 5 seconds. 
                Use our powerful features to customize your request
                </p>
                <div className="learn_more d-flex flex-row flex-wrap align-items-baseline">
                <p>Learn More</p>
                <div className="learn_more--image">
                <img className="img-fluid" src={arrow} alt="arrow" />
                </div>
                </div>

            </div>
            {/* Right */}
            <div className="card right_card">
            <div className="right_card--content">
            <hr className="top_line"></hr>
            <div className="card_content">
            <Link to="#">https://www.habarpay.com/940jej...</Link>
            <Button
            type="button"
            buttonText="Copy link"
            background = "#30A658"
            color="#FFFFFF"
            padding=".4rem .9rem"
            fontWeight="500"
            margin="0 0 0 2.5rem"
            />
            </div>
            <hr className="bottom_line"></hr>
                </div>

            </div>
        </section>
    )
}

export default PaymentRequest;