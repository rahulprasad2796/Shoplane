import axios from 'axios';
import Card from '../Card/card';
import "./home.css";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../Redux/Actions/action';
import Carousel from '../Carousel/carousel';



export class Home extends Component {
    //data is sent
    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(({data}) => this.props.getProducts(data))
    }


    render() { 
        const { products=[] } = this.props;
        
        return ( <div>
            <Carousel />

            <h2 id="clothinghead">Clothing for men and women</h2>

            <div id="clothing">
            {products.length && products.map((item, index) => !item.isAccessory ? <Card key={index} item={item} /> : "")}
            </div>
            
            <h2 id="clothinghead">Accessory for men and women</h2>

            <div id="accessory">
            {products.length && products.map((item, index) => item.isAccessory ? <Card key={index} item={item} /> : "")}

            </div>
        </div> );
    }
}


//data sent
const mapDispatchToProps = (dispatch) => ({
    getProducts: (payload) => dispatch(getProducts(payload)),
})
//data received
const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
