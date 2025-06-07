import { useState } from "react";
import logo from "../src/images/brandLogo.png";
import aboutPhoto from "../src/images/coverPhoto1.png";
import CarosalDefaut from "./components/CarosalDefaut";
import TurmericPwder from "./images/TurmericPwder.png";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <img className="fixed z-10  w-36 md:w-44" src={logo} alt="" />
      {/* hero section */}
      <div className=" setBG w-full h-screen flex flex-col items-center justify-center ">
        <h1 className="text-white text-3xl md:mb-20 md:text-4xl text-center font-bold mb-5 add-shadow">
          Pure Spice. Honest Taste <br />
          Strate from Kerala
        </h1>
        <div className="text-white flex flex-col md:flex-row">
          <a
            href="#items"
            className="mb-3 py-2 px-5 text-xl  text-center md:mx-2 bg-green-600 rounded hover:bg-lime-400 hover:text-slate-900 drop-shadow-2xl hover:ease-in button-animation"
          >
            Kashmiri Chilly Powder <i className="fa-solid fa-angle-right"></i>
          </a>
          <a
            href="#items"
            className="mb-3 py-2 text-xl px-5 text-center md:mx-2 bg-green-600 rounded hover:bg-lime-400 hover:text-slate-900  "
          >
            Turmeric Powder <i className="fa-solid fa-angle-right"></i>
          </a>
          <a
            href="#items  "
            className="mb-3 py-2 text-xl px-5 text-center md:mx-2 bg-green-600 rounded hover:bg-lime-400 hover:text-slate-900  "
          >
            Rice Hour Powder <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      {/* about */}

      <div className="w-full flex flex-col md:flex-row  items-center justify-center bg-lime-200 py-20  px-8">
        {/* about content */}
        <div className="pb-10  md:w-1/2 px-10 py-4">
          <h1 className="text-2xl text-green-600 drop-shadow-sm  font-bold mb-4 ">
            About Us
          </h1>
          <p>
            We offer a premium range of spice powders made from the finest
            ingredients, including pepper, turmeric, chilli, coriander, garam
            masala, and a healthy millet mix. <br />
            <br /> All our products are freshly ground, 100% pure, and free from
            preservatives. Enjoy the authentic taste of Kerala in every dish.
          </p>
        </div>

        {/* abt-img */}
        <img
          className="object-cover md:w-96 md:h-64 w-72 h-56 rounded-md "
          src={aboutPhoto}
          alt=""
        />
      </div>

      <div className="text-center text-2xl font-bold w-full text-green-600 drop-shadow-sm mb-20 mt-20">
        Our Products
      </div>
      <span id="items">
        {/* items modal for mobile */}
        <div className="flex md:hidden mt-2 mb-20">
          <CarosalDefaut />
        </div>
        {/* items grid for pc */}
        <div className="grid grid-cols-4 gap-4 justify-items-center  max-md:hidden w-full  ">
          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 hover:shadow-none duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75 ">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>

          <div className=" w-60 px-4 border rounded-md flex flex-col items-center justify-center py-10 bg-amber-50  shadow-lg hover:scale-105 duration-75">
            <img
              src={TurmericPwder}
              className="  object-cover rounded-md shadow-md"
            />
            <div className=" text-center  mt-2">
              <h1 className=" text-xl"> Turmeric Powder</h1>
              <span className=" text-xl  text-green-900">250₹</span>
              <br />
              <span>100 g</span>
            </div>
          </div>
        </div>
      </span>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
