import { CAR_DATA } from './CarData'
import { useState } from 'react'


const Model = () => {
const [cars]=useState(CAR_DATA)
const[carId,setCarId]=useState("0")
const[setActive]=useState("0")

  return (
    <>
          <section className="p-4 bg-white">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mt-5">Vehicle Models</h3>
            <h2 className="text-4xl font-bold mt-5 mb-3">Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className=" md:h-[60vh] flex max-md:flex-col md:items-center justify-between mt-10 lg:px-10 px-2">
            <div className="flex flex-col">
         
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
                <div key={index} className="max-lg:w-[20rem] max-md:mt-5 max-md:mx-auto">
              <img src={car.img} alt="" />
            </div>
                        
            <div className="max-md:mt-8 max-md:mx-auto max-md:mb-4">
              <table className='border'>
                <thead className='border bg-red-500 text-white'>
                  <th className='py-4 px-10'>${car.price}</th>
                  <th className='py-4 px-10'>/rent per day</th>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td >Model</td>
                    <td >{car.model}</td>
                  </tr>
                  <tr>
                    <td >Mark</td>
                    <td >{car.mark}</td>
                  </tr>
                  <tr>
                    <td >Year</td>
                    <td >{car.year}</td>
                  </tr>
                  <tr>
                    <td >Doors</td>
                    <td >{car.doors}</td>
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
              <a href='#book-section' className="bg-[#ef4444] w-full inline-block text-white text-center py-3 mt-2 font-bold">Reserve Now</a>
            </div>
                </>
              )
            
           

          })}
          </div>
        </section>
    </>
  )
}

export default Model
