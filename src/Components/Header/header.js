
import Avatar from "./circle-cropped.png"
import Edyoda from "./edyoda.png"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

export class Header extends Component {
    render() {
        const { cart } = this.props;
        return ( <div>
            <div>
                <nav id="topbar">
                    <div id="left-menu">
                        <Link to={{pathname: "/"}}><div id="logo"><a href="./index.html"><span>Shop</span>lane</a></div></Link>
                        <Link to={{pathname: "/"}}><div className="mobile"><a href="#clothinghead">Clothing</a></div></Link>
                        <Link to={{pathname: "/"}} className="mobile"><a href="#accessoryhead">Accessories</a></Link>
                    </div>
                    <div id="search-wrapper">
                        <i className="fas fa-search"></i>
                        <input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories"/>
                    </div>
                    <div id="right-menu">
                        <Link to={{pathname: "/cart"}}>
                        <div id="cart-wrapper">
                            <p id="cart-count"> {cart.length} </p>
                            <a href="./checkout/index.html"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                        </Link>
                        <img src={Avatar} alt="avatar"/>
                    </div>
                </nav>
            </div>
            <img id="edyoda-projects-logo" src={Edyoda} alt="Ed" />
            </div> )
    }
}
//for different reducer add state.reducer.carts
const mapStateToProps = (state) => ({
    cart: state.cart
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(Header)
