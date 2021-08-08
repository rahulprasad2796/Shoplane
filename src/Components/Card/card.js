
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { remImgBorder, remoPrev } from '../../Redux/Actions/action';
//on clcik of div the remImgBorder and remoPrev will reset the value of product page and set the 1t img border
//no state needed to call here just change it.


export class Card extends Component {
    resPreview() {
        this.props.remoPrev(null);
        this.props.remImgBorder(0);
    }


    render() {
        //item sent from home is received
    const {name, brand, price, preview, id} = this.props.item;

        return (
            <Link to={{ pathname: "/product/" + id }} onClick={() => this.resPreview()} className="card" style={{textDecoration: "none"}} >
            <div>
            <div>
                <div className="imgDiv">
                    <img src={preview} alt={id} />
                </div>
                <div className="textDiv" >
                    <h3 className="name">{name}</h3>
                    <h4 className="brand">{brand}</h4>
                    <h5 className="price">Rs {price}</h5>
                </div>
            </div>
            </div>
            </Link>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    remoPrev: (payload) => dispatch(remoPrev(payload)),
    remImgBorder: (payload) => dispatch(remImgBorder(payload))
})

export default connect(null, mapDispatchToProps)(Card)


