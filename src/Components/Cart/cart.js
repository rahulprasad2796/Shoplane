import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearFinCart } from '../../Redux/Actions/action';
import "./cart.css";
//the clearfincart clears on place order button click, changes state.

export class Cart extends Component {

    clearCart() {
        this.props.clearFinCart([]);
    }


    render() {

        //carts received as arr to map.
        let carts = [];
        carts = this.props.cart;
        let amount = 0;

        //makes a copy of sorted cart and deletes the duplicates
        let nCarts = carts.slice(0, carts.length).sort((a, b) => a.id - b.id);
        for(let i = 0; i < nCarts.length - 1; i++) {
            if(nCarts[i].id === nCarts[i + 1].id) {
                delete nCarts[i];
            }
        }

        //iterates through cart to get total amount
        for(let k=0; k < carts.length; k++) {
            amount += carts[k].price;
        }

        
        return (
            <div id="cartdiv">
                <h1>Checkout</h1>
                <h2>Total Items : {carts.length}</h2>
            <div id="mainDiv1">
                
                <div className="lleft">
                    {nCarts.map((v,i) =>
                        <div className="cardDiv" key={i}>
                        <img src={v.preview} alt={i}/>
                            <div>
                                <p>{v.name}</p>
                                {/* {ncart id is matched with main cart id to get the no.of same products} */}
                                <p>Qty: X {carts.filter(val => val.id === v.id).length}</p>
                                <p>Amount: Rs {v.price}</p>
                            </div>
                        </div>
                    )}                   
                </div>


                <div id="right">
                <p>Total Amount</p>
                    <p>Amount Rs: {amount}</p>
                    <Link to={{pathname: "/success"}}>
                    <button onClick={() => this.clearCart()}>Place Order</button>
                    </Link>
                </div>

            </div>
            </div>
        )
    }
}

//cart is called from state to iterate and make elem
const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    clearFinCart: (payload) => dispatch(clearFinCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
