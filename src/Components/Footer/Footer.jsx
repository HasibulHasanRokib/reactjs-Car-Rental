
const Footer = () => {
    
  return (
    <>
    <div className="md:h-[45vh] md:w-4/5 px-5 w-full mx-auto">
        <div className=" grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 h-full border-t-2 mt-8">
            <section>
                <h3 className='text-xl font-semibold mt-4'><span className='font-bold text-xl'>CAR</span> Rental</h3>
                <p className='mt-4 w-3/5'>We offers a big range of vehicles for all your diving needs. We have the perfect car to meet your needs.</p>
                <p className='font-semibold mt-2'><i className="fa-solid fa-phone"></i> (123) -456-789</p>
                <p className='font-semibold mt-2'><i className="fa-solid fa-envelope"></i> carrental@gmail.com</p>
                <p className='text-red-400 font-bold'>Developed by Hasibul Hasan Rokib</p>
            </section>
            <section>
                <h3 className='mt-4 font-bold text-xl'>COMPANY</h3>
                <ul>
                    <li className='mt-2'>New York</li>
                    <li className='mt-2'>Careers</li>
                    <li className='mt-2'>Mobile</li>
                    <li className='mt-2'>BLog</li>
                    <li className='mt-2'>How we work</li>
                </ul>
            </section>
            <section >
            <h3 className='my-4 font-bold text-xl'>WORKING HOURS</h3>
                <ul>
                    <li className='my-2'>Mon - Fri: 9:00AM - 9:00PM</li>
                    <li className='my-2'>Sat: 9:00AM - 19:00PM</li>
                    <li className='my-2'>Sun: Closed</li>
          
                </ul>
            </section>
            <section >
             <h3 className='my-4 font-bold text-xl'>SUBSCRIPTION</h3>
             <p className='my-2 md:w-64'>Subscribe your Email address for latest news & updates.</p>
             <input type="email" name="email" placeholder='Enter Email Address' id="email" className='bg-[#ececec] w-[12rem] py-3 px-2' /><br/>
             <button className='bg-[#ef4444] py-2 px-[4.3rem] text-white font-bold mt-3'>Submit</button>
            </section>
        </div>
    </div>
      
    </>
  )
}

export default Footer
