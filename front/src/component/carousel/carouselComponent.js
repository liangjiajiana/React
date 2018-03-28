import React, {Component} from 'React'
import ReactDOM from 'react-dom'

import './carousel.scss'

export default class CarouselComponent extends Component{
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="./src/imgs/banner1.jpg" alt="" /></div>
                    <div className="swiper-slide"><img src="./src/imgs/banner2.jpg" alt="" /></div>
                    <div className="swiper-slide"><img src="./src/imgs/banner3.jpg" alt="" /></div>
                    <div className="swiper-slide"><img src="./src/imgs/banner4.jpg" alt="" /></div>
                    <div className="swiper-slide"><img src="./src/imgs/banner5.jpg" alt="" /></div>
                    <div className="swiper-slide"><img src="./src/imgs/banner6.jpg" alt="" /></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
