import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import branchesData from "../../../public/branches.json";
import { Link } from "react-router-dom";

function Branches() {
  const [branch, setBranch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBranch(branchesData);
    setLoading(false);
  }, []);

  const getBranchRoute = (branchName) => {
    const routes = {
      computer: "/computer",
      mechanical: "/mechanical",
      ecs: "/ecs",
      "ai&ds": "/ai&ds",
    };

    return routes[branchName.toLowerCase()] || "/";
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-2xl font-semibold">PYQs Offered:</h1>
          <p>
            Discover a comprehensive collection of previous year question papers
            for various engineering branches.
          </p>
        </div>

        <div className="mt-6">
          <Slider {...settings}>
            {branch.map((data) => (
              <div key={data.id} className="px-3">
                <div className="p-3 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                  <figure>
                    <img
                      className="w-full h-80 object-cover border-10"
                      src={data.image}
                      alt={data.branch_name}
                    />
                  </figure>
                  <div className="mt-3">
                    <h2 className="text-lg font-semibold">
                      {data.branch_name}
                    </h2>
                    <p>{data.description}</p>
                    <div className="mt-2 text-right">
                      <Link to={getBranchRoute(data.branch_name)}>
                        <button className="btn btn-primary">
                          See
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Branches;