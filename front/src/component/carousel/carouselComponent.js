import React, {Component} from 'React'
import ReactDOM from 'react-dom'

import {Link} from 'react-router'
// import http from '../../utils/httpclient.js'



import './carousel.scss'

export default class CarouselComponent extends Component{
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <Link to={'/detail/36'}><img src="./src/imgs/banner1.jpg" alt="" /></Link>
                    </div>
                    <div className="swiper-slide">
                        <Link to={'/detail/4'}><img src="./src/imgs/banner2.jpg" alt="" /></Link>
                    </div>
                    <div className="swiper-slide">
                        <Link to={'/detail/5'}><img src="./src/imgs/banner3.jpg" alt="" /></Link>
                    </div>
                    <div className="swiper-slide">
                        <Link to={'/detail/37'}><img src="./src/imgs/banner4.jpg" alt="" /></Link>
                    </div>
                    <div className="swiper-slide">
                        <Link to={'/detail/3'}><img src="./src/imgs/banner5.jpg" alt="" /></Link>
                    </div>
                    <div className="swiper-slide">
                        <Link to={'/detail/23'}><img src="./src/imgs/banner6.jpg" alt="" /></Link>
                    </div>

                    <div className="swiper-slide"><Link to={'/detail/36'}><img src="./src/imgs/banner1.jpg" alt="" /></Link></div>
                    <div className="swiper-slide"><Link to={'/detail/4'}><img src="./src/imgs/banner2.jpg" alt="" /></Link></div>
                    <div className="swiper-slide"><Link to={'/detail/5'}><img src="./src/imgs/banner3.jpg" alt="" /></Link></div>
                    <div className="swiper-slide"><Link to={'/detail/37'}><img src="./src/imgs/banner4.jpg" alt="" /></Link></div>
                    <div className="swiper-slide"><Link to={'/detail/3'}><img src="./src/imgs/banner5.jpg" alt="" /></Link></div>
                    <div className="swiper-slide"><Link to={'/detail/23'}><img src="./src/imgs/banner6.jpg" alt="" /></Link></div>

                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
