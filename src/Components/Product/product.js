import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addImgBorder, addPreview, addProductToCart, getProduct } from '../../Redux/Actions/action'
import "./product.css";

export class Product extends Component {
    //params is used to call a new get req
    //product and products are different as compared to home
    componentDidMount() {
        const $id = this.props.match.params.id
        const api = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + $id;
        axios.get(api)
        .then(({data}) => this.props.getProduct(data))
    }

    //data sent to cart
    addProduct() {
        const item = this.props.product;
        this.props.addProductToCart(item);
        //
    }

    //border effect
    addBorder(i, v) {
        this.props.addImgBorder(i);
        this.props.addPreview(v);
    }

    render() {
        
        // console.log(this.props); to see the props
        const {name, brand, price, preview, id, description, photos=[] } = this.props.product;
        //values received from state
        const imgBorder = this.props.imgBorder;
        const $preview = this.props.preview;

        return (
            <div>
                <div id="product">
                    <div id="left">
                        {/* {preview will be set to null, so will load current not from state, unless changed} */}
                        <img src={!$preview ? preview : $preview} alt={id} />
                    </div>

                    <div id="rright">
                        <h1>{name}</h1>
                        <h2 id="brand">{brand}</h2>
                        <h3>Price : Rs <span>{price}</span></h3>
                        <h4>Description</h4>
                        <h5>{description}</h5>
                        <p>Product Preview</p>
                        <div id="preview">
                            {/* {0th index img will have border} */}
                            {photos.length && photos.map((v, i) => <img src={v} alt={i} key={"img"+ i} onClick=
                            {() => {this.addBorder(i, v)}} style={{border: imgBorder === i ? "2px solid #009688" : ""}}/>)}
                            {/* {border will be set according to current preview img index} */}
                        </div>
                        
                        <button onClick={() => this.addProduct()} >Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProduct: (payload) => dispatch(getProduct(payload)),
    addProductToCart: (payload) => dispatch(addProductToCart(payload)),
    addImgBorder: (payload) => dispatch(addImgBorder(payload)),
    addPreview: (payload) => dispatch(addPreview(payload))
})

const mapStateToProps = (state) => ({
    product: state.product,
    imgBorder: state.border,
    preview: state.preview
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
