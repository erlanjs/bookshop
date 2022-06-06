import React from 'react';
import Slider from "react-slick"
import bg from "../../../images/heroBg.png"
import {media} from "../../main/media";

const imageSlider = {
    width: "100%",
    height: media(250, 500),
}
const container = {
    width: "85%",
    margin: "auto"
}

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src={bg} alt="" style={imageSlider}/>
                </div>
                <div>
                    <img src={"https://icdn.isrgrajan.com/in/2018/06/new-york-city-usa-july-31-1024x576.jpg"} alt="" style={imageSlider}/>

                </div>
                <div>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/1/11/Forever21DenverPavilions2.jpg"} alt="" style={imageSlider}/>

                </div>
            </Slider>
        </>
    );
};

export default Hero;