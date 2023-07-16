import './Model.css'
import Banner from '/src/Components/About/Banner'

import audi from "/src/assets/audi-box.png"
import golf from "/src/assets/golf6-box.png"
import toyota from "/src/assets/toyota.png"


const Model = () => {
  return (
    <div>
      <div className="model-section">
        <div className="model-card-section">
            <div className="model-card">
                <img className='car-model-img' src={audi} alt="" />
                <div className="model-card-body">
                        <div className="model-text my-4">
                         <div>
                         <p className='text-2xl font-bold'>Audi A1</p>
                            <span style={{color:"gold"}}>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            </span>
                         </div>
                            <div>
                            <p className='text-2xl font-bold'>$45</p>
                            <span>per day</span>
                            </div>

                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> Audi</p>
                            <p className='text-lg'>4/5 <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> Manual</p>
                            <p className='text-lg'>Diesel <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                    <button className='ride-btn'>Book Ride</button>
                </div>
            </div>
            <div className="model-card">
                <img className='car-model-img' src={golf} alt="" />
                <div className="model-card-body">
                        <div className="model-text my-4">
                         <div>
                         <p className='text-2xl font-bold'>Golf 6</p>
                            <span style={{color:"gold"}}>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            </span>
                         </div>
                            <div>
                            <p className='text-2xl font-bold'>$37</p>
                            <span>per day</span>
                            </div>

                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> VW</p>
                            <p className='text-lg'>4/5 <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> Manual</p>
                            <p className='text-lg'>Diesel <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                    <button className='ride-btn'>Book Ride</button>
                </div>
            </div>
            <div className="model-card">
                <img className='car-model-img' src={toyota} alt="" />
                <div className="model-card-body">
                        <div className="model-text my-4">
                         <div>
                         <p className='text-2xl font-bold'>Toyota</p>
                            <span style={{color:"gold"}}>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            </span>
                         </div>
                            <div>
                            <p className='text-2xl font-bold'>$30</p>
                            <span>per day</span>
                            </div>

                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> Camry</p>
                            <p className='text-lg'>4/5 <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                        <div className="model-text my-4">
                         <p className='text-lg'><i className="fa-solid fa-car-side text-2xl font-bold"></i> Manual</p>
                            <p className='text-lg'>Diesel <i className="fa-solid fa-car-side text-2xl font-bold"></i></p>
                        </div>
                    <button className='ride-btn'>Book Ride</button>
                </div>
            </div>
        </div>
      </div>
      <Banner/>
    </div>
  )
}

export default Model
