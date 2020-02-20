/*
The Carosuel Component, which has:
    -- Recent Activities
    -- Weddings
    -- View More Button
    -- Mapping of all images in an Image Component described below
*/

import React, { Component } from 'react';
import Slider from "react-slick";
import ImageHere from './222x222.png';



class CarosuelItems extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            mobileFirst: true, //optional, to be used only if your page is mobile first
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <div className="container-fluid">
                <div className="activities">
                <div className="col col-b3">
                    <div className="content">
                        <div className="inline">
                            <button className="button" onClick={this.previous}>
                                Previous
                            </button>
                            <button className="button" onClick={this.next}>
                                Next
                            </button>
                        </div>

                        <p>Recent Activities</p>
                        <h2>Weddings</h2>
                        <input type="button" value="View More"></input>
                    </div>
                
                </div>
                <hr className="col divders"></hr>
                <div className="col">
                    <div className="silder">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt="" />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt="" />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt=""  />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt=""  />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt=""  />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                            <div>
                                <div className="">
                                    <img className="EventImg" src={ImageHere} alt=""  />
                                </div>
                                <h3>Historic Antebellum</h3>
                                <p>Washington DC</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CarosuelItems;
