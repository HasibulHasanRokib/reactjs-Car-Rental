import Plan from "../Home/Plan";
import "./About.css";
import Banner from "./Banner";

import download6 from "/src/assets/download (6).png"
import download7 from "/src/assets/download (7).png"
import download8 from "/src/assets/download (8).png"

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-heading mt-10">
          <h2 className="text-3xl font-bold">About</h2>
          <h5 className="font-bold my-5">Home / About</h5>
        </div>
        <div className="about-company flex gap-10">
          <div className="about-img"></div>
          <div className="about-text-body">
            <h5 className="text-2xl font-bold">About Company</h5>
            <h3 className="text-5xl font-bold my-5">
              You start the engine and your adventure begins
            </h3>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about-focus-section flex gap-2 my-4">
              <div className="about-card">
                <img src={download6} alt="" />
                <div className="about-card-body flex text-center">
                  <h3 className="text-5xl font-bold mr-3">20</h3>
                  <p className="font-semibold">Car Types</p>
                </div>
              </div>
              <div className="about-card">
                <img src={download7} alt="" />
                <div className="about-card-body flex text-center">
                  <h3 className="text-5xl font-bold mr-3">85</h3>
                  <p className="font-semibold">Rental Outlets</p>
                </div>
              </div>
              <div className="about-card">
                <img src={download8} alt="" />
                <div className="about-card-body flex text-center">
                  <h3 className="text-5xl font-bold mr-3">75</h3>
                  <p className="font-semibold">Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Plan />
      </div>
    <Banner/>
    </>
  );
};

export default About;
