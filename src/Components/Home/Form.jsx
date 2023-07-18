import { useEffect, useState } from "react";
import "./Home.css";

const Form = () => {

  const options=[
    {value: '', text: '--Choose an option--'},
    {value: 'Konabari', text: 'Konabari'},
    {value: 'Gazipur', text: 'Gazipur'},
    {value: 'Tongi', text: 'Tongi'},
  ];
  const carOptions=[
    {value:"",text:'--Choose an option--'},
    {value:"VW Golf 6",text:'VW Golf 6'},
    {value:"Audi A1 S-Line",text:'Audi A1 S-Line'},
    {value:"Toyota Camry",text:'Toyota Camry'},
    {value:"BMW 320 ModernLine",text:'BMW 320 ModernLine'},
    {value:"Mercedes-Benz GLK",text:'Mercedes-Benz GLK'},
    {value:"VW Passat CC",text:'VW Passat CC'},
  ];
  
  const [data,setData]=useState({carName:"",pickUp:"",dropOf:"",pickDate:"",dropDate:""})

  const [mainForm,setMainForm]=useState()
  const [show,setShow]=useState(false)

  const handleChange=(e)=>{
   const name=e.target.name;
   setData((oldData)=>{
    return {...oldData,[name]:e.target.value}
   })
   setMainForm([data])
  }
  

  const handleSubmit = (e) => {
   e.preventDefault();
  // console.log(data)
  // setMainForm(data)
   setShow(!show)
   console.log(mainForm)
setData({carName:"",pickUp:"",dropOf:"",pickDate:"",dropDate:""})
   };

const [message,setMessage]=useState(false)
const messageText=<p className="bg-green-300 py-2 px-3 my-3 font-bold rounded">Check your email to confirm an order.</p>

useEffect(()=>{
  setTimeout(() => {
    setMessage(false)
  }, 2000);
})

  return (

    <div id="book-section">
      <div className="form-section">
      {message && messageText}
        <form className="form-body" onSubmit={handleSubmit}>
          <div>
            <label className="text-red-500 font-bold block" htmlFor="car">
              <i className="fa-solid fa-car"></i> Select Your Car Type{" "}
              <sup>*</sup>
            </label>
            <select
            onChange={handleChange}
            name="carName"
            value={data.carName}
              required
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
              focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
      {carOptions.map((item,index)=>{
        return <option key={index} value={item.value}>{item.text}</option>
      })}
          </select>
          </div>

          <div>
            <label className="text-red-500 font-bold block" htmlFor="Pick-up">
              <i className="fa-solid fa-location-dot"></i> Pick-up<sup>*</sup>
            </label>
            <select
             onChange={handleChange}
             name="pickUp"
             value={data.pickUp}
              required
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Select pick-up location"
            >
            {options.map((item,index)=>{
              return <option key={index} value={item.value}>{item.text}</option>
            })}
            </select>
          </div>
          <div>
            <label className="text-red-500 font-bold block" htmlFor="Drop-of ">
              <i className="fa-solid fa-location-dot"></i> Drop-of<sup>*</sup>
            </label>
            <select
             onChange={handleChange}
             name="dropOf"
             value={data.dropOf}
              required
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Select drop-of location"
            >
            {options.map((item,index)=>{
              return <option key={index} value={item.value}>{item.text}</option>
            })}
            </select>
          </div>

          <div>
            <label className="text-red-500 font-bold block" htmlFor="Drop-of ">
              <i className="fa-solid fa-calendar-days"></i> Pick-up Date
              <sup>*</sup>
            </label>
            <input
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="date"
              placeholder="Select drop-of location"
              required
              onChange={handleChange}
              name="pickDate"
              value={data.pickDate}
            />
          </div>
          <div>
            <label className="text-red-500 font-bold block" htmlFor="Drop-of ">
              <i className="fa-solid fa-calendar-days"></i> Drop-of Date
              <sup>*</sup>
            </label>
            <input
             onChange={handleChange}
             name="dropDate"
             value={data.dropDate}
              className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="date"
              required
            />
          </div>
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>





{show && (
  <>
 {mainForm.map((item,index)=>{
  return <div key={index} className="popUp-display">
  <div className="popUp-body">
    <div className="popUp-body-title bg-red-500 flex justify-between items-center">
      <p className="text-2xl font-bold p-5 text-gray-200">COMPLETE RESERVATION</p>
      <div className="mr-4">
      <i onClick={()=>{setShow(!show)}} className="fa-solid fa-xmark fa-2x text-white cursor-pointer"></i>
      </div>
    </div>
    <div className="popUp-body-title-two bg-red-100">
      <h5 className="text-xl font-semibold text-red-500 p-3"><i className="fa-sharp fa-solid fa-circle-exclamation text-red-500"></i> Upon completing this reservation enquiry, you will receive:</h5>
      <p className="p-3 text-gray-500">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
    </div>
    <h2 className="text-2xl font-bold p-2 text-red-500">Location & Date</h2>
    <div className="popUp-location p-3  border-b-2 flex justify-between">

     <div>
      <h3 className="font-bold"><i className="fa-solid fa-calendar-days text-red-500"></i> Pick-Up Date & Time</h3>
      <p className="pb-3">{item.pickDate}</p>
      <h3 className="font-bold"><i className="fa-solid fa-calendar-days text-red-500"></i> Drop-Off Date & Time</h3>
      <p className="pb-3">{item.dropDate}</p>
      <h3 className="font-bold"><i className="fa-solid fa-location-dot text-red-500"></i> Pick-Up Location</h3>
      <p className="pb-3">{item.pickUp}</p>
      <h3 className="font-bold"><i className="fa-solid fa-location-dot text-red-500"></i> Drop-Off Location</h3>
      <p>{item.dropOf}</p>
     </div>
     <div className="location-car">
      <h4 className="font-bold text-2xl">Car- <span className="text-red-500">{item.carName}</span></h4>
     </div>
    </div>


<div className="personal-info">
<h2 className="text-red-500 font-bold p-4 text-xl">PERSONAL INFORMATION</h2>
<form className="p-4 flex flex-col">

<div className="first-col grid md:grid-cols-2 ">
<span>
<label htmlFor="first_name" className="font-bold block">First Name <span className="text-red-500 mx-1">*</span></label>
<input type="text" placeholder="Enter Your Name" className="mt-1 block md:w-80 w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>

<span>
<label htmlFor="last_name" className="font-bold block">Last Name <span className="text-red-500 mx-1">*</span></label>
<input type="text" placeholder="Enter Your Last Name" className="mt-1 block w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>

<span>
<label htmlFor="phone_number" className="font-bold block">Phone Number <span className="text-red-500 mx-1">*</span></label>
<input type="number" placeholder="Enter Your Phone Number" className="mt-1 block md:w-80 w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>
<span>
<label htmlFor="age" className="font-bold block">Age<span className="text-red-500 mx-1">*</span></label>
<input type="number" placeholder="18" className="mt-1 block w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>
</div>


<span>
<label htmlFor="email" className="font-bold block">Email<span className="text-red-500 mx-1">*</span></label>
<input type="email" placeholder="Enter Email Address" className="mt-1 block w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>


<label htmlFor="address" className="font-bold block">Address<span className="text-red-500 mx-1">*</span></label>
<input type="text" placeholder="Enter Address" className="mt-1 block w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>

<div className="grid md:grid-cols-2">
<samp>
<label htmlFor="city" className="font-bold block">City<span className="text-red-500 mx-1">*</span></label>
<input type="text" placeholder="Enter City Name" className="mt-1 block md:w-80 w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</samp>

<span>
<label htmlFor="zip-code" className="font-bold block">Zip Code<span className="text-red-500 mx-1">*</span></label>
<input type="text" placeholder="Enter City Name" className="mt-1 block w-full px-3 py-4 bg-zinc-300 border border-slate-300  text-sm shadow-sm placeholder-slate-500
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
<p className="text-xs text-gray-400 py-1">This field is required</p>
</span>
</div>
</form>
<div className="p-5">
<input className="mx-2 h-4 w-6" type="checkbox" name="" id="" />
<span className="font-semibold text-xl">
Please send me latest news and updates</span>
</div>
<div className="bg-gray-300 h-24 flex justify-end items-center">
<button onClick={()=>{
  setShow(!show)
  setMessage(true)
}} className="text-white font-bold text-xl bg-red-500 p-4 h-16 mx-4">Reserve Now</button>
</div>
</div>
  </div>

  </div>
 })}
  </>

)}



    </div>
  );
};

export default Form;
