import './Home.css'
import modelCar from "/src/assets/audia1.jpg"
import { CAR_DATA } from './CarData'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Model = () => {
const [cars,setCars]=useState(CAR_DATA)
const[carId,setCarId]=useState("0")
const[active,setActive]=useState("0")

  return (
    <div>
              <div className="models-section">
          <div className="models-text">
            <h3 className="text-xl font-bold mt-5">Vehicle Models</h3>
            <h2 className="text-4xl font-bold mt-5 mb-3">Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="models-body">
            <div className="button-section">
         
              <button  className="models-option" onClick={()=>{
                setCarId("0")
                setActive("0")
              }}>VW Golf 6</button>
              <button className="models-option" onClick={()=>{
                setCarId("1")
                setActive("1")
              }} >Audi A1 S-Line</button>
              <button className="models-option" onClick={()=>{
                setCarId("2")
                setActive("2")}}
              >Toyota Camry</button>
              <button className="models-option" onClick={()=>{
                setCarId("3")
                setActive("3")}}
              >BMW 320 ModernLine</button>
              <button className="models-option" onClick={()=>{
                setCarId("4")
                setActive("4")}}
              >Mercedes-Benz GLK</button>
              <button className="models-option" onClick={()=>{
                setCarId("5")
                setActive("5")}}
              >VW Passat CC</button>
            </div>
            { cars[carId].map((car,index)=>{
              return(
                <>
                <div key={index} className="car-img">
              <img src={car.img} alt="" />
            </div>
                        
            <div className="car-info">
              <table>
                <thead>
                  <th>${car.price}</th>
                  <th>/rent per day</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Model</td>
                    <td>{car.model}</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>{car.mark}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{car.year}</td>
                  </tr>
                  <tr>
                    <td>Doors</td>
                    <td>{car.doors}</td>
                  </tr>
                  <tr>
                    <td>AC</td>
                    <td>{car.air}</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{car.transmission}</td>
                  </tr>
                  <tr>
                    <td>Fuel</td>
                    <td>{car.fuel}</td>
                  </tr>
                </tbody>
              </table>
              <a href='#book-section' className="reserve-btn">Reserve Now</a>
            </div>
                </>
              )
            
           

          })}
          </div>
        </div>
    </div>
  )
}

export default Model
