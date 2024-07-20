import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import branches from "../../public/branches.json"
import Cards from './Cards';

function Branches() {
    
    let boxes=branches.filter((data)=>data);
    console.log(boxes);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    }
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex">
                <div>
                    <h1 className=" text-2xl font-semibold">PYQs Offered:</h1>
                    <p>Discover a comprehensive collection of previous year question papers for various engineering branches. Access the resources you need to excel in your exams and boost your knowledge.</p>


                </div>
                <div>
                    <Slider {...settings}>
                        {
                            boxes.map((data)=>(
                                <Cards data={data} key={data.id}/>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Branches
