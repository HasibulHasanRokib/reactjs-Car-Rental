import Form from "./Form";
import "./Home.css";
import Model from "./Model";
import Plan from "./Plan";
import Testimonial from "./Testimonial";
import HeroImg from '/src/assets/hero-bg.3b5f7a2502f0f81d1490.png'
import MainCar from '/src/assets/main-car.png'
import Cars from '/src/assets/main.70cd75042bdf42515d92.png'
import deals from "/src/assets/download (3).png"
import dealsOne from "/src/assets/download (4).png"
import dealsTwo from "/src/assets/download (5).png"
import appStore from "/src/assets/appstore.svg"
import googleApp from "/src/assets/googleapp.svg"
import mobileApp from "/src/assets/app3.jpg"

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container-home">
          <img
            className="hero-img"
            src={HeroImg}
            alt=""
          />
          <div className="home-text">
            <h4 className="font-bold text-2xl mt-3">Plan your trip now</h4>
            <h1 className="text-6xl font-bold mt-3">
              Save <span className="text-red-500">big</span> with our car rental
            </h1>
            <p className="mt-6 leading-8 mb-3">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <a href="#book-section" className="book">
              Book Ride <i className="fa-solid fa-circle-check"></i>
            </a>
            <button className="learn">
              Learn More <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="home-img z-20">
            <img src={MainCar} alt="" />
          </div>
        </div>

        <Form />
        <a href="#home" className="up-btn"><i className="fa-solid fa-angle-up"></i></a>
        <Plan/>

        <Model />

        <div className="banner-section p-10">
          <div className="banner-text mt-6">
            <h3 className="text-gray-50 font-bold text-5xl m-4 ">
              Save big with our cheap car rental!
            </h3>
            <h4 className="text-gray-50 font-bold text-2xl">
              Top Airports. Local Suppliers.{" "}
              <span className="text-red-500">24/7</span> Support.
            </h4>
          </div>
        </div>

        <div className="choose-section">
          <img src={Cars} alt="" />
        </div>

        <div className="deals-section">
          <div className="deals-text">
            <h4 className="text-xl font-bold mt-5">Why Choose Us</h4>
            <h2 className="text-5xl font-bold mt-5">
              Best valued deals you will ever find
            </h2>
            <p className=" mt-5">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <a href="#home" className="details-btn">Find Details &rarr;</a>
          </div>
          <div className="deals-card-section">
            <div className="deals-card">
              <div className="deals-card-img">
                <img
                  className="deals-img"
                  src={deals}
                  alt=""
                />
              </div>
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-5">Cross Country Drive</h3>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="deals-card">
              <div className="deals-card-img">
                <img
                  className="deals-img"
                  src={dealsOne}
                  alt=""
                />
              </div>
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-5">
                  All Inclusive Pricing
                </h3>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="deals-card">
              <div className="deals-card-img">
                <img
                  className="deals-img"
                  src={dealsTwo}
                  alt=""
                />
              </div>
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-5">No Hidden Charges</h3>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
          
          <Testimonial/>
         
        <div className="download-section">
          <div className="download-text">
            <h2 className="text-5xl font-extrabold leading-relaxed">
              Download our app to get most out of it
            </h2>
            <p className="mt-5 mb-4">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-link flex">
              <a href="" className="m-3">
                <img src={appStore} alt="" />
              </a>
              <a href="" className="m-3">
                <img src={googleApp} alt="" />
              </a>
            </div>
          </div>
          <div className="download-img">
            <img className="" src={mobileApp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
