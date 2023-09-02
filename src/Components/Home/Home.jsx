import Form from "./Form";
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
      <section id="home">
        <div className=" lg:w-4/5 lg:mx-auto max-lg:px-8 flex h-screen lg:justify-center justify-between items-center">
      
          <div className="z-20 lg:mb-16">
            <h4 className="font-bold text-2xl">Plan your trip now</h4>
            <h1 className="text-6xl font-bold mt-5">
              Save <span className="text-red-500">big</span> with our car rental
            </h1>
            <p className="max-w-md mt-5 max-md:mx-auto">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <a href="#book-section" className="bg-red-500 px-6 py-3 shadow-md border border-red-500 shadow-red-400 text-white mt-5 inline-block">
              Book Ride <i className="fa-solid fa-circle-check"></i>
            </a>
            <button className="bg-gray-800 px-6 py-3 text-white max-sm:mx-1 mx-4 border-2 border-black hover:bg-white hover:text-black">
              Learn More <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="z-20 max-md:hidden">
            <img src={MainCar} alt="" />
          </div>
          <img
            className="absolute right-0  max-md:hidden opacity-80"
            src={HeroImg}
            alt=""
          />
        </div>

        <Form />


        <a href="#home" className="bg-red-500 py-4 px-6 text-white fixed bottom-0 right-5"><i className="fa-solid fa-angle-up"></i></a>


        <Plan/>
        <Model />

        <div className="bg-[#374151] text-center my-10 py-20">
            <h3 className="text-gray-50 font-bold text-5xl max-md:leading-[4rem]">
              Save big with our cheap car rental!
            </h3>
            <h4 className="text-gray-50 font-bold text-2xl mt-4">
              Top Airports. Local Suppliers.{" "}
              <span className="text-red-500">24/7</span> Support.
            </h4>
        </div>


        <div className="w-4/5 mx-auto">
          <img src={Cars} alt="" />
        </div>

        <div className="lg:w-4/5 w-full mx-auto flex max-md:flex-col px-6 mt-10 items-center max-md:text-center lg:justify-between md:h-[90vh] h-full">
          <div className="w-full lg:w-2/5 md:w-3/5 ">
            <h4 className="text-xl font-bold mt-5">Why Choose Us</h4>
            <h2 className="text-5xl font-bold mt-5">
              Best valued deals you will ever find
            </h2>
            <p className=" mt-5 max-md:px-3 max-md:text-justify">
              Discover the best deals you`ll ever find with our unbeatable
              offers. We`re dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don`t miss out on your chance to
              save big.
            </p>
            <a href="#home" className="bg-red-500 px-10 py-5 font-bold text-white mt-5 inline-block">Find Details &rarr;</a>
          </div>
          <div className="flex flex-col">
            <div className="deals-card">
                <img
                  className="mr-2"
                  src={deals}
                  alt=""
                />
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-2">Cross Country Drive</h3>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="deals-card">
                <img
                  className="mr-2"
                  src={dealsOne}
                  alt=""
                />
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-2">
                  All Inclusive Pricing
                </h3>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="deals-card">
                <img
                  className="mr-2"
                  src={dealsTwo}
                  alt=""
                />
              <div className="deals-card-text">
                <h3 className="text-xl font-bold mb-2">No Hidden Charges</h3>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
          
          <Testimonial/>
         
        <div className=" flex max-md:flex-col lg:w-4/5 mx-auto lg:justify-between justify-center max-md:items-center py-8">
          <article className="md:w-2/5 px-5 max-md:text-center">
            <h2 className="text-5xl font-extrabold leading-[4rem]">
              Download our app to get most out of it
            </h2>
            <p className="mt-5 mb-4">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex max-md:items-center max-md:justify-center max-sm:flex-col">
              <a href="" className="mt-3 mr-3">
                <img src={appStore} alt="" />
              </a>
              <a href="" className="mt-3">
                <img src={googleApp} alt="" />
              </a>
            </div>
          </article>
            <img className="w-[28rem] max-md:mt-5" src={mobileApp} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
