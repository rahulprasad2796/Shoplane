import React from 'react';
import successImg from "./img_confirm.png"
import "./success.css"

const Success = () => {
    return ( 
        <div id="success">
            <img src={successImg} alt="success"/>
            <h1>Order Placed Successfully!!</h1>
            <h2>We have sent you an email with the order details.</h2>
        </div>
    );
}
 
export default Success;