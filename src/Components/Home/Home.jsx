import Form from "./Form";
import "./Home.css";
import Model from "./Model";
import HeroImg from '/src/assets/hero-bg.3b5f7a2502f0f81d1490.png'
import MainCar from '/src/assets/main-car.png'

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
            <p className="mt-6 leading-8">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <button className="book">
              Book Ride <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="learn">
              Learn More <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="home-img z-20">
            <img src={MainCar} alt="" />
          </div>
        </div>

        <Form />

        <div className="plan-section">
          <div className="plan-text ">
            <h4 className="text-2xl font-bold">Plan your trip now</h4>
            <h3 className="text-5xl font-bold mt-5">Quick & easy car rental</h3>
            <div className="plan-card">
              <div className="card">
                <div className="card-img">
                  <img src="/src/assets/download (2).png" alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Select Car</h2>
                  <p>
                    We offers a big range of vehicles for all your driving
                    needs. We have the perfect car to meet your needs
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src="/src/assets/download (1).png" alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Contact Operator</h2>
                  <p>
                    Our knowledgeable and friendly operators are always ready to
                    help with any questions or concerns
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src="/src/assets/download.png" alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Let`s Drive</h2>
                  <p>
                    Whether you're hitting the open road, we've got you covered
                    with our wide range of cars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <img src="/src/assets/main.70cd75042bdf42515d92.png" alt="" />
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
            <button className="details-btn">Find Details &rarr;</button>
          </div>
          <div className="deals-card-section">
            <div className="deals-card">
              <div className="deals-card-img">
                <img
                  className="deals-img"
                  src="/src/assets/download (3).png"
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
                  src="/src/assets/download (4).png"
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
                  src="/src/assets/download (5).png"
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

        <div className="testimonials-section">
          <div className="testimonials-text">
            <h5 className="text-xl font-bold mt-3">Reviewed by People</h5>
            <h3 className="text-5xl font-bold mt-3 mb-4">
              Client's Testimonials
            </h3>
            <p>
              Discover the positive impact we`ve made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they`re eager to share their positive
              experiences with you
            </p>
          </div>
          <div className="testimonials-card-section">
            <div className="testimonials-card rounded">
              <div className="testimonials-card-text">
                <p className="text-2xl font-bold">
                  We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable.
                </p>
              </div>
              <div className="testimonials-card-body flex">
                <img
                  className="cilent-img"
                  src="/src/assets/cilent-1.png"
                  alt=""
                />
                <div className="testimonials-clint-name">
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </div>
              </div>
            </div>
            <div className="testimonials-card rounded">
              <div className="testimonials-card-text">
                <p className="text-2xl font-bold">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
              </div>
              <div className="testimonials-card-body flex">
                <img
                  className="cilent-img"
                  src="/src/assets/cilent-2.png"
                  alt=""
                />
                <div className="testimonials-clint-name">
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <img src="/src/assets/appstore.svg" alt="" />
              </a>
              <a href="" className="m-3">
                <img src="/src/assets/googleapp.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="download-img">
            <img className="" src="/src/assets/app3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
