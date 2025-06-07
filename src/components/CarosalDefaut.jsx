import React from "react";
import { Carousel,IconButton } from "@material-tailwind/react";
import TurmericPwder from "../images/TurmericPwder.png";


const CarosalDefaut = () => {
  return (
    <>
      <Carousel
        className="rounded-xl mx-6 flex items-center "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          </IconButton>


        )}

        nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      >
        <div className=" w-full flex flex-col items-center py-10 bg-amber-50  shadow-lg">
          <img
            src={TurmericPwder}
            className=" w-1/2 object-cover rounded-md shadow-md"
          />
          <div className=" text-center  mt-2">
            <h1 className=" text-xl"> Turmeric Powder</h1>
            <span className=" text-xl  text-green-900">250₹</span>
            <br />
            <span>100 g</span>
          </div>
        </div>
      <div className=" w-full flex flex-col items-center py-10 bg-amber-50  shadow-lg">
          <img
            src={TurmericPwder}
            className=" w-1/2 object-cover rounded-md shadow-md"
          />
          <div className=" text-center  mt-2">
            <h1 className=" text-xl"> Turmeric Powder</h1>
            <span className=" text-xl  text-green-900">250₹</span>
            <br />
            <span>100 g</span>
          </div>
        </div>

        <div className=" w-full flex flex-col items-center py-10 bg-amber-50  shadow-lg">
          <img
            src={TurmericPwder}
            className=" w-1/2 object-cover rounded-md shadow-md"
          />
          <div className=" text-center  mt-2">
            <h1 className=" text-xl"> Turmeric Powder</h1>
            <span className=" text-xl  text-green-900">250₹</span>
            <br />
            <span>100 g</span>
          </div>
        </div>
       
      </Carousel>
    </>
  );
};

export default CarosalDefaut;
