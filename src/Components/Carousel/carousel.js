import React from 'react';
import Hm from "./h&m.png";
import Polo from "./polo.png";
import Puma from "./puma.png";
import Wonder from "./wonder.png";

const Carousel = () => {
    return ( <div className="container">  
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
          
    
    <div className="carousel-inner">
        <div className="item active">
        <img src={Hm} alt="Los Angeles" styles={"width:100%"} />
        </div>
          
        <div className="item">
        <img src={Polo} alt="Chicago" styles={"width:100%"} />
        </div>
              
        <div className="item">
        <img src={Puma} alt="New york" styles={"width:100%"} />
        </div>

        <div className="item">
            <img src={Wonder} alt="New york" styles={"width:100%"} />
        </div>
    </div>
          
    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>
</div> );
}
 
export default Carousel;