import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer-section">
        <div className="row">
            <div className="section-one">
                <h3 className='text-xl font-semibold my-4'><span className='font-bold text-xl'>CAR</span> Rental</h3>
                <p className='my-4'>We offers a big range of vehicles for all your diving needs. We have the perfect car to meet your needs.</p>
                <p className='font-semibold my-2'><i className="fa-solid fa-phone"></i> (123) -456-789</p>
                <p className='font-semibold my-2'><i className="fa-solid fa-envelope"></i> carrental@gmail.com</p>
                <p>Developed by Hasibul Hasan Rakib</p>
            </div>
            <div className="section-two">
                <h3 className='my-4 font-bold text-xl'>COMPANY</h3>
                <ul>
                    <li className='my-2'>New York</li>
                    <li className='my-2'>Careers</li>
                    <li className='my-2'>Mobile</li>
                    <li className='my-2'>BLog</li>
                    <li className='my-2'>How we work</li>
                </ul>
            </div>
            <div className="section-three">
            <h3 className='my-4 font-bold text-xl'>WORKING HOURS</h3>
                <ul>
                    <li className='my-2'>Mon - Fri: 9:00AM - 9:00PM</li>
                    <li className='my-2'>Sat: 9:00AM - 19:00PM</li>
                    <li className='my-2'>Sun: Closed</li>
          
                </ul>
            </div>
            <div className="section-four">
             <h3 className='my-4 font-bold text-xl'>SUBSCRIPTION</h3>
             <p className='my-2 md:w-64'>Subscribe your Email address for latest news & updates.</p>
             <input type="email" name="email" placeholder='Enter Email Address' id="email" /><br/>
             <button className='submit-btn'>Submit</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
